const pokeNameInput = document.getElementById("pokeName");
const pokeNameFind = document.getElementById("pokeNumero");
const pokeVida = document.getElementById("hp");
const pokeAtaque = document.getElementById("attack");
const pokeDefensa = document.getElementById("defense");
const pokeAtaqueEspecial = document.getElementById("special-attack");
const pokeDefensaEspecial = document.getElementById("special-defense");
const pokeVelocidad = document.getElementById("speed");

const fetchPokemon = () => {
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (pokeImg.className == "fondoNegro") {
            return alert("Pokedex Apagada.") 

        } else if (pokeName == "") {
            return alert("Ingresa un nombre antes.")

        } else if (res.status != "200") {
            pokeImage("Practicas-FrontEnd 4/images/pokemon-sad.gif")
            pokeImg.className = ("pokeSad");
            pokeClear();

        } else {
            return res.json();

        }
    }).then((data) => {
        if (data) {

            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            let pokeTypes = data.types[0].type.name;
            pokeType.innerText = (pokeTypes).toUpperCase();
            pokeType.className = (pokeTypes);
            console.log("Tipo: " + pokeTypes);

            let pokeNumeros = data.id;
            console.log("ID: " + pokeNumeros);

            let pokeNameFinds = data.forms[0].name;
            console.log("Nombre: " + pokeNameFinds);

            let pokeAlturas = data.height;
            pokeAltura.innerText = ("ALTURA:  " + pokeAlturas);
            console.log("Altura: " + pokeAlturas);

            let pokePesos = data.weight;
            pokePeso.innerText = ("PESO:  " + pokePesos);
            console.log("Peso: " + pokePesos);

            let pokeVidas = data.stats[0].base_stat;
            hpStats.innerText = (pokeAlturas);
            console.log("Vida: " + pokeVidas);

            let pokeAtaques = data.stats[1].base_stat;
            attackStats.innerText = (pokeAtaques);
            console.log("Ataque: " + pokeAtaques);

            let pokeDefensas = data.stats[2].base_stat;
            defenseStats.innerText = (pokeDefensas);
            console.log("Defensa: " + pokeDefensas);

            let pokeAtaquesEspecial = data.stats[3].base_stat;
            specialAttackStats.innerText = (pokeAtaquesEspecial);
            console.log("Ataque Especial: " + pokeAtaquesEspecial);

            let pokeDefensasEspecial = data.stats[4].base_stat;
            specialDefenseStats.innerText = (pokeDefensasEspecial);
            console.log("Defensa Especial: " + pokeDefensasEspecial);

            let pokeVelocidades = data.stats[5].base_stat;
            speedStats.innerText = (pokeVelocidades);
            console.log("Velocidad: " + pokeVelocidades);

            pokeTypesGen(pokeTypes);
            
            pokeVidasGen(pokeVidas);
            pokeAtaquesGen(pokeAtaques);
            pokeDefensasGen(pokeDefensas);
            pokeAtaquesEspecialGen(pokeAtaquesEspecial);
            pokeDefensasEspecialGen(pokeDefensasEspecial);
            pokeVelocidadesGen(pokeVelocidades);
            
            pokeNumerosGen(pokeNumeros, pokeNameFinds);
            pokeAlturasGen(pokeAlturas);
            pokePesosGen(pokePesos);

            if (pokeMov1.className == "pokeMov1" && pokeMov2.className == "pokeMov2" && pokeMov3.className == "pokeMov3" && pokeMov4.className == "pokeMov4" && pokeMov5.className == "pokeMov5" && pokeMov6.className == "pokeMov6" && pokeMov7.className == "pokeMov7" && pokeMov8.className == "pokeMov8" && pokeMov9.className == "pokeMov9" && pokeMov10.className == "pokeMov10" && pokeMov11.className == "pokeMov11" && pokeMov12.className == "pokeMov12") {
                pokeClearMovs();

            }
            
        }
    });
}

let num = -1;
let numApi = 0;

const encenderPokedex = () => {

    if (pokeImg.className == "fondoNegro") {
        pokeImg.src = "Practicas-FrontEnd 4/images/pokeball.png";
        pokeImg.className = ("pokeball");

    } else {
        num = -1;
        numApi = 0;
        pokeImg.src = "Practicas-FrontEnd 4/images/fondoNegro.jpg";
        pokeImg.className = ("fondoNegro");
        pokeClear();

    }
}

