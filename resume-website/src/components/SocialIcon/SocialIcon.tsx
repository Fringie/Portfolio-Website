import * as React from "react";
import './SocialIcon.scss';
import { Callout, DirectionalHint } from "office-ui-fabric-react/lib/Callout";
const { SocialIcon } = require('react-social-icons');

type SocialIconProps = {
    href?: string;
    showCallout: boolean;
    calloutTitle?: string;
    calloutBody?: string;
    hasPanel?: boolean;
    isCircle: boolean;
}

type SocialIconState = {
    isCalloutVisible: boolean;
    showPanel: boolean;
    timeout: any;
}

export default class Social_Icon extends React.Component<SocialIconProps, SocialIconState> {
    //readonly state = { isCalloutVisible: false, showPanel: false, timeout: 0};
    readonly calloutDelayMs = 1500;
    private _menuButtonElement: HTMLElement | null = null;
    
    constructor(props: SocialIconProps) {
        super(props);
        this.state = {
            isCalloutVisible: false,
            showPanel: false,
            timeout: null
        };
    }

    render(): JSX.Element {
        const { isCalloutVisible } = this.state;
        return (
            <div className="ms-Callout">
                <div className="ms-CalloutBasic-buttonArea" ref={ (menuButton) => this._menuButtonElement = menuButton } >
                    <div className="icon-container" >
                        <SocialIcon url={this.props.href} />
                    </div>
                    {
                        this.props.hasPanel && this.state.showPanel &&
                        <div>
                            {React.Children.map(this.props.children, (child, index) => (
                                child))
                            }
                        </div>
                    }    
                </div>
            </div>
        );
    }

    
    // clear settimeout & update state to show callout
    private _onIconEnter(): void {
        this.setState({
            isCalloutVisible: true

        });
        clearTimeout(this.state.timeout);
    }
    // start a settimeout to close the callout
    private _onIconDismiss(): void {
        if(this.state.isCalloutVisible) {
            this.setState({
                timeout: setTimeout(() => {
                this.setState({
                    isCalloutVisible: false
                });
                }, this.calloutDelayMs)
            });
        }
    }
    
    private _showChild(): void {
        this.setState({
          showPanel: true
        });
    }

}