//Criação do JSON

var json1 = `{
    "classe": "Classe: Especial",
    "nome": "Nome: Yuji",
    "sobrenome": "Sobrenome: Itadori",
    "cidade": "Distrito: Toquio",
    "pais": "País: Japão",
    "imagem": "<img src='img/Yuji_Itadori.png'>",
    "link": "https://jujutsu-kaisen.fandom.com/wiki/Yuji_Itadori?so=search"
}`;

var json2 = `{
    "classe": "Classe: Grau 2",
    "nome": "Nome: Megumi",
    "sobrenome": "Sobrenome: Fushiguro",
    "cidade": "Distrito: Toquio",
    "pais": "País: Japão",
    "imagem": "<img src='img/Megumi_Summoning.webp'>",
    "link": "https://jujutsu-kaisen.fandom.com/wiki/Megumi_Fushiguro"
}`;

var json3 = `{
    "classe": "Classe: Grau 3",
    "nome": "Nome: Nobara",
    "sobrenome": "Sobrenome: Kugisaki",
    "cidade": "Distrito: Toquio",
    "pais": "País: Japão",
    "imagem": "<img src='img/Nobara_Kugisaki (1).webp'>",
    "link": "https://jujutsu-kaisen.fandom.com/wiki/Nobara_Kugisaki?so=search"
}`;

var json4 = `{
    "classe": "Classe: Especial",
    "nome": "Nome: Satoru",
    "sobrenome": "Sobrenome: Gojo",
    "cidade": "Distrito: Toquio",
    "pais": "País: Japão",
    "imagem": "<img src='img/Satoru_Haori_.webp'>",
    "link": "https://jujutsu-kaisen.fandom.com/wiki/Satoru_Gojo?so=search"
}`;

var json5 = `{
    "classe": "Classe: Especial",
    "nome": "Nome: Ryomen",
    "sobrenome": "Sobrenome: Sukuna",
    "cidade": "Desconhecido",
    "pais": "País: Japão (Era Heian)",
    "imagem": "<img src='img/Sukugumi._Render.webp'>",
    "link": "https://jujutsu-kaisen.fandom.com/wiki/Sukuna"
}`;

var json6 = `{
    "classe": "Classe: Especial",
    "nome": "Nome: Yuta",
    "sobrenome": "Sobrenome: Okkotsu",
    "cidade": "Distrito: Toquio",
    "pais": "País: Japao",
    "imagem": "<img src='img/Yuta_Okkotsu_e_Rika.png'>",
    "link": "https://jujutsu-kaisen.fandom.com/wiki/Yuta_Okkotsu"
}`;

function carregar(){
    document.getElementById('imagem').innerHTML = "<img src='img/ponto-de-interrogacao-em-um-fundo-preto-circular.png'>";

}




//Converter o texto STRING para JSON
var data1 = JSON.parse(json1);
var data2 = JSON.parse(json2);
var data3 = JSON.parse(json3);
var data4 = JSON.parse(json4);
var data5 = JSON.parse(json5);
var data6 = JSON.parse(json6);

var link1 = `<a href="${data1.link}">Visite nosso site</a>`;
var link2 = `<a href="${data2.link}">Visite nosso site</a>`;
var link3 = `<a href="${data3.link}">Visite nosso site</a>`;
var link4 = `<a href="${data4.link}">Visite nosso site</a>`;
var link5 = `<a href="${data5.link}">Visite nosso site</a>`;
var link6 = `<a href="${data6.link}">Visite nosso site</a>`;

function apertar1() {
    
    document.getElementById('imagem').innerHTML =data1.imagem 
    document.getElementById('classe').innerHTML = data1.classe;
    document.getElementById('nome').innerHTML = data1.nome;
    document.getElementById('sobrenome').innerHTML = data1.sobrenome;
    document.getElementById('cidade').innerHTML = data1.cidade;
    document.getElementById('pais').innerHTML = data1.pais;
    document.getElementById('link').innerHTML = link1;
} 
function apertar2() {
    document.getElementById('imagem').innerHTML = data2.imagem;
    document.getElementById('classe').innerHTML = data2.classe;
    document.getElementById('nome').innerHTML = data2.nome;
    document.getElementById('sobrenome').innerHTML = data2.sobrenome;
    document.getElementById('cidade').innerHTML = data2.cidade;
    document.getElementById('pais').innerHTML = data2.pais;
    document.getElementById('link').innerHTML = link2;
} 
function apertar3() {
    document.getElementById('imagem').innerHTML = data3.imagem;
    document.getElementById('classe').innerHTML = data3.classe;
    document.getElementById('nome').innerHTML = data3.nome;
    document.getElementById('sobrenome').innerHTML = data3.sobrenome;
    document.getElementById('cidade').innerHTML = data3.cidade;
    document.getElementById('pais').innerHTML = data3.pais;
    document.getElementById('link').innerHTML = link3;
} 
function apertar4() {
    document.getElementById('imagem').innerHTML = data4.imagem;
    document.getElementById('classe').innerHTML = data4.classe;
    document.getElementById('nome').innerHTML = data4.nome;
    document.getElementById('sobrenome').innerHTML = data4.sobrenome;
    document.getElementById('cidade').innerHTML = data4.cidade;
    document.getElementById('pais').innerHTML = data4.pais;
    document.getElementById('link').innerHTML = link4;
} 
function apertar5() {
    document.getElementById('imagem').innerHTML = data5.imagem;
    document.getElementById('classe').innerHTML = data5.classe;
    document.getElementById('nome').innerHTML = data5.nome;
    document.getElementById('sobrenome').innerHTML = data5.sobrenome;
    document.getElementById('cidade').innerHTML = data5.cidade;
    document.getElementById('pais').innerHTML = data5.pais;
    document.getElementById('link').innerHTML = link5;
} 
function apertar6() {
    document.getElementById('imagem').innerHTML = data6.imagem;
    document.getElementById('classe').innerHTML = data6.classe;
    document.getElementById('nome').innerHTML = data6.nome;
    document.getElementById('sobrenome').innerHTML = data6.sobrenome;
    document.getElementById('cidade').innerHTML = data6.cidade;
    document.getElementById('pais').innerHTML = data6.pais;
    document.getElementById('link').innerHTML = link6;
} 





