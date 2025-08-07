var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSpring' )
  var i473 = data
  i472.spring = i473[0]
  i472.damper = i473[1]
  i472.targetPosition = i473[2]
  return i472
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor' )
  var i475 = data
  i474.m_TargetVelocity = i475[0]
  i474.m_Force = i475[1]
  i474.m_FreeSpin = i475[2]
  return i474
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointLimits' )
  var i477 = data
  i476.m_Min = i477[0]
  i476.m_Max = i477[1]
  i476.m_Bounciness = i477[2]
  i476.m_BounceMinVelocity = i477[3]
  i476.m_ContactDistance = i477[4]
  i476.minBounce = i477[5]
  i476.maxBounce = i477[6]
  return i476
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointDrive' )
  var i479 = data
  i478.m_PositionSpring = i479[0]
  i478.m_PositionDamper = i479[1]
  i478.m_MaximumForce = i479[2]
  return i478
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i481 = data
  i480.m_Spring = i481[0]
  i480.m_Damper = i481[1]
  return i480
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i483 = data
  i482.m_Limit = i483[0]
  i482.m_Bounciness = i483[1]
  i482.m_ContactDistance = i483[2]
  return i482
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i485 = data
  i484.m_ExtremumSlip = i485[0]
  i484.m_ExtremumValue = i485[1]
  i484.m_AsymptoteSlip = i485[2]
  i484.m_AsymptoteValue = i485[3]
  i484.m_Stiffness = i485[4]
  return i484
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i487 = data
  i486.m_LowerAngle = i487[0]
  i486.m_UpperAngle = i487[1]
  return i486
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i489 = data
  i488.m_MotorSpeed = i489[0]
  i488.m_MaximumMotorTorque = i489[1]
  return i488
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i491 = data
  i490.m_DampingRatio = i491[0]
  i490.m_Frequency = i491[1]
  i490.m_Angle = i491[2]
  return i490
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i493 = data
  i492.m_LowerTranslation = i493[0]
  i492.m_UpperTranslation = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i495 = data
  i494.name = i495[0]
  i494.halfPrecision = !!i495[1]
  i494.useUInt32IndexFormat = !!i495[2]
  i494.vertexCount = i495[3]
  i494.aabb = i495[4]
  var i497 = i495[5]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( !!i497[i + 0] );
  }
  i494.streams = i496
  i494.vertices = i495[6]
  var i499 = i495[7]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i499[i + 0]) );
  }
  i494.subMeshes = i498
  var i501 = i495[8]
  var i500 = []
  for(var i = 0; i < i501.length; i += 16) {
    i500.push( new pc.Mat4().setData(i501[i + 0], i501[i + 1], i501[i + 2], i501[i + 3],  i501[i + 4], i501[i + 5], i501[i + 6], i501[i + 7],  i501[i + 8], i501[i + 9], i501[i + 10], i501[i + 11],  i501[i + 12], i501[i + 13], i501[i + 14], i501[i + 15]) );
  }
  i494.bindposes = i500
  var i503 = i495[9]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i503[i + 0]) );
  }
  i494.blendShapes = i502
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i509 = data
  i508.triangles = i509[0]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i515 = data
  i514.name = i515[0]
  var i517 = i515[1]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i517[i + 0]) );
  }
  i514.frames = i516
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i518 = root || new pc.UnityMaterial()
  var i519 = data
  i518.name = i519[0]
  request.r(i519[1], i519[2], 0, i518, 'shader')
  i518.renderQueue = i519[3]
  i518.enableInstancing = !!i519[4]
  var i521 = i519[5]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i521[i + 0]) );
  }
  i518.floatParameters = i520
  var i523 = i519[6]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i523[i + 0]) );
  }
  i518.colorParameters = i522
  var i525 = i519[7]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i525[i + 0]) );
  }
  i518.vectorParameters = i524
  var i527 = i519[8]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i527[i + 0]) );
  }
  i518.textureParameters = i526
  var i529 = i519[9]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i529[i + 0]) );
  }
  i518.materialFlags = i528
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i533 = data
  i532.name = i533[0]
  i532.value = i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i537 = data
  i536.name = i537[0]
  i536.value = new pc.Color(i537[1], i537[2], i537[3], i537[4])
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i541 = data
  i540.name = i541[0]
  i540.value = new pc.Vec4( i541[1], i541[2], i541[3], i541[4] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i545 = data
  i544.name = i545[0]
  request.r(i545[1], i545[2], 0, i544, 'value')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i549 = data
  i548.name = i549[0]
  i548.enabled = !!i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i551 = data
  i550.name = i551[0]
  i550.width = i551[1]
  i550.height = i551[2]
  i550.mipmapCount = i551[3]
  i550.anisoLevel = i551[4]
  i550.filterMode = i551[5]
  i550.hdr = !!i551[6]
  i550.format = i551[7]
  i550.wrapMode = i551[8]
  i550.alphaIsTransparency = !!i551[9]
  i550.alphaSource = i551[10]
  i550.graphicsFormat = i551[11]
  i550.sRGBTexture = !!i551[12]
  i550.desiredColorSpace = i551[13]
  i550.wrapU = i551[14]
  i550.wrapV = i551[15]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i553 = data
  i552.name = i553[0]
  i552.width = i553[1]
  i552.height = i553[2]
  i552.anisoLevel = i553[3]
  i552.filterMode = i553[4]
  i552.hdr = !!i553[5]
  i552.colorFormat = i553[6]
  i552.depthStencilFormat = i553[7]
  i552.renderTextureFormat = i553[8]
  i552.depth = i553[9]
  i552.wrapU = i553[10]
  i552.wrapV = i553[11]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i555 = data
  i554.name = i555[0]
  i554.atlasId = i555[1]
  i554.mipmapCount = i555[2]
  i554.hdr = !!i555[3]
  i554.size = i555[4]
  i554.anisoLevel = i555[5]
  i554.filterMode = i555[6]
  var i557 = i555[7]
  var i556 = []
  for(var i = 0; i < i557.length; i += 4) {
    i556.push( UnityEngine.Rect.MinMaxRect(i557[i + 0], i557[i + 1], i557[i + 2], i557[i + 3]) );
  }
  i554.rects = i556
  i554.wrapU = i555[8]
  i554.wrapV = i555[9]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i561 = data
  i560.name = i561[0]
  i560.index = i561[1]
  i560.startup = !!i561[2]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i563 = data
  i562.position = new pc.Vec3( i563[0], i563[1], i563[2] )
  i562.scale = new pc.Vec3( i563[3], i563[4], i563[5] )
  i562.rotation = new pc.Quat(i563[6], i563[7], i563[8], i563[9])
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'sharedMesh')
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'additionalVertexStreams')
  i566.enabled = !!i567[2]
  request.r(i567[3], i567[4], 0, i566, 'sharedMaterial')
  var i569 = i567[5]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.sharedMaterials = i568
  i566.receiveShadows = !!i567[6]
  i566.shadowCastingMode = i567[7]
  i566.sortingLayerID = i567[8]
  i566.sortingOrder = i567[9]
  i566.lightmapIndex = i567[10]
  i566.lightmapSceneIndex = i567[11]
  i566.lightmapScaleOffset = new pc.Vec4( i567[12], i567[13], i567[14], i567[15] )
  i566.lightProbeUsage = i567[16]
  i566.reflectionProbeUsage = i567[17]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i573 = data
  i572.name = i573[0]
  i572.tagId = i573[1]
  i572.enabled = !!i573[2]
  i572.isStatic = !!i573[3]
  i572.layer = i573[4]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i575 = data
  i574.enabled = !!i575[0]
  i574.isTrigger = !!i575[1]
  request.r(i575[2], i575[3], 0, i574, 'material')
  i574.center = new pc.Vec3( i575[4], i575[5], i575[6] )
  i574.radius = i575[7]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i577 = data
  i576.enabled = !!i577[0]
  request.r(i577[1], i577[2], 0, i576, 'sharedMaterial')
  var i579 = i577[3]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.sharedMaterials = i578
  i576.receiveShadows = !!i577[4]
  i576.shadowCastingMode = i577[5]
  i576.sortingLayerID = i577[6]
  i576.sortingOrder = i577[7]
  i576.lightmapIndex = i577[8]
  i576.lightmapSceneIndex = i577[9]
  i576.lightmapScaleOffset = new pc.Vec4( i577[10], i577[11], i577[12], i577[13] )
  i576.lightProbeUsage = i577[14]
  i576.reflectionProbeUsage = i577[15]
  i576.color = new pc.Color(i577[16], i577[17], i577[18], i577[19])
  request.r(i577[20], i577[21], 0, i576, 'sprite')
  i576.flipX = !!i577[22]
  i576.flipY = !!i577[23]
  i576.drawMode = i577[24]
  i576.size = new pc.Vec2( i577[25], i577[26] )
  i576.tileMode = i577[27]
  i576.adaptiveModeThreshold = i577[28]
  i576.maskInteraction = i577[29]
  i576.spriteSortPoint = i577[30]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i581 = data
  i580.enabled = !!i581[0]
  i580.aspect = i581[1]
  i580.orthographic = !!i581[2]
  i580.orthographicSize = i581[3]
  i580.backgroundColor = new pc.Color(i581[4], i581[5], i581[6], i581[7])
  i580.nearClipPlane = i581[8]
  i580.farClipPlane = i581[9]
  i580.fieldOfView = i581[10]
  i580.depth = i581[11]
  i580.clearFlags = i581[12]
  i580.cullingMask = i581[13]
  i580.rect = i581[14]
  request.r(i581[15], i581[16], 0, i580, 'targetTexture')
  i580.usePhysicalProperties = !!i581[17]
  i580.focalLength = i581[18]
  i580.sensorSize = new pc.Vec2( i581[19], i581[20] )
  i580.lensShift = new pc.Vec2( i581[21], i581[22] )
  i580.gateFit = i581[23]
  i580.commandBufferCount = i581[24]
  i580.cameraType = i581[25]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i583 = data
  i582.mass = i583[0]
  i582.drag = i583[1]
  i582.angularDrag = i583[2]
  i582.useGravity = !!i583[3]
  i582.isKinematic = !!i583[4]
  i582.constraints = i583[5]
  i582.maxAngularVelocity = i583[6]
  i582.collisionDetectionMode = i583[7]
  i582.interpolation = i583[8]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i585 = data
  i584.enabled = !!i585[0]
  request.r(i585[1], i585[2], 0, i584, 'sharedMaterial')
  var i587 = i585[3]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.sharedMaterials = i586
  i584.receiveShadows = !!i585[4]
  i584.shadowCastingMode = i585[5]
  i584.sortingLayerID = i585[6]
  i584.sortingOrder = i585[7]
  i584.lightmapIndex = i585[8]
  i584.lightmapSceneIndex = i585[9]
  i584.lightmapScaleOffset = new pc.Vec4( i585[10], i585[11], i585[12], i585[13] )
  i584.lightProbeUsage = i585[14]
  i584.reflectionProbeUsage = i585[15]
  var i589 = i585[16]
  var i588 = []
  for(var i = 0; i < i589.length; i += 3) {
    i588.push( new pc.Vec3( i589[i + 0], i589[i + 1], i589[i + 2] ) );
  }
  i584.positions = i588
  i584.positionCount = i585[17]
  i584.time = i585[18]
  i584.startWidth = i585[19]
  i584.endWidth = i585[20]
  i584.widthMultiplier = i585[21]
  i584.autodestruct = !!i585[22]
  i584.emitting = !!i585[23]
  i584.numCornerVertices = i585[24]
  i584.numCapVertices = i585[25]
  i584.minVertexDistance = i585[26]
  i584.colorGradient = i585[27] ? new pc.ColorGradient(i585[27][0], i585[27][1], i585[27][2]) : null
  i584.startColor = new pc.Color(i585[28], i585[29], i585[30], i585[31])
  i584.endColor = new pc.Color(i585[32], i585[33], i585[34], i585[35])
  i584.generateLightingData = !!i585[36]
  i584.textureMode = i585[37]
  i584.alignment = i585[38]
  i584.widthCurve = new pc.AnimationCurve( { keys_flow: i585[39] } )
  return i584
}

