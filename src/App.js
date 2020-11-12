import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { TweenMax, Power3 } from 'gsap';

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [redExpand, setRedExpand] = useState(false)

  useEffect(() => {
    TweenMax.to(app, 0, { visibility: 'visible' });
    //Beginning value
    // TweenMax.from(circle, .8, {opacity: 0, x: 40, ease: Power3.easeOut})
    // TweenMax.from(circleRed, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .2})
    // TweenMax.from(circleBlue, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: .4})

    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.2
    );
  }, []);

  const handleExpand = () => {
    TweenMax.to(circleRed, .8, {width: 200, height: 200, ease: Power3.easeOut});
    setRedExpand(true);
  }

  const handleShrink = () => {
    TweenMax.to(circleRed, .8, {width: 75, height: 75, ease: Power3.easeOut});
    setRedExpand(false);
  }
  return (
    <div ref={(el) => (app = el)} className='App'>
      <header className='App-header'>
        <div className='circle-container'>
          <div ref={(el) => (circle = el)} className='circle'></div>
          <div
          onClick={redExpand ? handleShrink : handleExpand} 
          ref={(el) => (circleRed = el)} className='circle red'></div>
          <div ref={(el) => (circleBlue = el)} className='circle blue'></div>
        </div>
      </header>
    </div>
  );
}

export default App;
