// Code your solution here
function findMatching(drivers, string) {
   return drivers.filter(n => n.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string)  {
    let stringLength = string.length
    return drivers.filter(n => n.slice(0, stringLength) === string)
}

function matchName(drivers, string) {
   return drivers.filter(n => n.name === string)
}
