// const calcNumber = (num) => {
//   return 3 * num
// }

// export default (context, inject) => {
//   inject('calc', { get: calcNumber })
// }

// this.aaa = this.$calc.get(4)

const myPlus = (aa, bb) => {
  return aa + bb
}

export default (context, inject) => {
  inject('myPlus', myPlus)
}

// this.aaa = this.$myPlus(4, 6)
