import React from 'react'

type Props = {
  score: number
  changeScore: (value: number) => void
}

export const ClickButton: React.FC<Props> = (props) => {
  const { score, changeScore } = props

  return (
    <>
      <div className="score">{score}</div>
      <button className="plus" onClick={() => increment(score, changeScore)}>
        +
      </button>
      <button className="minus" onClick={() => decrement(score, changeScore)}>
        -
      </button>
    </>
  )
}

const increment = (score: number, changeScore: (newValue: number) => void) => {
  changeScore(score + 1)
}

const decrement = (score: number, changeScore: (newValue: number) => void) => {
  changeScore(score - 1)
}
