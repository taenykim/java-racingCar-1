import React from 'react'
import Car from './Car'

/*
 ************************
 * export 모듈           *
 ************************
 */

const makeCars = (carNames) => {
  const _cars = []
  for (let i = 0; i < carNames.length; i++) {
    _cars.push(new Car(carNames[i]))
  }
  return _cars
}

const moveCars = (cars) => {
  cars.forEach((car) => {
    moveCar(car)
  })
}

// jsx 생성함수
const makeProcess = (cars) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {cars.map((car, i) => (
        <div key={i}>
          {car.name}:{makeDistance(car.position)}
        </div>
      ))}
    </div>
  )
}

// jsx 생성함수
const makeResult = (cars) => {
  return (
    <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
      {getWinner(cars)}가 최종 우승했습니다.
    </div>
  )
}

/*
 ************************
 * export 하지않는 함수들   *
 ************************
 */

const moveCar = (car) => {
  if (checkMoveCarCondition()) {
    car.go()
  }
}

const checkMoveCarCondition = () => {
  const MOVE_CAR_CONDITION = 4
  const RANDOM_NUMBER_RANGE = 9
  return Math.floor(Math.random() * RANDOM_NUMBER_RANGE) >= MOVE_CAR_CONDITION ? true : false
}

const makeDistance = (num) => {
  let _str = ''
  for (let i = 0; i < num; i++) {
    _str += '-'
  }
  return _str
}

const getWinner = (cars) => {
  let max = 0
  let winner = []

  cars.forEach((car) => {
    if (car.position > max) max = car.position
  })

  cars.forEach((car) => {
    if (max === car.position) winner.push(car.name)
  })

  return winner.join()
}

export { makeCars, moveCars, makeProcess, makeResult }
