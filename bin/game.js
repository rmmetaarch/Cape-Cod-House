
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const greenSycamoreTree2 = new Entity('greenSycamoreTree2')
engine.addEntity(greenSycamoreTree2)
greenSycamoreTree2.setParent(_scene)
const gltfShape2 = new GLTFShape("fd4168d3-1040-458d-b90e-fe5f441d593b/TreeSycamore_03/TreeSycamore_03.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
greenSycamoreTree2.addComponentOrReplace(gltfShape2)
const transform3 = new Transform({
  position: new Vector3(2, 0, 15.26071834564209),
  rotation: new Quaternion(-3.6753233919814554e-15, -0.9951847791671753, 1.1863526339084274e-7, 0.0980171263217926),
  scale: new Vector3(-0.6162041425704956, 0.6141493916511536, -0.4177722930908203)
})
greenSycamoreTree2.addComponentOrReplace(transform3)

const greenSycamoreTree = new Entity('greenSycamoreTree')
engine.addEntity(greenSycamoreTree)
greenSycamoreTree.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(14, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenSycamoreTree.addComponentOrReplace(transform4)
greenSycamoreTree.addComponentOrReplace(gltfShape2)

const capeCodHouse = new Entity('capeCodHouse')
engine.addEntity(capeCodHouse)
capeCodHouse.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
capeCodHouse.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("b78fc631-7a3a-45e1-98f9-86f479501455/Cape Cod House.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
capeCodHouse.addComponentOrReplace(gltfShape3)
