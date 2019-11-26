import React ,{Component} from 'react';
import OneList from './component/OneList';
import AddTodo from './component/AddTodo';
import TodosList from './component/TodosList';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos : [],
      test : "test data"
      
    }
  }

  render(){
    
    return(
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1>Todo App With React.js</h1>
            <hr/>
          </div>
          

            <AddTodo />
          
            <TodosList />
          
          
          
        </div> 
        
        <br/>
        <br/>
        <h2>{this.state.todos}</h2>
          <OneList  name={this.state.test}  /> 
      </div>
    );
  }

}

export default App;