const subirPokemon = () => {
    const urlSubir = "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0";

    fetch(urlSubir).then((resSubir) => {
        if (resSubir.status != "200") {
            console.log(resSubir);

        } else if (pokeImg.className == "fondoNegro") {
            return alert("Pokedex Apagada.") 

        } else if (num <= 0) {
            num = -1;
            numApi = 0;
            pokeImg.src = ("Practicas-FrontEnd 4/images/pokeball.png");
            pokeImg.className = ("pokeball");
            pokeClear();
            return alert("No hay mas pokemones.");

        } else {
            return resSubir.json();
        }
    }).then((data) => {
        if (data) {
            num--;
            numApi--;
            let pokeNameFinds = data.results[num].name;
            console.log("Nombre: " + pokeNameFinds);
            console.log(data);

            const urlSubir1 = `https://pokeapi.co/api/v2/pokemon/${numApi}/`

            fetch(urlSubir1).then((resSubir1) => {
            if (resSubir1.status != "200") {
                console.log(resSubir1);

            } else {
                return resSubir1.json();

            }
    }).then((data) => {
        if (data) {

            console.log(data);
            pokeNameInput.value = "";

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            let pokeTypes = data.types[0].type.name;
            pokeType.innerText = (pokeTypes).toUpperCase();
            pokeType.className = (pokeTypes);
            console.log("Tipo: " + pokeTypes);

            let pokeNumeros = data.id;
            console.log("ID: " + pokeNumeros);

            let pokeNameFinds = data.forms[0].name;
            console.log("Nombre: " + pokeNameFinds);

            let pokeAlturas = data.height;
            pokeAltura.innerText = ("ALTURA:  " + pokeAlturas);
            console.log("Altura: " + pokeAlturas);

            let pokePesos = data.weight;
            pokePeso.innerText = ("PESO:  " + pokePesos);
            console.log("Peso: " + pokePesos);

            let pokeVidas = data.stats[0].base_stat;
            hpStats.innerText = (pokeAlturas);
            console.log("Vida: " + pokeVidas);

            let pokeAtaques = data.stats[1].base_stat;
            attackStats.innerText = (pokeAtaques);
            console.log("Ataque: " + pokeAtaques);

            let pokeDefensas = data.stats[2].base_stat;
            defenseStats.innerText = (pokeDefensas);
            console.log("Defensa: " + pokeDefensas);

            let pokeAtaquesEspecial = data.stats[3].base_stat;
            specialAttackStats.innerText = (pokeAtaquesEspecial);
            console.log("Ataque Especial: " + pokeAtaquesEspecial);

            let pokeDefensasEspecial = data.stats[4].base_stat;
            specialDefenseStats.innerText = (pokeDefensasEspecial);
            console.log("Defensa Especial: " + pokeDefensasEspecial);

            let pokeVelocidades = data.stats[5].base_stat;
            speedStats.innerText = (pokeVelocidades);
            console.log("Velocidad: " + pokeVelocidades);

            pokeTypesGen(pokeTypes);

            pokeVidasGen(pokeVidas);
            pokeAtaquesGen(pokeAtaques);
            pokeDefensasGen(pokeDefensas);
            pokeAtaquesEspecialGen(pokeAtaquesEspecial);
            pokeDefensasEspecialGen(pokeDefensasEspecial);
            pokeVelocidadesGen(pokeVelocidades);

            pokeNumerosGen(pokeNumeros, pokeNameFinds);
            pokeAlturasGen(pokeAlturas);
            pokePesosGen(pokePesos);

            if (pokeMov1.className == "pokeMov1" && pokeMov2.className == "pokeMov2" && pokeMov3.className == "pokeMov3" && pokeMov4.className == "pokeMov4" && pokeMov5.className == "pokeMov5" && pokeMov6.className == "pokeMov6" && pokeMov7.className == "pokeMov7" && pokeMov8.className == "pokeMov8" && pokeMov9.className == "pokeMov9" && pokeMov10.className == "pokeMov10" && pokeMov11.className == "pokeMov11" && pokeMov12.className == "pokeMov12") {
                pokeClearMovs();

            }

        }
      })
    }
  })
}

