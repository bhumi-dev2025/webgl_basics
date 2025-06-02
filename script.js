import * as THREE from 'https://unpkg.com/three@0.165.0/build/three.module.js'; // <-- ADD THIS LINE

// Remove: const THREE = window.THREE; // This line is no longer needed

// 1. Setup the Scene, Camera, and Renderer
const scene = new THREE.Scene(); // This line will now work correctly!

// Camera setup: PerspectiveCamera(FOV, Aspect Ratio, Near, Far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Move the camera back so we can see the cube

// Renderer setup
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87CEEB); // Set background color to a light blue (sky blue)

// 2. Create the Cube Geometry and Material
const geometry = new THREE.BoxGeometry(1, 1, 1); // A 1x1x1 unit cube
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color, not affected by lights
const cube = new THREE.Mesh(geometry, material); // Create the mesh (object)
scene.add(cube); // Add the cube to the scene

// 3. Animation Loop
function animate() {
    requestAnimationFrame(animate); // Request the browser to call animate() again next frame

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera); // Render the scene with the camera
}

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();