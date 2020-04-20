import { checkCarNameLength, trimCarNameBlank } from './formValidator'

describe('form 입력값 검증', () => {
  it('자동차이름길이가 5초과할 경우 잘 걸러내는지 확인', () => {
    expect(checkCarNameLength(['123456', '123'])).toBe(false)
  })
  it('자동차이름이 공백일 경우 잘 제거되는지 확인', () => {
    expect(trimCarNameBlank(['   ', ' '])).toStrictEqual(['', ''])
  })
})
