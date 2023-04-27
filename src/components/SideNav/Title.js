import Typed from 'typed.js';
import React from 'react';
// import './Title.css';

const Title = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Hello I&apos;m Lisa',
        'Hallo ik ben Lisa',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="wrap">
      <div className="type-wrap">
        <span className='font-lekton text-4xl' style={{whiteSpace: 'pre'}} ref={el} />
      </div>
    </div>
  );
};

export default Title;
