const filter = (list, cb) => {
    if (!Array.isArray(list)) {
        throw new Error('1st arugment must be an array')
    }
    const result = [];
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (cb(element)) {
            result.push(element)
        }
    }
    return result;
};

const reduce = (list, cb, initialValue) => {
    if (!Array.isArray(list)) {
        throw new Error('1st arugment must be an array')
    }
    let result = initialValue;
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        result = cb(result, element)
    }
    return result;
}


const flatten = (list) => {
    if (!Array.isArray(list)) {
        throw new Error('1st arugment must be an array')
    }
    let result = [];
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (Array.isArray(element)) {
            result = [...result, ...flatten(element)]
        } else {
            result = [...result, element]
        }
    }
    return result;
}

module.exports = {
    filter,
    reduce,
    flatten
}