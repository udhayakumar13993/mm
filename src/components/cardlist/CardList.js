import React from 'react';
import './cardlist.css'

import {Card} from '../Card/card.component'
export const CardList=(props)=>{
    console.log(props)
    return(

        <div className="card-list">{props.monsters.map((monster)=>
            <Card key={monster.id} monster={monster}/>)  
        }
      </div>
            )
}

