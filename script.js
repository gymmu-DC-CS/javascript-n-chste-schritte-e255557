export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E") {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe02(args) {
  return args.toUpperCase()
  }

  export function aufgabe03(args){
    const input = args
    let result = 0

    for (let i = 0; i < input.length; i++) {
      const currentElement = input [i]
      if (currentElement ==="e" || currentElement ==="E") {
        result++
      }
    }
    return result
  }

  export function aufgabe04(args) {
     
    const cleanText = args.replace(/[^\w\s]/gi, '');
    const words = cleanText.split(/\s+/);
 
    return words.length;
  }

  export function aufgabe05(args) {
    const input = args
    if (input.toLowerCase() === input) {
      return false
    } else {
      return true
    }
  }

  export function aufgabe06(args) {
    const inout = args 
    if (inout === "") {
      return false 
    }
   for ( let i =0 ; i < input.length; i++) {
    const currentElement = input [i].toLowerCase()
    if (currentElement.charCodeAt() < 97 || currentElement.charCodeAt() > 122) {
      if (currentElement.charCodeAt() != 32) {
        return true
      }
    }
   }
   return false
  }