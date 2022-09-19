// function  findMatching(arrrayOfDrivers, string) {
//     for (const string of arrrayOfDrivers) {
//         if (arrrayOfDrivers.string === string) {
//             return driver.string
//         }
//     }
// }

function findMatching(arrrayOfDrivers, string) {
    return arrrayOfDrivers.filter(function(driver){
        if (driver.toUpperCase() === string.toUpperCase()) {
        return string
    }
    }) 
}

function fuzzyMatch(arrrayOfDrivers2, string2) {
    return arrrayOfDrivers2.filter(function(driver2) {
        if (driver2[0] === string2[0]) {
            return driver2
        }
    })
}

function matchName(arrrayOfDrivers3, string3) {
    return arrrayOfDrivers3.filter(function(driver3) {
        if (driver3.name === string3) {
            return driver3.name 
        }
    })
}