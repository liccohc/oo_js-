function ficha(nome,raça,idade){
    this.nome = nome;
    this.raça = raça;
    this.idade = idade;
}

function cachorro(nome,raça,idade,castrado){
    ficha.call(this,nome,raça,idade);
    this.castrado = castrado ;
}

function Tutor(nome, raça, idade, genero) {
    ficha.call(this, nome, raça,idade);
    this.genero = genero;
}

const Apollo = new cachorro("Apollo", "Cane Corso","1", "castrado");
const Kyra = new cachorro("Kyra", "Cane Corso", "1", "castrado");
const Pedro = new Tutor("Pedro", "branca","28", "masculino");


console.log(Apollo);
console.log(Kyra);
console.log(Pedro);