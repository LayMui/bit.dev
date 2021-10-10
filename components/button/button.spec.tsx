import React from 'react'

import { render, screen, fireEvent, getByText } from '@testing-library/react';
import { BasicButton } from './button.composition'
import { Button } from './button';


it('should render with the correct text', () => {
    const { getByText } = render(<BasicButton/>);
    const rendered = getByText('Click me please!');
    expect(rendered).toBeTruthy();   
})


it('should interact with the button', () => {
    render(<Button />);
    const button = screen.getByTestId('button')    
    fireEvent.click(button)
  //  expect(alert).toHaveBeenCalled()
    expect(screen.getByTestId("button")).toHaveTextContent('Click me please!');
  //  expect(alert).toBeCalled();
})