class Lodash {
  compact(array) {
    return array.filter(val => !!val)
  }

  groupBy(array, prop) {
    return array.reduce((acc, i) => {
      const key = typeof prop === 'function' ? prop(i) : i[prop]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(i)
      return acc
    }, {})
  }
}

module.exports = Lodash
