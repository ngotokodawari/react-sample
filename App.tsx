import React, { useState } from 'react';
import './style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton value="5" />
        <FunctionTransitionTab value="1" />
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

function FunctionTransitionTab(props) {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <FunctionTabPanel text="s" />
      </Tabs>
    </div>
  );
}

function FunctionTabPanel(props) {
  const msg = props.text;
  return (
    <TabPanel>
      <h2>{msg}</h2>
    </TabPanel>
  );
}
