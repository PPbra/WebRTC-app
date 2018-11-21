import React, { Component } from 'react';
import ReactModal from 'react-modal-resizable-draggable';
 
import * as ws from '../../videoConferenceSocket';

class VideoPanel extends Component {

  constructor(props) {
    super(props);

    ws.onNewUserJoin((res)=>{
      const {videoURLs} = this.state;
      videoURLs.add(res);
      this.setState(...this.state);
    })

    this.state = {
      videoURLs: [
        {
          username: "user 1",
          url: ""
        },
        {
          username: "user 2",
          url: ""
        }
      ]
    }
  }
  _closeModal = () => {
    this.props.onCloseModal()
  }

  _renderVideo = () => {
    const { videoURLs } = this.state;
    return videoURLs.map(e => {
      return (
        <video
          controls
          autoPlay
          src={e.url}
          style={{
            "max-height": "200px"
          }}
        >
        </video>
      )
    })
  }

  render() {
    const { isOpenModal } = this.props;
    return (
      <ReactModal initWidth={800} initHeight={400} onRequestClose={this._closeModal} isOpen={isOpenModal}>
        <h3>Video calling</h3>
        <div >
          <video
            controls
            autoPlay
            style={{
              "max-height": "200px"
            }}
          >
          </video>
          {
            this._renderVideo()
          }
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
