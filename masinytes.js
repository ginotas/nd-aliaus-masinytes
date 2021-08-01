"use strict";

class Masina {
    constructor(pavadinimas) {
        this.pavadinimas = pavadinimas;
        this.greitis = 0;
        this.kelias = 0;
    }
    gazas(kiek) {
        this.greitis += kiek;
// uzdedam maksimalu greiti:
        if(this.greitis > 200) {
            this.greitis = 200;
        }

    }
    stabdis(kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }
    vaziuojam() {
        this.kelias += this.greitis;
    }
}

class SportineMasina extends Masina {
    constructor(pavadinimas) {
        super(pavadinimas);
        this.spoileris = false;
    }
    gazas(kiek) {
        if (this.spoileris) {
            this.greitis += kiek;
        } else {
            this.greitis += (kiek * 2);
        }
    }
    stabdis(kiek) {
        if(this.spoileris) {
            this.greitis -= (kiek * 2);
        } else {
            this.greitis -= kiek;
        }

    }
    pakeiskSpoilerioPozicija() {

    }
}

let masinos = [];

masinos.push(new Masina("mazda"));
masinos.push(new Masina("toyota"));
masinos.push(new Masina("vw"));
masinos.push(new Masina("opel"));
masinos.push(new Masina("bmw"));
masinos.push(new Masina("audi"));
masinos.push(new SportineMasina("maserati"));
masinos.push(new SportineMasina("bugati"));

let pirmauja;

do {
    for (let i = 0; i < masinos.length; i++) {
        let didinamGreiti = Math.random();
        if (didinamGreiti > 0.5) {
            masinos[i].gazas(Math.floor(Math.random() * 10));
        } else {
            masinos[i].stabdis(Math.floor(Math.random() * 10));
        }
        masinos[i].vaziuojam();
    }

} while ();

console.log(masinos);















