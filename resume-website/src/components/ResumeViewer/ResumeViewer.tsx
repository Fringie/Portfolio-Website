import * as React from "react";
import "./ResumeViewer.scss";
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
type IResumeViewerProps = {
    linkTxt: string;
}

type IResumeViewerState = {
    showModal: boolean;
}

export default class ResumeViewer extends React.Component<IResumeViewerProps, IResumeViewerState> {
    public state: IResumeViewerState = {
        showModal: false
    };
    private _labelId: string = getId('dialogLabel');
    private _subTextId: string = getId('subTextLabel');

    public constructor(props: IResumeViewerProps) {
        super(props);
    }
    
    render(): JSX.Element {
        const { showModal } = this.state;
        return (
            <div className="resumeViewer">
                <Link onClick={this._showModal}>
                    {this.props.linkTxt}
                </Link>
                <Modal
                    isOpen={this.state.showModal}
                    onDismiss={this._closeModal}
                    isBlocking={false}
                    containerClassName="modal"
                    >
                    <iframe src="https://drive.google.com/file/d/12hcnYvLj62eHuuNdK9cHNAezwbAfO6Y9/preview" frameBorder="0" allowFullScreen={true}>

                    </iframe>
                </Modal>
            </div>
        );
    }

    private _showModal = (): void => {
        this.setState({ showModal: true });
    };
    
    private _closeModal = (): void => {
        this.setState({ showModal: false });
    };
    
}