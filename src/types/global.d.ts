declare module 'three/examples/jsm/libs/meshopt_decoder.module.js'{
    let MeshoptDecoder:any
    export {MeshoptDecoder}
}

declare interface BasicModel{
    scene:THREE.Scene|null,
    animateAction:THREE.AnimationAction,
    setModel:(url:string)=>Promise, // addMesh
    addMesh:(url:string)=>Promise,
    setEnvMap:(url:string)=>void,
    onProgress:(fun:any)=>void

}