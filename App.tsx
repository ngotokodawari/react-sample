import  React,{useState} from 'react';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
    
  );
}

function LikeButton(){
  const [count,setCount] = useState(999); // count=999
  const handleClick = () => {
    setCount(count+1);
  }
  return <span className="likeButton" onClick={handleClick}>いいぞ{count}</span>
}
