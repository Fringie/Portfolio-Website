
import * as React from "react";
import './NavigationBar.scss';
import $ from "jquery";

export interface INavigationBarProps{
    
}

export interface INavigationBarState {
    
}

export default class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {
    public constructor(props: INavigationBarProps) {
        super(props);
    }
    
    render(): JSX.Element {
        return (
            <header className="main_h">
                <div className="row">
                    <a className="logo" href="#">
                        {/*zainhassan.com*/}
                    </a>
                    <div className="mobile-toggle" onClick={this._displayMobileNav.bind(this)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav>
                        <ul>
                            <li><a  onClick={this._openNav.bind(this)} href=".aboutme">About Me</a></li>
                            <li><a onClick={this._openNav.bind(this)} href=".skills">Tech Stack</a></li>
                            <li><a onClick={this._openNav.bind(this)} href=".portfolio">Portfolio</a></li>
                        </ul>
                    </nav>
                </div> 
            </header>
        );
    }

    componentDidMount(): void {
        window.addEventListener("scroll", this.displayStickyNav.bind(this));
    }
    
    componentWillUnmount(): void {
        window.removeEventListener("scroll", this.displayStickyNav.bind(this));
    }

    _displayMobileNav(): void {
        if ($('.main_h').hasClass('open-nav')) {
            $('.main_h').removeClass('open-nav');
        } else {
            $('.main_h').addClass('open-nav');
        }
    }

    _openNav(event: any): void {
        if ($('.main_h').hasClass('open-nav')) {
            $('.navigation').removeClass('open-nav');
            $('.main_h').removeClass('open-nav');
        }
        this.scrollToHref(event);
    }
    
    scrollToHref(event: any): void {
        event.preventDefault();
        let id = event.currentTarget.getAttribute('href');

        let offset = 70;
        // todo:: remove ts-ignore, can probably use state too but seems overkill
        // @ts-ignore: Argument of type 'string | undefined' is not assignable to parameter of type 'PlainObject<any>'.
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500);
    }

    displayStickyNav(): void {
        if (window.scrollY  > 50) {
            $('.main_h').addClass('sticky');
        } else {
            $('.main_h').removeClass('sticky');
        }
    }
}