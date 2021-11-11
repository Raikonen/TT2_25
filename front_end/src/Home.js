import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from './Navigation';
import {Navigate} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export class Home extends Component {

    constructor(props) {
        super(props);
        this.state={user:[], redirectOut: false, modalLOOpen: false, redirectProj:false}
        this.logOut=this.logOut.bind(this);
    }

    componentDidMount(){
        fetch('',{
            headers: {
                'Content-Type':'application/json'
            },
            credentials:'include',
        })
        .then(resp => resp.json())
        .then(results => {
            console.log('hi');
                
        });
     }

   

    logOut(){
    
            fetch('', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            credentials:'include' hi
            })
            .then(rep=>rep.json())
            .then((resp)=>
            {   
                if(resp.status===400) {
                    return console.log("error");
            } else {
                    this.setState({redirectOut: true});
                }
            });
    }


    modalLOClose = () => {
        this.setState({
            modalLOOpen: false
        });
    }
    
    redirectProj = () =>{
        this.setState({redirectProj: true})
    }

    render (){
        const redirectOut = this.state.redirectOut;
        if (redirectOut === true) {
            return <Navigate to="/" />
        }

        const redirectProj = this.state.redirectProj;
        if (redirectProj === true) {
            return <Navigate to="/Projects" />
        }

        const {user} =this.state;

        return (
            <div className="main">
            <header id="homeheader">
            <div className="logout">
            <IconButton
                size="small"
                aria-label="close"
                color="grey"
                onClick={()=>{this.setState({modalLOOpen: true})}}
                >
            <div className="logouticon">Log Out</div>
            </IconButton>
            </div>

            <Modal
        {...this.props}
        centered
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="logoutmodal"
        backdrop="static"
        size="sm"
        show={this.state.modalLOOpen}
        onHide={this.modalLOClose}> 
            <Modal.Body>
             Are you sure you want to log out?
            <span className="modalbuttons  d-inline-block mt-4">
            <Button variant="secondary" className="m-2" onClick={this.logOut}>Continue</Button>
            <Button variant="danger" className="m-2" onClick={this.modalLOClose}>Cancel</Button>
            </span>
            </Modal.Body>
            </Modal> 

            </header>
            <Navigation/>
            
            <div className="welcomebox">
               <h4>Welcome, {user}!</h4>    
               <Button variant="danger" className="m-2" onClick={this.redirectProj}>Projects</Button>
            </div>
            
            </div>
        )
    }
}
