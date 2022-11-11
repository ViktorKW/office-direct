import React from 'react';
import './style.scss';
import cube from './icons/cube.svg';
import leather from './icons/leather.svg';
import net from './icons/net.svg';

const Selectors = () => {
  return (
    <div className='selectors'>
      <div className='container'>
        <label>Backrest</label>
        <div className='combo'>
          <img src={net} alt='net' />
          <select>
            <option value='value1'>Сhair mesh</option>
            <option value='value2'>Значение 2</option>
            <option value='value3'>Значение 3</option>
          </select>
        </div>
      </div>

      <div className='container'>
        <label>Сhair seat</label>
        <div className='combo'>
          <img src={leather} alt='chair leather' />
          <select>
            <option value='value1'>Leather</option>
            <option value='value2'>Значение 2</option>
            <option value='value3'>Значение 3</option>
          </select>
        </div>
      </div>

      <div className='container'>
        <label>Headrest</label>
        <div className='combo'>
          <img src={cube} alt='cube' />
          <select>
            <option value='value1'>3D</option>
            <option value='value2'>Значение 2</option>
            <option value='value3'>Значение 3</option>
          </select>
        </div>
      </div>

      <div className='container'>
        <label>Armrests</label>
        <div className='combo'>
          <select>
            <option value='value1'>All</option>
            <option value='value2'>Значение 2</option>
            <option value='value3'>Значение 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Selectors;