const bajarPokemon = () => {
    const urlBajar = "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0";

    fetch(urlBajar).then((resBajar) => {
        if (resBajar.status != "200") {
            console.log(resBajar);
        
        } else if (pokeImg.className == "fondoNegro") {
            return alert("Pokedex Apagada.") 

        } else if (num >= 897) {
            num = 898;
            numApi = 899;
            pokeImg.src = ("Practicas-FrontEnd 4/images/pokeball.png");
            pokeImg.className = ("pokeball");
            pokeClear();
            return alert("No hay mas pokemones.");
        
        } else {
            return resBajar.json();

        }
    }).then((data) => {
        if (data) {
            num++;
            numApi++;
            let pokeNameFinds = data.results[num].name;
            console.log("Nombre: " + pokeNameFinds);
            console.log(data);

            const urlBajar1 = `https://pokeapi.co/api/v2/pokemon/${numApi}/`

            fetch(urlBajar1).then((resBajar1) => {
            if (resBajar1.status != "200") {
                console.log(resBajar1);

            } else {
                return resBajar1.json();

            }
    }).then((data) => {
        if (data) {
            
            console.log(data);
            pokeNameInput.value = "";

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            let pokeTypes = data.types[0].type.name;
            pokeType.innerText = (pokeTypes).toUpperCase();
            pokeType.className = (pokeTypes);
            console.log("Tipo: " + pokeTypes);

            let pokeNumeros = data.id;
            console.log("ID: " + pokeNumeros);

            let pokeNameFinds = data.forms[0].name;
            console.log("Nombre: " + pokeNameFinds);

            let pokeAlturas = data.height;
            pokeAltura.innerText = ("ALTURA:  " + pokeAlturas);
            console.log("Altura: " + pokeAlturas);

            let pokePesos = data.weight;
            pokePeso.innerText = ("PESO:  " + pokePesos);
            console.log("Peso: " + pokePesos);

            let pokeVidas = data.stats[0].base_stat;
            hpStats.innerText = (pokeAlturas);
            console.log("Vida: " + pokeVidas);

            let pokeAtaques = data.stats[1].base_stat;
            attackStats.innerText = (pokeAtaques);
            console.log("Ataque: " + pokeAtaques);

            let pokeDefensas = data.stats[2].base_stat;
            defenseStats.innerText = (pokeDefensas);
            console.log("Defensa: " + pokeDefensas);

            let pokeAtaquesEspecial = data.stats[3].base_stat;
            specialAttackStats.innerText = (pokeAtaquesEspecial);
            console.log("Ataque Especial: " + pokeAtaquesEspecial);

            let pokeDefensasEspecial = data.stats[4].base_stat;
            specialDefenseStats.innerText = (pokeDefensasEspecial);
            console.log("Defensa Especial: " + pokeDefensasEspecial);

            let pokeVelocidades = data.stats[5].base_stat;
            speedStats.innerText = (pokeVelocidades);
            console.log("Velocidad: " + pokeVelocidades);

            pokeTypesGen(pokeTypes);

            pokeVidasGen(pokeVidas);
            pokeAtaquesGen(pokeAtaques);
            pokeDefensasGen(pokeDefensas);
            pokeAtaquesEspecialGen(pokeAtaquesEspecial);
            pokeDefensasEspecialGen(pokeDefensasEspecial);
            pokeVelocidadesGen(pokeVelocidades);

            pokeNumerosGen(pokeNumeros, pokeNameFinds);
            pokeAlturasGen(pokeAlturas);
            pokePesosGen(pokePesos);

            if (pokeMov1.className == "pokeMov1" && pokeMov2.className == "pokeMov2" && pokeMov3.className == "pokeMov3" && pokeMov4.className == "pokeMov4" && pokeMov5.className == "pokeMov5" && pokeMov6.className == "pokeMov6" && pokeMov7.className == "pokeMov7" && pokeMov8.className == "pokeMov8" && pokeMov9.className == "pokeMov9" && pokeMov10.className == "pokeMov10" && pokeMov11.className == "pokeMov11" && pokeMov12.className == "pokeMov12") {
                pokeClearMovs();

            }

        }
      })
    }
  })
}

const derPokemon = () => {
    const urlDer = "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0";
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    fetch(urlDer).then((resDer) => {
        if (resDer.status != "200") {
        
        } else if (pokeImg.className == "fondoNegro") {
            return alert("Pokedex Apagada.")

        } else if (pokeImg.className == "pokeSad") {
            return alert("Busca un pokemon antes.")

        } else if (pokeImg.className == "fondoBlanco") {
            return alert("No hay mas movimientos que mostrar.")

        } else if (pokeName != "") {
    
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
            fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);

            } else {
                return res.json();

            }
        }).then((data) => {
            if (data) {

                if (pokeImg.className == "pokeball") {
                    let pokeImg = data.sprites.front_default;
                    pokeImage(pokeImg);
    
                    let pokeTypes = data.types[0].type.name;
                    pokeType.innerText = (pokeTypes).toUpperCase();
                    pokeType.className = (pokeTypes);
    
                    let pokeNumeros = data.id;
    
                    let pokeNameFinds = data.forms[0].name;
    
                    let pokeAlturas = data.height;
                    pokeAltura.innerText = ("ALTURA:  " + pokeAlturas);
    
                    let pokePesos = data.weight;
                    pokePeso.innerText = ("PESO:  " + pokePesos);
    
                    let pokeVidas = data.stats[0].base_stat;
                    hpStats.innerText = (pokeAlturas);
    
                    let pokeAtaques = data.stats[1].base_stat;
                    attackStats.innerText = (pokeAtaques);
    
                    let pokeDefensas = data.stats[2].base_stat;
                    defenseStats.innerText = (pokeDefensas);
    
                    let pokeAtaquesEspecial = data.stats[3].base_stat;
                    specialAttackStats.innerText = (pokeAtaquesEspecial);
    
                    let pokeDefensasEspecial = data.stats[4].base_stat;
                    specialDefenseStats.innerText = (pokeDefensasEspecial);
    
                    let pokeVelocidades = data.stats[5].base_stat;
                    speedStats.innerText = (pokeVelocidades);
    
                    pokeTypesGen(pokeTypes);
    
                    pokeVidasGen(pokeVidas);
                    pokeAtaquesGen(pokeAtaques);
                    pokeDefensasGen(pokeDefensas);
                    pokeAtaquesEspecialGen(pokeAtaquesEspecial);
                    pokeDefensasEspecialGen(pokeDefensasEspecial);
                    pokeVelocidadesGen(pokeVelocidades);
    
                    pokeNumerosGen(pokeNumeros, pokeNameFinds);
                    pokeAlturasGen(pokeAlturas);
                    pokePesosGen(pokePesos);
    
                    if (pokeMov1.className == "pokeMov1" && pokeMov2.className == "pokeMov2" && pokeMov3.className == "pokeMov3" && pokeMov4.className == "pokeMov4" && pokeMov5.className == "pokeMov5" && pokeMov6.className == "pokeMov6" && pokeMov7.className == "pokeMov7" && pokeMov8.className == "pokeMov8" && pokeMov9.className == "pokeMov9" && pokeMov10.className == "pokeMov10" && pokeMov11.className == "pokeMov11" && pokeMov12.className == "pokeMov12") {
                        pokeClearMovs();
    
                    }
    
                    } else if (pokeImg.className == "pokemon") {
                        pokeImg.src = ("Practicas-FrontEnd 4/images/fondoBlanco.jpg");
                        pokeImg.className = ("fondoBlanco");
    
                        let pokeMovs1 = data.moves[0].move.name;
    
                        pokeMov1.innerText = ("1.- " + pokeMovs1).toUpperCase();
                        pokeMov1.className = ("pokeMov1");
    
                        let pokeMovs2 = data.moves[1].move.name;
    
                        pokeMov2.innerText = ("2.- " + pokeMovs2).toUpperCase();
                        pokeMov2.className = ("pokeMov2");
    
                        let pokeMovs3 = data.moves[2].move.name;
    
                        pokeMov3.innerText = ("3.- " + pokeMovs3).toUpperCase();
                        pokeMov3.className = ("pokeMov3");
    
                        let pokeMovs4 = data.moves[3].move.name;
    
                        pokeMov4.innerText = ("4.- " + pokeMovs4).toUpperCase();
                        pokeMov4.className = ("pokeMov4");
    
                        let pokeMovs5 = data.moves[4].move.name;
    
                        pokeMov5.innerText = ("5.- " + pokeMovs5).toUpperCase();
                        pokeMov5.className = ("pokeMov5");
    
                        let pokeMovs6 = data.moves[5].move.name;
    
                        pokeMov6.innerText = ("6.- " + pokeMovs6).toUpperCase();
                        pokeMov6.className = ("pokeMov6");
    
                        let pokeMovs7 = data.moves[6].move.name;
    
                        pokeMov7.innerText = ("7.- " + pokeMovs7).toUpperCase();
                        pokeMov7.className = ("pokeMov7");
    
                        let pokeMovs8 = data.moves[7].move.name;
    
                        pokeMov8.innerText = ("8.- " + pokeMovs8).toUpperCase();
                        pokeMov8.className = ("pokeMov8");
    
                        let pokeMovs9 = data.moves[8].move.name;
    
                        pokeMov9.innerText = ("9.- " + pokeMovs9).toUpperCase();
                        pokeMov9.className = ("pokeMov9");
    
                        let pokeMovs10 = data.moves[9].move.name;
    
                        pokeMov10.innerText = ("10.- " + pokeMovs10).toUpperCase();
                        pokeMov10.className = ("pokeMov10");
    
                        let pokeMovs11 = data.moves[10].move.name;
    
                        pokeMov11.innerText = ("11.- " + pokeMovs11).toUpperCase();
                        pokeMov11.className = ("pokeMov11");
    
                        let pokeMovs12 = data.moves[11].move.name;
    
                        pokeMov12.innerText = ("12.- " + pokeMovs12).toUpperCase();
                        pokeMov12.className = ("pokeMov12");

               }
            }   
        })
            
        } else if (numApi == 0) {
            return alert("Busca un pokemon antes.")

        } else if (pokeImg.className == "fondoBlanco") {
            return alert("No puedes avanzar mas.")

        } else if (num >= 897) {
            num = 898;
            numApi = 899;
            pokeImg.src = ("Practicas-FrontEnd 4/images/pokeball.png");
            pokeImg.className = ("pokeball");
            pokeClear();
            return alert("No hay mas pokemones.");
        
        } else {
            return resDer.json();

        }
    }).then((data) => {
        if (data) {

            const urlDer1 = `https://pokeapi.co/api/v2/pokemon/${numApi}/`

            fetch(urlDer1).then((resDer1) => {
            if (resDer1.status != "200") {
                console.log(resDer1);

            } else {
                return resDer1.json();

            }
    }).then((data) => {
        if (data) {

            if (pokeImg.className == "pokeball") {
                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);

                let pokeTypes = data.types[0].type.name;
                pokeType.innerText = (pokeTypes).toUpperCase();
                pokeType.className = (pokeTypes);

                let pokeNumeros = data.id;

                let pokeNameFinds = data.forms[0].name;

                let pokeAlturas = data.height;
                pokeAltura.innerText = ("ALTURA:  " + pokeAlturas);

                let pokePesos = data.weight;
                pokePeso.innerText = ("PESO:  " + pokePesos);

                let pokeVidas = data.stats[0].base_stat;
                hpStats.innerText = (pokeAlturas);

                let pokeAtaques = data.stats[1].base_stat;
                attackStats.innerText = (pokeAtaques);

                let pokeDefensas = data.stats[2].base_stat;
                defenseStats.innerText = (pokeDefensas);

                let pokeAtaquesEspecial = data.stats[3].base_stat;
                specialAttackStats.innerText = (pokeAtaquesEspecial);

                let pokeDefensasEspecial = data.stats[4].base_stat;
                specialDefenseStats.innerText = (pokeDefensasEspecial);

                let pokeVelocidades = data.stats[5].base_stat;
                speedStats.innerText = (pokeVelocidades);

                pokeTypesGen(pokeTypes);

                pokeVidasGen(pokeVidas);
                pokeAtaquesGen(pokeAtaques);
                pokeDefensasGen(pokeDefensas);
                pokeAtaquesEspecialGen(pokeAtaquesEspecial);
                pokeDefensasEspecialGen(pokeDefensasEspecial);
                pokeVelocidadesGen(pokeVelocidades);

                pokeNumerosGen(pokeNumeros, pokeNameFinds);
                pokeAlturasGen(pokeAlturas);
                pokePesosGen(pokePesos);

                if (pokeMov1.className == "pokeMov1" && pokeMov2.className == "pokeMov2" && pokeMov3.className == "pokeMov3" && pokeMov4.className == "pokeMov4" && pokeMov5.className == "pokeMov5" && pokeMov6.className == "pokeMov6" && pokeMov7.className == "pokeMov7" && pokeMov8.className == "pokeMov8" && pokeMov9.className == "pokeMov9" && pokeMov10.className == "pokeMov10" && pokeMov11.className == "pokeMov11" && pokeMov12.className == "pokeMov12") {
                    pokeClearMovs();

                }

                } else if (pokeImg.className == "pokemon") {
                    pokeImg.src = ("Practicas-FrontEnd 4/images/fondoBlanco.jpg");
                    pokeImg.className = ("fondoBlanco");

                    let pokeMovs1 = data.moves[0].move.name;

                    pokeMov1.innerText = ("1.- " + pokeMovs1).toUpperCase();
                    pokeMov1.className = ("pokeMov1");

                    let pokeMovs2 = data.moves[1].move.name;

                    pokeMov2.innerText = ("2.- " + pokeMovs2).toUpperCase();
                    pokeMov2.className = ("pokeMov2");

                    let pokeMovs3 = data.moves[2].move.name;

                    pokeMov3.innerText = ("3.- " + pokeMovs3).toUpperCase();
                    pokeMov3.className = ("pokeMov3");

                    let pokeMovs4 = data.moves[3].move.name;

                    pokeMov4.innerText = ("4.- " + pokeMovs4).toUpperCase();
                    pokeMov4.className = ("pokeMov4");

                    let pokeMovs5 = data.moves[4].move.name;

                    pokeMov5.innerText = ("5.- " + pokeMovs5).toUpperCase();
                    pokeMov5.className = ("pokeMov5");

                    let pokeMovs6 = data.moves[5].move.name;

                    pokeMov6.innerText = ("6.- " + pokeMovs6).toUpperCase();
                    pokeMov6.className = ("pokeMov6");

                    let pokeMovs7 = data.moves[6].move.name;

                    pokeMov7.innerText = ("7.- " + pokeMovs7).toUpperCase();
                    pokeMov7.className = ("pokeMov7");

                    let pokeMovs8 = data.moves[7].move.name;

                    pokeMov8.innerText = ("8.- " + pokeMovs8).toUpperCase();
                    pokeMov8.className = ("pokeMov8");

                    let pokeMovs9 = data.moves[8].move.name;

                    pokeMov9.innerText = ("9.- " + pokeMovs9).toUpperCase();
                    pokeMov9.className = ("pokeMov9");

                    let pokeMovs10 = data.moves[9].move.name;

                    pokeMov10.innerText = ("10.- " + pokeMovs10).toUpperCase();
                    pokeMov10.className = ("pokeMov10");

                    let pokeMovs11 = data.moves[10].move.name;

                    pokeMov11.innerText = ("11.- " + pokeMovs11).toUpperCase();
                    pokeMov11.className = ("pokeMov11");

                    let pokeMovs12 = data.moves[11].move.name;

                    pokeMov12.innerText = ("12.- " + pokeMovs12).toUpperCase();
                    pokeMov12.className = ("pokeMov12");
            
        }
      }
   })
  }
 })
}

