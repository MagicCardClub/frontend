import React from 'react'
import './EditCardModal.scss'
import { FaEthereum } from 'react-icons/fa'
import defaultImage from 'assets/images/defaultImage.webp'

const EditCardModal = (props) => {
  const { image, color, ethereumCount } = props

  return (
    <div className='blank_card'>
      <img src={image} alt={color} />
      <div className='user-name_image' style={{ backgroundColor: color }}>
        <img src={defaultImage} alt='user image' />
        <div className='name'>User's name</div>
      </div>
<<<<<<< HEAD
      <div className='eth-number_container'>
        <div className='eth-logo'>
=======
      <div className="eth-number_container">
        <div className="eth-logo" style={{ backgroundColor: color }}>
>>>>>>> de3c5ae767dacf0358db3c0c51ca033823184c8c
          <FaEthereum />
        </div>
        <span>{ethereumCount.toFixed(3)}</span>
      </div>
    </div>
  )
}

export default EditCardModal
