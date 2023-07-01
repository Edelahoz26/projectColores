import React from 'react'



const Cards = (props) => {



  return (
    
       <div id={props.id} style={{border:'1px solid black' ,width:'140px', height: '120px', backgroundColor:'#ffffff', display:'flex', justifyContent:'center',  fontSize:'45px', cursor:'pointer'}}> <h2 style={{color: 'black', alignSelf:'center', fontWeight:'500'}}>{props.name}</h2> </div>
    
  )
}

export default Cards