const izqPokemon = () => {
    const urlIzq = "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0";
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    fetch(urlIzq).then((resIzq) => {
        if (resIzq.status != "200") {
            console.log(resIzq);
        
        } else if (pokeImg.className == "fondoNegro") {
            return alert("Pokedex Apagada.")

        } else if (pokeImg.className == "pokeball") {
            return alert("No puedes retroceder mas.")

        } else if (pokeImg.className == "pokeSad") {
            return alert("Busca un pokemon antes.")

        } else if (pokeImg.className == "pokemon") {
            pokeImg.className = "pokeball";
            pokeImg.src = "Practicas-FrontEnd 4/images/pokeball.png";
            pokeClear();

        } else if (pokeImg.className == "pokemon") {
            return alert("No puedes retroceder mas.")

        } else if (pokeName != "") {
    
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
            fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);

            } else {
                return res.json();

            }
        }).then((data) => {
            if (data) {

                if (pokeImg.className == "fondoBlanco") {
                    let pokeImg = data.sprites.front_default;
                    pokeImage(pokeImg);
                    pokeClearMovs();

               }
            }   
        })
        
        } else {
            return resIzq.json();

        }
    }).then((data) => {
        if (data) {

            const urlIzq1 = `https://pokeapi.co/api/v2/pokemon/${numApi}/`

            fetch(urlIzq1).then((resIzq1) => {
            if (resIzq1.status != "200") {
                console.log(resIzq1);

            } else {
                return resIzq1.json();

            }
    }).then((data) => {
        if (data) {

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            pokeClearMovs();

        }
      })
    }
  })
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
    pokePhoto.className = ("pokemon");

}

