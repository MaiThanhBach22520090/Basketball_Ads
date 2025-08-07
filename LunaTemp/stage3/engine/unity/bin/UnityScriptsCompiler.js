if ( TRACE ) { TRACE( JSON.parse( '["Ball#Start","Ball#Update","BasketballThrower#init","BasketballThrower#Start","BasketballThrower#Update","BasketballThrower#OnClickStarted","BasketballThrower#OnClickCanceled","BasketballThrower#CalculateLaunchVelocity","BasketballThrower#ThrowBall"]' ) ); }
/**
 * @version 1.0.9350.42171
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Ball start.*/
    Bridge.define("Ball", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Ball.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Ball#Start", this ); }


            },
            /*Ball.Start end.*/

            /*Ball.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Ball#Update", this ); }


            },
            /*Ball.Update end.*/


        }
    });
    /*Ball end.*/

    /*BasketballThrower start.*/
    Bridge.define("BasketballThrower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hoopTargetPoint: null,
            throwForceMultiplier: 0,
            minApexHeightOffset: 0,
            maxApexHeightOffset: 0,
            horizontalAimScale: 0,
            dragSpeedThreshold: 0,
            moveSpeed: 0,
            dragSpeedCheckInterval: 0,
            activeBasketball: null,
            touchStartScreenPos: null,
            initialBallScreenOffset: null,
            isDragging: false,
            isFlicking: false,
            dragStartTime: 0,
            dragSpeedCheckTimer: 0,
            lastDragSpeedCheckPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BasketballThrower#init", this ); }

                this.touchStartScreenPos = new UnityEngine.Vector2();
                this.initialBallScreenOffset = new UnityEngine.Vector3();
                this.lastDragSpeedCheckPos = new UnityEngine.Vector2();
                this.throwForceMultiplier = 1.0;
                this.minApexHeightOffset = 2.0;
                this.maxApexHeightOffset = 5.0;
                this.horizontalAimScale = 0.005;
                this.dragSpeedThreshold = 100.0;
                this.moveSpeed = 50.0;
                this.dragSpeedCheckInterval = 0.1;
                this.isDragging = false;
                this.isFlicking = false;
            }
        },
        methods: {
            /*BasketballThrower.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BasketballThrower#Start", this ); }

                if (UnityEngine.Component.op_Equality(this.hoopTargetPoint, null)) {
                    UnityEngine.Debug.LogError$2("BasketballThrower: HoopTargetPoint not assigned! Please assign it in the Inspector.");
                    this.enabled = false;
                }
            },
            /*BasketballThrower.Start end.*/

            /*BasketballThrower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BasketballThrower#Update", this ); }

                // Detect mouse/touch down
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.OnClickStarted();
                } else if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.OnClickCanceled();
                }

                // If currently dragging a ball
                if (this.isDragging && UnityEngine.GameObject.op_Inequality(this.activeBasketball, null)) {
                    var currentPointerScreenPos = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone()); // Get current mouse/touch position

                    // --- Check Drag Speed at a Fixed Interval ---
                    this.dragSpeedCheckTimer += UnityEngine.Time.deltaTime;
                    if (this.dragSpeedCheckTimer >= this.dragSpeedCheckInterval) {
                        var dragDistance = (currentPointerScreenPos.$clone().sub( this.lastDragSpeedCheckPos )).length();
                        var dragSpeed = dragDistance / this.dragSpeedCheckInterval;

                        if (dragSpeed > this.dragSpeedThreshold) {
                            this.isFlicking = true;
                            UnityEngine.Debug.Log$1(System.String.format("Flick detected! Speed: {0}", [Bridge.box(dragSpeed, System.Single, System.Single.format, System.Single.getHashCode)]));
                        }

                        this.dragSpeedCheckTimer = 0.0;
                        this.lastDragSpeedCheckPos = currentPointerScreenPos.$clone();
                    }

                    // If not yet flicking (still in slow move mode)
                    if (!this.isFlicking) {
                        // Calculate target world position for the ball based on mouse position
                        // We use the ball's initial Z-depth in screen space to keep it at a consistent distance from the camera
                        var targetScreenPos = new pc.Vec3( currentPointerScreenPos.x, currentPointerScreenPos.y, UnityEngine.Camera.main.WorldToScreenPoint(this.activeBasketball.transform.position).z );
                        var targetWorldPos = UnityEngine.Camera.main.ScreenToWorldPoint(targetScreenPos);

                        // Apply the initial offset so the ball doesn't jump to the exact mouse cursor center
                        this.activeBasketball.transform.position = new pc.Vec3().lerp( this.activeBasketball.transform.position, targetWorldPos.$clone().add( this.initialBallScreenOffset ), this.moveSpeed * UnityEngine.Time.deltaTime );

                        // Ensure the ball remains kinematic during slow movement
                        var rb = this.activeBasketball.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rb, null) && !rb.isKinematic) {
                            rb.isKinematic = true;
                            rb.velocity = pc.Vec3.ZERO.clone();
                            rb.angularVelocity = pc.Vec3.ZERO.clone();
                            UnityEngine.Debug.Log$1(System.String.format("Set {0} to kinematic for move.", [this.activeBasketball.name]));
                        }
                    }
                    // If it has transitioned to flicking, we stop moving it with the mouse
                    // and wait for the release to calculate the throw.
                }
            },
            /*BasketballThrower.Update end.*/

            /*BasketballThrower.OnClickStarted start.*/
            OnClickStarted: function () {
if ( TRACE ) { TRACE( "BasketballThrower#OnClickStarted", this ); }

                var pointerScreenPos = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                var ray = UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Vector3.FromVector2(pointerScreenPos));
                var hit = { v : new UnityEngine.RaycastHit() };

                // Check if the ray hits a GameObject that has a 'Ball' component
                if (UnityEngine.Physics.Raycast$1(ray, hit) && UnityEngine.MonoBehaviour.op_Inequality(hit.v.collider.GetComponent(Ball), null)) {
                    var hitBall = hit.v.collider.gameObject;
                    var hitBallRb = hitBall.GetComponent(UnityEngine.Rigidbody);

                    // Only allow dragging if the hit ball has a Rigidbody and is currently kinematic
                    if (UnityEngine.Component.op_Inequality(hitBallRb, null)) {
                        this.activeBasketball = hitBall;
                        hitBallRb.isKinematic = true; // Ensure it stays kinematic while dragging
                        this.touchStartScreenPos = pointerScreenPos.$clone();
                        this.dragStartTime = UnityEngine.Time.time;
                        this.isDragging = true;
                        this.isFlicking = false;

                        // Calculate initial offset to maintain the ball's relative position to the click point
                        var clickWorldPos = UnityEngine.Camera.main.ScreenToWorldPoint(new pc.Vec3( pointerScreenPos.x, pointerScreenPos.y, UnityEngine.Camera.main.WorldToScreenPoint(this.activeBasketball.transform.position).z ));
                        this.initialBallScreenOffset = this.activeBasketball.transform.position.$clone().sub( clickWorldPos );

                        this.dragSpeedCheckTimer = 0.0;
                        this.lastDragSpeedCheckPos = pointerScreenPos.$clone();

                        UnityEngine.Debug.Log$1(System.String.format("Started dragging {0}. isDragging: {1}, isKinematic: {2}", this.activeBasketball.name, Bridge.box(this.isDragging, System.Boolean, System.Boolean.toString), Bridge.box(hitBallRb.isKinematic, System.Boolean, System.Boolean.toString)));
                    } else {
                        UnityEngine.Debug.Log$1(System.String.format("Clicked {0} but it's not ready to be thrown (IsKinematic: {1}).", hitBall.name, Bridge.box(hitBallRb.isKinematic, System.Boolean, System.Boolean.toString)));
                    }
                } else {
                    UnityEngine.Debug.Log$1("Raycast did not hit a basketball.");
                }
            },
            /*BasketballThrower.OnClickStarted end.*/

            /*BasketballThrower.OnClickCanceled start.*/
            OnClickCanceled: function () {
if ( TRACE ) { TRACE( "BasketballThrower#OnClickCanceled", this ); }

                // Only proceed if a drag was actually in progress
                if (this.isDragging && UnityEngine.GameObject.op_Inequality(this.activeBasketball, null) && UnityEngine.Component.op_Inequality(this.hoopTargetPoint, null)) {
                    var pointerEndPos = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                    var flickVector = pointerEndPos.$clone().sub( this.touchStartScreenPos );

                    if (this.isFlicking) {
                        // Calculate flick magnitude and normalize vertical component for apex height
                        var flickMagnitude = flickVector.length();
                        // Ensure flickMagnitude is not zero to avoid division by zero
                        var normalizedFlickY = flickVector.y / UnityEngine.Mathf.Max(1.0, flickMagnitude);
                        var clampedNormalizedFlickY = Math.max(0, Math.min(1, normalizedFlickY));

                        var rb = this.activeBasketball.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rb, null)) {
                            rb.isKinematic = false; // Re-enable physics for throwing

                            var desiredApexHeight = this.hoopTargetPoint.position.y + pc.math.lerp(this.minApexHeightOffset, this.maxApexHeightOffset, clampedNormalizedFlickY);
                            var currentBallPosition = this.activeBasketball.transform.position.$clone();
                            var targetPoint = this.hoopTargetPoint.position.$clone();

                            var horizontalOffset = UnityEngine.Camera.main.transform.right.$clone().clone().scale( (flickVector.x * this.horizontalAimScale) );
                            targetPoint = targetPoint.$clone().add( horizontalOffset.$clone() );

                            var initialVelocity = this.CalculateLaunchVelocity(currentBallPosition, targetPoint, desiredApexHeight);
                            this.ThrowBall(initialVelocity);
                            UnityEngine.Debug.Log$1(System.String.format("Throwing ball after flick: {0}", [this.activeBasketball.name]));
                        }
                    } else {
                        var rb1 = this.activeBasketball.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rb1, null)) {
                            rb1.isKinematic = false; // Re-enable physics so it falls/rolls naturally
                            rb1.velocity = pc.Vec3.ZERO.clone(); // Clear any residual velocity
                            rb1.angularVelocity = pc.Vec3.ZERO.clone();
                        }
                        UnityEngine.Debug.Log$1(System.String.format("Ball released after slow move: {0}", [this.activeBasketball.name]));
                    }
                }

                // Reset all flags and references
                this.isDragging = false;
                this.isFlicking = false;
                this.activeBasketball = null;
            },
            /*BasketballThrower.OnClickCanceled end.*/

            /*BasketballThrower.CalculateLaunchVelocity start.*/
            /**
             * Calculates the initial velocity required to launch an object from startPoint
             to targetPoint, ensuring it reaches a specific peakHeight.
             *
             * @instance
             * @private
             * @this BasketballThrower
             * @memberof BasketballThrower
             * @param   {UnityEngine.Vector3}    startPoint     The starting position of the projectile.
             * @param   {UnityEngine.Vector3}    targetPoint    The desired target position.
             * @param   {number}                 peakHeight     The desired maximum height (apex) of the trajectory.
             * @return  {UnityEngine.Vector3}                   The initial velocity vector needed for the trajectory.
             */
            CalculateLaunchVelocity: function (startPoint, targetPoint, peakHeight) {
if ( TRACE ) { TRACE( "BasketballThrower#CalculateLaunchVelocity", this ); }

                var gravity = UnityEngine.Physics.gravity.length();
                var displacement = targetPoint.$clone().sub( startPoint );
                var horizontalDisplacement = new pc.Vec3( displacement.x, 0, displacement.z );
                var horizontalDistance = horizontalDisplacement.length();

                var initialVy = Math.sqrt(2 * gravity * UnityEngine.Mathf.Max(0, peakHeight - startPoint.y));
                var timeToApex = initialVy / gravity;
                var timePeakToTarget = Math.sqrt(2 * UnityEngine.Mathf.Max(0, peakHeight - targetPoint.y) / gravity);
                var totalTime = timeToApex + timePeakToTarget;
                if (totalTime < 0.001) {
                    totalTime = 0.001;
                }

                var horizontalVelocity = horizontalDisplacement.$clone().scale( 1.0 / ( totalTime ) );
                return new pc.Vec3( horizontalVelocity.x, initialVy, horizontalVelocity.z );
            },
            /*BasketballThrower.CalculateLaunchVelocity end.*/

            /*BasketballThrower.ThrowBall start.*/
            ThrowBall: function (initialVelocity) {
if ( TRACE ) { TRACE( "BasketballThrower#ThrowBall", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.activeBasketball, null)) {
                    var rb = this.activeBasketball.GetComponent(UnityEngine.Rigidbody);
                    if (UnityEngine.Component.op_Inequality(rb, null)) {
                        rb.velocity = pc.Vec3.ZERO.clone(); // Clear any existing velocity before applying new one
                        rb.angularVelocity = pc.Vec3.ZERO.clone(); // Clear angular velocity
                        rb.AddForce$1(initialVelocity.$clone().clone().scale( this.throwForceMultiplier ), UnityEngine.ForceMode.VelocityChange); // Use AddForce with VelocityChange for direct velocity setting
                        UnityEngine.Debug.Log$1(System.String.format("Ball thrown! Applied Velocity: {0}", [rb.velocity.$clone()]));
                    }
                }
            },
            /*BasketballThrower.ThrowBall end.*/


        }
    });
    /*BasketballThrower end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine"];

    /*Ball start.*/
    $m("Ball", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*Ball end.*/

    /*BasketballThrower start.*/
    $m("BasketballThrower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CalculateLaunchVelocity","t":8,"pi":[{"n":"startPoint","pt":$n[1].Vector3,"ps":0},{"n":"targetPoint","pt":$n[1].Vector3,"ps":1},{"n":"peakHeight","pt":$n[0].Single,"ps":2}],"sn":"CalculateLaunchVelocity","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"a":1,"n":"OnClickCanceled","t":8,"sn":"OnClickCanceled","rt":$n[0].Void},{"a":1,"n":"OnClickStarted","t":8,"sn":"OnClickStarted","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"ThrowBall","t":8,"pi":[{"n":"initialVelocity","pt":$n[1].Vector3,"ps":0}],"sn":"ThrowBall","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"activeBasketball","t":4,"rt":$n[1].GameObject,"sn":"activeBasketball"},{"a":2,"n":"dragSpeedCheckInterval","t":4,"rt":$n[0].Single,"sn":"dragSpeedCheckInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragSpeedCheckTimer","t":4,"rt":$n[0].Single,"sn":"dragSpeedCheckTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Move/Flick Detection")],"a":2,"n":"dragSpeedThreshold","t":4,"rt":$n[0].Single,"sn":"dragSpeedThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragStartTime","t":4,"rt":$n[0].Single,"sn":"dragStartTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Throwing Settings")],"a":2,"n":"hoopTargetPoint","t":4,"rt":$n[1].Transform,"sn":"hoopTargetPoint"},{"a":2,"n":"horizontalAimScale","t":4,"rt":$n[0].Single,"sn":"horizontalAimScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"initialBallScreenOffset","t":4,"rt":$n[1].Vector3,"sn":"initialBallScreenOffset"},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isFlicking","t":4,"rt":$n[0].Boolean,"sn":"isFlicking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastDragSpeedCheckPos","t":4,"rt":$n[1].Vector2,"sn":"lastDragSpeedCheckPos"},{"a":2,"n":"maxApexHeightOffset","t":4,"rt":$n[0].Single,"sn":"maxApexHeightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Trajectory Control (Tune these!)")],"a":2,"n":"minApexHeightOffset","t":4,"rt":$n[0].Single,"sn":"minApexHeightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"throwForceMultiplier","t":4,"rt":$n[0].Single,"sn":"throwForceMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"touchStartScreenPos","t":4,"rt":$n[1].Vector2,"sn":"touchStartScreenPos"}]}; }, $n);
    /*BasketballThrower end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
