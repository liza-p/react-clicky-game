import React, {useState} from 'react';
import Nav from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import './App.css';

let clickedImageIds = [];

function App() {
  const [imgCards, setImgCards] = useState([
    {id:1,img:'chandler.png'},
    {id:2,img:'emily.png'},
    {id:3, img:'gunther.jpeg'},
    {id:4, img:'janice.jpg'},
    {id:5, img:'joey.jpg'},
    {id:6, img:'monica.png'},
    {id:7, img:'mrtreeger.jpg'},
    {id:8, img:'phoebe.jpg'},
    {id:9, img:'rachel.jpg'},
    {id:10, img:'richard.jpg'},
    {id:11, img:'ross.jpg'},
    {id:12, img:'rossMom.jpg'}
  ]);
  const [message, setMessage] = useState('Click an image to begin!');
  const [score, setScore] = useState(0);

  const onSelect = function(cardId){
    if (clickedImageIds.includes(cardId)) {
      setMessage('You\'ve been bamboozled!');
      setScore(0);
      clickedImageIds = [];
      return;
    }

    setMessage('Unbelievable, eleven is correct!');
    setScore(score + 1);

    clickedImageIds.push(cardId);

    const newCards = imgCards.slice();
    newCards.forEach(function(el,i){
      const randomI = Math.floor(Math.random()*newCards.length);
      const tempr = newCards[i];
      newCards[i]=newCards[randomI];
      newCards[randomI]=tempr;
    });
    setImgCards(newCards);
  }
  return (
    <div className="App">
      <Nav message={message} score={score} />
      <Wrapper imgCards={imgCards} onSelect={onSelect}/>
      <Footer/>
    </div>
  );
}

export default App;
