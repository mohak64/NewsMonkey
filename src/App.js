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
import "./App.css";
import React, { Component } from "react"; //rcc - class based component
import { NavBar } from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  // c = 'mohak'
  pageSize = 6;
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key=" general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key=" business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key=" entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key=" health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key=" science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key=" sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key=" technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
          {/* alag alag keys dene se samjh jaega ki rerender ya remount ktna hai */}
          {/* Hello my first class based compoment {this.c} */}
        </div>
      </BrowserRouter>
    );
  }
}
