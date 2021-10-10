import React from 'react'

export function Button() {

    const handleSubmit = () => {
        alert("you have clicked submit");
        // or you can send to backend
      };
       
    return <button data-testid="button" onClick={handleSubmit} type="submit">Click me please!</button>
}