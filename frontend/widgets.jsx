import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main');
  ReactDOM.render(<Root/>, main);
});

class Root extends React.Component {
  constructor() {
    super();
    this.state = { namesList: ['john', 'tyler']};
  }

  render() {

    return (
      <div>
        <h1>Cool Clock</h1>
        <Clock />

        <h1>Cool Weather</h1>
        <Weather />

        <h1>Cool Autocomplete</h1>
        <Autocomplete namesList={this.state.namesList}/>
      </div>
    );
  }
}
