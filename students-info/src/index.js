import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css";
const students =[{company:"Alfreds Futterkiste", contact:"Maria Anders", country:"Germany"},
{ company: 'Centro comercial Moctezuma',
contact: 'Francisco Chang',
country: 'Mexico'}, {
  company: 'Ernst Handel',
  contact: 'Roland Mendel',
  country: 'Austria'
},
{
  company: 'Island Trading',
  contact: 'Helen Bennett',
  country: 'UK'
},
{
  company: 'Laughing Bacchus Winecellars',
  contact: 'Yoshi Tannamuri',
  country: 'Canada'
},
{
  company: 'Magazzini Alimentari Riuniti',
  contact: 'Giovanni Rovelli',
  country: 'Italy'
}]
const table1 =<div><h1>Students</h1><table className='table'>
<thead>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  
</thead>
<tbody>
  {students.map(student=>(<tr><td>{student.company}</td>
  <td>{student.contact}</td>
  <td>{student.country}</td></tr>))}
</tbody>
</table></div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(table1

  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
