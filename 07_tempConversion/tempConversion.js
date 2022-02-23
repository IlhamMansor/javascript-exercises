const ftoc = function (fahranheit) {
    let celcius = (fahranheit - 32) * (5 / 9);
    if (celcius == 0) {
        return celcius;
    } else {
        return Math.round(celcius * 10) / 10;
    }
};

const ctof = function (celcius) {
    let fahranheit = celcius * (9 / 5) + 32;
    if (fahranheit == 0) {
        return fahranheit;
    } else {
        return Math.round(fahranheit * 10) / 10;
    }
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
