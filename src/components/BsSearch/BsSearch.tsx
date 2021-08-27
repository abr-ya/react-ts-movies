import React, { useState, useEffect, useRef } from 'react';

const BsSearch = ({ setter, value }) => {
  const [text, setText] = useState('');
  const inputRef = useRef();

  const submitHandler = (e: any) => {
    e.preventDefault();
    setter(text);
  };

  useEffect(() => {
    if (value === '') inputRef.current.value = '';
  }, [value]);

  return (
    <form onSubmit={submitHandler}>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
    </form>
  );
};

export default BsSearch;
