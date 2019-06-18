import React, { Component, Fragment } from 'react';
import PostPreview from './PostPreview';
import Modal from '../Modals/Modal';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';

class PostPreviewList extends Component {
  state = {
    Posts: [
      {
        id: 1,
        timestamp: new Date().toLocaleDateString(),
        upvotes: 0,
        downvotes: 0,
        text: "This is a thought I once had. Isn't it cool huh?",
        longitude: 297,
        latitude: 325
      },
      {
        id: 2,
        timestamp: new Date().toLocaleDateString(),
        upvotes: 9,
        downvotes: 0,
        text: 'This is a test that will hopefully work in time',
        longitude: 567,
        latitude: 325
      },
      {
        id: 3,
        timestamp: new Date().toLocaleDateString(),
        upvotes: 5,
        downvotes: 0,
        text: 'This is in the future and the past',
        longitude: 400,
        latitude: 325
      }
    ],
    creating: false,
    confirm: false
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  modalReportHandler = () => {
    this.setState({ creating: false });
  };

  startModalHandler = () => {
    this.setState({ creating: true });
  };

  confirmHandler = () => {
    this.setState({ confirm: true });
  };

  render() {
    return (
      <Fragment>
        {this.state.creating && this.state.confirm && (
          <Fragment>
            <ModalBackdrop onCancel={this.modalCancelHandler} />
            <Modal title='Report' canConfirm onConfirm={this.confirmHandler}>
              <p>Confirm report</p>
              <button className='modal-btn-confirm'>Confirm</button>
            </Modal>
          </Fragment>
        )}

        {this.state.creating && !this.state.confirm && (
          <Fragment>
            <ModalBackdrop onCancel={this.modalCancelHandler} />
            <Modal
              title='Report'
              canCancel
              canReport
              onCancel={this.modalCancelHandler}
              onReport={this.confirmHandler}
            >
              <h2>Reporting this content for...</h2>
              <div className='radio-buttons'>
                <label>
                  <input type='radio' />
                  Hate speech post. Might hurt others
                </label>
                <label>
                  <input type='radio' />
                  Inappropriate post.
                </label>
                <label>
                  <input type='radio' />
                  Posting personal information.
                </label>
              </div>
            </Modal>
          </Fragment>
        )}
        <div className='post-preview-list'>
          {this.state.Posts.map(post => (
            <PostPreview
              key={post.id}
              post={post}
              startModalHandler={this.startModalHandler}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default PostPreviewList;
