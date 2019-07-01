import * as React from "react";
import "./Portfolio.scss";
import PortfolioCard from '../../components/PortfolioCard/Portfoliocard';
import ChasePavingImg from "./chasepaving.png";
import AuditConsoleImg from "./auditconsole.png";
import DocuManage from "./DocuManage.png";
import InsanityPkz from "./insanitypkz.png";
import { Link } from 'office-ui-fabric-react/lib/Link';

export interface IPortfolioProps{
    
}

export interface IPortfolioState {
    
}

export default class Portfolio extends React.Component<IPortfolioProps, IPortfolioState> {
    public constructor(props: IPortfolioProps) {
        super(props);
        
    }
    
    render(): JSX.Element {
        return (
        <div className="row content">
            <h1 className="portfolio">Portfolio</h1>
            <p className="marginBottom0">
                Due to the nature of Office 365 tenants being closed platforms I've decided to show a few personal projects instead.
            </p>
            <PortfolioCard title="chasepaving.com" src={ChasePavingImg}>
                <p>
                    This is a simple Bootstrap, jQuery, PHP based website I made freelance with the view of expanding it later. I decided I wanted to focus on SharePoint so I didn't persue freelance work further.
                </p>
                <p>
                    You can view the website <Link href="http://www.chasepaving.com">here</Link>.
                </p>
            </PortfolioCard>
            <PortfolioCard title="Spartan" src="https://www.youtube.com/embed/ptu2HAHqLZU">
                <p>
                    This is mobile page using ASP.NET Web API & jQuery/HTML for the UI. I made this for a technical challenge for an interview. I don't consider myself a ASP.NET developer but I do have enough knowledge to make basic applications.
                </p>
                <p>
                    You can view the code on GitHub <Link href="https://github.com/Fringie/Spartan">here</Link>. There is a requirements document in the Documentation folder.
                </p>
            </PortfolioCard>
            <PortfolioCard title="Audit console" src={AuditConsoleImg}>
                <p>
                    This is WPF application I made in my spare time with the intention of it being used to replace a console application that helped manage a SharePoint 2013 farm although this project never got used.
                </p>
                <p>
                    You can view the code on GitHub <Link href="https://github.com/Fringie/Audit-console">here</Link>. 
                </p>
            </PortfolioCard>
            <PortfolioCard title="Office 365 Tenant" src={DocuManage}>
                <p>
                    This is my personal O365 tenant. Various things are managed through my tenant (i.e. my email) but I mostly use this tenant for testing/learning purposes.
                </p>
            </PortfolioCard>
            <PortfolioCard title="Insanity Pkz" src={InsanityPkz}>
                <p>
                    This was a multiplayer <Link href="https://rsps.fandom.com/wiki/Runescape_Private_Server">private server</Link> game I made when I was 14 or 15. The game was playable via a signed Java applet in the browser or a downloadable Java applet. The game was hosted on a Windows XP 2003 VPS & later a Dedicated Server. This is where a lot of my initial knowledge around servers, Java & basic web design came from.
                </p>
            </PortfolioCard>
        </div>);
    }
}