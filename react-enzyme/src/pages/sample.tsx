import React from 'react'
import '../App'
import Hoge from 'components/atoms/Hoge'
import { LapClickButton } from 'components/molcules/LapClickButton'

export const Sample = () => {
  const state = 'タイトル'

  return (
    <div className="App">
      <header className="App-header">
        <LapClickButton propsScore={0} />
        <Hoge title={state} />
      </header>
    </div>
  )
}
