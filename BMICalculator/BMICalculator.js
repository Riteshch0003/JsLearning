document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);  
    const results = document.querySelector('#results');
    
    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height";
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight";
    } else {
        const Bmi = (weight / ((height / 100) ** 2)).toFixed(2); // Corrected height division
        // Show the results
        results.innerHTML = `<span>Your BMI is ${Bmi}</span>`;
    }
});