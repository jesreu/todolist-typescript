import React from 'react';


function TodoTable(props:any) {

    return (
    <div>
        <table>
        <tr>
        <th>Description</th>
        <th>Date</th>
        <th>Priority</th>
        <th></th>
        </tr>
        <tbody>
          {props.todos.map((todo:any, index:number) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>{todo.prio}</td>
              <td><button onClick={() => props.deleteRow(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
    );
}

export default TodoTable;