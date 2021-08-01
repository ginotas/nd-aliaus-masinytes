"use strict";

class Masina {
    constructor(pavadinimas) {
        this.pavadinimas = pavadinimas;
        this.greitis = 0;
        this.kelias = 0;
    }
    gazas(kiek) {

    }
    stabdis(kiek) {

    }
    vaziuojam() {

    }
}

class SportineMasina extends Masina {
    constructor(pavadinimas) {
        super(pavadinimas);
        this.spoileris = false;
    }
    gazas(kiek) {

    }
    stabdis(kiek) {

    }
    pakeiskSpoilerioPozicija() {

    }
}












