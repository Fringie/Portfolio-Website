import * as React from "react";
import './AboutMe.scss';
import $ from "jquery";
import PortfolioCard from '../../components/PortfolioCard/Portfoliocard';
import ResumeViewer from '../../components/ResumeViewer/ResumeViewer';

export interface IAboutMeProps{
    
}

export interface IAboutMeState {
    
}

export default class AboutMe extends React.Component<IAboutMeProps, IAboutMeState> {
    public constructor(props: IAboutMeProps) {
        super(props);
        
    }
    
    render(): JSX.Element {
        return (
            <div className="row content">
                <h1 className="aboutme">About Me</h1>
                <p>
                    Hi, I'm Zain. I'm a SharePoint Developer with a variety of O365 related knowledge located in Edinburgh. Primarily my experiance is with SharePoint Intranets (dev), SharePoint Document Management Systems (dev) & O365 Administration (support).
                </p>
                <p>
                    You can view my resume <ResumeViewer linkTxt="here" ></ResumeViewer>.
                </p>
                <h1 className="">Why I'm passionate about the O365 platform</h1>
                <p>
                    O365 is a mature platform which provides a lot of out-of-the-box functionality with a variety of options extensibility wise via several well documented development platforms, as someone who likes Microsofts style of products this is natural fit - in both O365/SharePoint roles I've been employed in I've been described as passionate about the O365 platform.
                </p>     
            </div>
        );
    }


}