//Imports
//CSS
import './TransactionEntity.css'
//Libraries
import React from 'react'
//Services
import { formatDate, formatValue } from '../../../services/Formaters'

function TransactionEntity({ transaction }) {

  //TO-DO Handle if any voluntary value isn't posted
  return (
    <tr>
      <td>{formatDate(transaction.bookingDate)}</td>
      <td>
        <p>{transaction.counterPartyAccount.accountName}</p>
        <p>{transaction.details.detail1}</p>
      </td>
      <td>
        <p>{transaction.amount.currency}</p>
        <p>{transaction.transactionType}</p></td>
      <td>
        <p>{transaction.variableSymbol}</p>
        <p>{transaction.specificSymbol}</p>
      </td>
      <td className={"value" + (transaction.amount.value < 0 ? "Negative" : "Positive")}>
        {formatValue(transaction.amount.value, 0)} {transaction.amount.currency}</td>
    </tr>
  )
}

export default TransactionEntity