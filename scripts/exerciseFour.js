function uniTotal(str) {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i);
    }

    return result;
}

module.exports = uniTotal;