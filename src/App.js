import Values from 'values.js';
import { useState } from 'react';

import Color from 'components/Color';
import Button from 'components/Button';
import Input from 'components/Input';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            value={color}
            placeholder='#f15025'
            onChange={(e) => setColor(e.target.value)}
            error={error}
          />
          <Button label='Submit' />
        </form>
      </section>

      <section className='colors'>
        {list.map((color, index) => {
          return (
            <Color
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
