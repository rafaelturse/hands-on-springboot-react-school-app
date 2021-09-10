import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    state = {
        userName: ''
    }

    redirectInsertUser = () => {
        this.props.history.push('/insert-user');
    }

    componentDidMount(){
        this.setState({userName: JSON.parse(localStorage.getItem('_logged_user'))}) 
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">
                    Welcome 
                    <strong> {this.state.userName.name}</strong>!
                    </h1>
                <p className="lead">This is the Simple School system</p>
                <hr className="my-4" />
                <p>Here you can interact and generate reports for schools, employees, students and grades</p>
            </div>
        )
    }
}

export default withRouter(Home)