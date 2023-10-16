export const buildInitials = label => {
  // If the label name contains two words, like first and last name, the first letter of each will be capitalized and returned.
  // For labels that only have a single word name, the first two letters of that word, using one capital and one lower case letter, will be returned.
  // For labels that contain three or more words, the first character of the first and last words will be capitalized and returned.

  var name = label.trim()
  var nameParts = name.split(' ')

  if (nameParts.length > 1) {
    return (
      nameParts[0].charAt(0).toUpperCase() +
      nameParts[nameParts.length - 1].charAt(0).toUpperCase()
    )
  }

  return (name[0] || '').toUpperCase() + (name[1] || '').toLowerCase()
}

// string to ucwords
export function ucWords(str) {
	if (typeof str === 'string') {
    str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase()
    })
	}
  return str
}

// string to upper
export function strToUpper(str) {
  if (typeof str === 'string')
    return str.toUpperCase()

  return str
}

// string to lower
export function strToLower(str) {
  if (typeof str === 'string')
    return str.toLowerCase()

  return str
}
