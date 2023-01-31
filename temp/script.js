window.addEventListener("DOMContentLoaded", init);

function init() {

    // const scene = new THREE.Scene();


    // const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
// camera.position.z = 1;


// camera.lookAt(new THREE.Vector3(0, 0, 0));


        // 床を作成
        // const meshFloor = new THREE.Mesh(
        //     new THREE.BoxGeometry(2000, 0.1, 2000),
        //     new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.0 })
        //   );
        //   scene.add(meshFloor);


// const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
// const material = new THREE.MeshNormalMaterial();
// const material = new THREE.MeshToonMaterial({color: 0x6699FF});
// const material = new THREE.MeshPhongMaterial({color: 0x6699FF});
// 球の作成(半径,水平セグメント数,垂直セグメント数)
// const material = new THREE.SphereGeometry(50, 32, 32);


// const mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );

// const lighta = new THREE.HemisphereLight(0x888888, 0x0000FF, 1.0);
// const lightb = new THREE.DirectionalLight(0xa09e5f, 0.5);
// const lightc = new THREE.HemisphereLight(0x507fff, 0xd0e040, 0.3);
// const lightd = new THREE.AmbientLight(0xffffff, 0.5);

// const LIGHT = new THREE.DirectionalLight(0xFFFFFF, 1);
// LIGHT.position.set(1, 1, 1);
// scene.add(LIGHT);


// lighta.position.set(-20, 30, -5);
// lighta.castShadow = true;
// scene.add(lighta);
// scene.add(lightb);
// scene.add(lightc);
// scene.add(lightd);
// const lightHelper = new THREE.DirectionalLightHelper(light);
// scene.add(lightHelper);

// const renderer = new THREE.WebGLRenderer( { antialias: true } );
// renderer.setPixelRatio(window.devicePixelRatio);
// // renderer.setSize(width, height);
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setAnimationLoop( animation );
// document.getElementById('actaionpterygii_main_canvas').appendChild( renderer.domElement );
// // document.body.appendChild( renderer.domElement );


  const SCENE = new THREE.Scene();

  const CAMERA = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  CAMERA.position.set(0, 0, +1000);

const SPHERE_GEOMETRY = new THREE.BoxGeometry(300, 32, 32);

  const SPHERE_MATERIAL = new THREE.MeshPhongMaterial({ color: 0xFFF450 });
//   const SPHERE_MATERIAL = new THREE.MeshPhongMaterial({ color: 0xFFF450 });
  const SPHERE = new THREE.Mesh(SPHERE_GEOMETRY, SPHERE_MATERIAL);
SPHERE.rotation.x = 10;
SPHERE.rotation.y = 120;
  SPHERE.position.set(100, 100, 100);

  SCENE.add(SPHERE);

  const LIGHT = new THREE.DirectionalLight(0xFFFFFF, 1);
//   const LIGHT = new THREE.HemisphereLight(0x888888, 0x0000FF, 1.0);
// const LIGHT = new THREE.DirectionalLight(0xa09e5f, 0.5);
// const LIGHT = new THREE.HemisphereLight(0x507fff, 0xd0e040, 0.3);
// const LIGHT = new THREE.AmbientLight(0xffffff, 0.5);
  LIGHT.position.set(1000, 200, 1000);
  SCENE.add(LIGHT);

  const RENDERER = new THREE.WebGLRenderer({
    canvas: document.querySelector('#actaionpterygii_main_canvas'),
  });
  RENDERER.setSize(window.innerWidth, window.innerHeight);
  RENDERER.setPixelRatio(window.devicePixelRatio);
  RENDERER.render(SCENE, CAMERA);

// animation();






function animation( time ) {

	// mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}





}