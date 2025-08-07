var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointSpring' )
  var i587 = data
  i586.spring = i587[0]
  i586.damper = i587[1]
  i586.targetPosition = i587[2]
  return i586
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointMotor' )
  var i589 = data
  i588.m_TargetVelocity = i589[0]
  i588.m_Force = i589[1]
  i588.m_FreeSpin = i589[2]
  return i588
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointLimits' )
  var i591 = data
  i590.m_Min = i591[0]
  i590.m_Max = i591[1]
  i590.m_Bounciness = i591[2]
  i590.m_BounceMinVelocity = i591[3]
  i590.m_ContactDistance = i591[4]
  i590.minBounce = i591[5]
  i590.maxBounce = i591[6]
  return i590
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointDrive' )
  var i593 = data
  i592.m_PositionSpring = i593[0]
  i592.m_PositionDamper = i593[1]
  i592.m_MaximumForce = i593[2]
  return i592
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i595 = data
  i594.m_Spring = i595[0]
  i594.m_Damper = i595[1]
  return i594
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i597 = data
  i596.m_Limit = i597[0]
  i596.m_Bounciness = i597[1]
  i596.m_ContactDistance = i597[2]
  return i596
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i599 = data
  i598.m_ExtremumSlip = i599[0]
  i598.m_ExtremumValue = i599[1]
  i598.m_AsymptoteSlip = i599[2]
  i598.m_AsymptoteValue = i599[3]
  i598.m_Stiffness = i599[4]
  return i598
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i601 = data
  i600.m_LowerAngle = i601[0]
  i600.m_UpperAngle = i601[1]
  return i600
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i603 = data
  i602.m_MotorSpeed = i603[0]
  i602.m_MaximumMotorTorque = i603[1]
  return i602
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i605 = data
  i604.m_DampingRatio = i605[0]
  i604.m_Frequency = i605[1]
  i604.m_Angle = i605[2]
  return i604
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i607 = data
  i606.m_LowerTranslation = i607[0]
  i606.m_UpperTranslation = i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i609 = data
  i608.name = i609[0]
  i608.halfPrecision = !!i609[1]
  i608.useUInt32IndexFormat = !!i609[2]
  i608.vertexCount = i609[3]
  i608.aabb = i609[4]
  var i611 = i609[5]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( !!i611[i + 0] );
  }
  i608.streams = i610
  i608.vertices = i609[6]
  var i613 = i609[7]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i613[i + 0]) );
  }
  i608.subMeshes = i612
  var i615 = i609[8]
  var i614 = []
  for(var i = 0; i < i615.length; i += 16) {
    i614.push( new pc.Mat4().setData(i615[i + 0], i615[i + 1], i615[i + 2], i615[i + 3],  i615[i + 4], i615[i + 5], i615[i + 6], i615[i + 7],  i615[i + 8], i615[i + 9], i615[i + 10], i615[i + 11],  i615[i + 12], i615[i + 13], i615[i + 14], i615[i + 15]) );
  }
  i608.bindposes = i614
  var i617 = i609[9]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i617[i + 0]) );
  }
  i608.blendShapes = i616
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i623 = data
  i622.triangles = i623[0]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i629 = data
  i628.name = i629[0]
  var i631 = i629[1]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i631[i + 0]) );
  }
  i628.frames = i630
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i632 = root || new pc.UnityMaterial()
  var i633 = data
  i632.name = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'shader')
  i632.renderQueue = i633[3]
  i632.enableInstancing = !!i633[4]
  var i635 = i633[5]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i635[i + 0]) );
  }
  i632.floatParameters = i634
  var i637 = i633[6]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i637[i + 0]) );
  }
  i632.colorParameters = i636
  var i639 = i633[7]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i639[i + 0]) );
  }
  i632.vectorParameters = i638
  var i641 = i633[8]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i641[i + 0]) );
  }
  i632.textureParameters = i640
  var i643 = i633[9]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i643[i + 0]) );
  }
  i632.materialFlags = i642
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i651 = data
  i650.name = i651[0]
  i650.value = new pc.Color(i651[1], i651[2], i651[3], i651[4])
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i655 = data
  i654.name = i655[0]
  i654.value = new pc.Vec4( i655[1], i655[2], i655[3], i655[4] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i659 = data
  i658.name = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'value')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i663 = data
  i662.name = i663[0]
  i662.enabled = !!i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i665 = data
  i664.name = i665[0]
  i664.width = i665[1]
  i664.height = i665[2]
  i664.mipmapCount = i665[3]
  i664.anisoLevel = i665[4]
  i664.filterMode = i665[5]
  i664.hdr = !!i665[6]
  i664.format = i665[7]
  i664.wrapMode = i665[8]
  i664.alphaIsTransparency = !!i665[9]
  i664.alphaSource = i665[10]
  i664.graphicsFormat = i665[11]
  i664.sRGBTexture = !!i665[12]
  i664.desiredColorSpace = i665[13]
  i664.wrapU = i665[14]
  i664.wrapV = i665[15]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i667 = data
  i666.name = i667[0]
  i666.width = i667[1]
  i666.height = i667[2]
  i666.anisoLevel = i667[3]
  i666.filterMode = i667[4]
  i666.hdr = !!i667[5]
  i666.colorFormat = i667[6]
  i666.depthStencilFormat = i667[7]
  i666.renderTextureFormat = i667[8]
  i666.depth = i667[9]
  i666.wrapU = i667[10]
  i666.wrapV = i667[11]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i669 = data
  i668.name = i669[0]
  i668.atlasId = i669[1]
  i668.mipmapCount = i669[2]
  i668.hdr = !!i669[3]
  i668.size = i669[4]
  i668.anisoLevel = i669[5]
  i668.filterMode = i669[6]
  var i671 = i669[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 4) {
    i670.push( UnityEngine.Rect.MinMaxRect(i671[i + 0], i671[i + 1], i671[i + 2], i671[i + 3]) );
  }
  i668.rects = i670
  i668.wrapU = i669[8]
  i668.wrapV = i669[9]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i675 = data
  i674.name = i675[0]
  i674.index = i675[1]
  i674.startup = !!i675[2]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i677 = data
  i676.position = new pc.Vec3( i677[0], i677[1], i677[2] )
  i676.scale = new pc.Vec3( i677[3], i677[4], i677[5] )
  i676.rotation = new pc.Quat(i677[6], i677[7], i677[8], i677[9])
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'sharedMesh')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'additionalVertexStreams')
  i680.enabled = !!i681[2]
  request.r(i681[3], i681[4], 0, i680, 'sharedMaterial')
  var i683 = i681[5]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i680.sharedMaterials = i682
  i680.receiveShadows = !!i681[6]
  i680.shadowCastingMode = i681[7]
  i680.sortingLayerID = i681[8]
  i680.sortingOrder = i681[9]
  i680.lightmapIndex = i681[10]
  i680.lightmapSceneIndex = i681[11]
  i680.lightmapScaleOffset = new pc.Vec4( i681[12], i681[13], i681[14], i681[15] )
  i680.lightProbeUsage = i681[16]
  i680.reflectionProbeUsage = i681[17]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i687 = data
  i686.name = i687[0]
  i686.tagId = i687[1]
  i686.enabled = !!i687[2]
  i686.isStatic = !!i687[3]
  i686.layer = i687[4]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i689 = data
  i688.enabled = !!i689[0]
  i688.isTrigger = !!i689[1]
  request.r(i689[2], i689[3], 0, i688, 'material')
  i688.center = new pc.Vec3( i689[4], i689[5], i689[6] )
  i688.radius = i689[7]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i691 = data
  i690.enabled = !!i691[0]
  request.r(i691[1], i691[2], 0, i690, 'sharedMaterial')
  var i693 = i691[3]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i690.sharedMaterials = i692
  i690.receiveShadows = !!i691[4]
  i690.shadowCastingMode = i691[5]
  i690.sortingLayerID = i691[6]
  i690.sortingOrder = i691[7]
  i690.lightmapIndex = i691[8]
  i690.lightmapSceneIndex = i691[9]
  i690.lightmapScaleOffset = new pc.Vec4( i691[10], i691[11], i691[12], i691[13] )
  i690.lightProbeUsage = i691[14]
  i690.reflectionProbeUsage = i691[15]
  i690.color = new pc.Color(i691[16], i691[17], i691[18], i691[19])
  request.r(i691[20], i691[21], 0, i690, 'sprite')
  i690.flipX = !!i691[22]
  i690.flipY = !!i691[23]
  i690.drawMode = i691[24]
  i690.size = new pc.Vec2( i691[25], i691[26] )
  i690.tileMode = i691[27]
  i690.adaptiveModeThreshold = i691[28]
  i690.maskInteraction = i691[29]
  i690.spriteSortPoint = i691[30]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i695 = data
  i694.playAutomatically = !!i695[0]
  request.r(i695[1], i695[2], 0, i694, 'clip')
  var i697 = i695[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.clips = i696
  i694.wrapMode = i695[4]
  i694.enabled = !!i695[5]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i701 = data
  i700.enabled = !!i701[0]
  i700.isTrigger = !!i701[1]
  request.r(i701[2], i701[3], 0, i700, 'material')
  request.r(i701[4], i701[5], 0, i700, 'sharedMesh')
  i700.convex = !!i701[6]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i703 = data
  i702.enabled = !!i703[0]
  i702.aspect = i703[1]
  i702.orthographic = !!i703[2]
  i702.orthographicSize = i703[3]
  i702.backgroundColor = new pc.Color(i703[4], i703[5], i703[6], i703[7])
  i702.nearClipPlane = i703[8]
  i702.farClipPlane = i703[9]
  i702.fieldOfView = i703[10]
  i702.depth = i703[11]
  i702.clearFlags = i703[12]
  i702.cullingMask = i703[13]
  i702.rect = i703[14]
  request.r(i703[15], i703[16], 0, i702, 'targetTexture')
  i702.usePhysicalProperties = !!i703[17]
  i702.focalLength = i703[18]
  i702.sensorSize = new pc.Vec2( i703[19], i703[20] )
  i702.lensShift = new pc.Vec2( i703[21], i703[22] )
  i702.gateFit = i703[23]
  i702.commandBufferCount = i703[24]
  i702.cameraType = i703[25]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i705 = data
  i704.mass = i705[0]
  i704.drag = i705[1]
  i704.angularDrag = i705[2]
  i704.useGravity = !!i705[3]
  i704.isKinematic = !!i705[4]
  i704.constraints = i705[5]
  i704.maxAngularVelocity = i705[6]
  i704.collisionDetectionMode = i705[7]
  i704.interpolation = i705[8]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i707 = data
  i706.enabled = !!i707[0]
  request.r(i707[1], i707[2], 0, i706, 'sharedMaterial')
  var i709 = i707[3]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i706.sharedMaterials = i708
  i706.receiveShadows = !!i707[4]
  i706.shadowCastingMode = i707[5]
  i706.sortingLayerID = i707[6]
  i706.sortingOrder = i707[7]
  i706.lightmapIndex = i707[8]
  i706.lightmapSceneIndex = i707[9]
  i706.lightmapScaleOffset = new pc.Vec4( i707[10], i707[11], i707[12], i707[13] )
  i706.lightProbeUsage = i707[14]
  i706.reflectionProbeUsage = i707[15]
  var i711 = i707[16]
  var i710 = []
  for(var i = 0; i < i711.length; i += 3) {
    i710.push( new pc.Vec3( i711[i + 0], i711[i + 1], i711[i + 2] ) );
  }
  i706.positions = i710
  i706.positionCount = i707[17]
  i706.time = i707[18]
  i706.startWidth = i707[19]
  i706.endWidth = i707[20]
  i706.widthMultiplier = i707[21]
  i706.autodestruct = !!i707[22]
  i706.emitting = !!i707[23]
  i706.numCornerVertices = i707[24]
  i706.numCapVertices = i707[25]
  i706.minVertexDistance = i707[26]
  i706.colorGradient = i707[27] ? new pc.ColorGradient(i707[27][0], i707[27][1], i707[27][2]) : null
  i706.startColor = new pc.Color(i707[28], i707[29], i707[30], i707[31])
  i706.endColor = new pc.Color(i707[32], i707[33], i707[34], i707[35])
  i706.generateLightingData = !!i707[36]
  i706.textureMode = i707[37]
  i706.alignment = i707[38]
  i706.widthCurve = new pc.AnimationCurve( { keys_flow: i707[39] } )
  return i706
}

Deserializers["Ball"] = function (request, data, root) {
  var i714 = root || request.c( 'Ball' )
  var i715 = data
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i717 = data
  i716.useMotor = !!i717[0]
  i716.useLimits = !!i717[1]
  i716.useSpring = !!i717[2]
  i716.limits = request.d('UnityEngine.JointLimits', i717[3], i716.limits)
  i716.motor = request.d('UnityEngine.JointMotor', i717[4], i716.motor)
  i716.spring = request.d('UnityEngine.JointSpring', i717[5], i716.spring)
  request.r(i717[6], i717[7], 0, i716, 'connectedBody')
  i716.axis = new pc.Vec3( i717[8], i717[9], i717[10] )
  i716.anchor = new pc.Vec3( i717[11], i717[12], i717[13] )
  i716.connectedAnchor = new pc.Vec3( i717[14], i717[15], i717[16] )
  i716.autoConfigureConnectedAnchor = !!i717[17]
  i716.massScale = i717[18]
  i716.connectedMassScale = i717[19]
  i716.enableCollision = !!i717[20]
  i716.breakForce = i717[21]
  i716.breakTorque = i717[22]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i719 = data
  i718.center = new pc.Vec3( i719[0], i719[1], i719[2] )
  i718.radius = i719[3]
  i718.height = i719[4]
  i718.direction = i719[5]
  i718.enabled = !!i719[6]
  i718.isTrigger = !!i719[7]
  request.r(i719[8], i719[9], 0, i718, 'material')
  return i718
}

