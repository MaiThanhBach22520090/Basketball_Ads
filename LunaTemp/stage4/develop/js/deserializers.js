var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointSpring' )
  var i529 = data
  i528.spring = i529[0]
  i528.damper = i529[1]
  i528.targetPosition = i529[2]
  return i528
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointMotor' )
  var i531 = data
  i530.m_TargetVelocity = i531[0]
  i530.m_Force = i531[1]
  i530.m_FreeSpin = i531[2]
  return i530
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointLimits' )
  var i533 = data
  i532.m_Min = i533[0]
  i532.m_Max = i533[1]
  i532.m_Bounciness = i533[2]
  i532.m_BounceMinVelocity = i533[3]
  i532.m_ContactDistance = i533[4]
  i532.minBounce = i533[5]
  i532.maxBounce = i533[6]
  return i532
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointDrive' )
  var i535 = data
  i534.m_PositionSpring = i535[0]
  i534.m_PositionDamper = i535[1]
  i534.m_MaximumForce = i535[2]
  return i534
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i537 = data
  i536.m_Spring = i537[0]
  i536.m_Damper = i537[1]
  return i536
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i539 = data
  i538.m_Limit = i539[0]
  i538.m_Bounciness = i539[1]
  i538.m_ContactDistance = i539[2]
  return i538
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i541 = data
  i540.m_ExtremumSlip = i541[0]
  i540.m_ExtremumValue = i541[1]
  i540.m_AsymptoteSlip = i541[2]
  i540.m_AsymptoteValue = i541[3]
  i540.m_Stiffness = i541[4]
  return i540
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i543 = data
  i542.m_LowerAngle = i543[0]
  i542.m_UpperAngle = i543[1]
  return i542
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i545 = data
  i544.m_MotorSpeed = i545[0]
  i544.m_MaximumMotorTorque = i545[1]
  return i544
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i547 = data
  i546.m_DampingRatio = i547[0]
  i546.m_Frequency = i547[1]
  i546.m_Angle = i547[2]
  return i546
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i549 = data
  i548.m_LowerTranslation = i549[0]
  i548.m_UpperTranslation = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i551 = data
  i550.name = i551[0]
  i550.halfPrecision = !!i551[1]
  i550.useUInt32IndexFormat = !!i551[2]
  i550.vertexCount = i551[3]
  i550.aabb = i551[4]
  var i553 = i551[5]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( !!i553[i + 0] );
  }
  i550.streams = i552
  i550.vertices = i551[6]
  var i555 = i551[7]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i555[i + 0]) );
  }
  i550.subMeshes = i554
  var i557 = i551[8]
  var i556 = []
  for(var i = 0; i < i557.length; i += 16) {
    i556.push( new pc.Mat4().setData(i557[i + 0], i557[i + 1], i557[i + 2], i557[i + 3],  i557[i + 4], i557[i + 5], i557[i + 6], i557[i + 7],  i557[i + 8], i557[i + 9], i557[i + 10], i557[i + 11],  i557[i + 12], i557[i + 13], i557[i + 14], i557[i + 15]) );
  }
  i550.bindposes = i556
  var i559 = i551[9]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i559[i + 0]) );
  }
  i550.blendShapes = i558
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i565 = data
  i564.triangles = i565[0]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i571 = data
  i570.name = i571[0]
  var i573 = i571[1]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i573[i + 0]) );
  }
  i570.frames = i572
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i574 = root || new pc.UnityMaterial()
  var i575 = data
  i574.name = i575[0]
  request.r(i575[1], i575[2], 0, i574, 'shader')
  i574.renderQueue = i575[3]
  i574.enableInstancing = !!i575[4]
  var i577 = i575[5]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i577[i + 0]) );
  }
  i574.floatParameters = i576
  var i579 = i575[6]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i579[i + 0]) );
  }
  i574.colorParameters = i578
  var i581 = i575[7]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i581[i + 0]) );
  }
  i574.vectorParameters = i580
  var i583 = i575[8]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i583[i + 0]) );
  }
  i574.textureParameters = i582
  var i585 = i575[9]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i585[i + 0]) );
  }
  i574.materialFlags = i584
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i589 = data
  i588.name = i589[0]
  i588.value = i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i593 = data
  i592.name = i593[0]
  i592.value = new pc.Color(i593[1], i593[2], i593[3], i593[4])
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i597 = data
  i596.name = i597[0]
  i596.value = new pc.Vec4( i597[1], i597[2], i597[3], i597[4] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i601 = data
  i600.name = i601[0]
  request.r(i601[1], i601[2], 0, i600, 'value')
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i605 = data
  i604.name = i605[0]
  i604.enabled = !!i605[1]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i607 = data
  i606.name = i607[0]
  i606.width = i607[1]
  i606.height = i607[2]
  i606.mipmapCount = i607[3]
  i606.anisoLevel = i607[4]
  i606.filterMode = i607[5]
  i606.hdr = !!i607[6]
  i606.format = i607[7]
  i606.wrapMode = i607[8]
  i606.alphaIsTransparency = !!i607[9]
  i606.alphaSource = i607[10]
  i606.graphicsFormat = i607[11]
  i606.sRGBTexture = !!i607[12]
  i606.desiredColorSpace = i607[13]
  i606.wrapU = i607[14]
  i606.wrapV = i607[15]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i609 = data
  i608.name = i609[0]
  i608.width = i609[1]
  i608.height = i609[2]
  i608.anisoLevel = i609[3]
  i608.filterMode = i609[4]
  i608.hdr = !!i609[5]
  i608.colorFormat = i609[6]
  i608.depthStencilFormat = i609[7]
  i608.renderTextureFormat = i609[8]
  i608.depth = i609[9]
  i608.wrapU = i609[10]
  i608.wrapV = i609[11]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i611 = data
  i610.name = i611[0]
  i610.atlasId = i611[1]
  i610.mipmapCount = i611[2]
  i610.hdr = !!i611[3]
  i610.size = i611[4]
  i610.anisoLevel = i611[5]
  i610.filterMode = i611[6]
  var i613 = i611[7]
  var i612 = []
  for(var i = 0; i < i613.length; i += 4) {
    i612.push( UnityEngine.Rect.MinMaxRect(i613[i + 0], i613[i + 1], i613[i + 2], i613[i + 3]) );
  }
  i610.rects = i612
  i610.wrapU = i611[8]
  i610.wrapV = i611[9]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i617 = data
  i616.name = i617[0]
  i616.index = i617[1]
  i616.startup = !!i617[2]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i619 = data
  i618.position = new pc.Vec3( i619[0], i619[1], i619[2] )
  i618.scale = new pc.Vec3( i619[3], i619[4], i619[5] )
  i618.rotation = new pc.Quat(i619[6], i619[7], i619[8], i619[9])
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'sharedMesh')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'additionalVertexStreams')
  i622.enabled = !!i623[2]
  request.r(i623[3], i623[4], 0, i622, 'sharedMaterial')
  var i625 = i623[5]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i622.sharedMaterials = i624
  i622.receiveShadows = !!i623[6]
  i622.shadowCastingMode = i623[7]
  i622.sortingLayerID = i623[8]
  i622.sortingOrder = i623[9]
  i622.lightmapIndex = i623[10]
  i622.lightmapSceneIndex = i623[11]
  i622.lightmapScaleOffset = new pc.Vec4( i623[12], i623[13], i623[14], i623[15] )
  i622.lightProbeUsage = i623[16]
  i622.reflectionProbeUsage = i623[17]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i629 = data
  i628.name = i629[0]
  i628.tagId = i629[1]
  i628.enabled = !!i629[2]
  i628.isStatic = !!i629[3]
  i628.layer = i629[4]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i631 = data
  i630.enabled = !!i631[0]
  i630.isTrigger = !!i631[1]
  request.r(i631[2], i631[3], 0, i630, 'material')
  i630.center = new pc.Vec3( i631[4], i631[5], i631[6] )
  i630.radius = i631[7]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i633 = data
  i632.enabled = !!i633[0]
  request.r(i633[1], i633[2], 0, i632, 'sharedMaterial')
  var i635 = i633[3]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.sharedMaterials = i634
  i632.receiveShadows = !!i633[4]
  i632.shadowCastingMode = i633[5]
  i632.sortingLayerID = i633[6]
  i632.sortingOrder = i633[7]
  i632.lightmapIndex = i633[8]
  i632.lightmapSceneIndex = i633[9]
  i632.lightmapScaleOffset = new pc.Vec4( i633[10], i633[11], i633[12], i633[13] )
  i632.lightProbeUsage = i633[14]
  i632.reflectionProbeUsage = i633[15]
  i632.color = new pc.Color(i633[16], i633[17], i633[18], i633[19])
  request.r(i633[20], i633[21], 0, i632, 'sprite')
  i632.flipX = !!i633[22]
  i632.flipY = !!i633[23]
  i632.drawMode = i633[24]
  i632.size = new pc.Vec2( i633[25], i633[26] )
  i632.tileMode = i633[27]
  i632.adaptiveModeThreshold = i633[28]
  i632.maskInteraction = i633[29]
  i632.spriteSortPoint = i633[30]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i637 = data
  i636.enabled = !!i637[0]
  i636.aspect = i637[1]
  i636.orthographic = !!i637[2]
  i636.orthographicSize = i637[3]
  i636.backgroundColor = new pc.Color(i637[4], i637[5], i637[6], i637[7])
  i636.nearClipPlane = i637[8]
  i636.farClipPlane = i637[9]
  i636.fieldOfView = i637[10]
  i636.depth = i637[11]
  i636.clearFlags = i637[12]
  i636.cullingMask = i637[13]
  i636.rect = i637[14]
  request.r(i637[15], i637[16], 0, i636, 'targetTexture')
  i636.usePhysicalProperties = !!i637[17]
  i636.focalLength = i637[18]
  i636.sensorSize = new pc.Vec2( i637[19], i637[20] )
  i636.lensShift = new pc.Vec2( i637[21], i637[22] )
  i636.gateFit = i637[23]
  i636.commandBufferCount = i637[24]
  i636.cameraType = i637[25]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i639 = data
  i638.mass = i639[0]
  i638.drag = i639[1]
  i638.angularDrag = i639[2]
  i638.useGravity = !!i639[3]
  i638.isKinematic = !!i639[4]
  i638.constraints = i639[5]
  i638.maxAngularVelocity = i639[6]
  i638.collisionDetectionMode = i639[7]
  i638.interpolation = i639[8]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i641 = data
  i640.enabled = !!i641[0]
  request.r(i641[1], i641[2], 0, i640, 'sharedMaterial')
  var i643 = i641[3]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.sharedMaterials = i642
  i640.receiveShadows = !!i641[4]
  i640.shadowCastingMode = i641[5]
  i640.sortingLayerID = i641[6]
  i640.sortingOrder = i641[7]
  i640.lightmapIndex = i641[8]
  i640.lightmapSceneIndex = i641[9]
  i640.lightmapScaleOffset = new pc.Vec4( i641[10], i641[11], i641[12], i641[13] )
  i640.lightProbeUsage = i641[14]
  i640.reflectionProbeUsage = i641[15]
  var i645 = i641[16]
  var i644 = []
  for(var i = 0; i < i645.length; i += 3) {
    i644.push( new pc.Vec3( i645[i + 0], i645[i + 1], i645[i + 2] ) );
  }
  i640.positions = i644
  i640.positionCount = i641[17]
  i640.time = i641[18]
  i640.startWidth = i641[19]
  i640.endWidth = i641[20]
  i640.widthMultiplier = i641[21]
  i640.autodestruct = !!i641[22]
  i640.emitting = !!i641[23]
  i640.numCornerVertices = i641[24]
  i640.numCapVertices = i641[25]
  i640.minVertexDistance = i641[26]
  i640.colorGradient = i641[27] ? new pc.ColorGradient(i641[27][0], i641[27][1], i641[27][2]) : null
  i640.startColor = new pc.Color(i641[28], i641[29], i641[30], i641[31])
  i640.endColor = new pc.Color(i641[32], i641[33], i641[34], i641[35])
  i640.generateLightingData = !!i641[36]
  i640.textureMode = i641[37]
  i640.alignment = i641[38]
  i640.widthCurve = new pc.AnimationCurve( { keys_flow: i641[39] } )
  return i640
}

