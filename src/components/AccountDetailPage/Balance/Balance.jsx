//Imports
//CSS
import './Balance.css'
//Libraries
import React from 'react'
//Services
import { formatDate, formatValue } from '../../../services/Formaters'

function Balance({ balance }) {

  return (
    <div className='balanceWrapper'>
      <p>Celkový zůstatek ke dni: {formatDate(balance.date)}</p>
      <p className='balanceValue'>{formatValue(balance.amount.value, 1)} {balance.amount.currency}</p>
    </div>
  )
}

export default Balance