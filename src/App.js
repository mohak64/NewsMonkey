import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react"; //rcc - class based component
import { NavBar } from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  // c = 'mohak'
  render() {
    return (
      <div>
        <NavBar />
        <News />

        {/* Hello my first class based compoment {this.c} */}
      </div>
    );
  }
}
