
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];

    if (!matrix) {
        return result
    } else {
        matrix.map((item, index) => {
            if (index%2 != 0) {
                item.reverse();
                item.forEach((elem) => {
                    result.push(elem)
                })
            } else {
                item.forEach((elem) => {
                    result.push(elem)
                })
            }
        })
    }


    return result;
}
