import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
import { useState } from 'react'



function NewCakeContainer (props) {
  const [number , setNumber] = useState(1) ;  
  return (
    <div>
      <h2>Number of cakes - {props.numofCakes} </h2>
      <input type='text' value = {number} onChange={e => setNumber(e.target.value)}></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numofCakes: state.cake.numofCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer)