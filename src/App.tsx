import { useState } from 'react';
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Button type="primary">Button</Button>
    </main>
  );
}

export default App;
