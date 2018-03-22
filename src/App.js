import React, { Component } from 'react';
import './css/main.css';
import Home from './pages/Home';
import { Route, Link } from 'react-router-dom';
import Wright from './pages/Wright';
import Themes from './pages/Themes';
import About from './pages/About';
import { Menu } from 'react-feather';


class App extends Component {
  constructor(){
    super();
    this.links = document.getElementsByTagName('nav');
  }

  linkClicked = (e) => {
    let target = e.target;
    if(e.target.children.length !== 0)
      target = target.children[0];

    for(let i = 0; i < this.links[0].children.length; i++){
      this.links[0].children[i].classList.remove("selected");
    }
    target.parentElement.classList.add("selected");


    if(this.links[0].classList.contains("open"))
      this.links[0].classList.toggle("open");
  }

  menuClicked = (e) => {
    let nav = this.links[0];
    nav.classList.toggle("open");
  }
  render() {

    return (
            <div className="main-wrapper">
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route exact path="/wright" component={Wright}/>
                <Route exact path="/themes" component={Themes} />
                <Route exact path="/about" component={About} />
              </div>
              <nav>
                <div className="menu-button-wrapper"><Menu onClick={this.menuClicked}/></div>
                <Link to="/" className="selected" onClick={this.linkClicked}><span >HOME</span></Link>
                <Link to="/wright" onClick={this.linkClicked}><span >RICHARD WRIGHT</span></Link>
                <Link to="/themes" onClick={this.linkClicked}><span >THEMES</span></Link>
                <Link to="/" onClick={this.linkClicked}><span >INDEPENDENCE/SOCIETAL INFLUENCE</span></Link>
                <Link to="/" onClick={this.linkClicked}><span >RESOURCES</span></Link>
                <Link to="/about" onClick={this.linkClicked}><span >ABOUT ME</span></Link>
              </nav>
          </div>
    );
  }
}

export default App;
