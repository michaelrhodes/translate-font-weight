var patterns = {
  100: /^Thin$/i,
  200: /^(Extra|Ultra)-?light$/i,
  300: /^Light$/i,
  400: /^(Normal|Regular|Roman|Book)$/i,
  500: /^Medium$/i,
  600: /^(Semi|Demi)-?bold$/i,
  700: /^Bold$/i,
  800: /^(Extra|Ultra)-?bold$/i,
  900: /^(Black|Heavy)$/i
}

module.exports = function (name) {
  if (/^[1-9]00$/.test(name))
    return Number(name)

  for (var value in patterns) {
    if (!patterns.hasOwnProperty(value))
      continue
    if (patterns[value].test(name))
      return Number(value)
  }
}
