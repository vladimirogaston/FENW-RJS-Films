import React from 'react';

function FilmsTable(props){
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

export default FilmsTable;