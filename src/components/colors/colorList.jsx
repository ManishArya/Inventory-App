import React from 'react';
import ColorRow from './colorRow';

export default function ColorList(props) {
  return (
    <React.Fragment>
      <h1>Color List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Color Id</th>
            <th>Color Code</th>
            <th>Color Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.colorList.map((x) => {
            return (
              <ColorRow
                key={x.id}
                id={x.id}
                colorCode={x.colorCode}
                colorName={x.colorName}
                onEdit={props.onEdit}
                onDelete={props.onDelete}
              />
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