Deserializers["Ball"] = function (request, data, root) {
  var i648 = root || request.c( 'Ball' )
  var i649 = data
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i651 = data
  i650.useMotor = !!i651[0]
  i650.useLimits = !!i651[1]
  i650.useSpring = !!i651[2]
  i650.limits = request.d('UnityEngine.JointLimits', i651[3], i650.limits)
  i650.motor = request.d('UnityEngine.JointMotor', i651[4], i650.motor)
  i650.spring = request.d('UnityEngine.JointSpring', i651[5], i650.spring)
  request.r(i651[6], i651[7], 0, i650, 'connectedBody')
  i650.axis = new pc.Vec3( i651[8], i651[9], i651[10] )
  i650.anchor = new pc.Vec3( i651[11], i651[12], i651[13] )
  i650.connectedAnchor = new pc.Vec3( i651[14], i651[15], i651[16] )
  i650.autoConfigureConnectedAnchor = !!i651[17]
  i650.massScale = i651[18]
  i650.connectedMassScale = i651[19]
  i650.enableCollision = !!i651[20]
  i650.breakForce = i651[21]
  i650.breakTorque = i651[22]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i653 = data
  i652.center = new pc.Vec3( i653[0], i653[1], i653[2] )
  i652.radius = i653[3]
  i652.height = i653[4]
  i652.direction = i653[5]
  i652.enabled = !!i653[6]
  i652.isTrigger = !!i653[7]
  request.r(i653[8], i653[9], 0, i652, 'material')
  return i652
}

