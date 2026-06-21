// 6. Crie um array de objetos representando músicas, cada uma com título, artista e
// duração em segundos. Use for...of para exibir cada música no formato "Artista —
// Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
// mesmo formato.

const musicas = [
    {titulo: "November Rain",
    artista: "Guns N' Roses",
    duracao: 337},

    {titulo: "Rap God", 
    artista: "Eminem",
    duracao: 364},

    {titulo: "Smack That",
    artista: "Akon",
    duracao: 240},

    {titulo: "Bohemian Rhapsody",
    artista: "Queen",
    duracao: 355}
]

for (const musica of musicas) {
    const minutos = Math.floor(musica.duracao / 60);
    const segundos = musica.duracao % 60;
    console.log(`${musica.artista} — ${musica.titulo} (${minutos}:${segundos.toString().padStart(2, '0')})`);
}
let duracaoTotal = 0;
musicas.forEach(musica => duracaoTotal += musica.duracao);
const minutosTotal = Math.floor(duracaoTotal / 60);
const segundosTotal = duracaoTotal % 60;
console.log(`Duração total: ${minutosTotal}:${segundosTotal.toString().padStart(2, '0')}`);