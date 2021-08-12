module.exports = function reverse(n) {
    let nArr = Math.abs(n).toString().split('');
    let res = [];

    for (let i = 0; i < n.toString().length; i++) {
        res.push(nArr.pop());
    }

    return +res.join('');
}