Deserializers["Ring"] = function (request, data, root) {
  var i654 = root || request.c( 'Ring' )
  var i655 = data
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i657 = data
  i656.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i657[0], i656.main)
  i656.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i657[1], i656.colorBySpeed)
  i656.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i657[2], i656.colorOverLifetime)
  i656.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i657[3], i656.emission)
  i656.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i657[4], i656.rotationBySpeed)
  i656.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i657[5], i656.rotationOverLifetime)
  i656.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i657[6], i656.shape)
  i656.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i657[7], i656.sizeBySpeed)
  i656.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i657[8], i656.sizeOverLifetime)
  i656.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i657[9], i656.textureSheetAnimation)
  i656.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i657[10], i656.velocityOverLifetime)
  i656.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i657[11], i656.noise)
  i656.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i657[12], i656.inheritVelocity)
  i656.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i657[13], i656.forceOverLifetime)
  i656.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i657[14], i656.limitVelocityOverLifetime)
  i656.useAutoRandomSeed = !!i657[15]
  i656.randomSeed = i657[16]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemMain()
  var i659 = data
  i658.duration = i659[0]
  i658.loop = !!i659[1]
  i658.prewarm = !!i659[2]
  i658.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.startDelay)
  i658.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[4], i658.startLifetime)
  i658.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[5], i658.startSpeed)
  i658.startSize3D = !!i659[6]
  i658.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[7], i658.startSizeX)
  i658.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[8], i658.startSizeY)
  i658.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[9], i658.startSizeZ)
  i658.startRotation3D = !!i659[10]
  i658.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[11], i658.startRotationX)
  i658.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[12], i658.startRotationY)
  i658.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[13], i658.startRotationZ)
  i658.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i659[14], i658.startColor)
  i658.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[15], i658.gravityModifier)
  i658.simulationSpace = i659[16]
  request.r(i659[17], i659[18], 0, i658, 'customSimulationSpace')
  i658.simulationSpeed = i659[19]
  i658.useUnscaledTime = !!i659[20]
  i658.scalingMode = i659[21]
  i658.playOnAwake = !!i659[22]
  i658.maxParticles = i659[23]
  i658.emitterVelocityMode = i659[24]
  i658.stopAction = i659[25]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i660 = root || new pc.MinMaxCurve()
  var i661 = data
  i660.mode = i661[0]
  i660.curveMin = new pc.AnimationCurve( { keys_flow: i661[1] } )
  i660.curveMax = new pc.AnimationCurve( { keys_flow: i661[2] } )
  i660.curveMultiplier = i661[3]
  i660.constantMin = i661[4]
  i660.constantMax = i661[5]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i662 = root || new pc.MinMaxGradient()
  var i663 = data
  i662.mode = i663[0]
  i662.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i663[1], i662.gradientMin)
  i662.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i663[2], i662.gradientMax)
  i662.colorMin = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.colorMax = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i665 = data
  i664.mode = i665[0]
  var i667 = i665[1]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i667[i + 0]) );
  }
  i664.colorKeys = i666
  var i669 = i665[2]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i669[i + 0]) );
  }
  i664.alphaKeys = i668
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemColorBySpeed()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i671[1], i670.color)
  i670.range = new pc.Vec2( i671[2], i671[3] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i675 = data
  i674.color = new pc.Color(i675[0], i675[1], i675[2], i675[3])
  i674.time = i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i679 = data
  i678.alpha = i679[0]
  i678.time = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemColorOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i681[1], i680.color)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemEmitter()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.rateOverTime)
  i682.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.rateOverDistance)
  var i685 = i683[3]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i685[i + 0]) );
  }
  i682.bursts = i684
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemBurst()
  var i689 = data
  i688.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[0], i688.count)
  i688.cycleCount = i689[1]
  i688.minCount = i689[2]
  i688.maxCount = i689[3]
  i688.repeatInterval = i689[4]
  i688.time = i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemRotationBySpeed()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.separateAxes = !!i691[4]
  i690.range = new pc.Vec2( i691[5], i691[6] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemRotationOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.separateAxes = !!i693[4]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemShape()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.shapeType = i695[1]
  i694.randomDirectionAmount = i695[2]
  i694.sphericalDirectionAmount = i695[3]
  i694.randomPositionAmount = i695[4]
  i694.alignToDirection = !!i695[5]
  i694.radius = i695[6]
  i694.radiusMode = i695[7]
  i694.radiusSpread = i695[8]
  i694.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[9], i694.radiusSpeed)
  i694.radiusThickness = i695[10]
  i694.angle = i695[11]
  i694.length = i695[12]
  i694.boxThickness = new pc.Vec3( i695[13], i695[14], i695[15] )
  i694.meshShapeType = i695[16]
  request.r(i695[17], i695[18], 0, i694, 'mesh')
  request.r(i695[19], i695[20], 0, i694, 'meshRenderer')
  request.r(i695[21], i695[22], 0, i694, 'skinnedMeshRenderer')
  i694.useMeshMaterialIndex = !!i695[23]
  i694.meshMaterialIndex = i695[24]
  i694.useMeshColors = !!i695[25]
  i694.normalOffset = i695[26]
  i694.arc = i695[27]
  i694.arcMode = i695[28]
  i694.arcSpread = i695[29]
  i694.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[30], i694.arcSpeed)
  i694.donutRadius = i695[31]
  i694.position = new pc.Vec3( i695[32], i695[33], i695[34] )
  i694.rotation = new pc.Vec3( i695[35], i695[36], i695[37] )
  i694.scale = new pc.Vec3( i695[38], i695[39], i695[40] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemSizeBySpeed()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.x)
  i696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.y)
  i696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.z)
  i696.separateAxes = !!i697[4]
  i696.range = new pc.Vec2( i697[5], i697[6] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemSizeOverLifetime()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.x)
  i698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.y)
  i698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.z)
  i698.separateAxes = !!i699[4]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.mode = i701[1]
  i700.animation = i701[2]
  i700.numTilesX = i701[3]
  i700.numTilesY = i701[4]
  i700.useRandomRow = !!i701[5]
  i700.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[6], i700.frameOverTime)
  i700.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[7], i700.startFrame)
  i700.cycleCount = i701[8]
  i700.rowIndex = i701[9]
  i700.flipU = i701[10]
  i700.flipV = i701[11]
  i700.spriteCount = i701[12]
  var i703 = i701[13]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.sprites = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[1], i706.x)
  i706.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[2], i706.y)
  i706.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[3], i706.z)
  i706.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[4], i706.radial)
  i706.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[5], i706.speedModifier)
  i706.space = i707[6]
  i706.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[7], i706.orbitalX)
  i706.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[8], i706.orbitalY)
  i706.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[9], i706.orbitalZ)
  i706.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[10], i706.orbitalOffsetX)
  i706.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[11], i706.orbitalOffsetY)
  i706.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[12], i706.orbitalOffsetZ)
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemNoise()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.separateAxes = !!i709[1]
  i708.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.strengthX)
  i708.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.strengthY)
  i708.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[4], i708.strengthZ)
  i708.frequency = i709[5]
  i708.damping = !!i709[6]
  i708.octaveCount = i709[7]
  i708.octaveMultiplier = i709[8]
  i708.octaveScale = i709[9]
  i708.quality = i709[10]
  i708.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[11], i708.scrollSpeed)
  i708.scrollSpeedMultiplier = i709[12]
  i708.remapEnabled = !!i709[13]
  i708.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[14], i708.remapX)
  i708.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[15], i708.remapY)
  i708.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[16], i708.remapZ)
  i708.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[17], i708.positionAmount)
  i708.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[18], i708.rotationAmount)
  i708.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[19], i708.sizeAmount)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemInheritVelocity()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.mode = i711[1]
  i710.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.curve)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemForceOverLifetime()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[1], i712.x)
  i712.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.y)
  i712.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.z)
  i712.space = i713[4]
  i712.randomized = !!i713[5]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.limit)
  i714.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.limitX)
  i714.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.limitY)
  i714.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[4], i714.limitZ)
  i714.dampen = i715[5]
  i714.separateAxes = !!i715[6]
  i714.space = i715[7]
  i714.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[8], i714.drag)
  i714.multiplyDragByParticleSize = !!i715[9]
  i714.multiplyDragByParticleVelocity = !!i715[10]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i717 = data
  i716.enabled = !!i717[0]
  request.r(i717[1], i717[2], 0, i716, 'sharedMaterial')
  var i719 = i717[3]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i716.sharedMaterials = i718
  i716.receiveShadows = !!i717[4]
  i716.shadowCastingMode = i717[5]
  i716.sortingLayerID = i717[6]
  i716.sortingOrder = i717[7]
  i716.lightmapIndex = i717[8]
  i716.lightmapSceneIndex = i717[9]
  i716.lightmapScaleOffset = new pc.Vec4( i717[10], i717[11], i717[12], i717[13] )
  i716.lightProbeUsage = i717[14]
  i716.reflectionProbeUsage = i717[15]
  request.r(i717[16], i717[17], 0, i716, 'mesh')
  i716.meshCount = i717[18]
  i716.activeVertexStreamsCount = i717[19]
  i716.alignment = i717[20]
  i716.renderMode = i717[21]
  i716.sortMode = i717[22]
  i716.lengthScale = i717[23]
  i716.velocityScale = i717[24]
  i716.cameraVelocityScale = i717[25]
  i716.normalDirection = i717[26]
  i716.sortingFudge = i717[27]
  i716.minParticleSize = i717[28]
  i716.maxParticleSize = i717[29]
  i716.pivot = new pc.Vec3( i717[30], i717[31], i717[32] )
  request.r(i717[33], i717[34], 0, i716, 'trailMaterial')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i721 = data
  i720.enabled = !!i721[0]
  request.r(i721[1], i721[2], 0, i720, 'sharedMaterial')
  var i723 = i721[3]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.sharedMaterials = i722
  i720.receiveShadows = !!i721[4]
  i720.shadowCastingMode = i721[5]
  i720.sortingLayerID = i721[6]
  i720.sortingOrder = i721[7]
  i720.lightmapIndex = i721[8]
  i720.lightmapSceneIndex = i721[9]
  i720.lightmapScaleOffset = new pc.Vec4( i721[10], i721[11], i721[12], i721[13] )
  i720.lightProbeUsage = i721[14]
  i720.reflectionProbeUsage = i721[15]
  request.r(i721[16], i721[17], 0, i720, 'sharedMesh')
  var i725 = i721[18]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i720.bones = i724
  i720.updateWhenOffscreen = !!i721[19]
  i720.localBounds = i721[20]
  request.r(i721[21], i721[22], 0, i720, 'rootBone')
  var i727 = i721[23]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i727[i + 0]) );
  }
  i720.blendShapesWeights = i726
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i733 = data
  i732.weight = i733[0]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i735 = data
  i734.center = new pc.Vec3( i735[0], i735[1], i735[2] )
  i734.size = new pc.Vec3( i735[3], i735[4], i735[5] )
  i734.enabled = !!i735[6]
  i734.isTrigger = !!i735[7]
  request.r(i735[8], i735[9], 0, i734, 'material')
  return i734
}

