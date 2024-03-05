import React from 'react'
import './PickUpSuccess.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function PickUpSuccess() {
  const { id } = useParams()

  const getRiderID = async (id) => {}

  return (
    <div className='pick-success'>
      <h1>Pick Up Successful</h1>

      <button>
        <Link to='/Rider/${riderID}'>Home Page</Link>
      </button>
    </div>
  )
}

export default PickUpSuccess
