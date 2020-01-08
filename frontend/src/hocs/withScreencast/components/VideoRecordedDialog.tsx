/**
 * @license
 * Copyright 2018-2019 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { PureComponent, ReactNode } from "react"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"

export interface Props {
  /** Callback to close the dialog */
  onClose: () => void

  videoBlob: Blob
}

class VideoRecordedDialog extends PureComponent<Props> {
  handleDownloadButton = (): void => {
    const { onClose } = this.props

    onClose()
  }

  getVideoSource = (): string => {
    const { videoBlob } = this.props

    return URL.createObjectURL(videoBlob)
  }

  public render = (): ReactNode => {
    const { onClose } = this.props
    const videoSource = this.getVideoSource()

    return (
      <Modal isOpen={true} toggle={onClose} className="streamlit-dialog">
        <ModalHeader toggle={onClose}>Screencast recorded</ModalHeader>
        <ModalBody>
          <video style={{ width: "100%" }} src={videoSource} controls />
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color="primary"
            href={videoSource}
            download="streamlit-screencast.mp4"
            onClick={this.handleDownloadButton}
          >
            Download
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default VideoRecordedDialog