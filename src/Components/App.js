//Dependencies
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Writers from './Writers'
import NotFound from './Error/404'

//Assets
import './App.css';

export default class App extends Component {
  state = {
    writers: []
  }

  async componentDidMount(){
    const writers = await (await fetch('http://localhost:4000/writers')).json()
    //console.log(writers)
    this.setState({ writers })
  }

  render() {
    const { writers } = this.state
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/writers">Writers</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/" render={() => <div>Home</div>}/>
            <Route path="/writers" render={ 
              props => <Writers {...props} writers={writers} />
            } />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

