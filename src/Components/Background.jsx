import React from 'react';
import background from '../Media/background.png';

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <img src={background} className='relative inset-0 w-full h-full object-cover object-center'></img>
    </div>
  );
}

export default Background;
