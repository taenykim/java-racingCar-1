const validateInput = (carNames, count) => {
  let _carNames = carNames.split(',')
  _carNames = trimCarNameBlank(_carNames)
  _carNames = _carNames.filter((v) => v !== '')

  if (_carNames.length === 0) {
    return 'CAR_NAME_IS_BLANK_ERROR'
  }

  if (!checkCarNameLength(_carNames)) {
    return 'CAR_NAME_LENGTH_ERROR'
  }

  if (!checkCountIsNumber(count)) {
    return 'COUNT_IS_NOT_NUMBER_ERROR'
  }
}

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

const checkCountIsNumber = (count) => {
  if (count.match(/\D/g)) return false
  return true
}

export { validateInput }

export { checkCarNameLength, trimCarNameBlank, checkCountIsNumber }
