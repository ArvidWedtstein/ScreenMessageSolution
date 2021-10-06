import * as THREE from 'three'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'

function appex(ax) {

	let container = document.querySelector(ax.container)

	// Reset
	container.innerHTML = ''



	// let width = container.offsetWidth
	// let height = container.offsetHeight

	var width, height

	if (ax.width) {
		width = ax.width
	} else {
		width = container.offsetWidth
	}

	if (ax.height) {
		height = ax.height
	} else {
		height = container.offsetHeight
	}




	let camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
	camera.position.y = 150;
	camera.position.z = 500;

	let scene = new THREE.Scene();
	if (ax.invert) {
		scene.background = new THREE.Color( 0xffffff );
	} else {
		scene.background = new THREE.Color( 0x000000 );
	}


	const loader = new THREE.TextureLoader();
	let texture


	// Image
	if (ax.type == 'image') {
		// let image = URL.createObjectURL(ax.image.files[0])
		// URL.revokeObjectURL(this.image) // free memory
		texture = loader.load(ax.image)



	// Video
	} else if (ax.type == 'video') {
		// let video = URL.createObjectURL(ax.video.files[0])
		let videoElement = document.createElement('video')
		videoElement.muted = true
		videoElement.loop = true
		videoElement.src = ax.video
		videoElement.play()
		texture = new THREE.VideoTexture(videoElement);



	// Webcam
	} else if (ax.type == 'webcam') {
		let video = document.querySelector('.video')
		window.navigator.mediaDevices.getUserMedia({ video: true })
			.then(stream => {
				video.srcObject = stream;
				video.onloadedmetadata = (e) => {
					video.play();
				};
			})
			.catch( () => {
				alert('You have give browser the permission to run Webcam and mic ;( ');
			});
		texture = new THREE.VideoTexture( video );
	}


	let planeMaterial = new THREE.MeshBasicMaterial( {
		map: texture
	})

	let plane = new THREE.Mesh( new THREE.PlaneGeometry( width, height), planeMaterial)
	plane.position.y = 150
	scene.add( plane );


  //
	// if (ax.interactivity == 'mouse') {
	// 	const sphereGeometry = new THREE.SphereGeometry( 200, 200, 16 );
	// 	const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );
  //
	// 	let sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
	// 	scene.add( sphere );
	// 	sphere.position.x = 100
	// 	sphere.position.y = 150
	// }



	let renderer = new THREE.WebGLRenderer();
	// renderer.setSize( ax.resolutionX, ax.resolutionY );
	renderer.setSize( width, height );

	// document.querySelector('.scene').appendChild( renderer.domElement );

	let effect = new AsciiEffect( renderer, ' .:-+<=%@#', { invert: ax.invert, color: ax.color } );

	if (ax.reduction) {
		effect.setSize( (width / ax.reduction), (height / ax.reduction) );
	} else {
		effect.setSize( width, height );
	}


	effect.domElement.style.color = ax.foreground;
	effect.domElement.style.backgroundColor = ax.background;

	// Special case: append effect.domElement, instead of renderer.domElement.
	// AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

	document.querySelector(ax.container).appendChild( effect.domElement );


	animate()

	function animate() {
			requestAnimationFrame( animate );

			render();
	}

	function render() {
		effect.render(scene, camera );
	}

}

export default appex

