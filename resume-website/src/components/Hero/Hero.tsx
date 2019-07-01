import * as React from "react";
import "./Hero.scss";
import $ from "jquery";
import imageOfMe from "./me.jpg";
const {SocialIcon} = require('react-social-icons');
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
type Props = {
    
}

type State = {
    width: number;
}

export default class Hero extends React.Component<Props, State> {
    readonly state = { width: window.innerWidth};

    render(): JSX.Element {
        return (
            <div className="hero">
                <h1>
                    <span>
                        SHAREPOINT CONSULTANT
                    </span>
                    <br/>
                    Zain Hassan
                </h1>
                <div className="hero-photo-container">
                    <img src={imageOfMe} alt="Zain Hassan" />
                </div>
                <div className="row">
                    <div className="icons ">
                        <div className="floatRight">
                            <TooltipHost content="View GitHub profile"  calloutProps={{ gapSpace: 0 }}>
                                <SocialIcon url="https://github.com/Fringie"  />
                            </TooltipHost>
                        </div>
                        <div className="floatRight">
                            <TooltipHost content="Stay connected via LinkedIn"  calloutProps={{ gapSpace: 0 }}>
                                <SocialIcon url="https://www.linkedin.com/in/zain-hassan-17b3a28a/"  />
                            </TooltipHost>
                        </div>
                        
                        <div className="floatRight">
                            <TooltipHost content="zain@zainhassan.com"  calloutProps={{ gapSpace: 0 }}>
                                <SocialIcon url="mailto:zain@zainhassan.com"  />
                            </TooltipHost>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
        );
    }

    componentDidMount(): void {
        this.adjustHeroTextLength();
        window.addEventListener("resize", this.adjustHeroTextLength.bind(this));
        
    }
    
    componentWillUnmount(): void {
        window.removeEventListener("resize", this.adjustHeroTextLength.bind(this));
    }


    adjustHeroTextLength() {
        let span = $('div.hero > h1 > span');
        this.setState({ width: window.innerWidth });
        if (this.state.width < 450) {
            span.text("SharePoint Developer");
        }
        else if (this.state.width > 450){
            span.text("SharePoint Developer");
        }
    }



}