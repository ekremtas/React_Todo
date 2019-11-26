import React , {Component} from 'react'

class TodosList extends Component{

    render(){
        return(
        <div className="col-md-6">
            <div className="btn-info">
            <h3 >TodosList</h3>
            </div>
        <table className="table table-hover table-Info">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button className="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td><button className="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        </tbody>
        </table>
        </div>
        );
    }

}

export default TodosList;