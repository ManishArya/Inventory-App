import React from 'react';

export default function UpsertColor(props) {
  return (
    <React.Fragment>
      Color !<br />
      <div className="form-group">
        <label htmlFor="code">Color Code *</label>
        <input
          id="code"
          type="text"
          className="form-control"
          name="colorCode"
          onChange={props.textChnage}
          autoComplete="off"
          value={props.color.colorCode || ''}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Color Name *</label>
        <input
          id="name"
          type="text"
          className="form-control"
          autoComplete="off"
          name="colorName"
          value={props.color.colorName || ''}
          onChange={props.textChnage}
        />
      </div>
      <button onClick={() => props.saveColor(props.isEdit)}>
        {props.isEdit ? 'Update' : 'Save'}
      </button>
      <button onClick={() => props.cancelColor()}>Cancel</button>
    </React.Fragment>
  );
}
