import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';




function DevCards(){
    const [people, setPeople] = useState([
        {
            name:'Carlotta B',
            url:'https://media2.s-nbcnews.com/i/newscms/2020_13/2611761/181019-cardi-b_b21e6ed262ac99a6a193ef650a9225d5.jpg'},
            {name:'Harry Duchess',
                url:'https://content.fortune.com/wp-content/uploads/2017/09/842917988.jpg'},
                {name:'Priyanka Chopra',
                url:'https://images.outlookindia.com/public/uploads/gallery/20201008/Glit_1_20201019.jpg'},
                
    ]);
    
    
    return(
        <div>
<h1> Dev Cards</h1>
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