Deserializers["Ball"] = function (request, data, root) {
  var i592 = root || request.c( 'Ball' )
  var i593 = data
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i595 = data
  i594.useMotor = !!i595[0]
  i594.useLimits = !!i595[1]
  i594.useSpring = !!i595[2]
  i594.limits = request.d('UnityEngine.JointLimits', i595[3], i594.limits)
  i594.motor = request.d('UnityEngine.JointMotor', i595[4], i594.motor)
  i594.spring = request.d('UnityEngine.JointSpring', i595[5], i594.spring)
  request.r(i595[6], i595[7], 0, i594, 'connectedBody')
  i594.axis = new pc.Vec3( i595[8], i595[9], i595[10] )
  i594.anchor = new pc.Vec3( i595[11], i595[12], i595[13] )
  i594.connectedAnchor = new pc.Vec3( i595[14], i595[15], i595[16] )
  i594.autoConfigureConnectedAnchor = !!i595[17]
  i594.massScale = i595[18]
  i594.connectedMassScale = i595[19]
  i594.enableCollision = !!i595[20]
  i594.breakForce = i595[21]
  i594.breakTorque = i595[22]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i597 = data
  i596.center = new pc.Vec3( i597[0], i597[1], i597[2] )
  i596.radius = i597[3]
  i596.height = i597[4]
  i596.direction = i597[5]
  i596.enabled = !!i597[6]
  i596.isTrigger = !!i597[7]
  request.r(i597[8], i597[9], 0, i596, 'material')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i599 = data
  i598.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i599[0], i598.main)
  i598.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i599[1], i598.colorBySpeed)
  i598.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i599[2], i598.colorOverLifetime)
  i598.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i599[3], i598.emission)
  i598.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i599[4], i598.rotationBySpeed)
  i598.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i599[5], i598.rotationOverLifetime)
  i598.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i599[6], i598.shape)
  i598.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i599[7], i598.sizeBySpeed)
  i598.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i599[8], i598.sizeOverLifetime)
  i598.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i599[9], i598.textureSheetAnimation)
  i598.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i599[10], i598.velocityOverLifetime)
  i598.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i599[11], i598.noise)
  i598.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i599[12], i598.inheritVelocity)
  i598.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i599[13], i598.forceOverLifetime)
  i598.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i599[14], i598.limitVelocityOverLifetime)
  i598.useAutoRandomSeed = !!i599[15]
  i598.randomSeed = i599[16]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemMain()
  var i601 = data
  i600.duration = i601[0]
  i600.loop = !!i601[1]
  i600.prewarm = !!i601[2]
  i600.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.startDelay)
  i600.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[4], i600.startLifetime)
  i600.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[5], i600.startSpeed)
  i600.startSize3D = !!i601[6]
  i600.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[7], i600.startSizeX)
  i600.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[8], i600.startSizeY)
  i600.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[9], i600.startSizeZ)
  i600.startRotation3D = !!i601[10]
  i600.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[11], i600.startRotationX)
  i600.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[12], i600.startRotationY)
  i600.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[13], i600.startRotationZ)
  i600.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i601[14], i600.startColor)
  i600.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[15], i600.gravityModifier)
  i600.simulationSpace = i601[16]
  request.r(i601[17], i601[18], 0, i600, 'customSimulationSpace')
  i600.simulationSpeed = i601[19]
  i600.useUnscaledTime = !!i601[20]
  i600.scalingMode = i601[21]
  i600.playOnAwake = !!i601[22]
  i600.maxParticles = i601[23]
  i600.emitterVelocityMode = i601[24]
  i600.stopAction = i601[25]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i602 = root || new pc.MinMaxCurve()
  var i603 = data
  i602.mode = i603[0]
  i602.curveMin = new pc.AnimationCurve( { keys_flow: i603[1] } )
  i602.curveMax = new pc.AnimationCurve( { keys_flow: i603[2] } )
  i602.curveMultiplier = i603[3]
  i602.constantMin = i603[4]
  i602.constantMax = i603[5]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i604 = root || new pc.MinMaxGradient()
  var i605 = data
  i604.mode = i605[0]
  i604.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i605[1], i604.gradientMin)
  i604.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i605[2], i604.gradientMax)
  i604.colorMin = new pc.Color(i605[3], i605[4], i605[5], i605[6])
  i604.colorMax = new pc.Color(i605[7], i605[8], i605[9], i605[10])
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i607 = data
  i606.mode = i607[0]
  var i609 = i607[1]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i609[i + 0]) );
  }
  i606.colorKeys = i608
  var i611 = i607[2]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i611[i + 0]) );
  }
  i606.alphaKeys = i610
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemColorBySpeed()
  var i613 = data
  i612.enabled = !!i613[0]
  i612.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i613[1], i612.color)
  i612.range = new pc.Vec2( i613[2], i613[3] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i617 = data
  i616.color = new pc.Color(i617[0], i617[1], i617[2], i617[3])
  i616.time = i617[4]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i621 = data
  i620.alpha = i621[0]
  i620.time = i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemColorOverLifetime()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i623[1], i622.color)
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemEmitter()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[1], i624.rateOverTime)
  i624.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[2], i624.rateOverDistance)
  var i627 = i625[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i627[i + 0]) );
  }
  i624.bursts = i626
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemBurst()
  var i631 = data
  i630.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[0], i630.count)
  i630.cycleCount = i631[1]
  i630.minCount = i631[2]
  i630.maxCount = i631[3]
  i630.repeatInterval = i631[4]
  i630.time = i631[5]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemRotationBySpeed()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[1], i632.x)
  i632.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[2], i632.y)
  i632.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[3], i632.z)
  i632.separateAxes = !!i633[4]
  i632.range = new pc.Vec2( i633[5], i633[6] )
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemRotationOverLifetime()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[1], i634.x)
  i634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[2], i634.y)
  i634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[3], i634.z)
  i634.separateAxes = !!i635[4]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemShape()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.shapeType = i637[1]
  i636.randomDirectionAmount = i637[2]
  i636.sphericalDirectionAmount = i637[3]
  i636.randomPositionAmount = i637[4]
  i636.alignToDirection = !!i637[5]
  i636.radius = i637[6]
  i636.radiusMode = i637[7]
  i636.radiusSpread = i637[8]
  i636.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[9], i636.radiusSpeed)
  i636.radiusThickness = i637[10]
  i636.angle = i637[11]
  i636.length = i637[12]
  i636.boxThickness = new pc.Vec3( i637[13], i637[14], i637[15] )
  i636.meshShapeType = i637[16]
  request.r(i637[17], i637[18], 0, i636, 'mesh')
  request.r(i637[19], i637[20], 0, i636, 'meshRenderer')
  request.r(i637[21], i637[22], 0, i636, 'skinnedMeshRenderer')
  i636.useMeshMaterialIndex = !!i637[23]
  i636.meshMaterialIndex = i637[24]
  i636.useMeshColors = !!i637[25]
  i636.normalOffset = i637[26]
  i636.arc = i637[27]
  i636.arcMode = i637[28]
  i636.arcSpread = i637[29]
  i636.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[30], i636.arcSpeed)
  i636.donutRadius = i637[31]
  i636.position = new pc.Vec3( i637[32], i637[33], i637[34] )
  i636.rotation = new pc.Vec3( i637[35], i637[36], i637[37] )
  i636.scale = new pc.Vec3( i637[38], i637[39], i637[40] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemSizeBySpeed()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[1], i638.x)
  i638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.y)
  i638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.z)
  i638.separateAxes = !!i639[4]
  i638.range = new pc.Vec2( i639[5], i639[6] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemSizeOverLifetime()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[1], i640.x)
  i640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.y)
  i640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.z)
  i640.separateAxes = !!i641[4]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.mode = i643[1]
  i642.animation = i643[2]
  i642.numTilesX = i643[3]
  i642.numTilesY = i643[4]
  i642.useRandomRow = !!i643[5]
  i642.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[6], i642.frameOverTime)
  i642.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[7], i642.startFrame)
  i642.cycleCount = i643[8]
  i642.rowIndex = i643[9]
  i642.flipU = i643[10]
  i642.flipV = i643[11]
  i642.spriteCount = i643[12]
  var i645 = i643[13]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i642.sprites = i644
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[1], i648.x)
  i648.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.y)
  i648.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[3], i648.z)
  i648.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[4], i648.radial)
  i648.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[5], i648.speedModifier)
  i648.space = i649[6]
  i648.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[7], i648.orbitalX)
  i648.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[8], i648.orbitalY)
  i648.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[9], i648.orbitalZ)
  i648.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[10], i648.orbitalOffsetX)
  i648.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[11], i648.orbitalOffsetY)
  i648.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[12], i648.orbitalOffsetZ)
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemNoise()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.separateAxes = !!i651[1]
  i650.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.strengthX)
  i650.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.strengthY)
  i650.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[4], i650.strengthZ)
  i650.frequency = i651[5]
  i650.damping = !!i651[6]
  i650.octaveCount = i651[7]
  i650.octaveMultiplier = i651[8]
  i650.octaveScale = i651[9]
  i650.quality = i651[10]
  i650.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[11], i650.scrollSpeed)
  i650.scrollSpeedMultiplier = i651[12]
  i650.remapEnabled = !!i651[13]
  i650.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[14], i650.remapX)
  i650.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[15], i650.remapY)
  i650.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[16], i650.remapZ)
  i650.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[17], i650.positionAmount)
  i650.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[18], i650.rotationAmount)
  i650.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[19], i650.sizeAmount)
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemInheritVelocity()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.mode = i653[1]
  i652.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.curve)
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemForceOverLifetime()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[1], i654.x)
  i654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[2], i654.y)
  i654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[3], i654.z)
  i654.space = i655[4]
  i654.randomized = !!i655[5]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.limit)
  i656.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.limitX)
  i656.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.limitY)
  i656.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[4], i656.limitZ)
  i656.dampen = i657[5]
  i656.separateAxes = !!i657[6]
  i656.space = i657[7]
  i656.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[8], i656.drag)
  i656.multiplyDragByParticleSize = !!i657[9]
  i656.multiplyDragByParticleVelocity = !!i657[10]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i659 = data
  i658.enabled = !!i659[0]
  request.r(i659[1], i659[2], 0, i658, 'sharedMaterial')
  var i661 = i659[3]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i658.sharedMaterials = i660
  i658.receiveShadows = !!i659[4]
  i658.shadowCastingMode = i659[5]
  i658.sortingLayerID = i659[6]
  i658.sortingOrder = i659[7]
  i658.lightmapIndex = i659[8]
  i658.lightmapSceneIndex = i659[9]
  i658.lightmapScaleOffset = new pc.Vec4( i659[10], i659[11], i659[12], i659[13] )
  i658.lightProbeUsage = i659[14]
  i658.reflectionProbeUsage = i659[15]
  request.r(i659[16], i659[17], 0, i658, 'mesh')
  i658.meshCount = i659[18]
  i658.activeVertexStreamsCount = i659[19]
  i658.alignment = i659[20]
  i658.renderMode = i659[21]
  i658.sortMode = i659[22]
  i658.lengthScale = i659[23]
  i658.velocityScale = i659[24]
  i658.cameraVelocityScale = i659[25]
  i658.normalDirection = i659[26]
  i658.sortingFudge = i659[27]
  i658.minParticleSize = i659[28]
  i658.maxParticleSize = i659[29]
  i658.pivot = new pc.Vec3( i659[30], i659[31], i659[32] )
  request.r(i659[33], i659[34], 0, i658, 'trailMaterial')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i663 = data
  i662.enabled = !!i663[0]
  request.r(i663[1], i663[2], 0, i662, 'sharedMaterial')
  var i665 = i663[3]
  var i664 = []
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 2, i664, '')
  }
  i662.sharedMaterials = i664
  i662.receiveShadows = !!i663[4]
  i662.shadowCastingMode = i663[5]
  i662.sortingLayerID = i663[6]
  i662.sortingOrder = i663[7]
  i662.lightmapIndex = i663[8]
  i662.lightmapSceneIndex = i663[9]
  i662.lightmapScaleOffset = new pc.Vec4( i663[10], i663[11], i663[12], i663[13] )
  i662.lightProbeUsage = i663[14]
  i662.reflectionProbeUsage = i663[15]
  request.r(i663[16], i663[17], 0, i662, 'sharedMesh')
  var i667 = i663[18]
  var i666 = []
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 2, i666, '')
  }
  i662.bones = i666
  i662.updateWhenOffscreen = !!i663[19]
  i662.localBounds = i663[20]
  request.r(i663[21], i663[22], 0, i662, 'rootBone')
  var i669 = i663[23]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i669[i + 0]) );
  }
  i662.blendShapesWeights = i668
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i675 = data
  i674.weight = i675[0]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i677 = data
  i676.center = new pc.Vec3( i677[0], i677[1], i677[2] )
  i676.size = new pc.Vec3( i677[3], i677[4], i677[5] )
  i676.enabled = !!i677[6]
  i676.isTrigger = !!i677[7]
  request.r(i677[8], i677[9], 0, i676, 'material')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i679 = data
  i678.enabled = !!i679[0]
  i678.type = i679[1]
  i678.color = new pc.Color(i679[2], i679[3], i679[4], i679[5])
  i678.cullingMask = i679[6]
  i678.intensity = i679[7]
  i678.range = i679[8]
  i678.spotAngle = i679[9]
  i678.shadows = i679[10]
  i678.shadowNormalBias = i679[11]
  i678.shadowBias = i679[12]
  i678.shadowStrength = i679[13]
  i678.shadowResolution = i679[14]
  i678.lightmapBakeType = i679[15]
  i678.renderMode = i679[16]
  request.r(i679[17], i679[18], 0, i678, 'cookie')
  i678.cookieSize = i679[19]
  return i678
}

