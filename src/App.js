import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [carNames, setCarNames] = useState('')
  const [count, setCount] = useState('')
  const [carNameLengthError, setCarNameLengthError] = useState(false)
  const [carNameIsBlankError, setCarNameIsBlankError] = useState(false)

  const onChangeCarNames = (e) => {
    setCarNames(e.target.value)
  }

  const onChangeCount = (e) => {
    setCount(e.target.value)
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

  const onSubmit = (e) => {
    e.preventDefault()
    let _carNames = carNames.split(',')
    _carNames = trimCarNameBlank(_carNames)
    _carNames = _carNames.filter((v) => v !== '')

    if (_carNames.length === 0) {
      setCarNameIsBlankError(true)
      return
    }

    if (!checkCarNameLength(_carNames)) {
      setCarNameLengthError(true)
      return
    }

    setCarNameIsBlankError(false)
    setCarNameLengthError(false)

    console.log(_carNames)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="carNames">
            경주할 자동차이름을 입력하세요. (이름은 쉼표(,)기준으로 구분)
          </label>
          <input
            style={{ width: '500px' }}
            id="carNames"
            type="text"
            value={carNames}
            onChange={onChangeCarNames}
          ></input>
        </div>
        <div>
          <label htmlFor="count">시도할 횟수는 몇회인가요?</label>
          <input id="count" type="text" value={count} onChange={onChangeCount}></input>
          <button type="submit">입력</button>
        </div>
        {carNameLengthError && (
          <div style={{ color: 'red' }}>에러! 자동차이름은 5이하로 해야합니다</div>
        )}
        {carNameIsBlankError && (
          <div style={{ color: 'red' }}>에러! 자동차이름은 공백이 될 수 없습니다</div>
        )}
      </form>
    </div>
  )
}

export default App
