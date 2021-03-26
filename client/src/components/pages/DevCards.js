import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./DevCards.css";
import database from './firebase';




function DevCards(){
    const [people, setPeople] = useState([]);
    
    useEffect(()=> {
database.collection('people').onSnapshot(snapshot => (
    setPeople(snapshot.docs.map(doc => doc.data()))
))
    }, []);
    
    return(
        <div>
<h1> Dev Cards</h1>
<div className='devCards__cardContainer'> 
{people.map(person => (
    <TinderCard
    className='swipe'
    key={person.name}
    preventSwipe={['up','down']}>
        <div
         className="card" 
         style={{ backgroundImage: `url(${person.url})`}}>
            <h3>{person.name}</h3>

        </div>
    </TinderCard>
    
))}
 </div>
        </div>
    );
}

export default DevCards;