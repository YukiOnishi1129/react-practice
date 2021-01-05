import { act, renderHook } from '@testing-library/react-hooks'
import { useCustomState } from './useCustomState'

describe('カスタムフックのテスト', () => {
  describe('booleanのチェック', () => {
    const { result } = renderHook(() => useCustomState(false))
    it('初期状態のチェック', () => {
      expect(result.current.value).toBe(false)
    })
    it('trueにする', () => {
      act(() => {
        result.current.onChangeValue(true)
      })
      expect(result.current.value).toBe(true)
    })
    it('falseにする', () => {
      act(() => {
        result.current.onChangeValue(false)
      })
      expect(result.current.value).toBe(false)
    })
  })

  describe('stringのチェック', () => {
    const { result } = renderHook(() => useCustomState('Hello'))

    it('初期状態のチェック', () => {
      expect(result.current.value).toBe('Hello')
    })

    it('空文字', () => {
      act(() => {
        result.current.onChangeValue('')
      })
      expect(result.current.value).toBe('')
    })

    it('別の文字列', () => {
      act(() => {
        result.current.onChangeValue('world!')
      })
      expect(result.current.value).toBe('world!')
    })
  })
  describe('numberのチェック', () => {
    const { result } = renderHook(() => useCustomState(1))

    it('初期状態のチェック', () => {
      expect(result.current.value).toBe(1)
    })

    it('0', () => {
      act(() => {
        result.current.onChangeValue(0)
      })
      expect(result.current.value).toBe(0)
    })

    it('マイナス', () => {
      act(() => {
        result.current.onChangeValue(-1)
      })
      expect(result.current.value).toBe(-1)
    })
  })
})
