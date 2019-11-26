import React , {Component} from 'react';


class AddTodo extends Component{

    render(){
        return(
        <div className="col-md-6">
            <div className="btn-info">
            <h3 >Add Todo</h3>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="asdasd">
                        - Name -
                    </label>
                    <input className="form-control" type="text" name="name" />
                </div>
                <div className="form-group">
                <label className="form-group">
                    - Description -
                </label> 
                <input className="form-control" type="text" name="description" />
                </div>
                <button type="submit" className="btn btn-success">Save Todo</button>
            </form>
        </div>
        );
    }
}




export default AddTodo;