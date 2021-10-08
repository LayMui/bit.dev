import React from 'react'
import { render } from '@testing-library/react'

import { BasicButton } from './button.composition'

it('should redner with the correct text', () => {
    const { getByText } = render(<BasicButton/>);
    const rendered = getByText('click me');
    expect(rendered).toBeTruthy();
})