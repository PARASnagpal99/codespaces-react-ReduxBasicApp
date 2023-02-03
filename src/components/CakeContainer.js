import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
//import { useEffect } from 'react'


function CakeContainer (props) {
  // useEffect(()=>{
  //     console.log(props);
  // })
  return (
    <div>
      <h2>Number of cakes - {props.numofCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numofCakes: state.numofCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)