Deserializers["Ring"] = function (request, data, root) {
  var i720 = root || request.c( 'Ring' )
  var i721 = data
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i723 = data
  i722.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i723[0], i722.main)
  i722.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i723[1], i722.colorBySpeed)
  i722.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i723[2], i722.colorOverLifetime)
  i722.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i723[3], i722.emission)
  i722.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i723[4], i722.rotationBySpeed)
  i722.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i723[5], i722.rotationOverLifetime)
  i722.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i723[6], i722.shape)
  i722.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i723[7], i722.sizeBySpeed)
  i722.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i723[8], i722.sizeOverLifetime)
  i722.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i723[9], i722.textureSheetAnimation)
  i722.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i723[10], i722.velocityOverLifetime)
  i722.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i723[11], i722.noise)
  i722.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i723[12], i722.inheritVelocity)
  i722.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i723[13], i722.forceOverLifetime)
  i722.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i723[14], i722.limitVelocityOverLifetime)
  i722.useAutoRandomSeed = !!i723[15]
  i722.randomSeed = i723[16]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemMain()
  var i725 = data
  i724.duration = i725[0]
  i724.loop = !!i725[1]
  i724.prewarm = !!i725[2]
  i724.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.startDelay)
  i724.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[4], i724.startLifetime)
  i724.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[5], i724.startSpeed)
  i724.startSize3D = !!i725[6]
  i724.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[7], i724.startSizeX)
  i724.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[8], i724.startSizeY)
  i724.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[9], i724.startSizeZ)
  i724.startRotation3D = !!i725[10]
  i724.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[11], i724.startRotationX)
  i724.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[12], i724.startRotationY)
  i724.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[13], i724.startRotationZ)
  i724.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i725[14], i724.startColor)
  i724.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[15], i724.gravityModifier)
  i724.simulationSpace = i725[16]
  request.r(i725[17], i725[18], 0, i724, 'customSimulationSpace')
  i724.simulationSpeed = i725[19]
  i724.useUnscaledTime = !!i725[20]
  i724.scalingMode = i725[21]
  i724.playOnAwake = !!i725[22]
  i724.maxParticles = i725[23]
  i724.emitterVelocityMode = i725[24]
  i724.stopAction = i725[25]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i726 = root || new pc.MinMaxCurve()
  var i727 = data
  i726.mode = i727[0]
  i726.curveMin = new pc.AnimationCurve( { keys_flow: i727[1] } )
  i726.curveMax = new pc.AnimationCurve( { keys_flow: i727[2] } )
  i726.curveMultiplier = i727[3]
  i726.constantMin = i727[4]
  i726.constantMax = i727[5]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i728 = root || new pc.MinMaxGradient()
  var i729 = data
  i728.mode = i729[0]
  i728.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i729[1], i728.gradientMin)
  i728.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i729[2], i728.gradientMax)
  i728.colorMin = new pc.Color(i729[3], i729[4], i729[5], i729[6])
  i728.colorMax = new pc.Color(i729[7], i729[8], i729[9], i729[10])
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i731 = data
  i730.mode = i731[0]
  var i733 = i731[1]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i733[i + 0]) );
  }
  i730.colorKeys = i732
  var i735 = i731[2]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i735[i + 0]) );
  }
  i730.alphaKeys = i734
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemColorBySpeed()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i737[1], i736.color)
  i736.range = new pc.Vec2( i737[2], i737[3] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i741 = data
  i740.color = new pc.Color(i741[0], i741[1], i741[2], i741[3])
  i740.time = i741[4]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i745 = data
  i744.alpha = i745[0]
  i744.time = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemColorOverLifetime()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i747[1], i746.color)
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemEmitter()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.rateOverTime)
  i748.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.rateOverDistance)
  var i751 = i749[3]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i751[i + 0]) );
  }
  i748.bursts = i750
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemBurst()
  var i755 = data
  i754.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[0], i754.count)
  i754.cycleCount = i755[1]
  i754.minCount = i755[2]
  i754.maxCount = i755[3]
  i754.repeatInterval = i755[4]
  i754.time = i755[5]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemRotationBySpeed()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.x)
  i756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.y)
  i756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.z)
  i756.separateAxes = !!i757[4]
  i756.range = new pc.Vec2( i757[5], i757[6] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemRotationOverLifetime()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.separateAxes = !!i759[4]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemShape()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.shapeType = i761[1]
  i760.randomDirectionAmount = i761[2]
  i760.sphericalDirectionAmount = i761[3]
  i760.randomPositionAmount = i761[4]
  i760.alignToDirection = !!i761[5]
  i760.radius = i761[6]
  i760.radiusMode = i761[7]
  i760.radiusSpread = i761[8]
  i760.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[9], i760.radiusSpeed)
  i760.radiusThickness = i761[10]
  i760.angle = i761[11]
  i760.length = i761[12]
  i760.boxThickness = new pc.Vec3( i761[13], i761[14], i761[15] )
  i760.meshShapeType = i761[16]
  request.r(i761[17], i761[18], 0, i760, 'mesh')
  request.r(i761[19], i761[20], 0, i760, 'meshRenderer')
  request.r(i761[21], i761[22], 0, i760, 'skinnedMeshRenderer')
  i760.useMeshMaterialIndex = !!i761[23]
  i760.meshMaterialIndex = i761[24]
  i760.useMeshColors = !!i761[25]
  i760.normalOffset = i761[26]
  i760.arc = i761[27]
  i760.arcMode = i761[28]
  i760.arcSpread = i761[29]
  i760.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[30], i760.arcSpeed)
  i760.donutRadius = i761[31]
  i760.position = new pc.Vec3( i761[32], i761[33], i761[34] )
  i760.rotation = new pc.Vec3( i761[35], i761[36], i761[37] )
  i760.scale = new pc.Vec3( i761[38], i761[39], i761[40] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemSizeBySpeed()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.separateAxes = !!i763[4]
  i762.range = new pc.Vec2( i763[5], i763[6] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemSizeOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.separateAxes = !!i765[4]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.mode = i767[1]
  i766.animation = i767[2]
  i766.numTilesX = i767[3]
  i766.numTilesY = i767[4]
  i766.useRandomRow = !!i767[5]
  i766.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[6], i766.frameOverTime)
  i766.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[7], i766.startFrame)
  i766.cycleCount = i767[8]
  i766.rowIndex = i767[9]
  i766.flipU = i767[10]
  i766.flipV = i767[11]
  i766.spriteCount = i767[12]
  var i769 = i767[13]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.sprites = i768
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[4], i772.radial)
  i772.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[5], i772.speedModifier)
  i772.space = i773[6]
  i772.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[7], i772.orbitalX)
  i772.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[8], i772.orbitalY)
  i772.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[9], i772.orbitalZ)
  i772.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[10], i772.orbitalOffsetX)
  i772.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[11], i772.orbitalOffsetY)
  i772.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[12], i772.orbitalOffsetZ)
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemNoise()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.separateAxes = !!i775[1]
  i774.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.strengthX)
  i774.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.strengthY)
  i774.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[4], i774.strengthZ)
  i774.frequency = i775[5]
  i774.damping = !!i775[6]
  i774.octaveCount = i775[7]
  i774.octaveMultiplier = i775[8]
  i774.octaveScale = i775[9]
  i774.quality = i775[10]
  i774.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[11], i774.scrollSpeed)
  i774.scrollSpeedMultiplier = i775[12]
  i774.remapEnabled = !!i775[13]
  i774.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[14], i774.remapX)
  i774.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[15], i774.remapY)
  i774.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[16], i774.remapZ)
  i774.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[17], i774.positionAmount)
  i774.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[18], i774.rotationAmount)
  i774.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[19], i774.sizeAmount)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemInheritVelocity()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.mode = i777[1]
  i776.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.curve)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemForceOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.space = i779[4]
  i778.randomized = !!i779[5]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.limit)
  i780.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.limitX)
  i780.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.limitY)
  i780.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[4], i780.limitZ)
  i780.dampen = i781[5]
  i780.separateAxes = !!i781[6]
  i780.space = i781[7]
  i780.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[8], i780.drag)
  i780.multiplyDragByParticleSize = !!i781[9]
  i780.multiplyDragByParticleVelocity = !!i781[10]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i783 = data
  i782.enabled = !!i783[0]
  request.r(i783[1], i783[2], 0, i782, 'sharedMaterial')
  var i785 = i783[3]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.sharedMaterials = i784
  i782.receiveShadows = !!i783[4]
  i782.shadowCastingMode = i783[5]
  i782.sortingLayerID = i783[6]
  i782.sortingOrder = i783[7]
  i782.lightmapIndex = i783[8]
  i782.lightmapSceneIndex = i783[9]
  i782.lightmapScaleOffset = new pc.Vec4( i783[10], i783[11], i783[12], i783[13] )
  i782.lightProbeUsage = i783[14]
  i782.reflectionProbeUsage = i783[15]
  request.r(i783[16], i783[17], 0, i782, 'mesh')
  i782.meshCount = i783[18]
  i782.activeVertexStreamsCount = i783[19]
  i782.alignment = i783[20]
  i782.renderMode = i783[21]
  i782.sortMode = i783[22]
  i782.lengthScale = i783[23]
  i782.velocityScale = i783[24]
  i782.cameraVelocityScale = i783[25]
  i782.normalDirection = i783[26]
  i782.sortingFudge = i783[27]
  i782.minParticleSize = i783[28]
  i782.maxParticleSize = i783[29]
  i782.pivot = new pc.Vec3( i783[30], i783[31], i783[32] )
  request.r(i783[33], i783[34], 0, i782, 'trailMaterial')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i787 = data
  i786.enabled = !!i787[0]
  request.r(i787[1], i787[2], 0, i786, 'sharedMaterial')
  var i789 = i787[3]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.sharedMaterials = i788
  i786.receiveShadows = !!i787[4]
  i786.shadowCastingMode = i787[5]
  i786.sortingLayerID = i787[6]
  i786.sortingOrder = i787[7]
  i786.lightmapIndex = i787[8]
  i786.lightmapSceneIndex = i787[9]
  i786.lightmapScaleOffset = new pc.Vec4( i787[10], i787[11], i787[12], i787[13] )
  i786.lightProbeUsage = i787[14]
  i786.reflectionProbeUsage = i787[15]
  request.r(i787[16], i787[17], 0, i786, 'sharedMesh')
  var i791 = i787[18]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i786.bones = i790
  i786.updateWhenOffscreen = !!i787[19]
  i786.localBounds = i787[20]
  request.r(i787[21], i787[22], 0, i786, 'rootBone')
  var i793 = i787[23]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i793[i + 0]) );
  }
  i786.blendShapesWeights = i792
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i799 = data
  i798.weight = i799[0]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i801 = data
  i800.center = new pc.Vec3( i801[0], i801[1], i801[2] )
  i800.size = new pc.Vec3( i801[3], i801[4], i801[5] )
  i800.enabled = !!i801[6]
  i800.isTrigger = !!i801[7]
  request.r(i801[8], i801[9], 0, i800, 'material')
  return i800
}

Deserializers["DunkTrigger"] = function (request, data, root) {
  var i802 = root || request.c( 'DunkTrigger' )
  var i803 = data
  return i802
}

Deserializers["Floor"] = function (request, data, root) {
  var i804 = root || request.c( 'Floor' )
  var i805 = data
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i807 = data
  i806.enabled = !!i807[0]
  i806.type = i807[1]
  i806.color = new pc.Color(i807[2], i807[3], i807[4], i807[5])
  i806.cullingMask = i807[6]
  i806.intensity = i807[7]
  i806.range = i807[8]
  i806.spotAngle = i807[9]
  i806.shadows = i807[10]
  i806.shadowNormalBias = i807[11]
  i806.shadowBias = i807[12]
  i806.shadowStrength = i807[13]
  i806.shadowResolution = i807[14]
  i806.lightmapBakeType = i807[15]
  i806.renderMode = i807[16]
  request.r(i807[17], i807[18], 0, i806, 'cookie')
  i806.cookieSize = i807[19]
  return i806
}

Deserializers["BasketballThrower"] = function (request, data, root) {
  var i808 = root || request.c( 'BasketballThrower' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'hoopTargetPoint')
  i808.throwForceMultiplier = i809[2]
  i808.minApexHeightOffset = i809[3]
  i808.maxApexHeightOffset = i809[4]
  i808.horizontalAimScale = i809[5]
  i808.dragSpeedThreshold = i809[6]
  i808.moveSpeed = i809[7]
  i808.dragSpeedCheckInterval = i809[8]
  return i808
}

Deserializers["ScoreManager"] = function (request, data, root) {
  var i810 = root || request.c( 'ScoreManager' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'normalScoreText')
  request.r(i811[2], i811[3], 0, i810, 'perfectScoreText')
  request.r(i811[4], i811[5], 0, i810, 'totalScoreText')
  request.r(i811[6], i811[7], 0, i810, 'perfectDunkAnimation')
  request.r(i811[8], i811[9], 0, i810, 'perfectDunkParticle')
  i810.normalDunkPoints = i811[10]
  i810.perfectDunkPoints = i811[11]
  return i810
}

Deserializers["UIManager"] = function (request, data, root) {
  var i812 = root || request.c( 'UIManager' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'BallSelectMenu')
  request.r(i813[2], i813[3], 0, i812, 'BallSelectButton')
  return i812
}

