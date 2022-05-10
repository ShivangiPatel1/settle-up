import React from 'react'
import "./MainSection.css"
import {Button} from "react-bootstrap"

function MainSection() {
  return (
    <div className='MainSection'>
<div className='Heading'>
<h2>Dashboard</h2>
<div className='Expence-buttons'>
<Button variant="warning">Add Expense</Button>{' '}
<Button variant="warning">Settle Up</Button>{' '}
</div>
</div>
    </div>
  )
}

export default MainSection