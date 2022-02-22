const removeFromArray = function (original, ...remove) {
    let filtered = [];

    let remLength = remove.length;
    let countEl = 0;

    for (let elOri of original) {
        for (let elRem of remove) {
            if (elOri !== elRem) {
                countEl++;
            }
        }

        if (remLength == countEl) {
            filtered.push(elOri);
        }
        countEl = 0;
    }
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
