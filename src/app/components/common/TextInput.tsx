'use client'
import { useState } from "react";

export default function TextInput({onChange}: any) {
    // Step 4: Initialize state to store input value
    const [inputValue, setInputValue] = useState('');
  
    // Step 5: Handle the input change
    const handleChange = (event: any) => {
      setInputValue(event.target.value);
      //onChange(event.target.value);
    };
  
    // Step 6: Render the input field
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Enter Your Name</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text here"
          style={{ padding: '10px', fontSize: '16px', width: '300px' }}
        />
        <p style={{ marginTop: '20px' }}>You typed: {inputValue}</p>
      </div>
    );
  }
  