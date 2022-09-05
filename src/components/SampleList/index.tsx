import React from 'react'
import { useAppSelector } from '../../hooks'
import { selectRoot } from '../../reducers'

export const SampleList = () => {
  const data = useAppSelector(selectRoot);
  return (
    <ul>
      {data.map(item => <li>{item}</li>)}
    </ul>
  )
}