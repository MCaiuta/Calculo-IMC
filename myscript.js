function calcular(peso, alt){
    alt = alt / 100;
    let imc = peso / (alt * alt);
    imc = imc.toFixed(1);
    let analise = "";
    if (imc > 0 ){
        if (imc < 18.5){
            analise = "Abaixo do peso. Seu IMC é: " + imc;
        }else if (imc >= 18.5 && imc < 25) {
            analise = "Normal. Seu IMC é: " + imc;
        } else if (imc >= 25 && imc < 30) {
            analise = "Sobrepeso. Seu IMC é: " + imc;
        } else if (imc >= 30 && imc < 40){
            analise = "Obesidade. Seu IMC é: " + imc;
        } else {
            analise = "Obesidade grave. Seu IMC é: " + imc;
        }
    } 
    else{
        analise = "IMC negativo"
    }

    return analise;

}