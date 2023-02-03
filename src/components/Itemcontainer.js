import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'


function Itemcontainer(props) {
  return (
    <div>
       <h2>Item - {props.item}</h2>
       <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps =(state , ownprops)=>{
 // console.log(state);
  const itemState = ownprops.cake ? state.cake.numofCakes : state.iceCream.numOfIceCreams

  return {
    item : itemState 
  }
}

const mapDispatchToProps = (dispatch , ownprops)=>{
   const dispatchFunction = ownprops.cake ? () => dispatch(buyCake()) : ()=>dispatch(buyIceCream());
   return {
      buyItem : dispatchFunction 
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Itemcontainer)