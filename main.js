// --- Simulação de Materiais (Densidades e Cores Falsas) ---
// Define os parâmetros (cor e opacidade) dos materiais em um objeto central.

const materialParams = {
    // Materiais mais densos = Cores fortes / Opacidade alta
    metal: { color: 0xff0000, opacity: 1.0 },     // Vermelho Forte
    bone: { color: 0x0000ff, opacity: 0.9 },      // Azul
    
    // Materiais menos densos = Cores suaves / Opacidade média
    tissue: { color: 0x00ff00, opacity: 0.7 },    // Verde
    water: { color: 0xffff00, opacity: 0.5 },     // Amarelo
    
    // Materiais menos densos (quase invisíveis)
    air: { color: 0x808080, opacity: 0.1 }        // Cinza (quase transparente)
};

// Função utilitária para criar o material
function createMaterial(type) {
    const params = materialParams[type];
    return new THREE.MeshPhongMaterial({ 
        color: params.color, 
        specular: 0x111111, // Brilho especular baixo (opcional, mas bom)
        shininess: 10,      // Brilho da superfície (opcional, mas bom)
        transparent: true,  // Habilita transparência
        opacity: params.opacity
    });
}

// Criação dos materiais usando a função utilitária
const metalMaterial = createMaterial('metal');
const boneMaterial = createMaterial('bone');
const tissueMaterial = createMaterial('tissue');
const waterMaterial = createMaterial('water');
const airMaterial = createMaterial('air');

// --- Geometria e Objetos ---
// Uma geometria ligeiramente maior para melhor visualização
const geometry = new THREE.BoxGeometry(2, 2, 2); 

// Objetos dispostos lado a lado na cena
const metal = new THREE.Mesh(geometry, metalMaterial);
metal.position.set(-6, 0, 0); 
scene.add(metal);

const bone = new THREE.Mesh(new THREE.BoxGeometry(2, 4, 2), boneMaterial); // Osso um pouco mais longo
bone.position.set(-2, 0, 0);
scene.add(bone);

const tissue = new THREE.Mesh(geometry, tissueMaterial);
tissue.position.set(2, 0, 0);
scene.add(tissue);

const water = new THREE.Mesh(geometry, waterMaterial);
water.position.set(6, 0, 0);
scene.add(water);

const air = new THREE.Mesh(geometry, airMaterial);
air.position.set(10, 0, 0); 
scene.add(air);
