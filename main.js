// Variáveis principais
let scene, camera, renderer, light, sphere;
let raioXIntensity = 5; // Intensidade inicial do Raio X

// Inicializando a cena 3D
function init() {
    // Cena e câmera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Adicionando luz (simulando a radiação do raio X)
    light = new THREE.PointLight(0xFFFFFF, 1, 100);
    light.position.set(50, 50, 50);
    scene.add(light);

    // Adicionando um objeto 3D (por exemplo, uma esfera representando um "órgão")
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Ajustando a posição da câmera
    camera.position.z = 20;

    // Controles de intensidade (alterando a luz)
    const intensidadeSlider = document.getElementById('intensidade');
    intensidadeSlider.addEventListener('input', function() {
        raioXIntensity = parseFloat(intensidadeSlider.value);
        light.intensity = raioXIntensity / 10;
    });

    // Função de animação
    animate();
}

// Função de animação
function animate() {
    requestAnimationFrame(animate);

    // Simulando a rotação para visualização 3D
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Inicializa a cena
init();
