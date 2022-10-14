import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'
import {faCreditCard} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons'


const form1 = <div className='col-4'>
  <h4>Account</h4>
<div class="input-group flex-nowrap mb-3">
<span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUser} /></span>
<input type="text" class="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div class="input-group flex-nowrap mb-3">
<span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faEnvelope} /></span>
<input type="text" class="form-control" placeholder="Email adress" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div class="input-group flex-nowrap mb-3">
<span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faKey} /></span>
<input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div class="row g-3 mb-3">
<h4>Date of Birth</h4>
  <div class="col">
    <input type="text" class="form-control" placeholder="DD" aria-label="day"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="MM" aria-label="month"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="YYYY" aria-label="year"/>
  </div>
</div>
<h4>Payment Details</h4>
<button type="button" class="btn btn-primary btn-lg mb-3" style={{marginRight:"10px"}}><FontAwesomeIcon icon={faCreditCard} /> CreditCard</button>
<button type="button" class="btn btn-primary btn-lg mb-3"><FontAwesomeIcon icon={faMoneyBill} /> Paypal</button>
<div class="input-group flex-nowrap mb-3">
<span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCreditCard} /></span>
<input type="text" class="form-control" placeholder="Card Number" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div class="row g-3">
  <div class="col">
  <div class="input-group flex-nowrap mb-3">
<span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUser} /></span>
<input type="text" class="form-control" placeholder="Card CVC" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
  </div>
</div>
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  form1
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
