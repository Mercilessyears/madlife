import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { MeshBasicMaterial } from "three";
const hdrUrl = 'api/hdr/'
const imgUrl = 'api/imgs/'
const glbUrl = 'api/'
export interface IBasic3d {
  unResize: () => void;
}
const scroll_count = 0.2
class Basic3dHome {
  container: HTMLElement | null;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGL1Renderer;
  controls!: OrbitControls;
  model!: THREE.Object3D;
  panzi: THREE.Object3D | null = null;
  mixer!: THREE.AnimationMixer;
  progressFn!: (e:any) => void;
  onFinish!: (e: any) => void;
  animateAction!: THREE.AnimationAction;
  ambLight:THREE.AmbientLight
  spotlight1!: THREE.AmbientLight;
  spotlight2!: THREE.AmbientLight;
  spotlight3!: THREE.AmbientLight;
  clock!: THREE.Clock;
  timeoutId: NodeJS.Timeout | null=null;
  mouse: THREE.Vector2
  windowHalfX: number;
  windowHalfY: number;
  yScene:number=-0.3
  yScene1:number=1.3
  effectComposer: any;
  requestAnimationId: null|number;
  isListen: boolean;
  constructor(selector: string, onFinish: (e:string) => void,isListen:boolean=true) {
    this.isListen=isListen
    this.container = document.getElementById(selector);
    this.clock = new THREE.Clock()
    this.ambLight = new THREE.AmbientLight('#22333d') //22333d
    this.mouse = new THREE.Vector2(0,0)
    this.windowHalfX = window.innerWidth /2
    this.windowHalfY = window.innerHeight /2
    this.init();
    this.animate();
    this.onFinish = onFinish;
    this.requestAnimationId = null
  }

