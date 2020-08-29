import React, { Component } from 'react';
import '../css/main.css';
import '../css/card.css';
import '../../css/bootstrap.css';

import iconFb from '../../imgs/icon-facebook.svg';
import iconTw from '../../imgs/icon-twitter.svg';
import iconIn from '../../imgs/icon-instagram.svg';
import iconYu from '../../imgs/icon-youtube.svg';
import iconUp from '../../imgs/icon-up.svg';
import iconDown from '../../imgs/icon-down.svg';

export default class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            socialMedias: {
                classNetwork: "",
                iconNetwork: null,
                typeCardNetwork: ""
            }
        }
    }

    componentDidMount(){
        this.getTypeCards();
        //this.getTypeIconGrowth();
    }

    getTypeIconGrowth(){
        if(this.props.upgrowth > 0){
            return iconUp;
        }else if(this.props.upgrowth <= 0){
            return iconDown;
        }
    }

    getTypeCards(){
        switch(this.props.type){
            case "fb":
                this.setState({
                    socialMedias: {
                        classNetwork: "line-facebook",
                        iconNetwork: iconFb,
                         typeCardNetwork: "card"
                    } 
                });
                break;
            case "tw":
                this.setState({
                    socialMedias: {
                        classNetwork: "line-twitter",
                        iconNetwork: iconTw,
                         typeCardNetwork: "card"
                    }
                });
                break;
            case "im":
                this.setState({
                    socialMedias: {
                        classNetwork: "line-instagram",
                        iconNetwork: iconIn,
                         typeCardNetwork: "card"
                    }
                });
                break;
            case "yt":
                this.setState({
                    socialMedias: {
                        classNetwork: "line-youtube",
                        iconNetwork: iconYu,
                         typeCardNetwork: "card"
                    }
                });
                break
            default:
                this.setState({
                    socialMedias: {
                        classNetwork: "",
                        iconNetwork: null,
                         typeCardNetwork: "card-small"
                    }
                });
                break;
        }
    }

    render(){
        
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className={this.state.socialMedias.typeCardNetwork}>
                            <div className={this.state.socialMedias.classNetwork}></div>
                            <div className="row">
                                <div className="col card-body">
                                    <div className="icon">
                                        <img src={this.state.socialMedias.iconNetwork} />  @nathanf
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card-insight">
                                        {this.props.insight}
                                    </div>
                                    <div className="subtitle">
                                        {this.props.subtitle}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex justify-content-end align-items-center">
                                    <img src={this.getTypeIconGrowth()} className={(this.props.upgrowth <= 0) ? "down":"up"}/>
                                </div>
                                <div className="col">
                                    <div className="footer up d-flex justify-content-start align-items-center">
                                            <div className={(this.props.upgrowth <= 0) ? "down":"up"}>  {this.props.upgrowth} Today</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}