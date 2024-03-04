let NombreDelJuego = prompt("Ingresa el nombre del juego");
let ValorDelJuego = Number(prompt("Ingresa el valor del juego:"));
let FormatoDelJuego = prompt("¿El juego es fisico o digital?");

let PrecioFinal;

if (FormatoDelJuego === 'fisico') {
    let envio = 5000;
    PrecioFinal = ValorDelJuego + envio;
    alert ("Al comprar " + NombreDelJuego + " en formato fisico, vas a pagar " + PrecioFinal);
}
if (FormatoDelJuego === 'digital') {
    let ImpuestoPais = ValorDelJuego * 0.30;
    let PercepcionImpuestoALasGanancias = ValorDelJuego * 0.30;
    PrecioFinal = ValorDelJuego + PercepcionImpuestoALasGanancias + ImpuestoPais;
    alert("Al comprar " + NombreDelJuego + " en formato digital, vas a pagar " + PrecioFinal);
}