//Create a lenght converter function

function converter(millimeter){
    const centimeter = millimeter * 50000;
    return centimeter;
}
const centimeterValue = converter(50000);
console.log(centimeterValue)