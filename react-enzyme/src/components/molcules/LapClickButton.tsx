import React from 'react'
import { ClickButton } from 'components/atoms/ClickButton'

type Props = {
  propsScore: number
}

export const LapClickButton: React.FC<Props> = (props) => {
  const [score, setScore] = React.useState(props.propsScore)

  const onChangeScore = (value: number) => {
    setScore(value)
  }

  return <ClickButton score={score} changeScore={onChangeScore} />
}
