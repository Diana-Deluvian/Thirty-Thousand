import React from 'react';
import ReactDOM from 'react-dom';


class Word extends React.Component {
    render() {
      return ( 
        <div class="flexbox">
            <div id="word">succulent</div>
            <div id="definition">adjective - (of food) tender, juicy, and tasty.
            </div>
            <div id="example">"a succulent steak"</div>
      </div>
      );
  }
}
  

export default Word;