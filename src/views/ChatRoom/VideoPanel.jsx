import React, { Component } from 'react';
import ReactModal from 'react-modal-resizable-draggable';


class VideoPanel extends Component {

  _closeModal = () => {
    this.props.onCloseModal()
  }

  render() {
    const { isOpenModal } = this.props;
    return (
      <ReactModal initWidth={800} initHeight={400} onRequestClose={this._closeModal} isOpen={isOpenModal}>
        <h3>Video calling</h3>
        <div >
          <video
            controls
            src="https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4"
            style={{
              "max-height": "200px"
            }}
            >
            </video>
        </div>
        <button
          onClick={this._closeModal}
        >
          Close
      </button>
      </ReactModal>
    )
  }
}

export default VideoPanel;
