import { Component } from 'react';

import * as postService from './services/postServices';

import style from './App.module.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({ posts })
            });
    }

  render() {
    return(
        <div className={style.app}>
            <Header />

            <div className={style.container}>
                 <Menu />

                 <Main posts={this.state.posts} />
             </div>
         
        </div>
    );
  }
}

export default App;
