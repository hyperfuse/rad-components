// @flow
import React, { Component } from 'react';

export type ModalProps = {
  className?: string,
  width?: string | number,
  height?: string | number,
  openModal: Function,
  closeModal: Function,
  isOpen: boolean,
  children: any
};

export class Modal extends Component {
  props: ModalProps;
  escToggle: Function;

  componentDidMount(): void {
    window.addEventListener('keydown', this.escToggle.bind(this));
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.escToggle.bind(this));
  }

  escToggle(e: any): void {
    if (e.keyCode == 27 && this.props.isOpen) {
      this.props.closeModal();
    }
  }

  render() {
    const styles = {
      container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1500
      },
      modalCover: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'fixed',
        zIndex: 10001
      },
      modal: {
        display: 'flex',
        flexDirection: 'column',
        width: this.props.width || 520,
        height: this.props.height || 460,
        backgroundColor: '#fff',
        border: `1px solid rgb(136, 136, 136)`,
        zIndex: 15000,
        padding: 30
      },
      close: {
        alignSelf: 'flex-end',
        fontSize: 28,
        fontWeight: 100,
        color: '#b0b0b0',
        margin: 0
      }
    };
    if (this.props.isOpen) {
      return (
        <div style={styles.container} className={this.props.className || ''}>
          <div
            onClick={() => this.props.closeModal()}
            style={styles.modalCover}
          />
          <div style={styles.modal}>
            <p onClick={() => this.props.closeModal()} style={styles.close}>
              ×
            </p>
            {this.props.children}
          </div>
        </div>
      );
    }
    return null;
  }
}
