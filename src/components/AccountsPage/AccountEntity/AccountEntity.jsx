//Imports
//Libraries
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function AccountEntity({ account }) {

  //Hooks
  //States
  const [navigate, setNavigate] = useState(false)

  //Handlers
  function handleClick() {
    setNavigate(true)
  }

  if (navigate) {
    return (
      <Navigate to={"/" + account.identification.otherAccountNumber} state={account} />
    )
  } else {
    return (
      <tr onClick={handleClick}>
        <td>{account.name}</td>
        <td>{account.identification.otherAccountNumber}</td>
      </tr>
    )
  }
}

export default AccountEntity