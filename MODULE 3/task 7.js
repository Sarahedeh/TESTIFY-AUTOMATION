const triangleType =('Side1, Side2, Side3')
let Side1 = 4
let Side2 = 5
let Side3 = 6

switch(triangleType){
    case('Side1====Side2 && Side2===Side2===Side3'):
    console.log('This is an Equilateral Triangle')

    break
    case(Side1===Side2||Side2===Side3):
    console.log('This is an Isosceles Triangle')

    break
    default:
        console.log('This is a Scalene Triangle')
}
