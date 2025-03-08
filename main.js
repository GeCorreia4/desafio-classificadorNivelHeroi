var nameHero = "Gabriel";
var experienceHero = 10110;
var levelHero;

if (typeof(experienceHero) !== 'number') {
    console.log("Experiencia de Herói diferente do tipo number")
    return
}

if (experienceHero <= 1000) {
    levelHero = "Ferro";
} else if (experienceHero > 1000 && experienceHero <= 2000) {
    levelHero = "Bronze";
} else if (experienceHero > 2000 && experienceHero <= 5000) {
    levelHero = "Prata";
} else if (experienceHero > 5000 && experienceHero <= 7000) {
    levelHero = "Ouro";
} else if (experienceHero > 7000 && experienceHero <= 8000) {
    levelHero = "Platina";
} else if (experienceHero > 8000 && experienceHero <= 9000) {
    levelHero = "Ascendente";
} else if (experienceHero > 9000 && experienceHero <= 10000) {
    levelHero = "Imortal";
} else if (experienceHero > 10000) {
    levelHero = "Radiante";
}

console.log(`O Herói de nome ${nameHero} está no nível de ${levelHero}`)