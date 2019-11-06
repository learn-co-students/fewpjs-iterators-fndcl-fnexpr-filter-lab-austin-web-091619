function findMatching(drivers, string) {
    return drivers.filter( driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( driver => {
        return driver.startsWith(string)
    })
}

function matchName(drivers, string) {
    return drivers.filter( driver => driver.name === string)
}