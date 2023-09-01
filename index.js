console.log("Iniciando contagem regressiva...");

for (let i = 10; i >= 0; i--) {
    if (i > 0) {
        console.log(`Segundos restantes: ${i}`);
    } else {
        console.log("BUM!");
    }
}