Deserializers["BallManager"] = function (request, data, root) {
  var i814 = root || request.c( 'BallManager' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'BallListPivot')
  var i817 = i815[2]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 1, i816, '')
  }
  i814.BallList = i816
  i814.radius = i815[3]
  i814.scrollSensitivity = i815[4]
  i814.inertia = i815[5]
  i814.snapSmoothTime = i815[6]
  request.r(i815[7], i815[8], 0, i814, 'highlightor')
  var i819 = i815[9]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 1, i818, '')
  }
  i814.playBalls = i818
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i825 = data
  i824.pivot = new pc.Vec2( i825[0], i825[1] )
  i824.anchorMin = new pc.Vec2( i825[2], i825[3] )
  i824.anchorMax = new pc.Vec2( i825[4], i825[5] )
  i824.sizeDelta = new pc.Vec2( i825[6], i825[7] )
  i824.anchoredPosition3D = new pc.Vec3( i825[8], i825[9], i825[10] )
  i824.rotation = new pc.Quat(i825[11], i825[12], i825[13], i825[14])
  i824.scale = new pc.Vec3( i825[15], i825[16], i825[17] )
  return i824
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.TextMeshPro' )
  var i827 = data
  i826._SortingLayer = i827[0]
  i826._SortingLayerID = i827[1]
  i826._SortingOrder = i827[2]
  i826.m_hasFontAssetChanged = !!i827[3]
  request.r(i827[4], i827[5], 0, i826, 'm_renderer')
  i826.m_maskType = i827[6]
  i826.m_text = i827[7]
  i826.m_isRightToLeft = !!i827[8]
  request.r(i827[9], i827[10], 0, i826, 'm_fontAsset')
  request.r(i827[11], i827[12], 0, i826, 'm_sharedMaterial')
  var i829 = i827[13]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.m_fontSharedMaterials = i828
  request.r(i827[14], i827[15], 0, i826, 'm_fontMaterial')
  var i831 = i827[16]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i826.m_fontMaterials = i830
  i826.m_fontColor32 = UnityEngine.Color32.ConstructColor(i827[17], i827[18], i827[19], i827[20])
  i826.m_fontColor = new pc.Color(i827[21], i827[22], i827[23], i827[24])
  i826.m_enableVertexGradient = !!i827[25]
  i826.m_colorMode = i827[26]
  i826.m_fontColorGradient = request.d('TMPro.VertexGradient', i827[27], i826.m_fontColorGradient)
  request.r(i827[28], i827[29], 0, i826, 'm_fontColorGradientPreset')
  request.r(i827[30], i827[31], 0, i826, 'm_spriteAsset')
  i826.m_tintAllSprites = !!i827[32]
  request.r(i827[33], i827[34], 0, i826, 'm_StyleSheet')
  i826.m_TextStyleHashCode = i827[35]
  i826.m_overrideHtmlColors = !!i827[36]
  i826.m_faceColor = UnityEngine.Color32.ConstructColor(i827[37], i827[38], i827[39], i827[40])
  i826.m_fontSize = i827[41]
  i826.m_fontSizeBase = i827[42]
  i826.m_fontWeight = i827[43]
  i826.m_enableAutoSizing = !!i827[44]
  i826.m_fontSizeMin = i827[45]
  i826.m_fontSizeMax = i827[46]
  i826.m_fontStyle = i827[47]
  i826.m_HorizontalAlignment = i827[48]
  i826.m_VerticalAlignment = i827[49]
  i826.m_textAlignment = i827[50]
  i826.m_characterSpacing = i827[51]
  i826.m_wordSpacing = i827[52]
  i826.m_lineSpacing = i827[53]
  i826.m_lineSpacingMax = i827[54]
  i826.m_paragraphSpacing = i827[55]
  i826.m_charWidthMaxAdj = i827[56]
  i826.m_enableWordWrapping = !!i827[57]
  i826.m_wordWrappingRatios = i827[58]
  i826.m_overflowMode = i827[59]
  request.r(i827[60], i827[61], 0, i826, 'm_linkedTextComponent')
  request.r(i827[62], i827[63], 0, i826, 'parentLinkedComponent')
  i826.m_enableKerning = !!i827[64]
  i826.m_enableExtraPadding = !!i827[65]
  i826.checkPaddingRequired = !!i827[66]
  i826.m_isRichText = !!i827[67]
  i826.m_parseCtrlCharacters = !!i827[68]
  i826.m_isOrthographic = !!i827[69]
  i826.m_isCullingEnabled = !!i827[70]
  i826.m_horizontalMapping = i827[71]
  i826.m_verticalMapping = i827[72]
  i826.m_uvLineOffset = i827[73]
  i826.m_geometrySortingOrder = i827[74]
  i826.m_IsTextObjectScaleStatic = !!i827[75]
  i826.m_VertexBufferAutoSizeReduction = !!i827[76]
  i826.m_useMaxVisibleDescender = !!i827[77]
  i826.m_pageToDisplay = i827[78]
  i826.m_margin = new pc.Vec4( i827[79], i827[80], i827[81], i827[82] )
  i826.m_isUsingLegacyAnimationComponent = !!i827[83]
  i826.m_isVolumetricText = !!i827[84]
  request.r(i827[85], i827[86], 0, i826, 'm_Material')
  i826.m_Maskable = !!i827[87]
  i826.m_Color = new pc.Color(i827[88], i827[89], i827[90], i827[91])
  i826.m_RaycastTarget = !!i827[92]
  i826.m_RaycastPadding = new pc.Vec4( i827[93], i827[94], i827[95], i827[96] )
  return i826
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.VertexGradient' )
  var i833 = data
  i832.topLeft = new pc.Color(i833[0], i833[1], i833[2], i833[3])
  i832.topRight = new pc.Color(i833[4], i833[5], i833[6], i833[7])
  i832.bottomLeft = new pc.Color(i833[8], i833[9], i833[10], i833[11])
  i832.bottomRight = new pc.Color(i833[12], i833[13], i833[14], i833[15])
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i835 = data
  i834.enabled = !!i835[0]
  i834.planeDistance = i835[1]
  i834.referencePixelsPerUnit = i835[2]
  i834.isFallbackOverlay = !!i835[3]
  i834.renderMode = i835[4]
  i834.renderOrder = i835[5]
  i834.sortingLayerName = i835[6]
  i834.sortingOrder = i835[7]
  i834.scaleFactor = i835[8]
  request.r(i835[9], i835[10], 0, i834, 'worldCamera')
  i834.overrideSorting = !!i835[11]
  i834.pixelPerfect = !!i835[12]
  i834.targetDisplay = i835[13]
  i834.overridePixelPerfect = !!i835[14]
  return i834
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i837 = data
  i836.m_UiScaleMode = i837[0]
  i836.m_ReferencePixelsPerUnit = i837[1]
  i836.m_ScaleFactor = i837[2]
  i836.m_ReferenceResolution = new pc.Vec2( i837[3], i837[4] )
  i836.m_ScreenMatchMode = i837[5]
  i836.m_MatchWidthOrHeight = i837[6]
  i836.m_PhysicalUnit = i837[7]
  i836.m_FallbackScreenDPI = i837[8]
  i836.m_DefaultSpriteDPI = i837[9]
  i836.m_DynamicPixelsPerUnit = i837[10]
  i836.m_PresetInfoIsWorld = !!i837[11]
  return i836
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i839 = data
  i838.m_IgnoreReversedGraphics = !!i839[0]
  i838.m_BlockingObjects = i839[1]
  i838.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i839[2] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i841 = data
  i840.cullTransparentMesh = !!i841[0]
  return i840
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.Image' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_Sprite')
  i842.m_Type = i843[2]
  i842.m_PreserveAspect = !!i843[3]
  i842.m_FillCenter = !!i843[4]
  i842.m_FillMethod = i843[5]
  i842.m_FillAmount = i843[6]
  i842.m_FillClockwise = !!i843[7]
  i842.m_FillOrigin = i843[8]
  i842.m_UseSpriteMesh = !!i843[9]
  i842.m_PixelsPerUnitMultiplier = i843[10]
  request.r(i843[11], i843[12], 0, i842, 'm_Material')
  i842.m_Maskable = !!i843[13]
  i842.m_Color = new pc.Color(i843[14], i843[15], i843[16], i843[17])
  i842.m_RaycastTarget = !!i843[18]
  i842.m_RaycastPadding = new pc.Vec4( i843[19], i843[20], i843[21], i843[22] )
  return i842
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.Button' )
  var i845 = data
  i844.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i845[0], i844.m_OnClick)
  i844.m_Navigation = request.d('UnityEngine.UI.Navigation', i845[1], i844.m_Navigation)
  i844.m_Transition = i845[2]
  i844.m_Colors = request.d('UnityEngine.UI.ColorBlock', i845[3], i844.m_Colors)
  i844.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i845[4], i844.m_SpriteState)
  i844.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i845[5], i844.m_AnimationTriggers)
  i844.m_Interactable = !!i845[6]
  request.r(i845[7], i845[8], 0, i844, 'm_TargetGraphic')
  return i844
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i847 = data
  i846.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i847[0], i846.m_PersistentCalls)
  return i846
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i849 = data
  var i851 = i849[0]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('UnityEngine.Events.PersistentCall', i851[i + 0]));
  }
  i848.m_Calls = i850
  return i848
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_Target')
  i854.m_TargetAssemblyTypeName = i855[2]
  i854.m_MethodName = i855[3]
  i854.m_Mode = i855[4]
  i854.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i855[5], i854.m_Arguments)
  i854.m_CallState = i855[6]
  return i854
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'm_ObjectArgument')
  i856.m_ObjectArgumentAssemblyTypeName = i857[2]
  i856.m_IntArgument = i857[3]
  i856.m_FloatArgument = i857[4]
  i856.m_StringArgument = i857[5]
  i856.m_BoolArgument = !!i857[6]
  return i856
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i859 = data
  i858.m_Mode = i859[0]
  i858.m_WrapAround = !!i859[1]
  request.r(i859[2], i859[3], 0, i858, 'm_SelectOnUp')
  request.r(i859[4], i859[5], 0, i858, 'm_SelectOnDown')
  request.r(i859[6], i859[7], 0, i858, 'm_SelectOnLeft')
  request.r(i859[8], i859[9], 0, i858, 'm_SelectOnRight')
  return i858
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i861 = data
  i860.m_NormalColor = new pc.Color(i861[0], i861[1], i861[2], i861[3])
  i860.m_HighlightedColor = new pc.Color(i861[4], i861[5], i861[6], i861[7])
  i860.m_PressedColor = new pc.Color(i861[8], i861[9], i861[10], i861[11])
  i860.m_SelectedColor = new pc.Color(i861[12], i861[13], i861[14], i861[15])
  i860.m_DisabledColor = new pc.Color(i861[16], i861[17], i861[18], i861[19])
  i860.m_ColorMultiplier = i861[20]
  i860.m_FadeDuration = i861[21]
  return i860
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_HighlightedSprite')
  request.r(i863[2], i863[3], 0, i862, 'm_PressedSprite')
  request.r(i863[4], i863[5], 0, i862, 'm_SelectedSprite')
  request.r(i863[6], i863[7], 0, i862, 'm_DisabledSprite')
  return i862
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i865 = data
  i864.m_NormalTrigger = i865[0]
  i864.m_HighlightedTrigger = i865[1]
  i864.m_PressedTrigger = i865[2]
  i864.m_SelectedTrigger = i865[3]
  i864.m_DisabledTrigger = i865[4]
  return i864
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i867 = data
  i866.m_hasFontAssetChanged = !!i867[0]
  request.r(i867[1], i867[2], 0, i866, 'm_baseMaterial')
  i866.m_maskOffset = new pc.Vec4( i867[3], i867[4], i867[5], i867[6] )
  i866.m_text = i867[7]
  i866.m_isRightToLeft = !!i867[8]
  request.r(i867[9], i867[10], 0, i866, 'm_fontAsset')
  request.r(i867[11], i867[12], 0, i866, 'm_sharedMaterial')
  var i869 = i867[13]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.m_fontSharedMaterials = i868
  request.r(i867[14], i867[15], 0, i866, 'm_fontMaterial')
  var i871 = i867[16]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i866.m_fontMaterials = i870
  i866.m_fontColor32 = UnityEngine.Color32.ConstructColor(i867[17], i867[18], i867[19], i867[20])
  i866.m_fontColor = new pc.Color(i867[21], i867[22], i867[23], i867[24])
  i866.m_enableVertexGradient = !!i867[25]
  i866.m_colorMode = i867[26]
  i866.m_fontColorGradient = request.d('TMPro.VertexGradient', i867[27], i866.m_fontColorGradient)
  request.r(i867[28], i867[29], 0, i866, 'm_fontColorGradientPreset')
  request.r(i867[30], i867[31], 0, i866, 'm_spriteAsset')
  i866.m_tintAllSprites = !!i867[32]
  request.r(i867[33], i867[34], 0, i866, 'm_StyleSheet')
  i866.m_TextStyleHashCode = i867[35]
  i866.m_overrideHtmlColors = !!i867[36]
  i866.m_faceColor = UnityEngine.Color32.ConstructColor(i867[37], i867[38], i867[39], i867[40])
  i866.m_fontSize = i867[41]
  i866.m_fontSizeBase = i867[42]
  i866.m_fontWeight = i867[43]
  i866.m_enableAutoSizing = !!i867[44]
  i866.m_fontSizeMin = i867[45]
  i866.m_fontSizeMax = i867[46]
  i866.m_fontStyle = i867[47]
  i866.m_HorizontalAlignment = i867[48]
  i866.m_VerticalAlignment = i867[49]
  i866.m_textAlignment = i867[50]
  i866.m_characterSpacing = i867[51]
  i866.m_wordSpacing = i867[52]
  i866.m_lineSpacing = i867[53]
  i866.m_lineSpacingMax = i867[54]
  i866.m_paragraphSpacing = i867[55]
  i866.m_charWidthMaxAdj = i867[56]
  i866.m_enableWordWrapping = !!i867[57]
  i866.m_wordWrappingRatios = i867[58]
  i866.m_overflowMode = i867[59]
  request.r(i867[60], i867[61], 0, i866, 'm_linkedTextComponent')
  request.r(i867[62], i867[63], 0, i866, 'parentLinkedComponent')
  i866.m_enableKerning = !!i867[64]
  i866.m_enableExtraPadding = !!i867[65]
  i866.checkPaddingRequired = !!i867[66]
  i866.m_isRichText = !!i867[67]
  i866.m_parseCtrlCharacters = !!i867[68]
  i866.m_isOrthographic = !!i867[69]
  i866.m_isCullingEnabled = !!i867[70]
  i866.m_horizontalMapping = i867[71]
  i866.m_verticalMapping = i867[72]
  i866.m_uvLineOffset = i867[73]
  i866.m_geometrySortingOrder = i867[74]
  i866.m_IsTextObjectScaleStatic = !!i867[75]
  i866.m_VertexBufferAutoSizeReduction = !!i867[76]
  i866.m_useMaxVisibleDescender = !!i867[77]
  i866.m_pageToDisplay = i867[78]
  i866.m_margin = new pc.Vec4( i867[79], i867[80], i867[81], i867[82] )
  i866.m_isUsingLegacyAnimationComponent = !!i867[83]
  i866.m_isVolumetricText = !!i867[84]
  request.r(i867[85], i867[86], 0, i866, 'm_Material')
  i866.m_Maskable = !!i867[87]
  i866.m_Color = new pc.Color(i867[88], i867[89], i867[90], i867[91])
  i866.m_RaycastTarget = !!i867[92]
  i866.m_RaycastPadding = new pc.Vec4( i867[93], i867[94], i867[95], i867[96] )
  return i866
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'm_Texture')
  i872.m_UVRect = UnityEngine.Rect.MinMaxRect(i873[2], i873[3], i873[4], i873[5])
  request.r(i873[6], i873[7], 0, i872, 'm_Material')
  i872.m_Maskable = !!i873[8]
  i872.m_Color = new pc.Color(i873[9], i873[10], i873[11], i873[12])
  i872.m_RaycastTarget = !!i873[13]
  i872.m_RaycastPadding = new pc.Vec4( i873[14], i873[15], i873[16], i873[17] )
  return i872
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'm_FirstSelected')
  i874.m_sendNavigationEvents = !!i875[2]
  i874.m_DragThreshold = i875[3]
  return i874
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i877 = data
  i876.m_HorizontalAxis = i877[0]
  i876.m_VerticalAxis = i877[1]
  i876.m_SubmitButton = i877[2]
  i876.m_CancelButton = i877[3]
  i876.m_InputActionsPerSecond = i877[4]
  i876.m_RepeatDelay = i877[5]
  i876.m_ForceModuleActive = !!i877[6]
  i876.m_SendPointerHoverToParent = !!i877[7]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i879 = data
  i878.ambientIntensity = i879[0]
  i878.reflectionIntensity = i879[1]
  i878.ambientMode = i879[2]
  i878.ambientLight = new pc.Color(i879[3], i879[4], i879[5], i879[6])
  i878.ambientSkyColor = new pc.Color(i879[7], i879[8], i879[9], i879[10])
  i878.ambientGroundColor = new pc.Color(i879[11], i879[12], i879[13], i879[14])
  i878.ambientEquatorColor = new pc.Color(i879[15], i879[16], i879[17], i879[18])
  i878.fogColor = new pc.Color(i879[19], i879[20], i879[21], i879[22])
  i878.fogEndDistance = i879[23]
  i878.fogStartDistance = i879[24]
  i878.fogDensity = i879[25]
  i878.fog = !!i879[26]
  request.r(i879[27], i879[28], 0, i878, 'skybox')
  i878.fogMode = i879[29]
  var i881 = i879[30]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i881[i + 0]) );
  }
  i878.lightmaps = i880
  i878.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i879[31], i878.lightProbes)
  i878.lightmapsMode = i879[32]
  i878.mixedBakeMode = i879[33]
  i878.environmentLightingMode = i879[34]
  i878.ambientProbe = new pc.SphericalHarmonicsL2(i879[35])
  i878.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i879[36])
  i878.useReferenceAmbientProbe = !!i879[37]
  request.r(i879[38], i879[39], 0, i878, 'customReflection')
  request.r(i879[40], i879[41], 0, i878, 'defaultReflection')
  i878.defaultReflectionMode = i879[42]
  i878.defaultReflectionResolution = i879[43]
  i878.sunLightObjectId = i879[44]
  i878.pixelLightCount = i879[45]
  i878.defaultReflectionHDR = !!i879[46]
  i878.hasLightDataAsset = !!i879[47]
  i878.hasManualGenerate = !!i879[48]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'lightmapColor')
  request.r(i885[2], i885[3], 0, i884, 'lightmapDirection')
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i886 = root || new UnityEngine.LightProbes()
  var i887 = data
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i893 = data
  i892.name = i893[0]
  i892.bounciness = i893[1]
  i892.dynamicFriction = i893[2]
  i892.staticFriction = i893[3]
  i892.frictionCombine = i893[4]
  i892.bounceCombine = i893[5]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i895 = data
  var i897 = i895[0]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i897[i + 0]));
  }
  i894.ShaderCompilationErrors = i896
  i894.name = i895[1]
  i894.guid = i895[2]
  var i899 = i895[3]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( i899[i + 0] );
  }
  i894.shaderDefinedKeywords = i898
  var i901 = i895[4]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i901[i + 0]) );
  }
  i894.passes = i900
  var i903 = i895[5]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i903[i + 0]) );
  }
  i894.usePasses = i902
  var i905 = i895[6]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i905[i + 0]) );
  }
  i894.defaultParameterValues = i904
  request.r(i895[7], i895[8], 0, i894, 'unityFallbackShader')
  i894.readDepth = !!i895[9]
  i894.isCreatedByShaderGraph = !!i895[10]
  i894.compiled = !!i895[11]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i909 = data
  i908.shaderName = i909[0]
  i908.errorMessage = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i914 = root || new pc.UnityShaderPass()
  var i915 = data
  i914.id = i915[0]
  i914.subShaderIndex = i915[1]
  i914.name = i915[2]
  i914.passType = i915[3]
  i914.grabPassTextureName = i915[4]
  i914.usePass = !!i915[5]
  i914.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[6], i914.zTest)
  i914.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[7], i914.zWrite)
  i914.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[8], i914.culling)
  i914.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i915[9], i914.blending)
  i914.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i915[10], i914.alphaBlending)
  i914.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[11], i914.colorWriteMask)
  i914.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[12], i914.offsetUnits)
  i914.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[13], i914.offsetFactor)
  i914.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[14], i914.stencilRef)
  i914.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[15], i914.stencilReadMask)
  i914.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i915[16], i914.stencilWriteMask)
  i914.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i915[17], i914.stencilOp)
  i914.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i915[18], i914.stencilOpFront)
  i914.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i915[19], i914.stencilOpBack)
  var i917 = i915[20]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i917[i + 0]) );
  }
  i914.tags = i916
  var i919 = i915[21]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( i919[i + 0] );
  }
  i914.passDefinedKeywords = i918
  var i921 = i915[22]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i921[i + 0]) );
  }
  i914.passDefinedKeywordGroups = i920
  var i923 = i915[23]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i923[i + 0]) );
  }
  i914.variants = i922
  var i925 = i915[24]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i925[i + 0]) );
  }
  i914.excludedVariants = i924
  i914.hasDepthReader = !!i915[25]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i927 = data
  i926.val = i927[0]
  i926.name = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i929 = data
  i928.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[0], i928.src)
  i928.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[1], i928.dst)
  i928.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[2], i928.op)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i931 = data
  i930.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i931[0], i930.pass)
  i930.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i931[1], i930.fail)
  i930.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i931[2], i930.zFail)
  i930.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i931[3], i930.comp)
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i935 = data
  i934.name = i935[0]
  i934.value = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i939 = data
  var i941 = i939[0]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i938.keywords = i940
  i938.hasDiscard = !!i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i945 = data
  i944.passId = i945[0]
  i944.subShaderIndex = i945[1]
  var i947 = i945[2]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( i947[i + 0] );
  }
  i944.keywords = i946
  i944.vertexProgram = i945[3]
  i944.fragmentProgram = i945[4]
  i944.exportedForWebGl2 = !!i945[5]
  i944.readDepth = !!i945[6]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'shader')
  i950.pass = i951[2]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i955 = data
  i954.name = i955[0]
  i954.type = i955[1]
  i954.value = new pc.Vec4( i955[2], i955[3], i955[4], i955[5] )
  i954.textureValue = i955[6]
  i954.shaderPropertyFlag = i955[7]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i957 = data
  i956.name = i957[0]
  request.r(i957[1], i957[2], 0, i956, 'texture')
  i956.aabb = i957[3]
  i956.vertices = i957[4]
  i956.triangles = i957[5]
  i956.textureRect = UnityEngine.Rect.MinMaxRect(i957[6], i957[7], i957[8], i957[9])
  i956.packedRect = UnityEngine.Rect.MinMaxRect(i957[10], i957[11], i957[12], i957[13])
  i956.border = new pc.Vec4( i957[14], i957[15], i957[16], i957[17] )
  i956.transparency = i957[18]
  i956.bounds = i957[19]
  i956.pixelsPerUnit = i957[20]
  i956.textureWidth = i957[21]
  i956.textureHeight = i957[22]
  i956.nativeSize = new pc.Vec2( i957[23], i957[24] )
  i956.pivot = new pc.Vec2( i957[25], i957[26] )
  i956.textureRectOffset = new pc.Vec2( i957[27], i957[28] )
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i959 = data
  i958.name = i959[0]
  i958.wrapMode = i959[1]
  i958.isLooping = !!i959[2]
  i958.length = i959[3]
  var i961 = i959[4]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i961[i + 0]) );
  }
  i958.curves = i960
  var i963 = i959[5]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i963[i + 0]) );
  }
  i958.events = i962
  i958.halfPrecision = !!i959[6]
  i958._frameRate = i959[7]
  i958.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i959[8], i958.localBounds)
  i958.hasMuscleCurves = !!i959[9]
  var i965 = i959[10]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i958.clipMuscleConstant = i964
  i958.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i959[11], i958.clipBindingConstant)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i969 = data
  i968.path = i969[0]
  i968.hash = i969[1]
  i968.componentType = i969[2]
  i968.property = i969[3]
  i968.keys = i969[4]
  var i971 = i969[5]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i971[i + 0]) );
  }
  i968.objectReferenceKeys = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i975 = data
  i974.time = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'value')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i979 = data
  i978.functionName = i979[0]
  i978.floatParameter = i979[1]
  i978.intParameter = i979[2]
  i978.stringParameter = i979[3]
  request.r(i979[4], i979[5], 0, i978, 'objectReferenceParameter')
  i978.time = i979[6]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i981 = data
  i980.center = new pc.Vec3( i981[0], i981[1], i981[2] )
  i980.extends = new pc.Vec3( i981[3], i981[4], i981[5] )
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i984.genericBindings = i986
  var i989 = i985[1]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.pptrCurveMapping = i988
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i991 = data
  i990.name = i991[0]
  i990.ascent = i991[1]
  i990.originalLineHeight = i991[2]
  i990.fontSize = i991[3]
  var i993 = i991[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i993[i + 0]) );
  }
  i990.characterInfo = i992
  request.r(i991[5], i991[6], 0, i990, 'texture')
  i990.originalFontSize = i991[7]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i997 = data
  i996.index = i997[0]
  i996.advance = i997[1]
  i996.bearing = i997[2]
  i996.glyphWidth = i997[3]
  i996.glyphHeight = i997[4]
  i996.minX = i997[5]
  i996.maxX = i997[6]
  i996.minY = i997[7]
  i996.maxY = i997[8]
  i996.uvBottomLeftX = i997[9]
  i996.uvBottomLeftY = i997[10]
  i996.uvBottomRightX = i997[11]
  i996.uvBottomRightY = i997[12]
  i996.uvTopLeftX = i997[13]
  i996.uvTopLeftY = i997[14]
  i996.uvTopRightX = i997[15]
  i996.uvTopRightY = i997[16]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i999 = data
  i998.name = i999[0]
  i998.bytes64 = i999[1]
  i998.data = i999[2]
  return i998
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1001 = data
  i1000.hashCode = i1001[0]
  request.r(i1001[1], i1001[2], 0, i1000, 'material')
  i1000.materialHashCode = i1001[3]
  request.r(i1001[4], i1001[5], 0, i1000, 'atlas')
  i1000.normalStyle = i1001[6]
  i1000.normalSpacingOffset = i1001[7]
  i1000.boldStyle = i1001[8]
  i1000.boldSpacing = i1001[9]
  i1000.italicStyle = i1001[10]
  i1000.tabSize = i1001[11]
  i1000.m_Version = i1001[12]
  i1000.m_SourceFontFileGUID = i1001[13]
  request.r(i1001[14], i1001[15], 0, i1000, 'm_SourceFontFile_EditorRef')
  request.r(i1001[16], i1001[17], 0, i1000, 'm_SourceFontFile')
  i1000.m_AtlasPopulationMode = i1001[18]
  i1000.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1001[19], i1000.m_FaceInfo)
  var i1003 = i1001[20]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.add(request.d('UnityEngine.TextCore.Glyph', i1003[i + 0]));
  }
  i1000.m_GlyphTable = i1002
  var i1005 = i1001[21]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_Character', i1005[i + 0]));
  }
  i1000.m_CharacterTable = i1004
  var i1007 = i1001[22]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i1000.m_AtlasTextures = i1006
  i1000.m_AtlasTextureIndex = i1001[23]
  i1000.m_IsMultiAtlasTexturesEnabled = !!i1001[24]
  i1000.m_ClearDynamicDataOnBuild = !!i1001[25]
  var i1009 = i1001[26]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('UnityEngine.TextCore.GlyphRect', i1009[i + 0]));
  }
  i1000.m_UsedGlyphRects = i1008
  var i1011 = i1001[27]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('UnityEngine.TextCore.GlyphRect', i1011[i + 0]));
  }
  i1000.m_FreeGlyphRects = i1010
  i1000.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1001[28], i1000.m_fontInfo)
  i1000.m_AtlasWidth = i1001[29]
  i1000.m_AtlasHeight = i1001[30]
  i1000.m_AtlasPadding = i1001[31]
  i1000.m_AtlasRenderMode = i1001[32]
  var i1013 = i1001[33]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('TMPro.TMP_Glyph', i1013[i + 0]));
  }
  i1000.m_glyphInfoList = i1012
  i1000.m_KerningTable = request.d('TMPro.KerningTable', i1001[34], i1000.m_KerningTable)
  i1000.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1001[35], i1000.m_FontFeatureTable)
  var i1015 = i1001[36]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 1, i1014, '')
  }
  i1000.fallbackFontAssets = i1014
  var i1017 = i1001[37]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i1000.m_FallbackFontAssetTable = i1016
  i1000.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1001[38], i1000.m_CreationSettings)
  var i1019 = i1001[39]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('TMPro.TMP_FontWeightPair', i1019[i + 0]) );
  }
  i1000.m_FontWeightTable = i1018
  var i1021 = i1001[40]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('TMPro.TMP_FontWeightPair', i1021[i + 0]) );
  }
  i1000.fontWeights = i1020
  return i1000
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1023 = data
  i1022.m_FaceIndex = i1023[0]
  i1022.m_FamilyName = i1023[1]
  i1022.m_StyleName = i1023[2]
  i1022.m_PointSize = i1023[3]
  i1022.m_Scale = i1023[4]
  i1022.m_UnitsPerEM = i1023[5]
  i1022.m_LineHeight = i1023[6]
  i1022.m_AscentLine = i1023[7]
  i1022.m_CapLine = i1023[8]
  i1022.m_MeanLine = i1023[9]
  i1022.m_Baseline = i1023[10]
  i1022.m_DescentLine = i1023[11]
  i1022.m_SuperscriptOffset = i1023[12]
  i1022.m_SuperscriptSize = i1023[13]
  i1022.m_SubscriptOffset = i1023[14]
  i1022.m_SubscriptSize = i1023[15]
  i1022.m_UnderlineOffset = i1023[16]
  i1022.m_UnderlineThickness = i1023[17]
  i1022.m_StrikethroughOffset = i1023[18]
  i1022.m_StrikethroughThickness = i1023[19]
  i1022.m_TabWidth = i1023[20]
  return i1022
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1027 = data
  i1026.m_Index = i1027[0]
  i1026.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1027[1], i1026.m_Metrics)
  i1026.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1027[2], i1026.m_GlyphRect)
  i1026.m_Scale = i1027[3]
  i1026.m_AtlasIndex = i1027[4]
  i1026.m_ClassDefinitionType = i1027[5]
  return i1026
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1029 = data
  i1028.m_Width = i1029[0]
  i1028.m_Height = i1029[1]
  i1028.m_HorizontalBearingX = i1029[2]
  i1028.m_HorizontalBearingY = i1029[3]
  i1028.m_HorizontalAdvance = i1029[4]
  return i1028
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1031 = data
  i1030.m_X = i1031[0]
  i1030.m_Y = i1031[1]
  i1030.m_Width = i1031[2]
  i1030.m_Height = i1031[3]
  return i1030
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.TMP_Character' )
  var i1035 = data
  i1034.m_ElementType = i1035[0]
  i1034.m_Unicode = i1035[1]
  i1034.m_GlyphIndex = i1035[2]
  i1034.m_Scale = i1035[3]
  return i1034
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1041 = data
  i1040.Name = i1041[0]
  i1040.PointSize = i1041[1]
  i1040.Scale = i1041[2]
  i1040.CharacterCount = i1041[3]
  i1040.LineHeight = i1041[4]
  i1040.Baseline = i1041[5]
  i1040.Ascender = i1041[6]
  i1040.CapHeight = i1041[7]
  i1040.Descender = i1041[8]
  i1040.CenterLine = i1041[9]
  i1040.SuperscriptOffset = i1041[10]
  i1040.SubscriptOffset = i1041[11]
  i1040.SubSize = i1041[12]
  i1040.Underline = i1041[13]
  i1040.UnderlineThickness = i1041[14]
  i1040.strikethrough = i1041[15]
  i1040.strikethroughThickness = i1041[16]
  i1040.TabWidth = i1041[17]
  i1040.Padding = i1041[18]
  i1040.AtlasWidth = i1041[19]
  i1040.AtlasHeight = i1041[20]
  return i1040
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1045 = data
  i1044.id = i1045[0]
  i1044.x = i1045[1]
  i1044.y = i1045[2]
  i1044.width = i1045[3]
  i1044.height = i1045[4]
  i1044.xOffset = i1045[5]
  i1044.yOffset = i1045[6]
  i1044.xAdvance = i1045[7]
  i1044.scale = i1045[8]
  return i1044
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.KerningTable' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('TMPro.KerningPair', i1049[i + 0]));
  }
  i1046.kerningPairs = i1048
  return i1046
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.KerningPair' )
  var i1053 = data
  i1052.xOffset = i1053[0]
  i1052.m_FirstGlyph = i1053[1]
  i1052.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1053[2], i1052.m_FirstGlyphAdjustments)
  i1052.m_SecondGlyph = i1053[3]
  i1052.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1053[4], i1052.m_SecondGlyphAdjustments)
  i1052.m_IgnoreSpacingAdjustments = !!i1053[5]
  return i1052
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1057[i + 0]));
  }
  i1054.m_GlyphPairAdjustmentRecords = i1056
  return i1054
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1060 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1061 = data
  i1060.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1061[0], i1060.m_FirstAdjustmentRecord)
  i1060.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1061[1], i1060.m_SecondAdjustmentRecord)
  i1060.m_FeatureLookupFlags = i1061[2]
  return i1060
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1063 = data
  i1062.m_GlyphIndex = i1063[0]
  i1062.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1063[1], i1062.m_GlyphValueRecord)
  return i1062
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1065 = data
  i1064.m_XPlacement = i1065[0]
  i1064.m_YPlacement = i1065[1]
  i1064.m_XAdvance = i1065[2]
  i1064.m_YAdvance = i1065[3]
  return i1064
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1069 = data
  i1068.sourceFontFileName = i1069[0]
  i1068.sourceFontFileGUID = i1069[1]
  i1068.pointSizeSamplingMode = i1069[2]
  i1068.pointSize = i1069[3]
  i1068.padding = i1069[4]
  i1068.packingMode = i1069[5]
  i1068.atlasWidth = i1069[6]
  i1068.atlasHeight = i1069[7]
  i1068.characterSetSelectionMode = i1069[8]
  i1068.characterSequence = i1069[9]
  i1068.referencedFontAssetGUID = i1069[10]
  i1068.referencedTextAssetGUID = i1069[11]
  i1068.fontStyle = i1069[12]
  i1068.fontStyleModifier = i1069[13]
  i1068.renderMode = i1069[14]
  i1068.includeFontFeatures = !!i1069[15]
  return i1068
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1072 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'regularTypeface')
  request.r(i1073[2], i1073[3], 0, i1072, 'italicTypeface')
  return i1072
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.TMP_Settings' )
  var i1075 = data
  i1074.m_enableWordWrapping = !!i1075[0]
  i1074.m_enableKerning = !!i1075[1]
  i1074.m_enableExtraPadding = !!i1075[2]
  i1074.m_enableTintAllSprites = !!i1075[3]
  i1074.m_enableParseEscapeCharacters = !!i1075[4]
  i1074.m_EnableRaycastTarget = !!i1075[5]
  i1074.m_GetFontFeaturesAtRuntime = !!i1075[6]
  i1074.m_missingGlyphCharacter = i1075[7]
  i1074.m_warningsDisabled = !!i1075[8]
  request.r(i1075[9], i1075[10], 0, i1074, 'm_defaultFontAsset')
  i1074.m_defaultFontAssetPath = i1075[11]
  i1074.m_defaultFontSize = i1075[12]
  i1074.m_defaultAutoSizeMinRatio = i1075[13]
  i1074.m_defaultAutoSizeMaxRatio = i1075[14]
  i1074.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1075[15], i1075[16] )
  i1074.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1075[17], i1075[18] )
  i1074.m_autoSizeTextContainer = !!i1075[19]
  i1074.m_IsTextObjectScaleStatic = !!i1075[20]
  var i1077 = i1075[21]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1077.length; i += 2) {
  request.r(i1077[i + 0], i1077[i + 1], 1, i1076, '')
  }
  i1074.m_fallbackFontAssets = i1076
  i1074.m_matchMaterialPreset = !!i1075[22]
  request.r(i1075[23], i1075[24], 0, i1074, 'm_defaultSpriteAsset')
  i1074.m_defaultSpriteAssetPath = i1075[25]
  i1074.m_enableEmojiSupport = !!i1075[26]
  i1074.m_MissingCharacterSpriteUnicode = i1075[27]
  i1074.m_defaultColorGradientPresetsPath = i1075[28]
  request.r(i1075[29], i1075[30], 0, i1074, 'm_defaultStyleSheet')
  i1074.m_StyleSheetsResourcePath = i1075[31]
  request.r(i1075[32], i1075[33], 0, i1074, 'm_leadingCharacters')
  request.r(i1075[34], i1075[35], 0, i1074, 'm_followingCharacters')
  i1074.m_UseModernHangulLineBreakingRules = !!i1075[36]
  return i1074
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1079 = data
  i1078.hashCode = i1079[0]
  request.r(i1079[1], i1079[2], 0, i1078, 'material')
  i1078.materialHashCode = i1079[3]
  request.r(i1079[4], i1079[5], 0, i1078, 'spriteSheet')
  var i1081 = i1079[6]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('TMPro.TMP_Sprite', i1081[i + 0]));
  }
  i1078.spriteInfoList = i1080
  var i1083 = i1079[7]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 1, i1082, '')
  }
  i1078.fallbackSpriteAssets = i1082
  i1078.m_Version = i1079[8]
  i1078.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1079[9], i1078.m_FaceInfo)
  var i1085 = i1079[10]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('TMPro.TMP_SpriteCharacter', i1085[i + 0]));
  }
  i1078.m_SpriteCharacterTable = i1084
  var i1087 = i1079[11]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.add(request.d('TMPro.TMP_SpriteGlyph', i1087[i + 0]));
  }
  i1078.m_SpriteGlyphTable = i1086
  return i1078
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1091 = data
  i1090.name = i1091[0]
  i1090.hashCode = i1091[1]
  i1090.unicode = i1091[2]
  i1090.pivot = new pc.Vec2( i1091[3], i1091[4] )
  request.r(i1091[5], i1091[6], 0, i1090, 'sprite')
  i1090.id = i1091[7]
  i1090.x = i1091[8]
  i1090.y = i1091[9]
  i1090.width = i1091[10]
  i1090.height = i1091[11]
  i1090.xOffset = i1091[12]
  i1090.yOffset = i1091[13]
  i1090.xAdvance = i1091[14]
  i1090.scale = i1091[15]
  return i1090
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1096 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1097 = data
  i1096.m_Name = i1097[0]
  i1096.m_HashCode = i1097[1]
  i1096.m_ElementType = i1097[2]
  i1096.m_Unicode = i1097[3]
  i1096.m_GlyphIndex = i1097[4]
  i1096.m_Scale = i1097[5]
  return i1096
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'sprite')
  i1100.m_Index = i1101[2]
  i1100.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1101[3], i1100.m_Metrics)
  i1100.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1101[4], i1100.m_GlyphRect)
  i1100.m_Scale = i1101[5]
  i1100.m_AtlasIndex = i1101[6]
  i1100.m_ClassDefinitionType = i1101[7]
  return i1100
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.add(request.d('TMPro.TMP_Style', i1105[i + 0]));
  }
  i1102.m_StyleList = i1104
  return i1102
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_Style' )
  var i1109 = data
  i1108.m_Name = i1109[0]
  i1108.m_HashCode = i1109[1]
  i1108.m_OpeningDefinition = i1109[2]
  i1108.m_ClosingDefinition = i1109[3]
  i1108.m_OpeningTagArray = i1109[4]
  i1108.m_ClosingTagArray = i1109[5]
  i1108.m_OpeningTagUnicodeArray = i1109[6]
  i1108.m_ClosingTagUnicodeArray = i1109[7]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1113[i + 0]) );
  }
  i1110.files = i1112
  i1110.componentToPrefabIds = i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1117 = data
  i1116.path = i1117[0]
  request.r(i1117[1], i1117[2], 0, i1116, 'unityObject')
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1121[i + 0]) );
  }
  i1118.scriptsExecutionOrder = i1120
  var i1123 = i1119[1]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1123[i + 0]) );
  }
  i1118.sortingLayers = i1122
  var i1125 = i1119[2]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1125[i + 0]) );
  }
  i1118.cullingLayers = i1124
  i1118.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1119[3], i1118.timeSettings)
  i1118.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1119[4], i1118.physicsSettings)
  i1118.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1119[5], i1118.physics2DSettings)
  i1118.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1119[6], i1118.qualitySettings)
  i1118.enableRealtimeShadows = !!i1119[7]
  i1118.enableAutoInstancing = !!i1119[8]
  i1118.enableDynamicBatching = !!i1119[9]
  i1118.lightmapEncodingQuality = i1119[10]
  i1118.desiredColorSpace = i1119[11]
  var i1127 = i1119[12]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1118.allTags = i1126
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.value = i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1135 = data
  i1134.id = i1135[0]
  i1134.name = i1135[1]
  i1134.value = i1135[2]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1139 = data
  i1138.id = i1139[0]
  i1138.name = i1139[1]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1141 = data
  i1140.fixedDeltaTime = i1141[0]
  i1140.maximumDeltaTime = i1141[1]
  i1140.timeScale = i1141[2]
  i1140.maximumParticleTimestep = i1141[3]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1143 = data
  i1142.gravity = new pc.Vec3( i1143[0], i1143[1], i1143[2] )
  i1142.defaultSolverIterations = i1143[3]
  i1142.bounceThreshold = i1143[4]
  i1142.autoSyncTransforms = !!i1143[5]
  i1142.autoSimulation = !!i1143[6]
  var i1145 = i1143[7]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1145[i + 0]) );
  }
  i1142.collisionMatrix = i1144
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1149 = data
  i1148.enabled = !!i1149[0]
  i1148.layerId = i1149[1]
  i1148.otherLayerId = i1149[2]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'material')
  i1150.gravity = new pc.Vec2( i1151[2], i1151[3] )
  i1150.positionIterations = i1151[4]
  i1150.velocityIterations = i1151[5]
  i1150.velocityThreshold = i1151[6]
  i1150.maxLinearCorrection = i1151[7]
  i1150.maxAngularCorrection = i1151[8]
  i1150.maxTranslationSpeed = i1151[9]
  i1150.maxRotationSpeed = i1151[10]
  i1150.baumgarteScale = i1151[11]
  i1150.baumgarteTOIScale = i1151[12]
  i1150.timeToSleep = i1151[13]
  i1150.linearSleepTolerance = i1151[14]
  i1150.angularSleepTolerance = i1151[15]
  i1150.defaultContactOffset = i1151[16]
  i1150.autoSimulation = !!i1151[17]
  i1150.queriesHitTriggers = !!i1151[18]
  i1150.queriesStartInColliders = !!i1151[19]
  i1150.callbacksOnDisable = !!i1151[20]
  i1150.reuseCollisionCallbacks = !!i1151[21]
  i1150.autoSyncTransforms = !!i1151[22]
  var i1153 = i1151[23]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1153[i + 0]) );
  }
  i1150.collisionMatrix = i1152
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1157 = data
  i1156.enabled = !!i1157[0]
  i1156.layerId = i1157[1]
  i1156.otherLayerId = i1157[2]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1161[i + 0]) );
  }
  i1158.qualityLevels = i1160
  var i1163 = i1159[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( i1163[i + 0] );
  }
  i1158.names = i1162
  i1158.shadows = i1159[2]
  i1158.anisotropicFiltering = i1159[3]
  i1158.antiAliasing = i1159[4]
  i1158.lodBias = i1159[5]
  i1158.shadowCascades = i1159[6]
  i1158.shadowDistance = i1159[7]
  i1158.shadowmaskMode = i1159[8]
  i1158.shadowProjection = i1159[9]
  i1158.shadowResolution = i1159[10]
  i1158.softParticles = !!i1159[11]
  i1158.softVegetation = !!i1159[12]
  i1158.activeColorSpace = i1159[13]
  i1158.desiredColorSpace = i1159[14]
  i1158.masterTextureLimit = i1159[15]
  i1158.maxQueuedFrames = i1159[16]
  i1158.particleRaycastBudget = i1159[17]
  i1158.pixelLightCount = i1159[18]
  i1158.realtimeReflectionProbes = !!i1159[19]
  i1158.shadowCascade2Split = i1159[20]
  i1158.shadowCascade4Split = new pc.Vec3( i1159[21], i1159[22], i1159[23] )
  i1158.streamingMipmapsActive = !!i1159[24]
  i1158.vSyncCount = i1159[25]
  i1158.asyncUploadBufferSize = i1159[26]
  i1158.asyncUploadTimeSlice = i1159[27]
  i1158.billboardsFaceCameraPosition = !!i1159[28]
  i1158.shadowNearPlaneOffset = i1159[29]
  i1158.streamingMipmapsMemoryBudget = i1159[30]
  i1158.maximumLODLevel = i1159[31]
  i1158.streamingMipmapsAddAllCameras = !!i1159[32]
  i1158.streamingMipmapsMaxLevelReduction = i1159[33]
  i1158.streamingMipmapsRenderersPerFrame = i1159[34]
  i1158.resolutionScalingFixedDPIFactor = i1159[35]
  i1158.streamingMipmapsMaxFileIORequests = i1159[36]
  i1158.currentQualityLevel = i1159[37]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1169 = data
  i1168.weight = i1169[0]
  i1168.vertices = i1169[1]
  i1168.normals = i1169[2]
  i1168.tangents = i1169[3]
  return i1168
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1171 = data
  i1170.xPlacement = i1171[0]
  i1170.yPlacement = i1171[1]
  i1170.xAdvance = i1171[2]
  i1170.yAdvance = i1171[3]
  return i1170
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"25":[26],"64":[13],"65":[16],"66":[16],"20":[16],"67":[16],"68":[16],"69":[16],"70":[16],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[72],"80":[72],"81":[72],"82":[72],"83":[72],"84":[72],"85":[13],"86":[5],"87":[88],"89":[88],"41":[38],"90":[38],"34":[5,38],"47":[38,44],"91":[38],"92":[44,38],"93":[5],"94":[44,38],"95":[38],"96":[38],"97":[38],"43":[41],"45":[44,38],"98":[38],"42":[41],"99":[38],"100":[38],"101":[38],"102":[38],"103":[38],"104":[38],"105":[38],"106":[38],"107":[38],"48":[44,38],"108":[38],"109":[38],"110":[38],"111":[38],"112":[44,38],"113":[38],"114":[49],"115":[49],"50":[49],"116":[49],"117":[13],"118":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.SphereCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.RenderTexture","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","UnityEngine.MonoBehaviour","Ball","UnityEngine.HingeJoint","UnityEngine.CapsuleCollider","Ring","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","DunkTrigger","UnityEngine.AudioListener","Floor","UnityEngine.Light","BasketballThrower","ScoreManager","TMPro.TextMeshPro","UIManager","UnityEngine.GameObject","BallManager","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","UnityEngine.UI.RawImage","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "Basketball 3";

Deserializers.lunaInitializationTime = "08/07/2025 11:36:26";

Deserializers.lunaDaysRunning = "0.4";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "32035";

Deserializers.projectId = "a2f9ded423cca9c4cb7b8871bbb451dc";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1633";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4098";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Basketball-3";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "0593f8de-9245-4719-b25c-1b0d3a6134f3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

