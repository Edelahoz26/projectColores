import React from 'react'
import { useState } from "react";
import Header from './Header/Header'
import Body from './Body/Body'
import {Contenedor} from './style'
import BodyThree from '../components/Body/RowThree/BodyThree'
import BodyFour from '../components/Body/RowFour/BodyFour';

const Index = () => {

  

    
  return (

    <Contenedor>

        <Header/>
        <Body/>
        <BodyThree/>

        {/* ultima row */}
        <BodyFour/>
        
    </Contenedor>
   
    
  )
}

export default Index