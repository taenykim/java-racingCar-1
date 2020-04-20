import React, { useState, useCallback } from 'react'
import { makeCars, makeProcess, moveCars, makeResult } from '../modules/racingCar'
import Processes from '../components/Processes'
import Result from '../components/Result'

const App = () => {
  const [carNames, setCarNames] = useState('')
  const [count, setCount] = useState('')
  const [carNameLengthError, setCarNameLengthError] = useState(false)
  const [carNameIsBlankError, setCarNameIsBlankError] = useState(false)
  const [processes, setProcesses] = useState(null)
  const [result, setResult] = useState(null)

  const onChangeCarNames = useCallback((e) => {
    setCarNames(e.target.value)
  }, [])

  const onChangeCount = useCallback((e) => {
    setCount(e.target.value)
  }, [])

  const checkCarNameLength = useCallback((carNames) => {
    const MAX_CARNAME_LENGTH = 5
    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length > MAX_CARNAME_LENGTH) return false
    }
    return true
  }, [])

  const trimCarNameBlank = useCallback((carNames) => {
    return carNames.map((carName) => carName.trim())
  }, [])

  const onSubmit = useCallback(
    (e) => {
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

      const cars = makeCars(_carNames)
      const _processes = []
      for (let i = 0; i < count; i++) {
        moveCars(cars)
        _processes.push(makeProcess(cars))
      }
      setProcesses([..._processes])
      setResult(makeResult(cars))
    },
    [carNames, count]
  )

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
      <Processes processes={processes} />
      <Result result={result} />
    </div>
  )
}

export default App