const pokeClear = () => {

    pokeNumero.innerText = ("");
    pokeNameFind.innerText = ("");
    pokeType.innerText = ("");
    pokeAltura.innerText = ("ALTURA:");
    pokePeso.innerText = ("PESO:");
    pokeVida.src = ("Practicas-FrontEnd 4/images/raya0.PNG");
    pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya0.PNG");
    pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya0.PNG");
    pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya0.PNG");
    pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya0.PNG");
    pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya0.PNG");
    hpStats.innerText = ("#");
    attackStats.innerText = ("#");
    defenseStats.innerText = ("#");
    specialAttackStats.innerText = ("#");
    specialDefenseStats.innerText = ("#");
    speedStats.innerText = ("#");
    pokeVul1.innerText = ("");
    pokeVul2.innerText = ("");
    pokeVul3.innerText = ("");
    pokeVul4.innerText = ("");
    pokeVul5.innerText = ("");
    pokeMov1.innerText = ("");
    pokeMov2.innerText = ("");
    pokeMov3.innerText = ("");
    pokeMov4.innerText = ("");
    pokeMov5.innerText = ("");
    pokeMov6.innerText = ("");
    pokeMov7.innerText = ("");
    pokeMov8.innerText = ("");
    pokeMov9.innerText = ("");
    pokeMov10.innerText = ("");
    pokeMov11.innerText = ("");
    pokeMov12.innerText = ("");

}

const pokeClearMovs = () => {

    pokeMov1.innerText = ("");
    pokeMov2.innerText = ("");
    pokeMov3.innerText = ("");
    pokeMov4.innerText = ("");
    pokeMov5.innerText = ("");
    pokeMov6.innerText = ("");
    pokeMov7.innerText = ("");
    pokeMov8.innerText = ("");
    pokeMov9.innerText = ("");
    pokeMov10.innerText = ("");
    pokeMov11.innerText = ("");
    pokeMov12.innerText = ("");

}

const pokeNumerosGen = (pokeNumeros, pokeNameFinds) => {

    if (pokeNumeros <= 9) {
        pokeNameFind.innerText = ("#00" + pokeNumeros + "-" + pokeNameFinds).toUpperCase();

    } else if (pokeNumeros <= 99) {
        pokeNameFind.innerText = ("#0" + pokeNumeros + "-" + pokeNameFinds).toUpperCase();

    } else if (pokeNumeros >= 99) {
        pokeNameFind.innerText = ("#" + pokeNumeros + "-" + pokeNameFinds).toUpperCase();

    }

}

const pokeAlturasGen = (pokeAlturas) => {

    if (pokeAlturas <= 9) {
        pokeAltura.innerText = ("ALTURA:  " + "0," + pokeAlturas + " M");

    } else if (pokeAlturas <= 99) {
        pokeAltura.innerText = ("ALTURA: " + String(pokeAlturas).split("") + " M");

    } else if (pokeAlturas >= 99) {
        pokeAltura.innerText = ("ALTURA: " + String(pokeAlturas).slice(0, 2) + "," +  String(pokeAlturas).slice(2, 3) + " M");
        
    }

}

const pokePesosGen = (pokePesos) => {

    if (pokePesos <= 9) {
        pokePeso.innerText = ("PESO:  " + "0," + pokePesos + " Kg");

    } else if (pokePesos <= 99) {
        pokePeso.innerText = ("PESO: " + String(pokePesos).split("") + " Kg");

    } else if (pokePesos <= 999) {
        pokePeso.innerText = ("PESO: " + String(pokePesos).slice(0, 2) + "," +  String(pokePesos).slice(2, 3) + " Kg");
        
    } else if (pokePesos >= 999) {
        pokePeso.innerText = ("PESO: " + String(pokePesos).slice(0, 3) + "," +  String(pokePesos).slice(3, 4) + " Kg");
        
    }

}

