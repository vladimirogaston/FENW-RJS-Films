import React, { Component } from 'react';

class FilmsForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            score: '',
            director: ''
        }
    }

    render() {
        const {} = this.props;
        return(
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="text"></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input className="form-control" type="text"></input>
                </div>
                <div className="form-group">
                    <label>Score</label>
                    <input className="form-control" type="text"></input>
                </div>
                <div className="form-group">
                    <label>Director</label>
                    <input className="form-control" type="text"></input>
                </div>
                <div>
                    <button type="button" className="btn btn-success"></button>
                </div>
            </form>
        );
    }
}

export default FilmsForm;