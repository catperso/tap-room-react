import React from 'react';
import NewKegForm from './NewKegForm';
import TapList from './TapList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [],
      selectedKeg: null,
      editing: false
    }
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainTapList = this.state.mainTapList.concat(newKeg);
    this.setState({mainTapList: newMainTapList, formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainTapList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainTapList = this.state.mainTapList.filter(keg => keg.id !== id);
    this.setState({mainTapList: newMainTapList, selectedKeg: null});
  }

  handleEditClick = () => this.setState({editing: true});

  handleEditingKegInList = (kegToEdit) => {
    const editedMainTapList = this.state.mainTapList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({mainTapList: editedMainTapList, editing: false, selectedKeg: editedMainTapList.filter(keg => keg.id === kegToEdit.id)[0]});
  }

  handlePintClick = () => {
    const thisKeg = this.state.selectedKeg;
    const pouredKeg = { name: thisKeg.name, 
                        brand: thisKeg.brand, 
                        price: thisKeg.price, 
                        alcoholContent: thisKeg.alcoholContent, 
                        pintsRemaining: thisKeg.pintsRemaining -= 1, 
                        id: thisKeg.id}
    this.handleEditingKegInList(pouredKeg);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />;
      buttonText = 'Cancel edit and return to the Taplist';
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} 
                                        onClickingDelete = {this.handleDeletingKeg} 
                                        onClickingEdit = {this.handleEditClick}
                                        onClickingPint = {this.handlePintClick} />;
      buttonText = 'View all taps';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = 'Cancel new keg and return to the Taplist';
    } else {
      currentlyVisibleState = <TapList tapList={this.state.mainTapList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = 'Tap a new keg?'
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className="btn btn-info">{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TapControl;