const pokeTypesGen = (pokeTypes) => {

    if (pokeTypes == "electric") {
        pokeVul1.innerText = ("GROUND");
        pokeVul1.className = ("ground");
        pokeVul2.innerText = ("");
        pokeVul3.innerText = ("");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "normal") {
        pokeVul1.innerText = ("FIGHTING");
        pokeVul1.className = ("fighting");
        pokeVul2.innerText = ("");
        pokeVul3.innerText = ("");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "water") {
        pokeVul1.innerText = ("ELECTRIC");
        pokeVul1.className = ("electric");
        pokeVul2.innerText = ("GRASS");
        pokeVul2.className = ("grass");
        pokeVul3.innerText = ("");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "ghost") {
        pokeVul1.innerText = ("GHOST");
        pokeVul1.className = ("ghost");
        pokeVul2.innerText = ("DARK");
        pokeVul2.className = ("dark");
        pokeVul3.innerText = ("");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "fairy") {
        pokeVul1.innerText = ("STEEL");
        pokeVul1.className = ("steel");
        pokeVul2.innerText = ("DARK");
        pokeVul2.className = ("dark");
        pokeVul3.innerText = ("");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "poison") {
        pokeVul1.innerText = ("PSYCHIC");
        pokeVul1.className = ("psychic");
        pokeVul2.innerText = ("GROUND");
        pokeVul2.className = ("ground");
        pokeVul3.innerText = ("");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "steel") {
        pokeVul1.innerText = ("FIRE");
        pokeVul1.className = ("fire");
        pokeVul2.innerText = ("FIGHTING");
        pokeVul2.className = ("fighting");
        pokeVul3.innerText = ("GROUND");
        pokeVul3.className = ("ground");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "bug") {
        pokeVul1.innerText = ("FIRE");
        pokeVul1.className = ("fire");
        pokeVul2.innerText = ("ROCK");
        pokeVul2.className = ("rock");
        pokeVul3.innerText = ("FLYING")
        pokeVul3.className = ("flying");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "dragon") {
        pokeVul1.innerText = ("DRAGON");
        pokeVul1.className = ("dragon");
        pokeVul2.innerText = ("FAIRY");
        pokeVul2.className = ("fairy");
        pokeVul3.innerText = ("ICE");
        pokeVul3.className = ("ice");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "fire") {
        pokeVul1.innerText = ("WATER");
        pokeVul1.className = ("water");
        pokeVul2.innerText = ("ROCK");
        pokeVul2.className = ("rock");
        pokeVul3.innerText = ("GROUND");
        pokeVul3.className = ("ground");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "fighting") {
        pokeVul1.innerText = ("FAIRY");
        pokeVul1.className = ("fairy");
        pokeVul2.innerText = ("PSYCHIC");
        pokeVul2.className = ("psychic");
        pokeVul3.innerText = ("FLYING");
        pokeVul3.className = ("flying");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "psychic") {
        pokeVul1.innerText = ("BUG");
        pokeVul1.className = ("bug");
        pokeVul2.innerText = ("GHOST");
        pokeVul2.className = ("ghost");
        pokeVul3.innerText = ("DARK");
        pokeVul3.className = ("dark");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "dark") {
        pokeVul1.innerText = ("BUG");
        pokeVul1.className = ("bug");
        pokeVul2.innerText = ("FAIRY");
        pokeVul2.className = ("fairy");
        pokeVul3.innerText = ("FIGHTING");
        pokeVul3.className = ("fighting");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "ground") {
        pokeVul1.innerText = ("WATER");
        pokeVul1.className = ("water");
        pokeVul2.innerText = ("ICE");
        pokeVul2.className = ("ice");
        pokeVul3.innerText = ("GRASS");
        pokeVul3.className = ("grass");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "flying") {
        pokeVul1.innerText = ("ELECTRIC");
        pokeVul1.className = ("electric");
        pokeVul2.innerText = ("ICE");
        pokeVul2.className = ("ice");
        pokeVul3.innerText = ("ROCK");
        pokeVul3.className = ("rock");
        pokeVul4.innerText = ("");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "ice") {
        pokeVul1.innerText = ("STEEL");
        pokeVul1.className = ("steel");
        pokeVul2.innerText = ("FIRE");
        pokeVul2.className = ("fire");
        pokeVul3.innerText = ("FIGHTING");
        pokeVul3.className = ("fighting");
        pokeVul4.innerText = ("ROCK");
        pokeVul4.className = ("rock");
        pokeVul5.innerText = ("");

    } else if (pokeTypes == "grass") {
        pokeVul1.innerText = ("BUG");
        pokeVul1.className = ("bug");
        pokeVul2.innerText = ("FIRE");
        pokeVul2.className = ("fire");
        pokeVul3.innerText = ("ICE");
        pokeVul3.className = ("ice");
        pokeVul4.innerText = ("POISON");
        pokeVul4.className = ("poison");
        pokeVul5.innerText = ("FLYING");
        pokeVul5.className = ("flying");

    } else if (pokeTypes == "rock") {
        pokeVul1.innerText = ("STEEL");
        pokeVul1.className = ("steel");;
        pokeVul2.innerText = ("WATER");
        pokeVul2.className = ("water");
        pokeVul3.innerText = ("FIGHTING");
        pokeVul3.className = ("fighting");
        pokeVul4.innerText = ("GRASS");
        pokeVul4.className = ("grass");
        pokeVul5.innerText = ("GROUND");
        pokeVul5.className = ("ground");

    }

}

