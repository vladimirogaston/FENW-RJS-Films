import React, { Component } from 'react';
import axios from 'axios';
import FilmsTable from './films-table';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
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
                <FilmsTable data={this.state.data}></FilmsTable>
            </div>
        );
    }
} export default Films;