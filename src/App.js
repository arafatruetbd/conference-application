import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex flex-row justify-content-between">
          <div className='d-flex flex-row'>
            <div class="p-2">Conference</div>
            <div class="p-2">Home</div>
          </div>
          <div class="p-2">Login</div>
        </nav>
        <div class="jumbotron">
          <h1 class="display-4">Global Foundries Conference Paper</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
}