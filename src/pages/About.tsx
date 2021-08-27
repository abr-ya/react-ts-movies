import React, { useRef } from 'react';

const About = () => {
  const inputRef = useRef();

  return (
    <div className="container">
      <h1>About page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Reprehenderit a rem id quae officiis distinctio ipsa, quidem nisi amet eos?
      </p>
      <label htmlFor="test">
        Инпут для тестов:
        <input
          type="number"
          id="test"
          ref={inputRef}
          onBlur={() => console.log('blur', inputRef.current.value)}
        />
      </label>
    </div>
  );
};

export default About;
