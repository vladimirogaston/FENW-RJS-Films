import React from 'react';
import FilmsForm from './films-form';

const TableHead = ()=>{
    return (
        <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Score</th>
                <th scope="col">Director</th>
                <th scope="col">
                    <FilmsForm buttonLabel={"add"}></FilmsForm>
                </th>
            </tr>
        </thead>
    );
}

const onDelete = (id)=>{
    alert(id);
}

const TableRows = (props)=>{
    const { filmsData } = props;
    const rows = filmsData.map((data) => {
        return (
            <tr key={data.id} scope="row">
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.score}</td>
                <td>{data.director}</td>
                <td>
                    <button className="btn btn-primary">update</button>{' '}
                    <button className="btn btn-success"
                            onClick={()=>{
                                alert(data.id)}}>
                            delete
                    </button>
                </td>
            </tr>
        );
    });
    return rows;
}

const FilmsTable = (props)=>{
    return (
        <table className="table">
            <TableHead></TableHead>
            <tbody>
                <TableRows filmsData={props.data}></TableRows>
            </tbody>
        </table>
    );
}

export default FilmsTable;