function convertToCelsius(fahrenheit){
    return (fahrenheit - 32) * (5/9); 
}

function describeTemperature(fahrenheit){
    const celsius = convertToCelsius(fahrenheit);

    let description;

    if (celsius < 0) {
        description = "very cold";
    }else if (celsius < 20) {
        description = "cold";
    }else if (celsius < 30) {
        description = "warm";
    }else if (celsius < 40) {
        description = "hot";
    }else if (celsius >= 40) {
        description = "very hot";
    }

    return `The current temperature is ${fahrenheit} degrees fahrenheit, which is actually ${celsius} degerees in celsius. It feels ${description}!`;

}

const fahrenheit = prompt("Degrees in Fahrenheit:");
const description = describeTemperature(fahrenheit);
alert (description);