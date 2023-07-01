import React, { useState } from 'react'
import Cards from './Cards'
import {Cardss, ContenedorCards, ContenedorBottom, ContenedorBottomBody, BottonAplicar} from './style'
import {selectedColor} from '../Body'


const BodyThree = () => {


    const [card, setCard]= useState([
        {id:0, name:'1'},
        {id:1, name:'2'},
        {id:2, name:'3'},
        {id:3, name:'4'}        
    ])

    const [mostraColor, setmostrarColor] = useState('');

    function pruebaColor(){

      
      
    }

  return (
    <Cardss>
        <div style={{width:'100%', height:'50px', display:'flex'}}>
            <h2>Selecciona una card para personalizar:</h2>
        </div>
        
        <ContenedorCards>
        {card.map(card=> {
                    return (
                    <Cards 
                    name={card.name}
                    id={card.id} 
                    color={card.color}/>)
                 })}
        </ContenedorCards>

        <ContenedorBottom>
          <ContenedorBottomBody>

          <BottonAplicar>Aplicar</BottonAplicar> {/* BOTON */}

          </ContenedorBottomBody>
        
              
        </ContenedorBottom>
    </Cardss>
  )
}

export default BodyThree
