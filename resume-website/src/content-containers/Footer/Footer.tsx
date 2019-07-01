import * as React from "react";
import "./Footer.scss";
import { Link } from 'office-ui-fabric-react/lib/Link';
export interface IFooterProps{
    
}

export interface IFooterState {
    
}

export default class Footer extends React.Component<IFooterProps, IFooterState> {
    public constructor(props: IFooterProps) {
        super(props);
        
    }
    
    render(): JSX.Element {
        return (
            <footer id="footer">
                <div className="row content">
                    <Link>Zain Hassan 2019 ©</Link>
                </div>
            </footer>
        )
    }
}