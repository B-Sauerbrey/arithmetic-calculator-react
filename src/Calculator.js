import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

function Calculator() {
    const [value, setValue] = useState('');

    return (
        <div>
            <Display value={value} />
            <Keypad value={value} setValue={setValue} />
        </div>
    );
}

export default Calculator;