import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
export interface IBasic3d {
  unResize: () => void;
}
class Basic3d {
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
  spotlight1!: THREE.AmbientLight;
  spotlight2!: THREE.AmbientLight;
  spotlight3!: THREE.AmbientLight;
  clock!: THREE.Clock;
  timeoutId: NodeJS.Timeout | null=null;

  constructor(selector: string, onFinish: (e:string) => void) {
    this.container = document.getElementById(selector);
    this.init();
    this.animate();
    this.onFinish = onFinish;
    this.clock = new THREE.Clock()
  }

  init() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    // this.initControls()
    //添加展示物体
    this.addMesh();
    this.onResize();
    // 监听滚轮事件
    window.addEventListener('wheel',this.onMouseWheel.bind(this))
  }
  onProgress(fn:any){
    this.progressFn=fn
  }

  async addMesh() {
    let res = await this.setModel("bag2.glb"); // Macbookpro2.glb 
    this.onFinish(res);
  }
  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }
  initRenderer() {
    this.renderer = new THREE.WebGL1Renderer({
      antialias: true, // 抗锯齿
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // 渲染尺寸
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // 色调映射
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // 曝光程度
    this.renderer.toneMappingExposure = 3;
    this.container?.appendChild(this.renderer.domElement);
    this.render();
  }
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.25,
      200
    );
    this.camera.position.set(-1.8, 0.6, 2.7);
  }
  initScene() {
    this.scene = new THREE.Scene();
    this.setEnvMap("000");
  }
  // 设置环境
  setEnvMap(hdr: string) {
    new RGBELoader()
      .setPath("api/hdr/")
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
    this.renderer.setAnimationLoop(this.render.bind(this));
  }
  onResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }
  unResize() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  setModel(modelName: string) {
    const that = this
    return new Promise((resolve) => {
      const loader = new GLTFLoader()
      // loader.setMeshoptDecoder(MeshoptDecoder)
      loader.load(`api/${modelName}`, (gltf) => {
        
        this.model && this.model.removeFromParent();
        this.model = gltf.scene.children[0];
        if ("bag2.glb" == modelName && !this.panzi) {
          this.panzi = gltf.scene.children[5];
          // 修改摄像头为模型摄像头
          this.camera = gltf.cameras[0] as THREE.PerspectiveCamera;
          // 调用动画
          this.mixer = new THREE.AnimationMixer(gltf.scene.children[1]);
          this.animateAction = this.mixer.clipAction(gltf.animations[0]);
          // 设置动画播放时长
          this.animateAction.setDuration(20).setLoop(THREE.LoopOnce, 1);
          // 设置播放完之后停止
          this.animateAction.clampWhenFinished = true;
          // 播放动画
          // this.animateAction.play()
        }
        if ("bag2.glb" == modelName) {
          // 设置灯光
          this.spotlight1 = gltf.scene.children[2].children[0] as THREE.AmbientLight;
          this.spotlight1.intensity = 1;
          this.spotlight2 = gltf.scene.children[3].children[0] as THREE.AmbientLight;
          this.spotlight2.intensity = 1;
          this.spotlight3 = gltf.scene.children[4].children[0] as THREE.AmbientLight;
          this.spotlight3.intensity = 1;
        }

        this.scene.add(gltf.scene);
        resolve(modelName+"模型添加成功")
      },(e)=>{
        that.progressFn(e)
      });
    });
  }

  onMouseWheel(e:WheelEvent){
    let timeScale = e.deltaY > 0 ? 1 : -1
    this.animateAction.setEffectiveTimeScale(timeScale)
    this.animateAction.paused = false
    this.animateAction.play()
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.timeoutId = setTimeout(() => {
      this.animateAction.halt(0.5)
    }, 300);
  }
}

export default Basic3d;
