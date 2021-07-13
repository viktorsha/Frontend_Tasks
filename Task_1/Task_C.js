function getUnique(array) {
    const dict = []
    for (const arrayElement of array) {
        if (dict[arrayElement] === undefined) {
            dict[arrayElement] = 1
        } else {
            dict[arrayElement]++
        }
    }
    return Object.keys(dict).find(key => dict[key] === 1)
}

const testArray = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5]
const uniqueElement = getUnique(testArray)
console.log(uniqueElement)