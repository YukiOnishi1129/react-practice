import React from 'react'

type Props = {
  title: string
}

const Hoge: React.FC<Props> = (props) => {
  const { title } = props
  return <p className="state">{title}</p>
}

export default Hoge
