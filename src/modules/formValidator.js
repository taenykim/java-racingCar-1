const checkCarNameLength = (carNames) => {
  const MAX_CARNAME_LENGTH = 5
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > MAX_CARNAME_LENGTH) return false
  }
  return true
}

const trimCarNameBlank = (carNames) => {
  return carNames.map((carName) => carName.trim())
}

export { checkCarNameLength, trimCarNameBlank }
