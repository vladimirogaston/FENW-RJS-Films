import React, { Component } from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
//https://www.youtube.com/watch?v=tk61nYJzCA8&ab_channel=BorjaScript
function Form(props){
    return(
        <Modal isOpen={props.open}>
        <ModalHeader></ModalHeader>
        <ModalBody>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Score</label>
                    <input className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Director</label>
                    <input className="form-control"></input>
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
           
        </ModalFooter>
    </Modal>
    );
}

function Table(props){
    return(
        <table>
        <thead>
            <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Description</th>
                <th>Score</th>
                <th>Director</th>
            </tr>
        </thead>
        <tbody> {
            props.data.map((data, index) => {
                return (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>{data.score}</td>
                        <td>{data.director}</td>
                    </tr>
                );
            })
        }
        </tbody>
    </table>
    );
}

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalInsertar: true
        };
        this.abrirForm = this.abrirForm.bind(this);
    }

    abrirForm = () => {
        this.setState({
            modalInsertar: true
        });
    }

    peticionGet = () => {
        const path = 'http://localhost:5000/api/v0/films';
        axios.get(path).then((response) => {
            console.log(response);
            this.setState({
                data: response.data
            });
        });
    }

    componentDidMount() {
        this.peticionGet();
    }

    render() {
        return (
            <div>
                <Table data={this.state.data}></Table>
                <Form open={this.state.modalInsertar}></Form>
                <button onClick={this.abrirForm}>abrir form</button>
            </div>
        );
    }
} export default Films;