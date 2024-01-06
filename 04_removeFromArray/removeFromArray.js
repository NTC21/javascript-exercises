const removeFromArray = function(array, ...valuestoremove) {
//must use the splice 
    for (var i = 1; i < valuestoremove.length; i++) {
        var valueToRemove = valuestoremove[i];
        for (var j = array.length - 1; j >= 0; j--) {
            if (array[j] === valueToRemove) {
                array.splice(j, 1);
            }
        }
    }
    return array;



};

// Do not edit below this line
module.exports = removeFromArray;
