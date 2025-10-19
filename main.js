// --- Definição dos Materiais (Densidades para Raio-X) ---

// Materiais mais densos (absorvem mais) = Cores mais claras / Opacidade alta
const metalMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xffffff,    // Branco puro (máxima absorção)
    transparent: true,
    opacity: 1.0        // Totalmente opaco
});

const boneMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xcccccc,    // Cinza claro
    transparent: true,
    opacity: 0.9 
});

// Materiais menos densos (absorvem menos) = Cores mais escuras / Opacidade baixa
const tissueMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x666666,    // Cinza médio/escuro
    transparent: true,
    opacity: 0.7 
});

const waterMaterial = new THREE.MeshPhongMaterial({
    color: 0x333333,    // Cinza escuro (mais próximo do preto)
    transparent: true,  
    opacity: 0.5,        // Simula pouca absorção
    // removi o 'reflectivity' pois MeshPhongMaterial já lida com reflexão
});

const airMaterial = new THREE.MeshPhongMaterial({
    color: 0x111111,    // Quase preto
    transparent: true,  
    opacity: 0.1         // Mínima absorção (quase invisível)
});

// --- Geometria e Objetos ---
// Uma geometria ligeiramente maior para melhor visualização
const geometry = new THREE.BoxGeometry(2, 2, 2); 

// Objetos dispostos lado a lado na cena
const metal = new THREE.Mesh(geometry, metalMaterial);
metal.position.set(-6, 0, 0); // Posição movida para dar mais espaço
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
air.position.set(10, 0, 0); // Posição movida para dar mais espaço
scene.add(air);

// Se você tiver adicionado a luz ambiente para evitar a tela preta (como na minha correção anterior),
// seu código Three.js estará pronto para simular o contraste do Raio-X!
