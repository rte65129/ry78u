// src/app/page.tsx
'use client';

import { useState } from 'react';
import { greet } from './action';
import ClientDemo from './demo-client/page'; 

export default function GreetDemo() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <button onClick={async () => setMessage(await greet('Студент'))}>
        Поздороваться
      </button>
      <p>{message}</p>
      <ClientDemo />
    </div>
  );
}
