/* feet to mile start */
const feetBtn = document.getElementById("feetBtn");
feetBtn.addEventListener("click", function () {
    const getFeet = document.getElementById("getFeet").value;
    const feetNumber = parseFloat(getFeet);
    feetToMile(feetNumber);

    document.getElementById("getFeet").value = ' ';
});

function feetToMile(feet) {
    const mile = feet / 5280;
    const fixedMile = mile.toFixed(4);

    const mileBox = document.getElementById("mile");
    mileBox.innerHTML = fixedMile;
}
/* feet to mile end */

/* Kilometer to Meter start */
const kilometerBtn = document.getElementById("kilometerBtn");
kilometerBtn.addEventListener("click", () => {
    const getKilometer = document.getElementById("getKilometer").value;
    const getKilometerNumber = parseNumber(getKilometer);
    const kilometerNumberResult = kilometerToMeter(getKilometerNumber);

    const showMeter = document.getElementById("showMeter");
    showMeter.innerHTML = kilometerNumberResult;
});

function kilometerToMeter(kilometer) {
    return kilometer * 1000;
}

document.getElementById("clearKilometer").addEventListener("click", () => {
    document.getElementById("getKilometer").value = ' ';
    document.getElementById("showMeter").innerHTML = ' ';

})
/*kilometer to Meter end */


/*Inch to Feet start */
const inchBtn = document.getElementById("inchBtn");
inchBtn.addEventListener("click", () => {
    const getInch = document.getElementById("getInch").value;
    const inchNumber = parseFloat(getInch);
    inchToFeet(inchNumber);
});
function inchToFeet(inch) {
    const feet = inch / 12;
    const fixedFeet = feet.toFixed(2);
    const feetBox = document.getElementById("feetBox");

    feetBox.innerHTML = fixedFeet;
}

document.getElementById("clearInchFeet").addEventListener("click", () => {
    document.getElementById("getInch").value = ' ';
    document.getElementById("feetBox").innerHTML = ' ';

})
/*Inch to Feet end */

/* Budget Calculator start */
const budgetBtn = document.getElementById("budgetBtn");
budgetBtn.addEventListener("click", () => {
    const watchQuantity = document.getElementById("watchQuantity").value;
    const watchQuantityNumber = parseNumber(watchQuantity);


    const phoneQuantity = document.getElementById("phoneQuantity").value;
    const phoneQuantityNumber = parseNumber(phoneQuantity);


    const laptopQuantity = document.getElementById("laptopQuantity").value;
    const laptopQuantityNumber = parseNumber(laptopQuantity);

    const totalBudgetNumber = budgetCalculator(watchQuantityNumber, phoneQuantityNumber, laptopQuantityNumber);
    const totalBudget = document.getElementById("totalBudget");


    totalBudget.innerHTML = totalBudgetNumber;
    const defaultBudgetNumber = document.getElementById("defaultBudgetNumber");
    defaultBudgetNumber.style.display = "none";

});

function budgetCalculator(watch, phone, laptop) {
    let watchPrice = watch * 50;
    let phonePrice = phone * 100;
    let laptopPrice = laptop * 500;
    const totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
};

const clearBudget = document.getElementById("clearBudget");
clearBudget.addEventListener("click", () => {
    document.getElementById("watchQuantity").value = " ";
    document.getElementById("phoneQuantity").value = " ";
    document.getElementById("laptopQuantity").value = " ";
    document.getElementById("totalBudget").innerHTML = " ";
    const defaultBudgetNumber = document.getElementById("defaultBudgetNumber");
    defaultBudgetNumber.style.display = "block";
})
/* Budget Calculator End */

/* wood calculator start */
const woodBtn = document.getElementById("woodBtn");
woodBtn.addEventListener("click", () => {
    const chairQuantity = document.getElementById("chairQuantity").value;
    const chairNumber = parseNumber(chairQuantity);


    const tableQuantity = document.getElementById("tableQuantity").value;
    const tableNumber = parseNumber(tableQuantity);


    const bedsteadQuantity = document.getElementById("bedSteadyQuantity").value;
    const bedNumber = parseNumber(bedsteadQuantity);

    const totalWoodNumber = woodCalculator(chairNumber, tableNumber, bedNumber);
    const totalQubicFeet = document.getElementById("totalWoodQubicFeet");


    totalQubicFeet.innerHTML = totalWoodNumber;
    const defaultNumber = document.getElementById("defaultNumber");
    defaultNumber.style.display = "none";

});

function parseNumber(input) {
    const number = parseFloat(input);
    return number;
};

function woodCalculator(chair, table, bed) {
    const totalChair = chair * 1;
    const totalTable = table * 3;
    const totalBed = bed * 5;

    const totalWood = totalChair + totalTable + totalBed;
    return totalWood;
}

const clearWood = document.getElementById("clearWood");
clearWood.addEventListener("click", () => {
    document.getElementById("chairQuantity").value = " ";
    document.getElementById("tableQuantity").value = " ";
    document.getElementById("bedSteadyQuantity").value = " ";
    document.getElementById("totalWoodQubicFeet").innerHTML = " ";
    const defaultNumber = document.getElementById("defaultNumber");
    defaultNumber.style.display = "block";
})
/* wood calculator end */