Deserializers["DunkTrigger"] = function (request, data, root) {
  var i736 = root || request.c( 'DunkTrigger' )
  var i737 = data
  return i736
}

Deserializers["Floor"] = function (request, data, root) {
  var i738 = root || request.c( 'Floor' )
  var i739 = data
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i741 = data
  i740.enabled = !!i741[0]
  i740.type = i741[1]
  i740.color = new pc.Color(i741[2], i741[3], i741[4], i741[5])
  i740.cullingMask = i741[6]
  i740.intensity = i741[7]
  i740.range = i741[8]
  i740.spotAngle = i741[9]
  i740.shadows = i741[10]
  i740.shadowNormalBias = i741[11]
  i740.shadowBias = i741[12]
  i740.shadowStrength = i741[13]
  i740.shadowResolution = i741[14]
  i740.lightmapBakeType = i741[15]
  i740.renderMode = i741[16]
  request.r(i741[17], i741[18], 0, i740, 'cookie')
  i740.cookieSize = i741[19]
  return i740
}

Deserializers["BasketballThrower"] = function (request, data, root) {
  var i742 = root || request.c( 'BasketballThrower' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'hoopTargetPoint')
  i742.throwForceMultiplier = i743[2]
  i742.minApexHeightOffset = i743[3]
  i742.maxApexHeightOffset = i743[4]
  i742.horizontalAimScale = i743[5]
  i742.dragSpeedThreshold = i743[6]
  i742.moveSpeed = i743[7]
  i742.dragSpeedCheckInterval = i743[8]
  return i742
}

