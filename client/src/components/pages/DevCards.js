import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./DevCards.css";
import database from './firebase';




function DevCards(){
    const [people, setPeople] = useState([]);
    
    //piece of code which run based on a condition
    useEffect(()=> {

        const unsubscribe = database
        .collection('people')
        .onSnapshot(snapshot => (
    setPeople(snapshot.docs.map(doc => doc.data()))
));
return () => {
    unsubscribe();
};
    }, []);
    
    return(
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
        
    );
}

export default DevCards;