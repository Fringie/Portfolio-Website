import * as React from "react";
import "./Portfoliocard.scss";
import { Image } from 'office-ui-fabric-react/lib/Image';
import { url } from "inspector";
type PortfolioCardProps = {
    src: string;
    title: string;
}

type PortfolioCardState = {
}

export default class PortfolioCard extends React.Component<PortfolioCardProps, PortfolioCardState> {
    public constructor(props: PortfolioCardProps) {
        super(props);
    }
    
    render(): JSX.Element {
        return (
            <div className="portfolioCard">
                {/*<Image
                    src={this.props.src}
                    alt={this.props.title}
                    width={"50%"}
                />*/}
                {this.setLeftCol()}
                <div className="inlineBlock rightCol">
                    <div className="innerContent">
                        <h1>{this.props.title}</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

    /**
     * Set the left column to be either a image or youtube video
     */
    private setLeftCol(): JSX.Element {
        let isVideo = this.props.src.includes("youtube");
        let img  = {
            backgroundImage: `url('${this.props.src}')`,
            backgroundSize: "cover"
        }
        let yt = {

        }
        return(
            isVideo
            ? // return youtube video
            <div className="video-wrapper">
                <iframe width="100%" height="auto" frameBorder="0" allowFullScreen={true}
                    src={this.props.src}>
                </iframe>
            </div>
            : // return image
                <div style={img} className={!isVideo ? "img" : ""}>
                </div>
        );
    }
}