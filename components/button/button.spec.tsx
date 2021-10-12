import React from 'react'

import { render, screen, fireEvent, getByText, waitFor } from '@testing-library/react';
import { BasicButton } from './button.composition'
import { Button } from './button';


it('should render with the correct text', () => {
    const { getByText } = render(<BasicButton/>);
    const rendered = getByText('Click me please!');
    expect(rendered).toBeTruthy();   
})


it('should interact with the button', async () => {
    const action = jest.fn();
        render(<Button/>);
    const button = screen.getByTestId('button')    
    fireEvent.click(button)

   // expect(screen.getByRole("alert")).toHaveTextContent('you have clicked submit');
    expect(screen.getByRole("button")).toHaveTextContent('Click me please!');
  //  expect(alert).toBeCalled();
})