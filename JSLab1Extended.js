const hours = 48
const wage = 15.33

let pay = hours*wage;

if(hours > 40){

    pay = (hours - 40) * (wage * 1.5) + pay
    console.log(`Your pay is: ${Math.round(100*pay)/100}`)

}else{

    console.log(`Your pay is: $${Math.round(100*pay)/100}`)

}

let weeksToAMil = 1000000/pay 

console.log(`It would take ${Math.ceil(weeksToAMil)} of this weekly pay to make a $1,000,000`)

