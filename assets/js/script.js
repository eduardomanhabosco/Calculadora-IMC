const form = document.getElementById('form');


form.addEventListener('submit', function(event) {
    event.preventDefault();

        const weight = document.getElementById('weight').value;
        const height = parseFloat(document.getElementById('height').value); //Pegar numero quebrado para o tamanho

    
    const bmi = (weight/ (height*height)).toFixed(2); //Calcula o IMC

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden') //Adiciona espaço para os dados de imc

    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!'
    }
    else if (bmi >= 18.5 && bmi <= 25){
        description =  'Você está no peso ideal!';
        value.classList.remove('attention')
        value.classList.add('normal')
    }else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado! Você esta com sobrepeso!';
    }else if (bmi >30 && bmi <= 35.5){
        description = 'Cuidado! você está com obesidade moderada!';
    }else if (bmi > 35 && bmi <= 40){
        description = 'Cuidado! Você está com obesidade severa!';
    }else {
        description = "VAI EXPLODIRRRR!"
    }

    value.textContent = bmi.replace('.', ',')
    document.getElementById('description').textContent = description;

});