Deserializers["BasketballThrower"] = function (request, data, root) {
  var i680 = root || request.c( 'BasketballThrower' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'hoopTargetPoint')
  i680.throwForceMultiplier = i681[2]
  i680.minApexHeightOffset = i681[3]
  i680.maxApexHeightOffset = i681[4]
  i680.horizontalAimScale = i681[5]
  i680.dragSpeedThreshold = i681[6]
  i680.moveSpeed = i681[7]
  i680.dragSpeedCheckInterval = i681[8]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i683 = data
  i682.ambientIntensity = i683[0]
  i682.reflectionIntensity = i683[1]
  i682.ambientMode = i683[2]
  i682.ambientLight = new pc.Color(i683[3], i683[4], i683[5], i683[6])
  i682.ambientSkyColor = new pc.Color(i683[7], i683[8], i683[9], i683[10])
  i682.ambientGroundColor = new pc.Color(i683[11], i683[12], i683[13], i683[14])
  i682.ambientEquatorColor = new pc.Color(i683[15], i683[16], i683[17], i683[18])
  i682.fogColor = new pc.Color(i683[19], i683[20], i683[21], i683[22])
  i682.fogEndDistance = i683[23]
  i682.fogStartDistance = i683[24]
  i682.fogDensity = i683[25]
  i682.fog = !!i683[26]
  request.r(i683[27], i683[28], 0, i682, 'skybox')
  i682.fogMode = i683[29]
  var i685 = i683[30]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i685[i + 0]) );
  }
  i682.lightmaps = i684
  i682.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i683[31], i682.lightProbes)
  i682.lightmapsMode = i683[32]
  i682.mixedBakeMode = i683[33]
  i682.environmentLightingMode = i683[34]
  i682.ambientProbe = new pc.SphericalHarmonicsL2(i683[35])
  i682.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i683[36])
  i682.useReferenceAmbientProbe = !!i683[37]
  request.r(i683[38], i683[39], 0, i682, 'customReflection')
  request.r(i683[40], i683[41], 0, i682, 'defaultReflection')
  i682.defaultReflectionMode = i683[42]
  i682.defaultReflectionResolution = i683[43]
  i682.sunLightObjectId = i683[44]
  i682.pixelLightCount = i683[45]
  i682.defaultReflectionHDR = !!i683[46]
  i682.hasLightDataAsset = !!i683[47]
  i682.hasManualGenerate = !!i683[48]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'lightmapColor')
  request.r(i689[2], i689[3], 0, i688, 'lightmapDirection')
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i690 = root || new UnityEngine.LightProbes()
  var i691 = data
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i697 = data
  i696.name = i697[0]
  i696.bounciness = i697[1]
  i696.dynamicFriction = i697[2]
  i696.staticFriction = i697[3]
  i696.frictionCombine = i697[4]
  i696.bounceCombine = i697[5]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i699 = data
  var i701 = i699[0]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i701.length; i += 1) {
    i700.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i701[i + 0]));
  }
  i698.ShaderCompilationErrors = i700
  i698.name = i699[1]
  i698.guid = i699[2]
  var i703 = i699[3]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i698.shaderDefinedKeywords = i702
  var i705 = i699[4]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i705[i + 0]) );
  }
  i698.passes = i704
  var i707 = i699[5]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i707[i + 0]) );
  }
  i698.usePasses = i706
  var i709 = i699[6]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i709[i + 0]) );
  }
  i698.defaultParameterValues = i708
  request.r(i699[7], i699[8], 0, i698, 'unityFallbackShader')
  i698.readDepth = !!i699[9]
  i698.isCreatedByShaderGraph = !!i699[10]
  i698.compiled = !!i699[11]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i713 = data
  i712.shaderName = i713[0]
  i712.errorMessage = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i718 = root || new pc.UnityShaderPass()
  var i719 = data
  i718.id = i719[0]
  i718.subShaderIndex = i719[1]
  i718.name = i719[2]
  i718.passType = i719[3]
  i718.grabPassTextureName = i719[4]
  i718.usePass = !!i719[5]
  i718.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[6], i718.zTest)
  i718.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[7], i718.zWrite)
  i718.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[8], i718.culling)
  i718.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i719[9], i718.blending)
  i718.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i719[10], i718.alphaBlending)
  i718.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[11], i718.colorWriteMask)
  i718.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[12], i718.offsetUnits)
  i718.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[13], i718.offsetFactor)
  i718.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[14], i718.stencilRef)
  i718.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[15], i718.stencilReadMask)
  i718.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[16], i718.stencilWriteMask)
  i718.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i719[17], i718.stencilOp)
  i718.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i719[18], i718.stencilOpFront)
  i718.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i719[19], i718.stencilOpBack)
  var i721 = i719[20]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i721[i + 0]) );
  }
  i718.tags = i720
  var i723 = i719[21]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( i723[i + 0] );
  }
  i718.passDefinedKeywords = i722
  var i725 = i719[22]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i725[i + 0]) );
  }
  i718.passDefinedKeywordGroups = i724
  var i727 = i719[23]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i727[i + 0]) );
  }
  i718.variants = i726
  var i729 = i719[24]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i729[i + 0]) );
  }
  i718.excludedVariants = i728
  i718.hasDepthReader = !!i719[25]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i731 = data
  i730.val = i731[0]
  i730.name = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i733 = data
  i732.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[0], i732.src)
  i732.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[1], i732.dst)
  i732.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[2], i732.op)
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i735 = data
  i734.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[0], i734.pass)
  i734.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[1], i734.fail)
  i734.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[2], i734.zFail)
  i734.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[3], i734.comp)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i739 = data
  i738.name = i739[0]
  i738.value = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i743 = data
  var i745 = i743[0]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i742.keywords = i744
  i742.hasDiscard = !!i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i749 = data
  i748.passId = i749[0]
  i748.subShaderIndex = i749[1]
  var i751 = i749[2]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i748.keywords = i750
  i748.vertexProgram = i749[3]
  i748.fragmentProgram = i749[4]
  i748.exportedForWebGl2 = !!i749[5]
  i748.readDepth = !!i749[6]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'shader')
  i754.pass = i755[2]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i759 = data
  i758.name = i759[0]
  i758.type = i759[1]
  i758.value = new pc.Vec4( i759[2], i759[3], i759[4], i759[5] )
  i758.textureValue = i759[6]
  i758.shaderPropertyFlag = i759[7]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i761 = data
  i760.name = i761[0]
  request.r(i761[1], i761[2], 0, i760, 'texture')
  i760.aabb = i761[3]
  i760.vertices = i761[4]
  i760.triangles = i761[5]
  i760.textureRect = UnityEngine.Rect.MinMaxRect(i761[6], i761[7], i761[8], i761[9])
  i760.packedRect = UnityEngine.Rect.MinMaxRect(i761[10], i761[11], i761[12], i761[13])
  i760.border = new pc.Vec4( i761[14], i761[15], i761[16], i761[17] )
  i760.transparency = i761[18]
  i760.bounds = i761[19]
  i760.pixelsPerUnit = i761[20]
  i760.textureWidth = i761[21]
  i760.textureHeight = i761[22]
  i760.nativeSize = new pc.Vec2( i761[23], i761[24] )
  i760.pivot = new pc.Vec2( i761[25], i761[26] )
  i760.textureRectOffset = new pc.Vec2( i761[27], i761[28] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i763 = data
  i762.name = i763[0]
  i762.ascent = i763[1]
  i762.originalLineHeight = i763[2]
  i762.fontSize = i763[3]
  var i765 = i763[4]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i765[i + 0]) );
  }
  i762.characterInfo = i764
  request.r(i763[5], i763[6], 0, i762, 'texture')
  i762.originalFontSize = i763[7]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i769 = data
  i768.index = i769[0]
  i768.advance = i769[1]
  i768.bearing = i769[2]
  i768.glyphWidth = i769[3]
  i768.glyphHeight = i769[4]
  i768.minX = i769[5]
  i768.maxX = i769[6]
  i768.minY = i769[7]
  i768.maxY = i769[8]
  i768.uvBottomLeftX = i769[9]
  i768.uvBottomLeftY = i769[10]
  i768.uvBottomRightX = i769[11]
  i768.uvBottomRightY = i769[12]
  i768.uvTopLeftX = i769[13]
  i768.uvTopLeftY = i769[14]
  i768.uvTopRightX = i769[15]
  i768.uvTopRightY = i769[16]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i771 = data
  i770.name = i771[0]
  i770.bytes64 = i771[1]
  i770.data = i771[2]
  return i770
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.TMP_Settings' )
  var i773 = data
  i772.m_enableWordWrapping = !!i773[0]
  i772.m_enableKerning = !!i773[1]
  i772.m_enableExtraPadding = !!i773[2]
  i772.m_enableTintAllSprites = !!i773[3]
  i772.m_enableParseEscapeCharacters = !!i773[4]
  i772.m_EnableRaycastTarget = !!i773[5]
  i772.m_GetFontFeaturesAtRuntime = !!i773[6]
  i772.m_missingGlyphCharacter = i773[7]
  i772.m_warningsDisabled = !!i773[8]
  request.r(i773[9], i773[10], 0, i772, 'm_defaultFontAsset')
  i772.m_defaultFontAssetPath = i773[11]
  i772.m_defaultFontSize = i773[12]
  i772.m_defaultAutoSizeMinRatio = i773[13]
  i772.m_defaultAutoSizeMaxRatio = i773[14]
  i772.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i773[15], i773[16] )
  i772.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i773[17], i773[18] )
  i772.m_autoSizeTextContainer = !!i773[19]
  i772.m_IsTextObjectScaleStatic = !!i773[20]
  var i775 = i773[21]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 1, i774, '')
  }
  i772.m_fallbackFontAssets = i774
  i772.m_matchMaterialPreset = !!i773[22]
  request.r(i773[23], i773[24], 0, i772, 'm_defaultSpriteAsset')
  i772.m_defaultSpriteAssetPath = i773[25]
  i772.m_enableEmojiSupport = !!i773[26]
  i772.m_MissingCharacterSpriteUnicode = i773[27]
  i772.m_defaultColorGradientPresetsPath = i773[28]
  request.r(i773[29], i773[30], 0, i772, 'm_defaultStyleSheet')
  i772.m_StyleSheetsResourcePath = i773[31]
  request.r(i773[32], i773[33], 0, i772, 'm_leadingCharacters')
  request.r(i773[34], i773[35], 0, i772, 'm_followingCharacters')
  i772.m_UseModernHangulLineBreakingRules = !!i773[36]
  return i772
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i779 = data
  i778.hashCode = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'material')
  i778.materialHashCode = i779[3]
  request.r(i779[4], i779[5], 0, i778, 'atlas')
  i778.normalStyle = i779[6]
  i778.normalSpacingOffset = i779[7]
  i778.boldStyle = i779[8]
  i778.boldSpacing = i779[9]
  i778.italicStyle = i779[10]
  i778.tabSize = i779[11]
  i778.m_Version = i779[12]
  i778.m_SourceFontFileGUID = i779[13]
  request.r(i779[14], i779[15], 0, i778, 'm_SourceFontFile_EditorRef')
  request.r(i779[16], i779[17], 0, i778, 'm_SourceFontFile')
  i778.m_AtlasPopulationMode = i779[18]
  i778.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i779[19], i778.m_FaceInfo)
  var i781 = i779[20]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('UnityEngine.TextCore.Glyph', i781[i + 0]));
  }
  i778.m_GlyphTable = i780
  var i783 = i779[21]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('TMPro.TMP_Character', i783[i + 0]));
  }
  i778.m_CharacterTable = i782
  var i785 = i779[22]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i778.m_AtlasTextures = i784
  i778.m_AtlasTextureIndex = i779[23]
  i778.m_IsMultiAtlasTexturesEnabled = !!i779[24]
  i778.m_ClearDynamicDataOnBuild = !!i779[25]
  var i787 = i779[26]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('UnityEngine.TextCore.GlyphRect', i787[i + 0]));
  }
  i778.m_UsedGlyphRects = i786
  var i789 = i779[27]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('UnityEngine.TextCore.GlyphRect', i789[i + 0]));
  }
  i778.m_FreeGlyphRects = i788
  i778.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i779[28], i778.m_fontInfo)
  i778.m_AtlasWidth = i779[29]
  i778.m_AtlasHeight = i779[30]
  i778.m_AtlasPadding = i779[31]
  i778.m_AtlasRenderMode = i779[32]
  var i791 = i779[33]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('TMPro.TMP_Glyph', i791[i + 0]));
  }
  i778.m_glyphInfoList = i790
  i778.m_KerningTable = request.d('TMPro.KerningTable', i779[34], i778.m_KerningTable)
  i778.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i779[35], i778.m_FontFeatureTable)
  var i793 = i779[36]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 1, i792, '')
  }
  i778.fallbackFontAssets = i792
  var i795 = i779[37]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 1, i794, '')
  }
  i778.m_FallbackFontAssetTable = i794
  i778.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i779[38], i778.m_CreationSettings)
  var i797 = i779[39]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('TMPro.TMP_FontWeightPair', i797[i + 0]) );
  }
  i778.m_FontWeightTable = i796
  var i799 = i779[40]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('TMPro.TMP_FontWeightPair', i799[i + 0]) );
  }
  i778.fontWeights = i798
  return i778
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i801 = data
  i800.m_FaceIndex = i801[0]
  i800.m_FamilyName = i801[1]
  i800.m_StyleName = i801[2]
  i800.m_PointSize = i801[3]
  i800.m_Scale = i801[4]
  i800.m_UnitsPerEM = i801[5]
  i800.m_LineHeight = i801[6]
  i800.m_AscentLine = i801[7]
  i800.m_CapLine = i801[8]
  i800.m_MeanLine = i801[9]
  i800.m_Baseline = i801[10]
  i800.m_DescentLine = i801[11]
  i800.m_SuperscriptOffset = i801[12]
  i800.m_SuperscriptSize = i801[13]
  i800.m_SubscriptOffset = i801[14]
  i800.m_SubscriptSize = i801[15]
  i800.m_UnderlineOffset = i801[16]
  i800.m_UnderlineThickness = i801[17]
  i800.m_StrikethroughOffset = i801[18]
  i800.m_StrikethroughThickness = i801[19]
  i800.m_TabWidth = i801[20]
  return i800
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i805 = data
  i804.m_Index = i805[0]
  i804.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i805[1], i804.m_Metrics)
  i804.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i805[2], i804.m_GlyphRect)
  i804.m_Scale = i805[3]
  i804.m_AtlasIndex = i805[4]
  i804.m_ClassDefinitionType = i805[5]
  return i804
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i807 = data
  i806.m_Width = i807[0]
  i806.m_Height = i807[1]
  i806.m_HorizontalBearingX = i807[2]
  i806.m_HorizontalBearingY = i807[3]
  i806.m_HorizontalAdvance = i807[4]
  return i806
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i809 = data
  i808.m_X = i809[0]
  i808.m_Y = i809[1]
  i808.m_Width = i809[2]
  i808.m_Height = i809[3]
  return i808
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TMP_Character' )
  var i813 = data
  i812.m_ElementType = i813[0]
  i812.m_Unicode = i813[1]
  i812.m_GlyphIndex = i813[2]
  i812.m_Scale = i813[3]
  return i812
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i819 = data
  i818.Name = i819[0]
  i818.PointSize = i819[1]
  i818.Scale = i819[2]
  i818.CharacterCount = i819[3]
  i818.LineHeight = i819[4]
  i818.Baseline = i819[5]
  i818.Ascender = i819[6]
  i818.CapHeight = i819[7]
  i818.Descender = i819[8]
  i818.CenterLine = i819[9]
  i818.SuperscriptOffset = i819[10]
  i818.SubscriptOffset = i819[11]
  i818.SubSize = i819[12]
  i818.Underline = i819[13]
  i818.UnderlineThickness = i819[14]
  i818.strikethrough = i819[15]
  i818.strikethroughThickness = i819[16]
  i818.TabWidth = i819[17]
  i818.Padding = i819[18]
  i818.AtlasWidth = i819[19]
  i818.AtlasHeight = i819[20]
  return i818
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.TMP_Glyph' )
  var i823 = data
  i822.id = i823[0]
  i822.x = i823[1]
  i822.y = i823[2]
  i822.width = i823[3]
  i822.height = i823[4]
  i822.xOffset = i823[5]
  i822.yOffset = i823[6]
  i822.xAdvance = i823[7]
  i822.scale = i823[8]
  return i822
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.KerningTable' )
  var i825 = data
  var i827 = i825[0]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(request.d('TMPro.KerningPair', i827[i + 0]));
  }
  i824.kerningPairs = i826
  return i824
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.KerningPair' )
  var i831 = data
  i830.xOffset = i831[0]
  i830.m_FirstGlyph = i831[1]
  i830.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i831[2], i830.m_FirstGlyphAdjustments)
  i830.m_SecondGlyph = i831[3]
  i830.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i831[4], i830.m_SecondGlyphAdjustments)
  i830.m_IgnoreSpacingAdjustments = !!i831[5]
  return i830
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i833 = data
  var i835 = i833[0]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i835[i + 0]));
  }
  i832.m_GlyphPairAdjustmentRecords = i834
  return i832
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i839 = data
  i838.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i839[0], i838.m_FirstAdjustmentRecord)
  i838.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i839[1], i838.m_SecondAdjustmentRecord)
  i838.m_FeatureLookupFlags = i839[2]
  return i838
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i841 = data
  i840.m_GlyphIndex = i841[0]
  i840.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i841[1], i840.m_GlyphValueRecord)
  return i840
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i843 = data
  i842.m_XPlacement = i843[0]
  i842.m_YPlacement = i843[1]
  i842.m_XAdvance = i843[2]
  i842.m_YAdvance = i843[3]
  return i842
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i845 = data
  i844.sourceFontFileName = i845[0]
  i844.sourceFontFileGUID = i845[1]
  i844.pointSizeSamplingMode = i845[2]
  i844.pointSize = i845[3]
  i844.padding = i845[4]
  i844.packingMode = i845[5]
  i844.atlasWidth = i845[6]
  i844.atlasHeight = i845[7]
  i844.characterSetSelectionMode = i845[8]
  i844.characterSequence = i845[9]
  i844.referencedFontAssetGUID = i845[10]
  i844.referencedTextAssetGUID = i845[11]
  i844.fontStyle = i845[12]
  i844.fontStyleModifier = i845[13]
  i844.renderMode = i845[14]
  i844.includeFontFeatures = !!i845[15]
  return i844
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'regularTypeface')
  request.r(i849[2], i849[3], 0, i848, 'italicTypeface')
  return i848
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i851 = data
  i850.hashCode = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'material')
  i850.materialHashCode = i851[3]
  request.r(i851[4], i851[5], 0, i850, 'spriteSheet')
  var i853 = i851[6]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('TMPro.TMP_Sprite', i853[i + 0]));
  }
  i850.spriteInfoList = i852
  var i855 = i851[7]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i850.fallbackSpriteAssets = i854
  i850.m_Version = i851[8]
  i850.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i851[9], i850.m_FaceInfo)
  var i857 = i851[10]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('TMPro.TMP_SpriteCharacter', i857[i + 0]));
  }
  i850.m_SpriteCharacterTable = i856
  var i859 = i851[11]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.TMP_SpriteGlyph', i859[i + 0]));
  }
  i850.m_SpriteGlyphTable = i858
  return i850
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_Sprite' )
  var i863 = data
  i862.name = i863[0]
  i862.hashCode = i863[1]
  i862.unicode = i863[2]
  i862.pivot = new pc.Vec2( i863[3], i863[4] )
  request.r(i863[5], i863[6], 0, i862, 'sprite')
  i862.id = i863[7]
  i862.x = i863[8]
  i862.y = i863[9]
  i862.width = i863[10]
  i862.height = i863[11]
  i862.xOffset = i863[12]
  i862.yOffset = i863[13]
  i862.xAdvance = i863[14]
  i862.scale = i863[15]
  return i862
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i869 = data
  i868.m_Name = i869[0]
  i868.m_HashCode = i869[1]
  i868.m_ElementType = i869[2]
  i868.m_Unicode = i869[3]
  i868.m_GlyphIndex = i869[4]
  i868.m_Scale = i869[5]
  return i868
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'sprite')
  i872.m_Index = i873[2]
  i872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i873[3], i872.m_Metrics)
  i872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i873[4], i872.m_GlyphRect)
  i872.m_Scale = i873[5]
  i872.m_AtlasIndex = i873[6]
  i872.m_ClassDefinitionType = i873[7]
  return i872
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i875 = data
  var i877 = i875[0]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('TMPro.TMP_Style', i877[i + 0]));
  }
  i874.m_StyleList = i876
  return i874
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TMP_Style' )
  var i881 = data
  i880.m_Name = i881[0]
  i880.m_HashCode = i881[1]
  i880.m_OpeningDefinition = i881[2]
  i880.m_ClosingDefinition = i881[3]
  i880.m_OpeningTagArray = i881[4]
  i880.m_ClosingTagArray = i881[5]
  i880.m_OpeningTagUnicodeArray = i881[6]
  i880.m_ClosingTagUnicodeArray = i881[7]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i883 = data
  var i885 = i883[0]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i885[i + 0]) );
  }
  i882.files = i884
  i882.componentToPrefabIds = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i889 = data
  i888.path = i889[0]
  request.r(i889[1], i889[2], 0, i888, 'unityObject')
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i891 = data
  var i893 = i891[0]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i893[i + 0]) );
  }
  i890.scriptsExecutionOrder = i892
  var i895 = i891[1]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i895[i + 0]) );
  }
  i890.sortingLayers = i894
  var i897 = i891[2]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i897[i + 0]) );
  }
  i890.cullingLayers = i896
  i890.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i891[3], i890.timeSettings)
  i890.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i891[4], i890.physicsSettings)
  i890.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i891[5], i890.physics2DSettings)
  i890.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i891[6], i890.qualitySettings)
  i890.enableRealtimeShadows = !!i891[7]
  i890.enableAutoInstancing = !!i891[8]
  i890.enableDynamicBatching = !!i891[9]
  i890.lightmapEncodingQuality = i891[10]
  i890.desiredColorSpace = i891[11]
  var i899 = i891[12]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( i899[i + 0] );
  }
  i890.allTags = i898
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i903 = data
  i902.name = i903[0]
  i902.value = i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i907 = data
  i906.id = i907[0]
  i906.name = i907[1]
  i906.value = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i911 = data
  i910.id = i911[0]
  i910.name = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i913 = data
  i912.fixedDeltaTime = i913[0]
  i912.maximumDeltaTime = i913[1]
  i912.timeScale = i913[2]
  i912.maximumParticleTimestep = i913[3]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i915 = data
  i914.gravity = new pc.Vec3( i915[0], i915[1], i915[2] )
  i914.defaultSolverIterations = i915[3]
  i914.bounceThreshold = i915[4]
  i914.autoSyncTransforms = !!i915[5]
  i914.autoSimulation = !!i915[6]
  var i917 = i915[7]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i917[i + 0]) );
  }
  i914.collisionMatrix = i916
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i921 = data
  i920.enabled = !!i921[0]
  i920.layerId = i921[1]
  i920.otherLayerId = i921[2]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'material')
  i922.gravity = new pc.Vec2( i923[2], i923[3] )
  i922.positionIterations = i923[4]
  i922.velocityIterations = i923[5]
  i922.velocityThreshold = i923[6]
  i922.maxLinearCorrection = i923[7]
  i922.maxAngularCorrection = i923[8]
  i922.maxTranslationSpeed = i923[9]
  i922.maxRotationSpeed = i923[10]
  i922.baumgarteScale = i923[11]
  i922.baumgarteTOIScale = i923[12]
  i922.timeToSleep = i923[13]
  i922.linearSleepTolerance = i923[14]
  i922.angularSleepTolerance = i923[15]
  i922.defaultContactOffset = i923[16]
  i922.autoSimulation = !!i923[17]
  i922.queriesHitTriggers = !!i923[18]
  i922.queriesStartInColliders = !!i923[19]
  i922.callbacksOnDisable = !!i923[20]
  i922.reuseCollisionCallbacks = !!i923[21]
  i922.autoSyncTransforms = !!i923[22]
  var i925 = i923[23]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i925[i + 0]) );
  }
  i922.collisionMatrix = i924
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i929 = data
  i928.enabled = !!i929[0]
  i928.layerId = i929[1]
  i928.otherLayerId = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i931 = data
  var i933 = i931[0]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i933[i + 0]) );
  }
  i930.qualityLevels = i932
  var i935 = i931[1]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i930.names = i934
  i930.shadows = i931[2]
  i930.anisotropicFiltering = i931[3]
  i930.antiAliasing = i931[4]
  i930.lodBias = i931[5]
  i930.shadowCascades = i931[6]
  i930.shadowDistance = i931[7]
  i930.shadowmaskMode = i931[8]
  i930.shadowProjection = i931[9]
  i930.shadowResolution = i931[10]
  i930.softParticles = !!i931[11]
  i930.softVegetation = !!i931[12]
  i930.activeColorSpace = i931[13]
  i930.desiredColorSpace = i931[14]
  i930.masterTextureLimit = i931[15]
  i930.maxQueuedFrames = i931[16]
  i930.particleRaycastBudget = i931[17]
  i930.pixelLightCount = i931[18]
  i930.realtimeReflectionProbes = !!i931[19]
  i930.shadowCascade2Split = i931[20]
  i930.shadowCascade4Split = new pc.Vec3( i931[21], i931[22], i931[23] )
  i930.streamingMipmapsActive = !!i931[24]
  i930.vSyncCount = i931[25]
  i930.asyncUploadBufferSize = i931[26]
  i930.asyncUploadTimeSlice = i931[27]
  i930.billboardsFaceCameraPosition = !!i931[28]
  i930.shadowNearPlaneOffset = i931[29]
  i930.streamingMipmapsMemoryBudget = i931[30]
  i930.maximumLODLevel = i931[31]
  i930.streamingMipmapsAddAllCameras = !!i931[32]
  i930.streamingMipmapsMaxLevelReduction = i931[33]
  i930.streamingMipmapsRenderersPerFrame = i931[34]
  i930.resolutionScalingFixedDPIFactor = i931[35]
  i930.streamingMipmapsMaxFileIORequests = i931[36]
  i930.currentQualityLevel = i931[37]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i941 = data
  i940.weight = i941[0]
  i940.vertices = i941[1]
  i940.normals = i941[2]
  i940.tangents = i941[3]
  return i940
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i943 = data
  i942.xPlacement = i943[0]
  i942.yPlacement = i943[1]
  i942.xAdvance = i943[2]
  i942.yAdvance = i943[3]
  return i942
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"34":[35],"36":[35],"37":[35],"38":[35],"39":[35],"40":[35],"21":[22],"41":[10],"42":[13],"43":[13],"17":[13],"44":[13],"45":[13],"46":[13],"47":[13],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[10],"63":[5],"64":[65],"66":[65],"67":[68],"69":[68],"70":[5,68],"71":[68,72],"73":[68],"74":[72,68],"75":[5],"76":[72,68],"77":[68],"78":[68],"79":[68],"80":[67],"81":[72,68],"82":[68],"83":[67],"84":[68],"85":[68],"86":[68],"87":[68],"88":[68],"89":[68],"90":[68],"91":[68],"92":[68],"93":[72,68],"94":[68],"95":[68],"96":[68],"97":[68],"98":[72,68],"99":[68],"100":[101],"102":[101],"103":[101],"104":[101],"105":[10],"106":[10]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.SphereCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.RenderTexture","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","UnityEngine.MonoBehaviour","Ball","UnityEngine.HingeJoint","UnityEngine.CapsuleCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.AudioListener","UnityEngine.Light","BasketballThrower","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1733";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3858";

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

Deserializers.buildID = "c2a7a891-083c-4b93-9252-6fd85f0904c2";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