/*Hotel Cost Calculator start */
const nightBtn = document.getElementById("nightBtn");
nightBtn.addEventListener("click", () => {
    const getNightInput = document.getElementById("getNightInput").value;
    const nightNumber = parseInt(getNightInput);
    const totalStayNights = HotelCost(nightNumber);
    document.getElementById("showNightPrice").innerHTML = totalStayNights + "$";

});

function HotelCost(days) {
    if (days <= 10) {
        return days * 100;
    }
    if (days > 10 && days <= 20) {
        return (days - 10) * 80 + (10 * 100);
    }
    if (days > 20) {
        return (days - 20) * 50 + (10 * 100) + (20 - 10) * 80; 
    }
}

document.getElementById("clearNight").addEventListener("click", () => {
    document.getElementById("getNightInput").value = ' ';
    document.getElementById("showNightPrice").innerHTML = ' ';

})

/*Hotel Cost Calculator End */

/* BrickCalculator start */
const floorBtn = document.getElementById("floorBtn");
floorBtn.addEventListener("click", () => {
    const getFloorInput = document.getElementById("getFloorInput").value;
    const floorNumber = parseInt(getFloorInput);
    const totalBrick = brickCalculator(floorNumber);
    document.getElementById("brickPice").innerHTML = totalBrick;

})

function brickCalculator(floor) {
    if (floor <= 10) {
        return floor * 1000 * 15;
    }
    if (floor > 10 && floor <= 20) {
        return (floor - 10) * 1000 * 12 + (10 * 1000 * 15);
    }
    if (floor > 20) {
        return (floor - 20) * 1000 * 10 + (10 * 1000 * 15) + (20 - 10) * 12 * 1000;
    }
}

document.getElementById("clearBrick").addEventListener("click", () => {
    document.getElementById("getFloorInput").value = ' ';
    document.getElementById("brickPice").innerHTML = ' ';

})
/* BrickCalculator end */

/* LeapYear start */
const leapYearBtn = document.getElementById("leapYearBtn");
leapYearBtn.addEventListener("click", () => {
    const leapYear = document.getElementById("getYear").value;
    const anyYear = parseNumber(leapYear);
    const finalYear = checkLeapYear(anyYear)

    const displayYear = document.getElementById("leapYear");
    displayYear.innerHTML = finalYear;

})
function checkLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return 'This is Leap Year';
            } else {
                return 'This is Not Leap Year'
            }
        } else {
            return 'This is Leap Year'
        }
    } else {
        return 'This is not Leap Year'
    }
}

document.getElementById("clearLeapYear").addEventListener("click", () => {
    document.getElementById("getYear").value = ' ';
    document.getElementById("leapYear").innerHTML = ' ';

})
/* LeapYear End */

/*Factorial Start */
const factorialBtn = document.getElementById("factorialBtn");
factorialBtn.addEventListener("click", () => {
    const getAnyNumber = document.getElementById("getAnyNumber").value;
    const number = parseNumber(getAnyNumber);
    let factorialResult = factorialWork(number);

    const showFactorial = document.getElementById("showFactorial");
    showFactorial.innerHTML = factorialResult;
})

function factorialWork(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let factorialResult = factorialWork(3);

document.getElementById("clearFactorial").addEventListener("click", () => {
    document.getElementById("getAnyNumber").value = ' ';
    document.getElementById("showFactorial").innerHTML = ' ';

})
/*Factorial end */

/*Odd Number start */
const oddBtn = document.getElementById("oddNumberBtn");
oddBtn.addEventListener("click", () => {
    const getOddEvenNumber = document.getElementById("getOddNumber").value;
    const oddEvenNumber = parseNumber(getOddEvenNumber);
    const evenOddResult = checkOddNumber(oddEvenNumber);

    const showOddNumber = document.getElementById("showOddNumber");
    showOddNumber.innerHTML = evenOddResult;
})
function checkOddNumber(number) {
    if (number % 2 == 0) {
        return "This is even Number"
    } else {
        return "This is odd Number"
    }
}

document.getElementById("clearOddEven").addEventListener("click", () => {
    document.getElementById("getOddNumber").value = ' ';
    document.getElementById("showOddNumber").innerHTML = ' ';

})
/*Odd Number end */

/*Prime Or Not Prime Start */
const primeNotPrimeBtn = document.getElementById("primeNotPrimeBtn");
primeNotPrimeBtn.addEventListener("click", () => {
    const primeNotPrime = document.getElementById("primeNotPrime").value;
    const primeNotPrimeNumber = parseNumber(primeNotPrime);
    const primeNotPrimeNumberResult = checkPrimeOrNotPrimeNumber(primeNotPrimeNumber);

    const showPrimeNotPrime = document.getElementById("showPrimeNotPrime");
    showPrimeNotPrime.innerHTML = primeNotPrimeNumberResult;
});

function checkPrimeOrNotPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "This is not a prime number";
        }
    }
    return "This is a prime number";
};

document.getElementById("clearPrimeNotPrime").addEventListener("click", () => {
    document.getElementById("primeNotPrime").value = ' ';
    document.getElementById("showPrimeNotPrime").innerHTML = ' ';

})

/*Prime Or Not Prime End */