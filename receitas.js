// Vetor de receitas
const receitas = [
    {
        titulo: "Arroz de Couve-Flor",
        imagem: "couveflor.jpg", 
        preparo: "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"]
    },
    {
        titulo: "Bolo de Café",
        imagem: "bolo.jpg", 
        preparo: "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
        ingredientes: ["Farinha de Trigo", "Açúcar", "Café Coado", "Chocolate em Pó", "Ovos"]
    },
    {
        titulo: "Coxinha de Brigadeiro",
        imagem: "coxinha.jpg",
        preparo: "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
        ingredientes: ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"]
    }
];

// Função que gera a lista de ingredientes
function getListaIngredientes(receita) {
    let lista = "<ul>";
    lista += receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((acc, item) => acc + item, "");
    lista += "</ul>";
    return lista;
}

// Função que gera o card de cada receita
function getCard(receita) {
    return `
    <div class="card shadow-sm">
        <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
        <div class="card-body">
            <h5 class="card-title">${receita.titulo}</h5>
            <p class="card-text">${getListaIngredientes(receita)}</p>
            <hr>
            <p class="card-text">${receita.preparo}</p>
        </div>
    </div>`;
}

// Função que preenche o catálogo de receitas
function preencheCatalogo() {
    const pnlCatalogo = document.getElementById('pnlCatalogo');
    pnlCatalogo.innerHTML = receitas.map(receita => getCard(receita)).reduce((acc, card) => acc + card, "");
}

// Quando a página carregar, gerar as receitas
window.onload = preencheCatalogo;
