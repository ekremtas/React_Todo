import React , {Component} from 'react';

class OneList extends Component{
    constructor(props){
        super(props)

        this.state = {
            name : this.props.name
        }
    }

    render(){
        return(
            <div>
                <h1>OneList this Props : {this.props.name}</h1>

                <h1>OneList this State : {this.state.name}</h1>
            </div>
        );
    }

}

export default OneList; 