if ( TRACE ) { TRACE( JSON.parse( '["Ball#init","Ball#OnTriggerEnter","Ball#OnCollisionEnter","Ball#AddNormalScore","Ball#AddPerfectScore","Ball#ResetState","BasketballThrower#init","BasketballThrower#Start","BasketballThrower#Update","BasketballThrower#OnClickStarted","BasketballThrower#OnClickCanceled","BasketballThrower#CalculateLaunchVelocity","BasketballThrower#ThrowBall","DunkTrigger#Start","DunkTrigger#Update","Floor#Start","Floor#Update","Ring#Start","Ring#Update","ScoreManager#init","ScoreManager#TotalScore#get","ScoreManager#init","ScoreManager#Awake","ScoreManager#Start","ScoreManager#AddNormalDunkScore","ScoreManager#AddPerfectDunkScore","ScoreManager#ResetCurrentScore"]' ) ); }
/**
 * @version 1.0.9351.948
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Ball start.*/
    Bridge.define("Ball", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isPerfectDunk: false,
            triggerCount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Ball#init", this ); }

                this.isPerfectDunk = true;
                this.triggerCount = 0;
            }
        },
        methods: {
            /*Ball.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Ball#OnTriggerEnter", this ); }

                if (UnityEngine.Object.op_Implicit(other.gameObject.GetComponent(DunkTrigger))) {
                    this.triggerCount = (this.triggerCount + 1) | 0;
                }

                if (this.triggerCount >= 2) {
                    if (this.isPerfectDunk) {
                        this.AddPerfectScore();
                    } else {
                        this.AddNormalScore();
                    }
                }
            },
            /*Ball.OnTriggerEnter end.*/

            /*Ball.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "Ball#OnCollisionEnter", this ); }

                if (UnityEngine.Object.op_Implicit(collision.gameObject.GetComponent(Floor))) {
                    this.ResetState();
                }

                if (UnityEngine.Object.op_Implicit(collision.gameObject.GetComponent(Ring))) {
                    this.isPerfectDunk = false;
                }
            },
            /*Ball.OnCollisionEnter end.*/

            /*Ball.AddNormalScore start.*/
            AddNormalScore: function () {
if ( TRACE ) { TRACE( "Ball#AddNormalScore", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null)) {
                    ScoreManager.Instance.AddNormalDunkScore();
                } else {
                    UnityEngine.Debug.LogWarning$1("ScoreManager.Instance is null. Cannot add normal score.");
                }
            },
            /*Ball.AddNormalScore end.*/

            /*Ball.AddPerfectScore start.*/
            AddPerfectScore: function () {
if ( TRACE ) { TRACE( "Ball#AddPerfectScore", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null)) {
                    ScoreManager.Instance.AddPerfectDunkScore();
                } else {
                    UnityEngine.Debug.LogWarning$1("ScoreManager.Instance is null. Cannot add perfect score.");
                }
            },
            /*Ball.AddPerfectScore end.*/

            /*Ball.ResetState start.*/
            ResetState: function () {
if ( TRACE ) { TRACE( "Ball#ResetState", this ); }

                this.isPerfectDunk = true;
                this.triggerCount = 0;
            },
            /*Ball.ResetState end.*/


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

    /*DunkTrigger start.*/
    Bridge.define("DunkTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*DunkTrigger.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DunkTrigger#Start", this ); }


            },
            /*DunkTrigger.Start end.*/

            /*DunkTrigger.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DunkTrigger#Update", this ); }


            },
            /*DunkTrigger.Update end.*/


        }
    });
    /*DunkTrigger end.*/

    /*Floor start.*/
    Bridge.define("Floor", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Floor.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Floor#Start", this ); }


            },
            /*Floor.Start end.*/

            /*Floor.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Floor#Update", this ); }


            },
            /*Floor.Update end.*/


        }
    });
    /*Floor end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Ring start.*/
    Bridge.define("Ring", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Ring.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Ring#Start", this ); }


            },
            /*Ring.Start end.*/

            /*Ring.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Ring#Update", this ); }


            },
            /*Ring.Update end.*/


        }
    });
    /*Ring end.*/

    /*ScoreManager start.*/
    Bridge.define("ScoreManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                PERFECT_DUNK_NOTIFICATION: null,
                Instance: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "ScoreManager#init", this ); }

                    this.PERFECT_DUNK_NOTIFICATION = "Perfect Dunk Animation";
                }
            }
        },
        fields: {
            NormalScore: 0,
            PerfectScore: 0,
            normalScoreText: null,
            perfectScoreText: null,
            totalScoreText: null,
            perfectDunkAnimation: null,
            perfectDunkParticle: null,
            normalDunkPoints: 0,
            perfectDunkPoints: 0
        },
        events: {
            OnTotalScoreChanged: null
        },
        props: {
            TotalScore: {
                get: function () {
if ( TRACE ) { TRACE( "ScoreManager#TotalScore#get", this ); }

                    return ((this.NormalScore + Bridge.Int.mul(this.PerfectScore, 3)) | 0);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScoreManager#init", this ); }

                this.normalDunkPoints = 1;
                this.perfectDunkPoints = 1;
            }
        },
        methods: {
            /*ScoreManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ScoreManager#Awake", this ); }

                // Implement Singleton pattern
                if (UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(ScoreManager.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                ScoreManager.Instance = this;
                // For playable ads, you typically don't need DontDestroyOnLoad
                // DontDestroyOnLoad(gameObject);
            },
            /*ScoreManager.Awake end.*/

            /*ScoreManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ScoreManager#Start", this ); }

                // Initialize scores and trigger event for total score
                this.NormalScore = 0;
                this.PerfectScore = 0;
                !Bridge.staticEquals(this.OnTotalScoreChanged, null) ? this.OnTotalScoreChanged(this.TotalScore) : null;
            },
            /*ScoreManager.Start end.*/

            /*ScoreManager.AddNormalDunkScore start.*/
            AddNormalDunkScore: function () {
if ( TRACE ) { TRACE( "ScoreManager#AddNormalDunkScore", this ); }

                this.NormalScore = (this.NormalScore + this.normalDunkPoints) | 0;
                !Bridge.staticEquals(this.OnTotalScoreChanged, null) ? this.OnTotalScoreChanged(this.TotalScore) : null; // Notify subscribers of total score change
                UnityEngine.Debug.Log$1(System.String.format("Normal Dunk! Normal Score: {0}, Total Score: {1}", Bridge.box(this.NormalScore, System.Int32), Bridge.box(this.TotalScore, System.Int32)));
                if (UnityEngine.MonoBehaviour.op_Inequality(this.normalScoreText, null)) {
                    this.normalScoreText.text = Bridge.toString(this.NormalScore);
                    this.totalScoreText.text = Bridge.toString(this.TotalScore);
                }
            },
            /*ScoreManager.AddNormalDunkScore end.*/

            /*ScoreManager.AddPerfectDunkScore start.*/
            AddPerfectDunkScore: function () {
if ( TRACE ) { TRACE( "ScoreManager#AddPerfectDunkScore", this ); }

                this.PerfectScore = (this.PerfectScore + this.perfectDunkPoints) | 0;
                !Bridge.staticEquals(this.OnTotalScoreChanged, null) ? this.OnTotalScoreChanged(this.TotalScore) : null; // Notify subscribers of total score change
                UnityEngine.Debug.Log$1(System.String.format("Perfect Dunk! Perfect Score: {0}, Total Score: {1}", Bridge.box(this.PerfectScore, System.Int32), Bridge.box(this.TotalScore, System.Int32)));
                if (UnityEngine.MonoBehaviour.op_Inequality(this.perfectScoreText, null)) {
                    this.perfectScoreText.text = Bridge.toString(this.PerfectScore);
                    this.totalScoreText.text = Bridge.toString(this.TotalScore);
                }
                // Play score animation if assigned
                if (UnityEngine.Component.op_Inequality(this.perfectDunkAnimation, null)) {
                    //scoreAnimation.Play(PERFECT_DUNK_NOTIFICATION);

                    this.perfectDunkAnimation.Play(); // Play the score animation
                }

                // Play particle effect for perfect dunk if assigned
                if (UnityEngine.Component.op_Inequality(this.perfectDunkParticle, null)) {
                    this.perfectDunkParticle.Play();
                }
            },
            /*ScoreManager.AddPerfectDunkScore end.*/

            /*ScoreManager.ResetCurrentScore start.*/
            ResetCurrentScore: function () {
if ( TRACE ) { TRACE( "ScoreManager#ResetCurrentScore", this ); }

                this.NormalScore = 0;
                this.PerfectScore = 0;
                !Bridge.staticEquals(this.OnTotalScoreChanged, null) ? this.OnTotalScoreChanged(this.TotalScore) : null; // Notify subscribers
                UnityEngine.Debug.Log$1("Current score reset. Total Score: 0");
            },
            /*ScoreManager.ResetCurrentScore end.*/


        }
    });
    /*ScoreManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","TMPro"];

    /*Ball start.*/
    $m("Ball", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddNormalScore","t":8,"sn":"AddNormalScore","rt":$n[0].Void},{"a":2,"n":"AddPerfectScore","t":8,"sn":"AddPerfectScore","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":1,"n":"isPerfectDunk","t":4,"rt":$n[0].Boolean,"sn":"isPerfectDunk","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"triggerCount","t":4,"rt":$n[0].Int32,"sn":"triggerCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Ball end.*/

    /*BasketballThrower start.*/
    $m("BasketballThrower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CalculateLaunchVelocity","t":8,"pi":[{"n":"startPoint","pt":$n[1].Vector3,"ps":0},{"n":"targetPoint","pt":$n[1].Vector3,"ps":1},{"n":"peakHeight","pt":$n[0].Single,"ps":2}],"sn":"CalculateLaunchVelocity","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"a":1,"n":"OnClickCanceled","t":8,"sn":"OnClickCanceled","rt":$n[0].Void},{"a":1,"n":"OnClickStarted","t":8,"sn":"OnClickStarted","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"ThrowBall","t":8,"pi":[{"n":"initialVelocity","pt":$n[1].Vector3,"ps":0}],"sn":"ThrowBall","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"activeBasketball","t":4,"rt":$n[1].GameObject,"sn":"activeBasketball"},{"a":2,"n":"dragSpeedCheckInterval","t":4,"rt":$n[0].Single,"sn":"dragSpeedCheckInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragSpeedCheckTimer","t":4,"rt":$n[0].Single,"sn":"dragSpeedCheckTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Move/Flick Detection")],"a":2,"n":"dragSpeedThreshold","t":4,"rt":$n[0].Single,"sn":"dragSpeedThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragStartTime","t":4,"rt":$n[0].Single,"sn":"dragStartTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Throwing Settings")],"a":2,"n":"hoopTargetPoint","t":4,"rt":$n[1].Transform,"sn":"hoopTargetPoint"},{"a":2,"n":"horizontalAimScale","t":4,"rt":$n[0].Single,"sn":"horizontalAimScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"initialBallScreenOffset","t":4,"rt":$n[1].Vector3,"sn":"initialBallScreenOffset"},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isFlicking","t":4,"rt":$n[0].Boolean,"sn":"isFlicking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastDragSpeedCheckPos","t":4,"rt":$n[1].Vector2,"sn":"lastDragSpeedCheckPos"},{"a":2,"n":"maxApexHeightOffset","t":4,"rt":$n[0].Single,"sn":"maxApexHeightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Trajectory Control (Tune these!)")],"a":2,"n":"minApexHeightOffset","t":4,"rt":$n[0].Single,"sn":"minApexHeightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"throwForceMultiplier","t":4,"rt":$n[0].Single,"sn":"throwForceMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"touchStartScreenPos","t":4,"rt":$n[1].Vector2,"sn":"touchStartScreenPos"}]}; }, $n);
    /*BasketballThrower end.*/

    /*DunkTrigger start.*/
    $m("DunkTrigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*DunkTrigger end.*/

    /*Floor start.*/
    $m("Floor", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*Floor end.*/

    /*Ring start.*/
    $m("Ring", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*Ring end.*/

    /*ScoreManager start.*/
    $m("ScoreManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddNormalDunkScore","t":8,"sn":"AddNormalDunkScore","rt":$n[0].Void},{"a":2,"n":"AddPerfectDunkScore","t":8,"sn":"AddPerfectDunkScore","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ResetCurrentScore","t":8,"sn":"ResetCurrentScore","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":ScoreManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":ScoreManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[ScoreManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"NormalScore","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_NormalScore","t":8,"rt":$n[0].Int32,"fg":"NormalScore","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_NormalScore","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"NormalScore"},"fn":"NormalScore"},{"a":2,"n":"PerfectScore","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_PerfectScore","t":8,"rt":$n[0].Int32,"fg":"PerfectScore","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_PerfectScore","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"PerfectScore"},"fn":"PerfectScore"},{"a":2,"n":"TotalScore","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_TotalScore","t":8,"rt":$n[0].Int32,"fg":"TotalScore","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"TotalScore"},{"a":1,"n":"PERFECT_DUNK_NOTIFICATION","is":true,"t":4,"rt":$n[0].String,"sn":"PERFECT_DUNK_NOTIFICATION"},{"at":[new UnityEngine.HeaderAttribute("Dunk Point Values")],"a":2,"n":"normalDunkPoints","t":4,"rt":$n[0].Int32,"sn":"normalDunkPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"normalScoreText","t":4,"rt":$n[2].TextMeshPro,"sn":"normalScoreText"},{"a":2,"n":"perfectDunkAnimation","t":4,"rt":$n[1].Animation,"sn":"perfectDunkAnimation"},{"a":2,"n":"perfectDunkParticle","t":4,"rt":$n[1].ParticleSystem,"sn":"perfectDunkParticle"},{"a":2,"n":"perfectDunkPoints","t":4,"rt":$n[0].Int32,"sn":"perfectDunkPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"perfectScoreText","t":4,"rt":$n[2].TextMeshPro,"sn":"perfectScoreText"},{"a":2,"n":"totalScoreText","t":4,"rt":$n[2].TextMeshPro,"sn":"totalScoreText"},{"a":2,"n":"OnTotalScoreChanged","t":2,"ad":{"a":2,"n":"add_OnTotalScoreChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTotalScoreChanged","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTotalScoreChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTotalScoreChanged","rt":$n[0].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":ScoreManager,"sn":"Instance"},{"a":1,"backing":true,"n":"<NormalScore>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"NormalScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<PerfectScore>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"PerfectScore","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*ScoreManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
