import React, { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton value = '1'/>
      </header>
    </div>
  );
}

// 関数コンポーネント
function LikeButton(props) {
  const [count, setCount] = useState(props.value); // count=999
  const handleClick = () => {
    setCount(parseInt(count) + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      いいぞ{count}
    </span>
  );
}
