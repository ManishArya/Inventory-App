import React from 'react';

export default function ColorRows(props) {
  return (
    <tr>
      <td>{props.id} </td>
      <td>{props.colorCode}</td>
      <td>{props.colorName}</td>
      <td>
        <button onClick={() => props.onEdit(props.id)}>Edit</button> &nbsp;
        &nbsp;
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </td>
    </tr>
  );
}
