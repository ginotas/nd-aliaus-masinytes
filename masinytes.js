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
    lyderis(lyderis) {
        if (this.kelias > lyderis.kelias) {
            return true;
        } else if (this.kelias === lyderis.kelias && this.greitis > lyderis.greitis) {
            return true;
        }
        return false;
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
        // uzdedam max greiti sportinem masinom:
        if (this.greitis > 300) {
            this.greitis = 300;
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
        let keiciam = Math.random();
        if (keiciam < 0.5) {
            this.spoileris = false;
        } else {
            this.spoileris = true;
        }
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

let lyderis;
let atkarpa = 100;

do {
    for (let i = 0; i < masinos.length; i++) {
        let didinamGreiti = Math.random();
        if (didinamGreiti > 0.3) {
            masinos[i].gazas(Math.floor(Math.random() * 10));
        } else {
            masinos[i].stabdis(Math.floor(Math.random() * 10));
        }
        masinos[i].vaziuojam();
    }
    lyderis = 0;
    for (let i = 1; i < masinos.length; i++) {
        if (masinos[i].lyderis(masinos[lyderis])) {
            lyderis = i;
        }
    }
    if (masinos[lyderis].kelias > atkarpa) {
        console.log("Po " + atkarpa + " km. pirmauja:");
        console.log(masinos[lyderis]);
        atkarpa += 100;
    }

} while (masinos[lyderis].kelias < 1000);

for (let i = 0; i < masinos.length - 1; i++) {
    for (let j = i + 1; j < masinos.length; j++) {
        if (
            !masinos[i].lyderis(masinos[j])
        ) {
            let tmp = masinos[i];
            masinos[i] = masinos[j];
            masinos[j] = tmp;
        }
    }
}




console.log(masinos);















