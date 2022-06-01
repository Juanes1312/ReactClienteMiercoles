import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Juanes} from './Juanes.js'
import { Menu } from './Menu';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Menu />
    <Juanes />
    <img></img>
  </div>
)
