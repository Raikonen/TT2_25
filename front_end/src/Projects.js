import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state={projs:[], redirectTo: false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
       fetch('')
       .then(response => response.json())
       .then(data => {
           this.setState({projs: data});
       });
    }

    componentDidUpdate(){
        this.refreshList();
    }


    redirectTo = () =>{
        this.setState({redirectTo: true})
    }

    render(){
    
    const{projs, projid, projname}=this.state;
    const redirectOut = this.state.redirectOut;
        if (redirectOut === true) {
            return <Navigate to="/expenses" />
        }

        return(
        <section class = "content">
            <div className = "mt-3">
            <h5>My Projects</h5>
            </div>

            <Table className="mt-4" striped boredered hover size="sm">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Budget</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {projs.map(proj=>
                        <tr key={proj.ID}>
                        <td>{proj.Name}</td>
                        <td>{proj.Description}</td>
                        <td>{proj.Budget}</td>
                        <td>
                            <ButtonToolbar>
                                <Col sm={1}></Col>
                                <Button className="mr-2" variant="primary" 
                                onClick = {()=> this.redirectTo}
                                >View</Button>
                            </ButtonToolbar>
                        </td>
                        </tr>
                        )}
                </tbody>
            </Table>

    
        </section>

        )
    
    }
}


