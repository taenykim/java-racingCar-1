import React, { useState, useCallback } from 'react'
import { makeCars, makeProcess, moveCars, makeResult } from '../modules/racingCar'
import Processes from '../components/Processes'
import Result from '../components/Result'
import { validateInput } from '../modules/formValidator'

const App = () => {
  const [carNames, setCarNames] = useState('')
  const [count, setCount] = useState('')
  const [carNameLengthError, setCarNameLengthError] = useState(false)
  const [carNameIsBlankError, setCarNameIsBlankError] = useState(false)
  const [countIsNotNumberError, setCountIsNotNumberError] = useState(false)
  const [processes, setProcesses] = useState<null | JSX.Element[]>(null)
  const [result, setResult] = useState<null | JSX.Element>(null)

  const onChangeCarNames = useCallback((e) => {
    setCarNames(e.target.value)
  }, [])

  const onChangeCount = useCallback((e) => {
    setCount(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const validator = validateInput(carNames, count)
      if (validator === 'CAR_NAME_IS_BLANK_ERROR') {
        return setCarNameIsBlankError(true)
      }
      if (validator === 'CAR_NAME_LENGTH_ERROR') {
        return setCarNameLengthError(true)
      }
      if (validator === 'COUNT_IS_NOT_NUMBER_ERROR') {
        return setCountIsNotNumberError(true)
      }
      const _carNames = validator

      setCarNameIsBlankError(false)
      setCarNameLengthError(false)

      const cars = makeCars(_carNames)
      const _processes = []
      let _count = Number(count)
      for (let i = 0; i < _count; i++) {
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
          <div id="carNameLengthError" style={{ color: 'red' }}>
            에러! 자동차이름은 5이하로 해야합니다
          </div>
        )}
        {carNameIsBlankError && (
          <div id="carNameIsBlankError" style={{ color: 'red' }}>
            에러! 자동차이름은 공백이 될 수 없습니다
          </div>
        )}
        {countIsNotNumberError && (
          <div id="carNameIsBlankError" style={{ color: 'blue' }}>
            에러! 시도할 횟수는 숫자를 입력하세오
          </div>
        )}
      </form>
      <Processes processes={processes} />
      <Result result={result} />
    </div>
  )
}

export default App
