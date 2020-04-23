import React, { Component } from 'react';
import ColorList from './colorList';
import UpsertColor from './upsertColor';
import { ToastsContainer, ToastsStore } from 'react-toasts';

class Color extends Component {
  constructor() {
    super();
    this.state = {
      colorList: [],
      color: {
        colorCode: '',
        colorName: '',
        id: 0,
      },
      error: {},
      isHideList: false,
      isEdit: false,
    };
  }

  textChnage = (e) => {
    const { name, value } = e.target;
    this.setState({ color: { ...this.state.color, [name]: value } });
  };

  hideColorList = (isHideList) => {
    this.setState({
      isHideList,
      isEdit: false,
    });
  };

  cancelColor = () => {
    this.setState({
      color: {
        colorCode: '',
        colorName: '',
      },
      isHideList: false,
    });
  };

  saveColor = (isEdit) => {
    const { colorCode, colorName } = this.state.color;
    let { id } = this.state.color;
    let colorList = this.state.colorList;

    if (!this.isColorCodeExists(colorCode, colorList, isEdit, id)) {
      if (!isEdit) {
        const { length } = this.state.colorList;
        id = length - 1 === -1 ? 1 : this.state.colorList[length - 1].id + 1;
      } else {
        const index = colorList.findIndex((x) => x.id === id);
        colorList[index].colorName = colorName;
        colorList[index].colorCode = colorCode;
      }

      this.setState({
        color: {
          colorCode: '',
          colorName: '',
        },
        colorList: isEdit
          ? colorList
          : [...this.state.colorList, { colorCode, colorName, id }],
        isHideList: false,
      });
      ToastsStore.success(`${isEdit ? `Updated` : `Created`} successfully`);
    } else {
      ToastsStore.error('Color code is already existed');
    }
  };

  isColorCodeExists(colorCode, colorList, isEdit, colorId) {
    const index = colorList.map((c) => c.colorCode).indexOf(colorCode);
    return isEdit
      ? colorList.find((c) => c.id === colorId).colorCode === colorCode
        ? false
        : index === -1
        ? false
        : true
      : index === -1
      ? false
      : true;
  }

  onEdit = (id) => {
    const colorObj = this.state.colorList.find((x) => x.id === id);
    this.setState({
      color: colorObj,
      isHideList: true,
      isEdit: true,
    });
  };

  onDelete = (id) => {
    if (window.confirm('Do you want delete ?')) {
      ToastsStore.success('Deleted successfully');
      const index = this.state.colorList.findIndex((x) => x.id === id);
      this.setState({
        colorList: [
          ...this.state.colorList.slice(0, index),
          ...this.state.colorList.slice(index + 1),
        ],
      });
    }
  };

  renderElement() {
    if (this.state.isHideList) {
      return (
        <React.Fragment>
          <UpsertColor
            saveColor={this.saveColor}
            cancelColor={this.cancelColor}
            textChnage={this.textChnage}
            color={this.state.color}
            isEdit={this.state.isEdit}
          />
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <button
            type="button"
            className="btn btn-link pull-right"
            onClick={() => this.hideColorList(true)}
          >
            Add Color
          </button>
          {this.IsColorListRender()}
        </div>
      );
    }
  }

  IsColorListRender() {
    if (this.state.colorList.length !== 0) {
      return (
        <ColorList
          colorList={this.state.colorList}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
      );
    } else {
      return <p>No Color List available</p>;
    }
  }

  render() {
    return (
      <div>
        <ToastsContainer store={ToastsStore} />
        {this.renderElement()}
      </div>
    );
  }
}
export default Color;
