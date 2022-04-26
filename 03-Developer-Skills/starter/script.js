// Remember, we're gonna use strict mode in all scripts now!
/*
"use strict";

const x = "23";
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1950));
*/

// Problem 1
// We work for a company building a smart home thermometer. Our most recent task is this: 
// "Given an arrey of temperatures of one day, calculate the temperature amplitude. Keep in mind that somethimes
// there might be a sensor error"

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [60, 2, 1];

// 1) Understanding the problem
// - What is temperature amplitude) Answer: Difference between between highest and lowest temp
// - How to compute the max and min temperatures?
// - What`s a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors
// - Find max value in temp array
// - Find min value
// - Sutbract min from max (amplitude) and return  it

const calcTempaAmplitude = function(temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== `number`) continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    let Amplitude = max - min;
    console.log(Amplitude)
    return Amplitude

};
let amplitude = calcTempaAmplitude(temperatures);
console.log(amplitude);

// Problem two:
// 1) Understanding the problem
// Function should noow recieve 2 arrays of temp
// - with 2 arrays, should we impliment functionality twice? Answer: NO! just merge two arreys
// 2) Breaking up into sub-problems
// - How to merge 2 arrays

const mergTemperatures = temperatures.concat(temperatures2);
console.log(mergTemperatures);
let amplitude2 = calcTempaAmplitude(mergTemperatures);
console.log(amplitude2);

const measureKelvin = function() {
    const measurement = {
        type: `temp`,
        unit: `celsius`,

        //C) Fix
        value: 10,
    }

    console.table(measurement);

    //1console.log(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());


//Using a Debugger
const calcTempaAmplitudeBug = function(t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== `number`) continue;
        
        
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    let Amplitude = max - min;
    return max - min

};
const amplitudeBug = calcTempaAmplitudeBug([3, 5, 1], [9, 4, 5]);
// Identify
console.log(amplitudeBug);