const pokeVidasGen = (pokeVidas) => {

    if (pokeVidas <= 25) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya1.PNG");

    } else if (pokeVidas <= 50) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya2.PNG");

    } else if (pokeVidas <= 75) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya3.PNG");

    } else if (pokeVidas <= 100) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya4.PNG");

    } else if (pokeVidas <= 125) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya5.PNG");

    } else if (pokeVidas <= 150) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya6.PNG");

    } else if (pokeVidas <= 175) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya7.PNG");

    } else if (pokeVidas <= 200) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya8.PNG");

    } else if (pokeVidas <= 225) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya9.PNG");

    } else if (pokeVidas <= 250) {
        pokeVida.src = ("Practicas-FrontEnd 4/images/raya10.PNG");

    }

}

const pokeAtaquesGen = (pokeAtaques) => {

    if (pokeAtaques <= 25) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya1.PNG");

    } else if (pokeAtaques <= 50) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya2.PNG");

    } else if (pokeAtaques <= 75) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya3.PNG");

    } else if (pokeAtaques <= 100) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya4.PNG");

    } else if (pokeAtaques <= 125) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya5.PNG");

    } else if (pokeAtaques <= 150) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya6.PNG");

    } else if (pokeAtaques <= 175) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya7.PNG");

    } else if (pokeAtaques <= 200) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya8.PNG");

    } else if (pokeAtaques <= 225) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya9.PNG");

    } else if (pokeAtaques <= 250) {
        pokeAtaque.src = ("Practicas-FrontEnd 4/images/raya10.PNG");

    }

}

const pokeDefensasGen = (pokeDefensas) => {

    if (pokeDefensas <= 25) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya1.PNG");

    } else if (pokeDefensas <= 50) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya2.PNG");

    } else if (pokeDefensas <= 75) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya3.PNG");

    } else if (pokeDefensas <= 100) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya4.PNG");

    } else if (pokeDefensas <= 125) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya5.PNG");

    } else if (pokeDefensas <= 150) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya6.PNG");

    } else if (pokeDefensas <= 175) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya7.PNG");

    } else if (pokeDefensas <= 200) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya8.PNG");

    } else if (pokeDefensas <= 225) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya9.PNG");

    } else if (pokeDefensas <= 250) {
        pokeDefensa.src = ("Practicas-FrontEnd 4/images/raya10.PNG");

    }

}

const pokeAtaquesEspecialGen = (pokeAtaquesEspecial) => {

    if (pokeAtaquesEspecial <= 25) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya1.PNG");

    } else if (pokeAtaquesEspecial <= 50) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya2.PNG");

    } else if (pokeAtaquesEspecial <= 75) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya3.PNG");

    } else if (pokeAtaquesEspecial <= 100) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya4.PNG");

    } else if (pokeAtaquesEspecial <= 125) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya5.PNG");

    } else if (pokeAtaquesEspecial <= 150) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya6.PNG");

    } else if (pokeAtaquesEspecial <= 175) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya7.PNG");

    } else if (pokeAtaquesEspecial <= 200) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya8.PNG");

    } else if (pokeAtaquesEspecial <= 225) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya9.PNG");

    } else if (pokeAtaquesEspecial <= 250) {
        pokeAtaqueEspecial.src = ("Practicas-FrontEnd 4/images/raya10.PNG");

    }

}

const pokeDefensasEspecialGen = (pokeDefensasEspecial) => {

    if (pokeDefensasEspecial <= 25) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya1.PNG");

    } else if (pokeDefensasEspecial <= 50) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya2.PNG");

    } else if (pokeDefensasEspecial <= 75) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya3.PNG");

    } else if (pokeDefensasEspecial <= 100) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya4.PNG");

    } else if (pokeDefensasEspecial <= 125) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya5.PNG");

    } else if (pokeDefensasEspecial <= 150) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya6.PNG");

    } else if (pokeDefensasEspecial <= 175) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya7.PNG");

    } else if (pokeDefensasEspecial <= 200) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya8.PNG");

    } else if (pokeDefensasEspecial <= 225) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya9.PNG");

    } else if (pokeDefensasEspecial <= 250) {
        pokeDefensaEspecial.src = ("Practicas-FrontEnd 4/images/raya10.PNG");

    }

}

const pokeVelocidadesGen = (pokeVelocidades) => {

    if (pokeVelocidades <= 25) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya1.PNG");

    } else if (pokeVelocidades <= 50) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya2.PNG");

    } else if (pokeVelocidades <= 75) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya3.PNG");

    } else if (pokeVelocidades <= 100) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya4.PNG");

    } else if (pokeVelocidades <= 125) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya5.PNG");

    } else if (pokeVelocidades <= 150) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya6.PNG");

    } else if (pokeVelocidades <= 175) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya7.PNG");

    } else if (pokeVelocidades <= 200) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya8.PNG");

    } else if (pokeVelocidades <= 225) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya9.PNG");

    } else if (pokeVelocidades <= 250) {
        pokeVelocidad.src = ("Practicas-FrontEnd 4/images/raya10.PNG");

    }

}

let pokeStats = (pokeStat)
    pokeStat.innerText = ("PS⠀⠀" + "ATK⠀⠀" + "DEF⠀⠀" + "SP.ATK⠀⠀" + "SP.DEF⠀" + "SPEED");