Deserializers["ScoreManager"] = function (request, data, root) {
  var i744 = root || request.c( 'ScoreManager' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'normalScoreText')
  request.r(i745[2], i745[3], 0, i744, 'perfectScoreText')
  request.r(i745[4], i745[5], 0, i744, 'totalScoreText')
  request.r(i745[6], i745[7], 0, i744, 'perfectDunkAnimation')
  request.r(i745[8], i745[9], 0, i744, 'perfectDunkParticle')
  i744.normalDunkPoints = i745[10]
  i744.perfectDunkPoints = i745[11]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i747 = data
  i746.pivot = new pc.Vec2( i747[0], i747[1] )
  i746.anchorMin = new pc.Vec2( i747[2], i747[3] )
  i746.anchorMax = new pc.Vec2( i747[4], i747[5] )
  i746.sizeDelta = new pc.Vec2( i747[6], i747[7] )
  i746.anchoredPosition3D = new pc.Vec3( i747[8], i747[9], i747[10] )
  i746.rotation = new pc.Quat(i747[11], i747[12], i747[13], i747[14])
  i746.scale = new pc.Vec3( i747[15], i747[16], i747[17] )
  return i746
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.TextMeshPro' )
  var i749 = data
  i748._SortingLayer = i749[0]
  i748._SortingLayerID = i749[1]
  i748._SortingOrder = i749[2]
  i748.m_hasFontAssetChanged = !!i749[3]
  request.r(i749[4], i749[5], 0, i748, 'm_renderer')
  i748.m_maskType = i749[6]
  i748.m_text = i749[7]
  i748.m_isRightToLeft = !!i749[8]
  request.r(i749[9], i749[10], 0, i748, 'm_fontAsset')
  request.r(i749[11], i749[12], 0, i748, 'm_sharedMaterial')
  var i751 = i749[13]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.m_fontSharedMaterials = i750
  request.r(i749[14], i749[15], 0, i748, 'm_fontMaterial')
  var i753 = i749[16]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i748.m_fontMaterials = i752
  i748.m_fontColor32 = UnityEngine.Color32.ConstructColor(i749[17], i749[18], i749[19], i749[20])
  i748.m_fontColor = new pc.Color(i749[21], i749[22], i749[23], i749[24])
  i748.m_enableVertexGradient = !!i749[25]
  i748.m_colorMode = i749[26]
  i748.m_fontColorGradient = request.d('TMPro.VertexGradient', i749[27], i748.m_fontColorGradient)
  request.r(i749[28], i749[29], 0, i748, 'm_fontColorGradientPreset')
  request.r(i749[30], i749[31], 0, i748, 'm_spriteAsset')
  i748.m_tintAllSprites = !!i749[32]
  request.r(i749[33], i749[34], 0, i748, 'm_StyleSheet')
  i748.m_TextStyleHashCode = i749[35]
  i748.m_overrideHtmlColors = !!i749[36]
  i748.m_faceColor = UnityEngine.Color32.ConstructColor(i749[37], i749[38], i749[39], i749[40])
  i748.m_fontSize = i749[41]
  i748.m_fontSizeBase = i749[42]
  i748.m_fontWeight = i749[43]
  i748.m_enableAutoSizing = !!i749[44]
  i748.m_fontSizeMin = i749[45]
  i748.m_fontSizeMax = i749[46]
  i748.m_fontStyle = i749[47]
  i748.m_HorizontalAlignment = i749[48]
  i748.m_VerticalAlignment = i749[49]
  i748.m_textAlignment = i749[50]
  i748.m_characterSpacing = i749[51]
  i748.m_wordSpacing = i749[52]
  i748.m_lineSpacing = i749[53]
  i748.m_lineSpacingMax = i749[54]
  i748.m_paragraphSpacing = i749[55]
  i748.m_charWidthMaxAdj = i749[56]
  i748.m_enableWordWrapping = !!i749[57]
  i748.m_wordWrappingRatios = i749[58]
  i748.m_overflowMode = i749[59]
  request.r(i749[60], i749[61], 0, i748, 'm_linkedTextComponent')
  request.r(i749[62], i749[63], 0, i748, 'parentLinkedComponent')
  i748.m_enableKerning = !!i749[64]
  i748.m_enableExtraPadding = !!i749[65]
  i748.checkPaddingRequired = !!i749[66]
  i748.m_isRichText = !!i749[67]
  i748.m_parseCtrlCharacters = !!i749[68]
  i748.m_isOrthographic = !!i749[69]
  i748.m_isCullingEnabled = !!i749[70]
  i748.m_horizontalMapping = i749[71]
  i748.m_verticalMapping = i749[72]
  i748.m_uvLineOffset = i749[73]
  i748.m_geometrySortingOrder = i749[74]
  i748.m_IsTextObjectScaleStatic = !!i749[75]
  i748.m_VertexBufferAutoSizeReduction = !!i749[76]
  i748.m_useMaxVisibleDescender = !!i749[77]
  i748.m_pageToDisplay = i749[78]
  i748.m_margin = new pc.Vec4( i749[79], i749[80], i749[81], i749[82] )
  i748.m_isUsingLegacyAnimationComponent = !!i749[83]
  i748.m_isVolumetricText = !!i749[84]
  request.r(i749[85], i749[86], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[87]
  i748.m_Color = new pc.Color(i749[88], i749[89], i749[90], i749[91])
  i748.m_RaycastTarget = !!i749[92]
  i748.m_RaycastPadding = new pc.Vec4( i749[93], i749[94], i749[95], i749[96] )
  return i748
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.VertexGradient' )
  var i755 = data
  i754.topLeft = new pc.Color(i755[0], i755[1], i755[2], i755[3])
  i754.topRight = new pc.Color(i755[4], i755[5], i755[6], i755[7])
  i754.bottomLeft = new pc.Color(i755[8], i755[9], i755[10], i755[11])
  i754.bottomRight = new pc.Color(i755[12], i755[13], i755[14], i755[15])
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i757 = data
  i756.playAutomatically = !!i757[0]
  request.r(i757[1], i757[2], 0, i756, 'clip')
  var i759 = i757[3]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.clips = i758
  i756.wrapMode = i757[4]
  i756.enabled = !!i757[5]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i763 = data
  i762.ambientIntensity = i763[0]
  i762.reflectionIntensity = i763[1]
  i762.ambientMode = i763[2]
  i762.ambientLight = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.ambientSkyColor = new pc.Color(i763[7], i763[8], i763[9], i763[10])
  i762.ambientGroundColor = new pc.Color(i763[11], i763[12], i763[13], i763[14])
  i762.ambientEquatorColor = new pc.Color(i763[15], i763[16], i763[17], i763[18])
  i762.fogColor = new pc.Color(i763[19], i763[20], i763[21], i763[22])
  i762.fogEndDistance = i763[23]
  i762.fogStartDistance = i763[24]
  i762.fogDensity = i763[25]
  i762.fog = !!i763[26]
  request.r(i763[27], i763[28], 0, i762, 'skybox')
  i762.fogMode = i763[29]
  var i765 = i763[30]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i765[i + 0]) );
  }
  i762.lightmaps = i764
  i762.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i763[31], i762.lightProbes)
  i762.lightmapsMode = i763[32]
  i762.mixedBakeMode = i763[33]
  i762.environmentLightingMode = i763[34]
  i762.ambientProbe = new pc.SphericalHarmonicsL2(i763[35])
  i762.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i763[36])
  i762.useReferenceAmbientProbe = !!i763[37]
  request.r(i763[38], i763[39], 0, i762, 'customReflection')
  request.r(i763[40], i763[41], 0, i762, 'defaultReflection')
  i762.defaultReflectionMode = i763[42]
  i762.defaultReflectionResolution = i763[43]
  i762.sunLightObjectId = i763[44]
  i762.pixelLightCount = i763[45]
  i762.defaultReflectionHDR = !!i763[46]
  i762.hasLightDataAsset = !!i763[47]
  i762.hasManualGenerate = !!i763[48]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'lightmapColor')
  request.r(i769[2], i769[3], 0, i768, 'lightmapDirection')
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i770 = root || new UnityEngine.LightProbes()
  var i771 = data
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i777 = data
  i776.name = i777[0]
  i776.bounciness = i777[1]
  i776.dynamicFriction = i777[2]
  i776.staticFriction = i777[3]
  i776.frictionCombine = i777[4]
  i776.bounceCombine = i777[5]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i779 = data
  var i781 = i779[0]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i781[i + 0]));
  }
  i778.ShaderCompilationErrors = i780
  i778.name = i779[1]
  i778.guid = i779[2]
  var i783 = i779[3]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i778.shaderDefinedKeywords = i782
  var i785 = i779[4]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i785[i + 0]) );
  }
  i778.passes = i784
  var i787 = i779[5]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i787[i + 0]) );
  }
  i778.usePasses = i786
  var i789 = i779[6]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i789[i + 0]) );
  }
  i778.defaultParameterValues = i788
  request.r(i779[7], i779[8], 0, i778, 'unityFallbackShader')
  i778.readDepth = !!i779[9]
  i778.isCreatedByShaderGraph = !!i779[10]
  i778.compiled = !!i779[11]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i793 = data
  i792.shaderName = i793[0]
  i792.errorMessage = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i798 = root || new pc.UnityShaderPass()
  var i799 = data
  i798.id = i799[0]
  i798.subShaderIndex = i799[1]
  i798.name = i799[2]
  i798.passType = i799[3]
  i798.grabPassTextureName = i799[4]
  i798.usePass = !!i799[5]
  i798.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[6], i798.zTest)
  i798.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[7], i798.zWrite)
  i798.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[8], i798.culling)
  i798.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i799[9], i798.blending)
  i798.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i799[10], i798.alphaBlending)
  i798.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[11], i798.colorWriteMask)
  i798.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[12], i798.offsetUnits)
  i798.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[13], i798.offsetFactor)
  i798.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[14], i798.stencilRef)
  i798.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[15], i798.stencilReadMask)
  i798.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[16], i798.stencilWriteMask)
  i798.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i799[17], i798.stencilOp)
  i798.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i799[18], i798.stencilOpFront)
  i798.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i799[19], i798.stencilOpBack)
  var i801 = i799[20]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i801[i + 0]) );
  }
  i798.tags = i800
  var i803 = i799[21]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i798.passDefinedKeywords = i802
  var i805 = i799[22]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i805[i + 0]) );
  }
  i798.passDefinedKeywordGroups = i804
  var i807 = i799[23]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i807[i + 0]) );
  }
  i798.variants = i806
  var i809 = i799[24]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i809[i + 0]) );
  }
  i798.excludedVariants = i808
  i798.hasDepthReader = !!i799[25]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i811 = data
  i810.val = i811[0]
  i810.name = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i813 = data
  i812.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[0], i812.src)
  i812.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[1], i812.dst)
  i812.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[2], i812.op)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i815 = data
  i814.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[0], i814.pass)
  i814.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[1], i814.fail)
  i814.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[2], i814.zFail)
  i814.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[3], i814.comp)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i819 = data
  i818.name = i819[0]
  i818.value = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i823 = data
  var i825 = i823[0]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i822.keywords = i824
  i822.hasDiscard = !!i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i829 = data
  i828.passId = i829[0]
  i828.subShaderIndex = i829[1]
  var i831 = i829[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( i831[i + 0] );
  }
  i828.keywords = i830
  i828.vertexProgram = i829[3]
  i828.fragmentProgram = i829[4]
  i828.exportedForWebGl2 = !!i829[5]
  i828.readDepth = !!i829[6]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'shader')
  i834.pass = i835[2]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i839 = data
  i838.name = i839[0]
  i838.type = i839[1]
  i838.value = new pc.Vec4( i839[2], i839[3], i839[4], i839[5] )
  i838.textureValue = i839[6]
  i838.shaderPropertyFlag = i839[7]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i841 = data
  i840.name = i841[0]
  request.r(i841[1], i841[2], 0, i840, 'texture')
  i840.aabb = i841[3]
  i840.vertices = i841[4]
  i840.triangles = i841[5]
  i840.textureRect = UnityEngine.Rect.MinMaxRect(i841[6], i841[7], i841[8], i841[9])
  i840.packedRect = UnityEngine.Rect.MinMaxRect(i841[10], i841[11], i841[12], i841[13])
  i840.border = new pc.Vec4( i841[14], i841[15], i841[16], i841[17] )
  i840.transparency = i841[18]
  i840.bounds = i841[19]
  i840.pixelsPerUnit = i841[20]
  i840.textureWidth = i841[21]
  i840.textureHeight = i841[22]
  i840.nativeSize = new pc.Vec2( i841[23], i841[24] )
  i840.pivot = new pc.Vec2( i841[25], i841[26] )
  i840.textureRectOffset = new pc.Vec2( i841[27], i841[28] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i843 = data
  i842.name = i843[0]
  i842.wrapMode = i843[1]
  i842.isLooping = !!i843[2]
  i842.length = i843[3]
  var i845 = i843[4]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i845[i + 0]) );
  }
  i842.curves = i844
  var i847 = i843[5]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i847[i + 0]) );
  }
  i842.events = i846
  i842.halfPrecision = !!i843[6]
  i842._frameRate = i843[7]
  i842.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i843[8], i842.localBounds)
  i842.hasMuscleCurves = !!i843[9]
  var i849 = i843[10]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i842.clipMuscleConstant = i848
  i842.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i843[11], i842.clipBindingConstant)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i853 = data
  i852.path = i853[0]
  i852.hash = i853[1]
  i852.componentType = i853[2]
  i852.property = i853[3]
  i852.keys = i853[4]
  var i855 = i853[5]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i855[i + 0]) );
  }
  i852.objectReferenceKeys = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i859 = data
  i858.time = i859[0]
  request.r(i859[1], i859[2], 0, i858, 'value')
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i863 = data
  i862.functionName = i863[0]
  i862.floatParameter = i863[1]
  i862.intParameter = i863[2]
  i862.stringParameter = i863[3]
  request.r(i863[4], i863[5], 0, i862, 'objectReferenceParameter')
  i862.time = i863[6]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i865 = data
  i864.center = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.extends = new pc.Vec3( i865[3], i865[4], i865[5] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.genericBindings = i870
  var i873 = i869[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.pptrCurveMapping = i872
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i875 = data
  i874.name = i875[0]
  i874.ascent = i875[1]
  i874.originalLineHeight = i875[2]
  i874.fontSize = i875[3]
  var i877 = i875[4]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i877[i + 0]) );
  }
  i874.characterInfo = i876
  request.r(i875[5], i875[6], 0, i874, 'texture')
  i874.originalFontSize = i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i881 = data
  i880.index = i881[0]
  i880.advance = i881[1]
  i880.bearing = i881[2]
  i880.glyphWidth = i881[3]
  i880.glyphHeight = i881[4]
  i880.minX = i881[5]
  i880.maxX = i881[6]
  i880.minY = i881[7]
  i880.maxY = i881[8]
  i880.uvBottomLeftX = i881[9]
  i880.uvBottomLeftY = i881[10]
  i880.uvBottomRightX = i881[11]
  i880.uvBottomRightY = i881[12]
  i880.uvTopLeftX = i881[13]
  i880.uvTopLeftY = i881[14]
  i880.uvTopRightX = i881[15]
  i880.uvTopRightY = i881[16]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i883 = data
  i882.name = i883[0]
  i882.bytes64 = i883[1]
  i882.data = i883[2]
  return i882
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i885 = data
  i884.hashCode = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'material')
  i884.materialHashCode = i885[3]
  request.r(i885[4], i885[5], 0, i884, 'atlas')
  i884.normalStyle = i885[6]
  i884.normalSpacingOffset = i885[7]
  i884.boldStyle = i885[8]
  i884.boldSpacing = i885[9]
  i884.italicStyle = i885[10]
  i884.tabSize = i885[11]
  i884.m_Version = i885[12]
  i884.m_SourceFontFileGUID = i885[13]
  request.r(i885[14], i885[15], 0, i884, 'm_SourceFontFile_EditorRef')
  request.r(i885[16], i885[17], 0, i884, 'm_SourceFontFile')
  i884.m_AtlasPopulationMode = i885[18]
  i884.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i885[19], i884.m_FaceInfo)
  var i887 = i885[20]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('UnityEngine.TextCore.Glyph', i887[i + 0]));
  }
  i884.m_GlyphTable = i886
  var i889 = i885[21]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('TMPro.TMP_Character', i889[i + 0]));
  }
  i884.m_CharacterTable = i888
  var i891 = i885[22]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i884.m_AtlasTextures = i890
  i884.m_AtlasTextureIndex = i885[23]
  i884.m_IsMultiAtlasTexturesEnabled = !!i885[24]
  i884.m_ClearDynamicDataOnBuild = !!i885[25]
  var i893 = i885[26]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('UnityEngine.TextCore.GlyphRect', i893[i + 0]));
  }
  i884.m_UsedGlyphRects = i892
  var i895 = i885[27]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('UnityEngine.TextCore.GlyphRect', i895[i + 0]));
  }
  i884.m_FreeGlyphRects = i894
  i884.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i885[28], i884.m_fontInfo)
  i884.m_AtlasWidth = i885[29]
  i884.m_AtlasHeight = i885[30]
  i884.m_AtlasPadding = i885[31]
  i884.m_AtlasRenderMode = i885[32]
  var i897 = i885[33]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('TMPro.TMP_Glyph', i897[i + 0]));
  }
  i884.m_glyphInfoList = i896
  i884.m_KerningTable = request.d('TMPro.KerningTable', i885[34], i884.m_KerningTable)
  i884.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i885[35], i884.m_FontFeatureTable)
  var i899 = i885[36]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 1, i898, '')
  }
  i884.fallbackFontAssets = i898
  var i901 = i885[37]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 1, i900, '')
  }
  i884.m_FallbackFontAssetTable = i900
  i884.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i885[38], i884.m_CreationSettings)
  var i903 = i885[39]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('TMPro.TMP_FontWeightPair', i903[i + 0]) );
  }
  i884.m_FontWeightTable = i902
  var i905 = i885[40]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('TMPro.TMP_FontWeightPair', i905[i + 0]) );
  }
  i884.fontWeights = i904
  return i884
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i907 = data
  i906.m_FaceIndex = i907[0]
  i906.m_FamilyName = i907[1]
  i906.m_StyleName = i907[2]
  i906.m_PointSize = i907[3]
  i906.m_Scale = i907[4]
  i906.m_UnitsPerEM = i907[5]
  i906.m_LineHeight = i907[6]
  i906.m_AscentLine = i907[7]
  i906.m_CapLine = i907[8]
  i906.m_MeanLine = i907[9]
  i906.m_Baseline = i907[10]
  i906.m_DescentLine = i907[11]
  i906.m_SuperscriptOffset = i907[12]
  i906.m_SuperscriptSize = i907[13]
  i906.m_SubscriptOffset = i907[14]
  i906.m_SubscriptSize = i907[15]
  i906.m_UnderlineOffset = i907[16]
  i906.m_UnderlineThickness = i907[17]
  i906.m_StrikethroughOffset = i907[18]
  i906.m_StrikethroughThickness = i907[19]
  i906.m_TabWidth = i907[20]
  return i906
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i911 = data
  i910.m_Index = i911[0]
  i910.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i911[1], i910.m_Metrics)
  i910.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i911[2], i910.m_GlyphRect)
  i910.m_Scale = i911[3]
  i910.m_AtlasIndex = i911[4]
  i910.m_ClassDefinitionType = i911[5]
  return i910
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i913 = data
  i912.m_Width = i913[0]
  i912.m_Height = i913[1]
  i912.m_HorizontalBearingX = i913[2]
  i912.m_HorizontalBearingY = i913[3]
  i912.m_HorizontalAdvance = i913[4]
  return i912
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i915 = data
  i914.m_X = i915[0]
  i914.m_Y = i915[1]
  i914.m_Width = i915[2]
  i914.m_Height = i915[3]
  return i914
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_Character' )
  var i919 = data
  i918.m_ElementType = i919[0]
  i918.m_Unicode = i919[1]
  i918.m_GlyphIndex = i919[2]
  i918.m_Scale = i919[3]
  return i918
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i925 = data
  i924.Name = i925[0]
  i924.PointSize = i925[1]
  i924.Scale = i925[2]
  i924.CharacterCount = i925[3]
  i924.LineHeight = i925[4]
  i924.Baseline = i925[5]
  i924.Ascender = i925[6]
  i924.CapHeight = i925[7]
  i924.Descender = i925[8]
  i924.CenterLine = i925[9]
  i924.SuperscriptOffset = i925[10]
  i924.SubscriptOffset = i925[11]
  i924.SubSize = i925[12]
  i924.Underline = i925[13]
  i924.UnderlineThickness = i925[14]
  i924.strikethrough = i925[15]
  i924.strikethroughThickness = i925[16]
  i924.TabWidth = i925[17]
  i924.Padding = i925[18]
  i924.AtlasWidth = i925[19]
  i924.AtlasHeight = i925[20]
  return i924
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_Glyph' )
  var i929 = data
  i928.id = i929[0]
  i928.x = i929[1]
  i928.y = i929[2]
  i928.width = i929[3]
  i928.height = i929[4]
  i928.xOffset = i929[5]
  i928.yOffset = i929[6]
  i928.xAdvance = i929[7]
  i928.scale = i929[8]
  return i928
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.KerningTable' )
  var i931 = data
  var i933 = i931[0]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('TMPro.KerningPair', i933[i + 0]));
  }
  i930.kerningPairs = i932
  return i930
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.KerningPair' )
  var i937 = data
  i936.xOffset = i937[0]
  i936.m_FirstGlyph = i937[1]
  i936.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i937[2], i936.m_FirstGlyphAdjustments)
  i936.m_SecondGlyph = i937[3]
  i936.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i937[4], i936.m_SecondGlyphAdjustments)
  i936.m_IgnoreSpacingAdjustments = !!i937[5]
  return i936
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i939 = data
  var i941 = i939[0]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i941[i + 0]));
  }
  i938.m_GlyphPairAdjustmentRecords = i940
  return i938
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i945 = data
  i944.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i945[0], i944.m_FirstAdjustmentRecord)
  i944.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i945[1], i944.m_SecondAdjustmentRecord)
  i944.m_FeatureLookupFlags = i945[2]
  return i944
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i947 = data
  i946.m_GlyphIndex = i947[0]
  i946.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i947[1], i946.m_GlyphValueRecord)
  return i946
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i949 = data
  i948.m_XPlacement = i949[0]
  i948.m_YPlacement = i949[1]
  i948.m_XAdvance = i949[2]
  i948.m_YAdvance = i949[3]
  return i948
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i953 = data
  i952.sourceFontFileName = i953[0]
  i952.sourceFontFileGUID = i953[1]
  i952.pointSizeSamplingMode = i953[2]
  i952.pointSize = i953[3]
  i952.padding = i953[4]
  i952.packingMode = i953[5]
  i952.atlasWidth = i953[6]
  i952.atlasHeight = i953[7]
  i952.characterSetSelectionMode = i953[8]
  i952.characterSequence = i953[9]
  i952.referencedFontAssetGUID = i953[10]
  i952.referencedTextAssetGUID = i953[11]
  i952.fontStyle = i953[12]
  i952.fontStyleModifier = i953[13]
  i952.renderMode = i953[14]
  i952.includeFontFeatures = !!i953[15]
  return i952
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'regularTypeface')
  request.r(i957[2], i957[3], 0, i956, 'italicTypeface')
  return i956
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_Settings' )
  var i959 = data
  i958.m_enableWordWrapping = !!i959[0]
  i958.m_enableKerning = !!i959[1]
  i958.m_enableExtraPadding = !!i959[2]
  i958.m_enableTintAllSprites = !!i959[3]
  i958.m_enableParseEscapeCharacters = !!i959[4]
  i958.m_EnableRaycastTarget = !!i959[5]
  i958.m_GetFontFeaturesAtRuntime = !!i959[6]
  i958.m_missingGlyphCharacter = i959[7]
  i958.m_warningsDisabled = !!i959[8]
  request.r(i959[9], i959[10], 0, i958, 'm_defaultFontAsset')
  i958.m_defaultFontAssetPath = i959[11]
  i958.m_defaultFontSize = i959[12]
  i958.m_defaultAutoSizeMinRatio = i959[13]
  i958.m_defaultAutoSizeMaxRatio = i959[14]
  i958.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i959[15], i959[16] )
  i958.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i959[17], i959[18] )
  i958.m_autoSizeTextContainer = !!i959[19]
  i958.m_IsTextObjectScaleStatic = !!i959[20]
  var i961 = i959[21]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i958.m_fallbackFontAssets = i960
  i958.m_matchMaterialPreset = !!i959[22]
  request.r(i959[23], i959[24], 0, i958, 'm_defaultSpriteAsset')
  i958.m_defaultSpriteAssetPath = i959[25]
  i958.m_enableEmojiSupport = !!i959[26]
  i958.m_MissingCharacterSpriteUnicode = i959[27]
  i958.m_defaultColorGradientPresetsPath = i959[28]
  request.r(i959[29], i959[30], 0, i958, 'm_defaultStyleSheet')
  i958.m_StyleSheetsResourcePath = i959[31]
  request.r(i959[32], i959[33], 0, i958, 'm_leadingCharacters')
  request.r(i959[34], i959[35], 0, i958, 'm_followingCharacters')
  i958.m_UseModernHangulLineBreakingRules = !!i959[36]
  return i958
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i963 = data
  i962.hashCode = i963[0]
  request.r(i963[1], i963[2], 0, i962, 'material')
  i962.materialHashCode = i963[3]
  request.r(i963[4], i963[5], 0, i962, 'spriteSheet')
  var i965 = i963[6]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('TMPro.TMP_Sprite', i965[i + 0]));
  }
  i962.spriteInfoList = i964
  var i967 = i963[7]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i962.fallbackSpriteAssets = i966
  i962.m_Version = i963[8]
  i962.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i963[9], i962.m_FaceInfo)
  var i969 = i963[10]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('TMPro.TMP_SpriteCharacter', i969[i + 0]));
  }
  i962.m_SpriteCharacterTable = i968
  var i971 = i963[11]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('TMPro.TMP_SpriteGlyph', i971[i + 0]));
  }
  i962.m_SpriteGlyphTable = i970
  return i962
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_Sprite' )
  var i975 = data
  i974.name = i975[0]
  i974.hashCode = i975[1]
  i974.unicode = i975[2]
  i974.pivot = new pc.Vec2( i975[3], i975[4] )
  request.r(i975[5], i975[6], 0, i974, 'sprite')
  i974.id = i975[7]
  i974.x = i975[8]
  i974.y = i975[9]
  i974.width = i975[10]
  i974.height = i975[11]
  i974.xOffset = i975[12]
  i974.yOffset = i975[13]
  i974.xAdvance = i975[14]
  i974.scale = i975[15]
  return i974
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i981 = data
  i980.m_Name = i981[0]
  i980.m_HashCode = i981[1]
  i980.m_ElementType = i981[2]
  i980.m_Unicode = i981[3]
  i980.m_GlyphIndex = i981[4]
  i980.m_Scale = i981[5]
  return i980
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'sprite')
  i984.m_Index = i985[2]
  i984.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i985[3], i984.m_Metrics)
  i984.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i985[4], i984.m_GlyphRect)
  i984.m_Scale = i985[5]
  i984.m_AtlasIndex = i985[6]
  i984.m_ClassDefinitionType = i985[7]
  return i984
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('TMPro.TMP_Style', i989[i + 0]));
  }
  i986.m_StyleList = i988
  return i986
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_Style' )
  var i993 = data
  i992.m_Name = i993[0]
  i992.m_HashCode = i993[1]
  i992.m_OpeningDefinition = i993[2]
  i992.m_ClosingDefinition = i993[3]
  i992.m_OpeningTagArray = i993[4]
  i992.m_ClosingTagArray = i993[5]
  i992.m_OpeningTagUnicodeArray = i993[6]
  i992.m_ClosingTagUnicodeArray = i993[7]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i997[i + 0]) );
  }
  i994.files = i996
  i994.componentToPrefabIds = i995[1]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1001 = data
  i1000.path = i1001[0]
  request.r(i1001[1], i1001[2], 0, i1000, 'unityObject')
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1005[i + 0]) );
  }
  i1002.scriptsExecutionOrder = i1004
  var i1007 = i1003[1]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1007[i + 0]) );
  }
  i1002.sortingLayers = i1006
  var i1009 = i1003[2]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1009[i + 0]) );
  }
  i1002.cullingLayers = i1008
  i1002.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1003[3], i1002.timeSettings)
  i1002.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1003[4], i1002.physicsSettings)
  i1002.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1003[5], i1002.physics2DSettings)
  i1002.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1003[6], i1002.qualitySettings)
  i1002.enableRealtimeShadows = !!i1003[7]
  i1002.enableAutoInstancing = !!i1003[8]
  i1002.enableDynamicBatching = !!i1003[9]
  i1002.lightmapEncodingQuality = i1003[10]
  i1002.desiredColorSpace = i1003[11]
  var i1011 = i1003[12]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1002.allTags = i1010
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.value = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1019 = data
  i1018.id = i1019[0]
  i1018.name = i1019[1]
  i1018.value = i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1023 = data
  i1022.id = i1023[0]
  i1022.name = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1025 = data
  i1024.fixedDeltaTime = i1025[0]
  i1024.maximumDeltaTime = i1025[1]
  i1024.timeScale = i1025[2]
  i1024.maximumParticleTimestep = i1025[3]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1027 = data
  i1026.gravity = new pc.Vec3( i1027[0], i1027[1], i1027[2] )
  i1026.defaultSolverIterations = i1027[3]
  i1026.bounceThreshold = i1027[4]
  i1026.autoSyncTransforms = !!i1027[5]
  i1026.autoSimulation = !!i1027[6]
  var i1029 = i1027[7]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1029[i + 0]) );
  }
  i1026.collisionMatrix = i1028
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.layerId = i1033[1]
  i1032.otherLayerId = i1033[2]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'material')
  i1034.gravity = new pc.Vec2( i1035[2], i1035[3] )
  i1034.positionIterations = i1035[4]
  i1034.velocityIterations = i1035[5]
  i1034.velocityThreshold = i1035[6]
  i1034.maxLinearCorrection = i1035[7]
  i1034.maxAngularCorrection = i1035[8]
  i1034.maxTranslationSpeed = i1035[9]
  i1034.maxRotationSpeed = i1035[10]
  i1034.baumgarteScale = i1035[11]
  i1034.baumgarteTOIScale = i1035[12]
  i1034.timeToSleep = i1035[13]
  i1034.linearSleepTolerance = i1035[14]
  i1034.angularSleepTolerance = i1035[15]
  i1034.defaultContactOffset = i1035[16]
  i1034.autoSimulation = !!i1035[17]
  i1034.queriesHitTriggers = !!i1035[18]
  i1034.queriesStartInColliders = !!i1035[19]
  i1034.callbacksOnDisable = !!i1035[20]
  i1034.reuseCollisionCallbacks = !!i1035[21]
  i1034.autoSyncTransforms = !!i1035[22]
  var i1037 = i1035[23]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1037[i + 0]) );
  }
  i1034.collisionMatrix = i1036
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.layerId = i1041[1]
  i1040.otherLayerId = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1045[i + 0]) );
  }
  i1042.qualityLevels = i1044
  var i1047 = i1043[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1042.names = i1046
  i1042.shadows = i1043[2]
  i1042.anisotropicFiltering = i1043[3]
  i1042.antiAliasing = i1043[4]
  i1042.lodBias = i1043[5]
  i1042.shadowCascades = i1043[6]
  i1042.shadowDistance = i1043[7]
  i1042.shadowmaskMode = i1043[8]
  i1042.shadowProjection = i1043[9]
  i1042.shadowResolution = i1043[10]
  i1042.softParticles = !!i1043[11]
  i1042.softVegetation = !!i1043[12]
  i1042.activeColorSpace = i1043[13]
  i1042.desiredColorSpace = i1043[14]
  i1042.masterTextureLimit = i1043[15]
  i1042.maxQueuedFrames = i1043[16]
  i1042.particleRaycastBudget = i1043[17]
  i1042.pixelLightCount = i1043[18]
  i1042.realtimeReflectionProbes = !!i1043[19]
  i1042.shadowCascade2Split = i1043[20]
  i1042.shadowCascade4Split = new pc.Vec3( i1043[21], i1043[22], i1043[23] )
  i1042.streamingMipmapsActive = !!i1043[24]
  i1042.vSyncCount = i1043[25]
  i1042.asyncUploadBufferSize = i1043[26]
  i1042.asyncUploadTimeSlice = i1043[27]
  i1042.billboardsFaceCameraPosition = !!i1043[28]
  i1042.shadowNearPlaneOffset = i1043[29]
  i1042.streamingMipmapsMemoryBudget = i1043[30]
  i1042.maximumLODLevel = i1043[31]
  i1042.streamingMipmapsAddAllCameras = !!i1043[32]
  i1042.streamingMipmapsMaxLevelReduction = i1043[33]
  i1042.streamingMipmapsRenderersPerFrame = i1043[34]
  i1042.resolutionScalingFixedDPIFactor = i1043[35]
  i1042.streamingMipmapsMaxFileIORequests = i1043[36]
  i1042.currentQualityLevel = i1043[37]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1053 = data
  i1052.weight = i1053[0]
  i1052.vertices = i1053[1]
  i1052.normals = i1053[2]
  i1052.tangents = i1053[3]
  return i1052
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1055 = data
  i1054.xPlacement = i1055[0]
  i1054.yPlacement = i1055[1]
  i1054.xAdvance = i1055[2]
  i1054.yAdvance = i1055[3]
  return i1054
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"22":[23],"50":[10],"51":[13],"52":[13],"17":[13],"53":[13],"54":[13],"55":[13],"56":[13],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[10],"72":[5],"73":[74],"75":[74],"76":[33],"77":[33],"31":[5,33],"78":[33,79],"80":[33],"81":[79,33],"82":[5],"83":[79,33],"84":[33],"85":[33],"86":[33],"87":[76],"88":[79,33],"89":[33],"90":[76],"91":[33],"92":[33],"93":[33],"94":[33],"95":[33],"96":[33],"97":[33],"98":[33],"99":[33],"100":[79,33],"101":[33],"102":[33],"103":[33],"104":[33],"105":[79,33],"106":[33],"107":[108],"109":[108],"110":[108],"111":[108],"112":[10],"113":[10]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.SphereCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.RenderTexture","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","UnityEngine.MonoBehaviour","Ball","UnityEngine.HingeJoint","UnityEngine.CapsuleCollider","Ring","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","DunkTrigger","UnityEngine.AudioListener","Floor","UnityEngine.Light","BasketballThrower","ScoreManager","TMPro.TextMeshPro","UnityEngine.Animation","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.AnimationClip","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","TMPro.TextContainer","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2021.3.45f1";

Deserializers.productName = "Basketball 3";

Deserializers.lunaInitializationTime = "08/07/2025 11:36:26";

Deserializers.lunaDaysRunning = "0.2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1679";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4049";

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

Deserializers.buildID = "348c987f-3d62-46a8-a705-0ebe26e6a0f8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

