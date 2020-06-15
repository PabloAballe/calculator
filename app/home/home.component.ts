import { Component, OnInit } from "@angular/core";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {



decimal = "";
binario = "";
octal = ""
hexadecimal = "".toUpperCase();
mostrar = false;
base = 0
numero = 0;


decidir(numero) {
    this.base = numero;
    console.log(this.base)
}


con(base, numero) {
    console.log("la base es " + base);
    if (base == 10) {
        numero = this.decimal
        this.binario = parseInt(numero, 10).toString(2);
        this.octal = parseInt(numero, 10).toString(8);
        this.hexadecimal = parseInt(numero, 10).toString(16).toUpperCase();
        console.log("el numero es " + numero)
    }
    else if (base == 8) {
        numero = this.octal
        this.decimal = parseInt(numero, 8).toString(10);
        this.binario = parseInt(numero, 8).toString(2);
        this.hexadecimal = parseInt(numero, 8).toString(16);
    }
    else if (base == 2) {
        numero = this.binario
        this.decimal = parseInt(numero, 2).toString(10);
        this.octal = parseInt(numero, 2).toString(8);
        this.hexadecimal = parseInt(numero, 2).toString(16);
    }
    else if (base == 16) {
        numero = this.hexadecimal
        this.decimal = parseInt(numero, 16).toString(10);
        this.binario = parseInt(numero, 16).toString(2);
        this.octal = parseInt(numero, 16).toString(8);
    }
}









clear() {

    this.decimal = "";
    this.binario = "";
    this.octal = "";
    this.hexadecimal = "";
}

constructor() {
}

ngOnInit(): void {
}
}
