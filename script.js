const convert = () => {
    let inputValue = document.getElementById('userInput').value;
    let unit = document.getElementById('unit').value;
    const milesToKm = unit === 'milesToKm';
    
    let result = 0;
    let resultString = ' ';
    
    if (milesToKm === true) {
     result = (inputValue * 1.60934).toFixed(2);
     resultString = inputValue + " mi are " + result + " km";
    } else {
     result = (inputValue / 1.60934).toFixed(2);
     resultString = inputValue + " km are " + result + " mi";
    }
    
    const resultElement = document.getElementById('resultElement');
    resultElement.innerHTML = resultString;
    };