//変数、関数、配列、オブジェクト

//変数
// const num1 = 1 //number：数字
// const num2 = 2
// const str1 = "a" //string：文字列
// const str2 = "b"
// console.log(num1 + num2)
// console.log(str1 + str2)

// // const boolean1 =
// const boolean2 = null //falseだと認識

// if (boolean2) {
//   console.log("trueだよ！")
// } else {
//   console.log("falseだよ！")
// }

//関数
// const kansuu = function() {
//   console.log("関数だよ！")
// }
// kansuu()

//返り値
// const kaeriti = function() {
//   return "返り値"
// }
// console.log("返り値")

//引数
// const triple = function(suuji) {
//   return suuji * 3
// }
// console.log(triple(2))
// const multiple = function(a, b, c) {
//   return a * b * c
// }
// console.log(multiple(2, 3, 2))

//配列
const array = [1, "1ばんめ", 3, true]
console.log(array)

//オブジェクト
const obj = {
  name: "わでぃ",
  age: 21,
  male: true,
  sayHello: function() {
    console.log(`こんにちは${this.name}です`)
  },
  hobby: {
    play: "テニス",
    watch: "バスケ",
  },
}
obj.sayHello()
