export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement !="e") {
    if (currentElement !="E") {
    result.push(currentElement)
    } 

  }
  return result.join("")
}

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "a") {
      result.push("A")
    } else if (currentElement === "b") {
      result.push ("B")
    } else if (currentElement === "c") {
      result.push ("C")
    }else {
      result.push(currentElement)
      }
      }
      return result.join("")
  }
  