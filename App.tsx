import React, { useState } from 'react';
import './style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton value="5" />
        <Tabs>
          <TabList>
            <TabActive text="abc" />
            <TabActive text="def" />
            {props.isVisible === 'true' && <TabActive text="efg" />}
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <FunctionTabPanel text="test" />
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </header>
    </div>
  );
}
function TabActive(props) {
  /* state変数を定義する↓ */
  const [active, setActive] = useState(false); // デフォルト値＝false
  const classToggle = () => {
    setActive(!active);
  };
  return (
    <div>
      {/* 三項演算子で、条件分岐 */}
      <Tab
        className={active ? 'negativeTab' : 'positiveTab'}
        onClick={classToggle}
      >
        {props.text}
      </Tab>
    </div>
  );
}
// 関数コンポーネント
function LikeButton(props) {
  const [count, setCount] = useState(props.value); // count=999
  const handleClick = () => {
    if (count > 0) setCount(parseInt(count) + 1); // setCountを変更する
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

function FunctionTabPanel(props) {
  const msg = props.text;
  return (
    <div>
      <p>共通コメント</p>
      <TabPanel>
        <h2>{props.text}</h2>
        <h2>tab3</h2>
      </TabPanel>
    </div>
  );
}
