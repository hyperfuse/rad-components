import React, { Component } from 'react';
import { Modal } from 'rad-modal';

// const Opener = props => <button>Im Controlled</button>;
export class ModalControlled extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  openModal() {
    alert('Do something when you open the <Modal />');
    this.setState((prevState, currProps) => ({ isOpen: true }));
  }

  closeModal() {
    alert('Do something when you close the <Modal />');
    this.setState((prevState, currProps) => ({ isOpen: false }));
  }

  render() {
    return (
      <div>
        <button
          onClick={
            this.state.isOpen
              ? this.closeModal.bind(this)
              : this.openModal.bind(this)
          }
        >
          I'm controlled
        </button>
        <Modal
          openModal={() => this.openModal()}
          closeModal={() => this.closeModal()}
          isOpen={this.state.isOpen}
        >
          <h2>This Modal is Pretty Rad!?!?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <button style={{ width: 120, height: 30, borderRadius: 0 }}>
              Do Something
            </button>
            <button style={{ width: 120, height: 30, borderRadius: 0 }}>
              Do Something Else
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export var ModalControlledSource = `import React, { Component } from 'react';
import { Modal } from 'rad-modal';

export class ModalControlled extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  openModal() {
    alert('Do something when you open the <Modal />');
    this.setState((prevState, currProps) => ({ isOpen: true }));
  }

  closeModal() {
    alert('Do something when you close the <Modal />');
    this.setState((prevState, currProps) => ({ isOpen: false }));
  }

  render() {
    return (
      <div>
        <button
          onClick={
            this.state.isOpen
              ? this.closeModal.bind(this)
              : this.openModal.bind(this)
          }
        >
          I'm controlled
        </button>
        <Modal
          openModal={() => this.openModal()}
          closeModal={() => this.closeModal()}
          isOpen={this.state.isOpen}
        >
          <h2>This Modal is Pretty Rad!?!?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <button style={{ width: 120, height: 30, borderRadius: 0 }}>
              Do Something
            </button>
            <button style={{ width: 120, height: 30, borderRadius: 0 }}>
              Do Something Else
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
`;
