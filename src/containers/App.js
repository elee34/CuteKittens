import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots} from '../actions'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  //do not need constructor because there are no more state
    componentDidMount(){
    this.props.onRequestRobots();
  }

  render() {
     const { robots, searchField, onSearchChange, isPending } = this.props;
     const filterRobots = robots.filter(robot => {
     return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })  

      return isPending ?
            <div> 
              <h1> Loading</h1>
              <footer> </footer>
            </div> :
      (
        //<div className="App">
        <div className='tc'>
          <header className="App-header">
              <ul className='nav-bar'>
                <li>
                    <a href="">
                        <i className="fa fa-facebook-square"></i>
                        Like
                    </a>
                </li>
                 <li>
                    <a href="https://github.com/elee34">
                        <i className="fa fa-github"></i>
                        GitHub
                    </a>
                </li>
                 <li>
                    <a href="https://www.instagram.com/evy.l33/">
                        <i className="fa fa-instagram"></i>
                        Instagram
                    </a>
                </li>
              </ul>
                <h1 className="App-title">Hello Kitty</h1>
          </header>
            <body>
              <p className='f2'>
                  Search for your favourite kitty.
              </p>    
                 <SearchBox searchChange={onSearchChange}/>
                <Scroll className = "scrollbox">
                  <ErrorBoundry>
                    <CardList robots={filterRobots}/>
                  </ErrorBoundry>
                </Scroll>
            </body>
          <footer>
             Made with  <i class="fa fa-heart heart"></i> by Evy Lee.
             2018
          </footer>  
        </div>
      )
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