  init() {
    console.log('modelinit');
    
    this.initScene();
    this.initCamera();
    this.initRenderer();
    // this.initControls()
    //添加展示物体
    // this.addMesh();
    this.onResize();
    // this.initAxesHelper()
    // 监听滚轮事件
    console.log(this.isListen);
    if(this.isListen){
      window.addEventListener('wheel',this.onMouseWheel.bind(this))
      window.addEventListener('mousemove',this.onDocumentMouse.bind(this))
    }
  }
  onProgress(fn:any){
    this.progressFn=fn
  }
  initAxesHelper(){
    const axes = new THREE.AxesHelper(10)
    this.scene.add(axes)
  }
  async addMesh(url:string,urlScreen:string) {
    let res = await this.setModel(url,urlScreen); // Macbookpro2.glb  beethoven animation  room female.glb
    this.onFinish(res);
  }
  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }
  initRenderer() {
    this.renderer = new THREE.WebGL1Renderer({
      antialias: true, // 抗锯齿
    });
    // this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // 渲染尺寸
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor('#22333d')
    // 色调映射
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // 曝光程度
    this.renderer.toneMappingExposure = 3;
    const first = this.container?.firstChild
    if(first){
      this.container?.removeChild(first)
    }
    this.container?.appendChild(this.renderer.domElement);
    // const container = document.getElementById('homeSceneBox')
    // const len = container?.children || []
    // lens.value = len.length
    // if (len?.length>=2) {
    // const firstNode = container?.firstChild!
    // container?.removeChild(firstNode)
    // }
    // this.effectComposer = new EffectComposer(this.renderer)
    // const renderPass = new RenderPass(this.scene,this.camera)
    // this.effectComposer.addPass(renderPass)
    // const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth,window.innerHeight),this.scene,this.camera)
    // this.effectComposer.addPass(outlinePass)
    this.render();
  }
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );

    this.camera.position.set(-0.2, 1.3,-0.3);

  }
  initScene() {
    this.scene = new THREE.Scene();
    // this.setEnvMap("000");
    this.initLight()
  }

  onDocumentMouse(e:MouseEvent){
    this.mouse.x=(e.clientX/window.innerWidth)-0.5
    this.mouse.y=(e.clientY/window.innerHeight)-0.5
  }
  transformCamera(){
    gsap.to(this.camera.position,{
      duration:2,
      z:-1
    })
  }
  // 设置环境
  setEnvMap(hdr: string) {
    new RGBELoader()
      .setPath("./files/hdr/")
      .load(hdr + ".hdr", (texture: any) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        this.scene.background = texture;
        this.scene.environment = texture;
      });
  }
  render() {
    let delta = this.clock && this.clock.getDelta()
    this.mixer && this.mixer.update(delta)
    this.renderer.render(this.scene, this.camera);
  }
  animate() {
    this.requestAnimationId = window.requestAnimationFrame(this.animate.bind(this))
    this.render()
  }
  onResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }
  unResize() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  resize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  initLight(){
    this.ambLight.intensity=1
    this.scene.add(this.ambLight)
    const dirLight = new THREE.DirectionalLight('#0f100f',0.5) //  #192221
    this.scene.add(dirLight)

    // 点光源
    const spotLight = new THREE.SpotLight('#0f1010', 1, 10)
    spotLight.position.set(-1,6,-1)
    this.scene.add(spotLight)
    // 
    const sp1 = new THREE.SpotLight('#0b2515',0.5,1)
    sp1.position.set(0,0.6,0.5)
    this.scene.add(sp1)
  }
  setTextures(url:string){
    const imgLoader = new THREE.TextureLoader()
    // const imgs = imgLoader.load(`${imgUrl}love.jpg`)
    const imgs = imgLoader.load(url)
    imgs.rotation=Math.PI/2
    imgs.flipY = false
    imgs.center=new THREE.Vector2(0.5,0.5)
    return imgs
  }
  async setModel(modelName: string,urlScreen:string) {
    const imgs = this.setTextures(urlScreen)
    return new Promise((resolve) => {
      const loader = new GLTFLoader()
      loader.load(modelName, (gltf) => {

        // this.model && this.model.removeFromParent();

        this.model = gltf.scene.children[0];
        const screen = gltf.scene.children[2] as any
        const wall = gltf.scene.children[10] as any
        // screen.material.emissive = screen.material.color

        // screen.material.emissive = new THREE.Color('#f1010')
        screen.material = new MeshBasicMaterial({
          map:imgs
        })

        wall.material.emissive = new THREE.Color('#0f1010')

        this.scene.add(gltf.scene);
        console.log(this.scene);
        
        resolve(modelName+"模型添加成功")
      },(e)=>{
        this.progressFn && this.progressFn(e)
      });
    });
  }
  async checkoutImg(url:string){
    const imgLoader = new THREE.TextureLoader()
    const img = await imgLoader.load(url)
    img.rotation=Math.PI/2
    img.flipY = false
    img.center=new THREE.Vector2(0.5,0.5)
    //@ts-ignore
    this.scene.children[4].children[2].material = new THREE.MeshBasicMaterial({
      map:img
    })
    this.scene.updateMatrix()
  }
  onMouseWheel(e:WheelEvent){
    let timeScale = e.deltaY > 0 ? 1 : -1
    if(timeScale==-1){
        if(this.yScene >= -0.2 && this.yScene <=2.5) {

          this.yScene -= scroll_count
          if(this.yScene< -0.2) this.yScene = -0.2
          this.camera.position.z = this.yScene
        }
        if(this.yScene >= 1.5 && this.yScene <=2.5){
          this.yScene1 +=0.1
          this.camera.lookAt(-0.2,this.yScene1,0)
        }
      // this.camera.translateZ(-0.1)
    } else {
      if (this.yScene <2.5) {
        this.yScene += scroll_count
        if(this.yScene>2.5) this.yScene = 2.5
        this.camera.position.z = this.yScene
      }
      if (this.yScene >= 1.5 && this.yScene <2.5) {
        this.yScene1 -=0.1
        this.camera.lookAt(-0.2,this.yScene1,0)
      }

        }

    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    // this.timeoutId = setTimeout(() => {
    //   this.animateAction.halt(0.5)
    // }, 300);
  }
  clearThree(){
    if (this.requestAnimationId) {
      window.cancelAnimationFrame(this.requestAnimationId)
    }
    this.scene.clear()
    this.container = null
    //@ts-ignore
    this.scene=null
  }
  getMoseObj(callback:Function,event:MouseEvent){
    const raycaster = new THREE.Raycaster()
    let mouse = new THREE.Vector2()
    const divWidth = window.innerWidth
    const divHeith = window.innerHeight
    // 计算raycaster所需要的点位
    mouse.x = event.clientX / divWidth * 2 -1
    mouse.y = -(event.clientY / divHeith) *2 + 1
    raycaster.setFromCamera(mouse,this.camera)
    const instersects = raycaster.intersectObjects(this.scene.children)
    if(instersects.length){
      if(callback){
        const returnMouse = {
          x:event.clientX,
          y:event.clientY
        }
        callback(instersects,returnMouse)
      }
    }
  }
}

export default Basic3dHome;
