import { getLetterMatchCount } from ".";

describe('getLetterMatchCount', () => {

  const secretWord = 'party'

  test('returns the correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord)
    expect(letterMatchCount).toBe(0)
  })

  test('returns the correct count when there are three mathcing letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord)
    expect(letterMatchCount).toBe(3)

  })
  
  test('returns the correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord)
    expect(letterMatchCount).toBe(3)
  })
})


getLetterMatchCount