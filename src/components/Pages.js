import React from 'react'
import {Button} from "react-bootstrap"

const Pages = ({user, changeUser,index}) => {
  return (
    <div className='pages btn-group ml-auto p-2' >
        <Button onClick={async () => {await changeUser(user.id)}} variant="outline-primary">{index}</Button>
    </div>
  )
}

export default Pages
