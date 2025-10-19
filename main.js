// Materiais
const boneMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc });
const tissueMaterial = new THREE.MeshPhongMaterial({ color: 0x98ff98 });
const metalMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });

// Atualização para o material de água
const waterMaterial = new THREE.MeshPhongMaterial({
    color: 0x1e90ff,    // Cor da água
    transparent: true,  // Torna o material transparente
    opacity: 0.6,       // Define a opacidade
    reflectivity: 0.8   // Reflete a luz para dar a sensação de água
});

// Atualização para o material de ar
const airMaterial = new THREE.MeshPhongMaterial({
    color: 0x87cefa,    // Cor do ar (azul claro)
    transparent: true,  // Torna o material transparente
    opacity: 0.1       // Baixa opacidade para simular o ar
});

// Geometria (mantenha a caixa simples para teste)
const geometry = new THREE.BoxGeometry(1, 1, 1); 

// Objetos
const bone = new THREE.Mesh(geometry, boneMaterial);
bone.position.set(-3, 0, 0);
scene.add(bone);

const tissue = new THREE.Mesh(geometry, tissueMaterial);
tissue.position.set(-1, 0, 0);
scene.add(tissue);

const metal = new THREE.Mesh(geometry, metalMaterial);
metal.position.set(1, 0, 0);
scene.add(metal);

const water = new THREE.Mesh(geometry, waterMaterial);
water.position.set(3, 0, 0);
scene.add(water);

const air = new THREE.Mesh(geometry, airMaterial);
air.position.set(5, 0, 0);
scene.add(air);
