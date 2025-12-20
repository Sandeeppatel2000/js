// const form = document.querySelector('form')
// form.addEventListener('submit', function(e){
//     e.preventDefault()
    
//     const h = parseInt(document.querySelector('#height').value)
//     const w = parseInt(document.querySelector('#weight').value)
//     const res = document.querySelector('#results')
    
//     if(h==='' || h<0 || isNaN(h)){
//         res.innerHTML = 'Please enter a valid height'
//     }
//     else if(w==='' || w<0 || isNaN(w)){
//         res.innerHTML = 'Please enter a valid weight'
//     }
//     else{
//     const bmi = (w /((h*h)/10000)).toFixed(2)
//     // show results

//     if(bmi < 18.6){
//         res.innerHTML = `<span>Your BMI is: ${bmi} and you are under weight</span>`
//     }
//     else if(bmi >= 18.6 && bmi<=24.9){
//         res.innerHTML = `<span>Your BMI is: ${bmi} and your weight is in normal range</span>`
//     }
//     else if(bmi > 24.9){
//         res.innerHTML = `<span>Your BMI is: ${bmi} and you are over weight</span>`
//     }
   
    

//     }

// })

const form = document.querySelector('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const results = document.querySelector('#results');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    if (!height || height <= 0) {
        results.textContent = 'Please enter a valid height';
        return;
    }

    if (!weight || weight <= 0) {
        results.textContent = 'Please enter a valid weight';
        return;
    }

    const bmi = weight / ((height * height) / 10000);
    const bmiValue = bmi.toFixed(2);

    let message = '';

    if (bmi < 18.6) {
        message = `Your BMI is ${bmiValue} and you are underweight`;
    } else if (bmi <= 24.9) {
        message = `Your BMI is ${bmiValue} and your weight is in the normal range`;
    } else {
        message = `Your BMI is ${bmiValue} and you are overweight`;
    }

    results.textContent = message;
});
