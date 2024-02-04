import React from 'react'

export default function page(props) {
    const params = props.params
    const id = params.id
  return (
    <div>Product Id: {id}</div>
  )
}
