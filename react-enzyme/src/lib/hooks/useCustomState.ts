import React from 'react'

// アロー関数にジェネリクスを使用する
// https://qiita.com/suin/items/fa7184b9bc916ef5a6ac

/**
 * useStateのカスタムフック
 * @param initialState
 */
export const useCustomState = <T>(initialState: T) => {
  const [value, setValue] = React.useState(initialState)

  const onChangeValue = (newValue: T) => {
    setValue(newValue)
  }

  return {
    value,
    onChangeValue,
  }
}
