import React from 'react'
import './App.css'
import Hoge from './components/atoms/Hoge'
import { ClickButton } from './components/atoms/ClickButton'

const App: React.FC = () => {
  const state = 'タイトル'
  const [score, setScore] = React.useState(0)

  const onChangeScore = (value: number) => {
    setScore(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <ClickButton score={score} changeScore={onChangeScore} />
        <Hoge title={state} />
      </header>
    </div>
  )
}

export default App
