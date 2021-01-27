import React, { Component } from 'react';
import axios from 'axios';
import FilmsTable from './films-table';
import FilmsForm from './films-form';

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
        const label = 'click';
        return (
            <div>
                <FilmsTable data={this.state.data}></FilmsTable>
                <FilmsForm modal={true} buttonLabel={"hola"}></FilmsForm>
            </div>
        );
    }
} export default Films;