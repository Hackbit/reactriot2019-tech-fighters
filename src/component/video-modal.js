import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as video1 from '../videos/01.mp4';
import * as video2 from '../videos/02.mp4';

class VideoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    componentWillReceiveProps() {

    }

    render() {
        const style = {
            height: '100vh',
            width: '100%'
        }
        return (
            <Modal style={style} show={this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title>Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <video width="100%" height="240" autoplay="autoplay">
                            <source src={this.props.correctAnswerVideo ? video1 : video2} type="video/mp4" />
                        </video>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeModal}>
                        Close
                </Button>
                    {/* <Button variant="primary" onClick={closeModal}>
                        Save Changes
                </Button> */}
                </Modal.Footer>
            </Modal>
        );
    }
}

export default VideoModal;