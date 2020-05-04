import React from 'react';
import Navbar from './navbar';
import Color from './colors/color';
import SizeCategory from './size-category/sizecategory';
function Workspace(props) {
  function renderComponentBasedOnComponentType() {
    switch (props.match.params.componentType) {
      case 'color':
        return <Color />;
      case 'sizeCat':
        return <SizeCategory />;
      default:
        return <h1>Illegal Component Type</h1>;
    }
  }
  return (
    <React.Fragment>
      <Navbar />
      {renderComponentBasedOnComponentType()}
    </React.Fragment>
  );
}

export default Workspace;
