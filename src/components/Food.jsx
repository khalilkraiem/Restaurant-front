import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
function Food(props) {
  let elem = props.elem
  let selected = props.selected
  let lg=props.lg
  console.log(elem);
  return (
    <div className='white ' style={{ padding: 10 }}>
      <div className='Right'>
        <div className='pointer' ><AiOutlineClose color='white' size={30} onClick={props.closeModal} /></div>
      </div>
      <div>
        <div className='center'>
          <img src={process.env.PUBLIC_URL + '/assets/images/qrmenu/' + selected.category + '/' + elem.name + '.jpg'} alt="" className="popupPic" />
        </div>
        <h2 className='bebas margin'>{lg==='en'?elem.name:elem.nameAr}</h2>
        <p className='shadows margin'>
        {lg==='en'?elem.description:elem.descriptionAr}
        </p>
        <button className='cardMenuPrice white spaceBetween margin'>
          <p>{elem.price}</p>
          <p style={{marginLeft:10}}>SAR</p>
        </button>
      </div>
    </div>
  )
}
export default Food;