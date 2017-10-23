import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  handleLogOut() {
    return () => {
      this.props.logout()
    }
  }

  render () {
    const { currentUser } = this.props;

    if (currentUser) {
      return (<nav>
        <h3>Welcome {currentUser.username}</h3>
        <button onClick={this.handleLogOut()}>Logout</button>
      </nav>);
    } else {
      return (<nav>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/login'>Login</Link>
      </nav>);
    }

  }
}

export default Greeting;
