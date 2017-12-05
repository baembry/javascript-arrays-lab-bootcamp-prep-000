const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
 // return(kittens)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
 // return(kittens)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
  var kittens2 = [...kittens, name]
  return(kittens2)
}
function prependKitten(name) {
  var kittens2 = [name, ...kittens]
  return(kittens2)
}
function

