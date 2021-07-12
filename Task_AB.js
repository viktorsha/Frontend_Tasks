//task a

if (!Array.prototype.map) {
    Array.prototype.map = function (callback) {
        let arr = []
        for (let i = 0; i < this.length; i++) {
            arr.push(callback(this[i], i, this))
        }
        return arr
    }
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function (callback, context) {
        let arr = []
        for (let i = 0; i < this.length; i++) {
            if (callback.call(context, this[i], i, this)) {
                arr.push(this[i])
            }
        }
        return arr
    }
}

if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback, initialValue) {
        let accumulator = initialValue === undefined ? undefined : initialValue;

        for (let i = 0; i < this.length; i++) {
            if (accumulator !== undefined) {
                accumulator = callback.call(undefined, accumulator, this[i], i, this)
            } else {
                accumulator = this[i]
            }
        }
        return accumulator
    }
}

const notes = [
    {
        id: 1,
        title: "Recipe",
        description: "Ingredients include 2 eggs...",
        pagesCount: 2,
        isMarked: false,
        access: []
    },
    {
        id: 2,
        title: "Workouts",
        description: "3 sets of squats...",
        pagesCount: 1,
        isMarked: true,
        access: []
    },
    {
        id: 3,
        title: "Passwords",
        description: "VISA ...",
        pagesCount: 6,
        isMarked: true,
        access: []
    },
    {
        id: 4,
        title: "To Do 2021",
        description: "1. Learn JS...",
        pagesCount: 3,
        isMarked: false,
        access: []
    }]

//task b.1
const mapResult = notes.map(function mapping(note) {
    return {
        id: note.id,
        title: note.title
    }
})
const mapArrowResult = notes.map(x => ({id: x.id, title: x.title}))
console.log(mapResult)
console.log(mapArrowResult)

//task b.2
const filtered = notes.filter(x => x.isMarked)
console.log(filtered)

//task b.3
const reduced = notes.reduce((prev, item) => prev + item.pagesCount, 0)
console.log(reduced)