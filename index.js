// Code your solution here


function findMatching(driversArray, nameString){
    // drivers array is an array of strings, not objects
    return driversArray.filter(driver=> driver.toLowerCase() === nameString.toLowerCase() )
}

function fuzzyMatch(driversArray, nameString){
    // drivers array is an array of strings, not objects
    return driversArray.filter(driver => {
        let length = nameString.length
        let driverSlice = driver.slice(0,length)
        
        return driverSlice.toLowerCase() === nameString.toLowerCase()
    })
}

function matchName(driversArray, nameString){
    // drivers are objects with key name
    return driversArray.filter(driverObj=> driverObj.name === nameString)
}