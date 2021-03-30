import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats () {
return <div className='chats'>
<Chat
name="Brat"
message="Hi there thanks for the add!"
timestamp="5 seconds ago"
profilePic='https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg'
/>
<Chat
name="Maluma"
message="Hola como estas?"
timestamp="34 seconds ago"
profilePic='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F24%2Fmaluma-1.jpg'
/>
<Chat
name="Angelina"
message="Let's work together!"
timestamp="1 days ago"
profilePic='https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE5NDg0MDU1MDE2MDgwOTEx/angelina-jolie-9356782-1-402.jpg'
/>
<Chat
name="Leonardo"
message="Hello finally great to meat you!"
timestamp="3 days ago"
profilePic='https://media.vanityfair.com/photos/56450849eccc21966e939ea5/2:3/w_572,h_858,c_limit/leonardo-dicaprio-birthday.jpg'
/>

</div>;
}

export default Chats ;