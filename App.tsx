import React, { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton value="5" />
      </header>
    </div>
  );
}

// 関数コンポーネント
function LikeButton(props) {
  const [count, setCount] = useState(props.value); // count=999
  const handleClick = () => {
    if (count > 0) setCount(parseInt(count) - 1);
  };
  return (
    <div>
      <span className="likeButton" onClick={handleClick}>
        いいぞ{count}
      </span>
      <p>a</p>
      <p>c</p>
    </div>
  );
}
