import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { maxNumber } from '../helpers';

class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    gifts.push({ id: maxNumber(ids) + 1 });
    this.setState({ gifts });
  };

  removeGift = id => {
    const filteredGifts = this.state.gifts.filter(gift => gift.id !== id);

    this.setState({ gifts: filteredGifts });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} id={gift.id} removeGift={this.removeGift} />
            );
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
