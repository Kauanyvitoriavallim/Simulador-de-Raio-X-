// Cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Ajusta o tamanho do renderizador para o tamanho da tela
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define o fundo da cena como preto
renderer.setClearColor(0x000000); // Cor do fundo (preto)

// Luzes
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10); // Posição inicial da luz
scene.add(light);

// Materiais
const boneMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc });
const tissueMaterial = new THREE.MeshPhongMaterial({ color: 0x98ff98 });
const metalMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
const waterMaterial = new THREE.MeshPhongMaterial({ color: 0x1e90ff });  // Água (azul)
const airMaterial = new THREE.MeshPhongMaterial({ color: 0x87cefa });   // Ar (azul claro)

// Geometria dos objetos
const boneGeometry = new THREE.BoxGeometry(1, 2, 1);
const tissueGeometry = new THREE.BoxGeometry(1, 1, 1);
const metalGeometry = new THREE.BoxGeometry(1, 1, 1);
const waterGeometry = new THREE.BoxGeometry(1, 1, 1);
const airGeometry = new THREE.BoxGeometry(1, 1, 1);

// Objetos (ossos, tecidos, metal, água e ar)
const bone = new THREE.Mesh(boneGeometry, boneMaterial);
bone.position.set(-4, 0, 0);
scene.add(bone);

const tissue = new THREE.Mesh(tissueGeometry, tissueMaterial);
tissue.position.set(-1, 0, 0);
scene.add(tissue);

const metal = new THREE.Mesh(metalGeometry, metalMaterial);
metal.position.set(2, 0, 0);
scene.add(metal);

const water = new THREE.Mesh(waterGeometry, waterMaterial);
water.position.set(5, 0, 0);
scene.add(water);

const air = new THREE.Mesh(airGeometry, airMaterial);
air.position.set(8, 0, 0);
scene.add(air);

// Posição da câmera
camera.position.z = 7;

// OrbitControls para rotação da cena
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Função para atualizar a intensidade da radiação
const intensitySlider = document.getElementById('intensitySlider');
intensitySlider.addEventListener('input', function() {
    const intensity = parseFloat(intensitySlider.value);
    light.intensity = intensity;
});

// Função para alterar o material do objeto principal
const materialSelect = document.getElementById('materialSelect');
materialSelect.addEventListener('change', function() {
    const selectedMaterial = materialSelect.value;
    if (selectedMaterial === 'bone') {
        tissue.material = boneMaterial;
        metal.material = boneMaterial;
        water.material = boneMaterial;
        air.material = boneMaterial;
    } else if (selectedMaterial === 'tissue') {
        tissue.material = tissueMaterial;
        metal.material = tissueMaterial;
        water.material = tissueMaterial;
        air.material = tissueMaterial;
    } else if (selectedMaterial === 'metal') {
        tissue.material = metalMaterial;
        metal.material = metalMaterial;
        water.material = metalMaterial;
        air.material = metalMaterial;
    } else if (selectedMaterial === 'water') {
        tissue.material = waterMaterial;
        metal.material = waterMaterial;
        water.material = waterMaterial;
        air.material = waterMaterial;
    } else if (selectedMaterial === 'air') {
        tissue.material = airMaterial;
        metal.material = airMaterial;
        water.material = airMaterial;
        air.material = airMaterial;
    }
});

// Função para ajustar a posição da luz
const lightX = document.getElementById('lightX');
const lightY = document.getElementById('lightY');
lightX.addEventListener('input', function() {
    light.position.x = parseFloat(lightX.value);
});
lightY.addEventListener('input', function() {
    light.position.y = parseFloat(lightY.value);
});

// Função de animação
function animate() {
    requestAnimationFrame(animate);

    // Atualiza controles para rotação da cena
    controls.update();

    // Renderiza a cena
    renderer.render(scene, camera);
}

animate();
