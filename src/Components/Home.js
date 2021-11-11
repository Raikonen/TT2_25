import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from './Navigation';
import {Redirect} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@material-ui/core/IconButton';
import {Modal, Button} from 'react-bootstrap';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state={user:[], redirectOut: false, modalLOOpen: false}
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
            if(results.status===401) {
                this.setState({redirectOut: true});
                } else {
                  this.setState({user: results.name});
                }
        });
     }

   

    logOut(){
    
            fetch('https://localhost:44385/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            credentials:'include'
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
    


    render (){
        const redirectOut = this.state.redirectOut;
        if (redirectOut === true) {
            return <Redirect to="/" />
        }

        const {user} =this.state;

        return (
            <div className="main">
            <header id="homeheader">
            <img id="header-img" src="https://pluspng.com/img-png/logo-dbs-png-dbs-bank-logo-1221.png" alt="" width="150" height="50"/>
            <div className="logout">
            <IconButton
                size="small"
                aria-label="close"
                color="grey"
                onClick={()=>{this.setState({modalLOOpen: true})}}
                >
            <div className="logouticon"><LogoutIcon fontSize="small" />Log Out</div>
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
            </div>
            
            </div>
        )
    }
}