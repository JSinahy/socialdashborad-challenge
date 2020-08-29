import React, { Component } from 'react';
import '../../css/bootstrap.css';
import '../css/smallcard.css';

import iconFb from '../../imgs/icon-facebook.svg';
import iconTw from '../../imgs/icon-twitter.svg';
import iconIn from '../../imgs/icon-instagram.svg';
import iconYu from '../../imgs/icon-youtube.svg';
import iconUp from '../../imgs/icon-up.svg';
import iconDown from '../../imgs/icon-down.svg';


export default class SmallCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            socialMedias: {
                iconNetwork: null,
            }
        }
    }

    componentDidMount(){
        this.getTypeCards();
    }

    getTypeCards(){
        switch(this.props.type){
            case "fb":
                this.setState({
                    socialMedias: {
                        iconNetwork: iconFb,
                    } 
                });
                break;
            case "tw":
                this.setState({
                    socialMedias: {
                        iconNetwork: iconTw,
                    }
                });
                break;
            case "im":
                this.setState({
                    socialMedias: {
                        iconNetwork: iconIn,
                    }
                });
                break;
            case "yt":
                this.setState({
                    socialMedias: {
                        iconNetwork: iconYu,
                    }
                });
                break
            default:
                this.setState({
                    socialMedias: {
                        iconNetwork: null,
                    }
                });
                break;
        }
    }

    getTypeIconGrowth(){
        if(this.props.upgrowth > 0){
            return iconUp;
        }else if(this.props.upgrowth <= 0){
            return iconDown;
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-small">
                        <div className="row d-flex align-items-center">
                            <div className="col-9 title">
                                {this.props.title}
                            </div>
                            <div className="col-3">
                                <img src={this.state.socialMedias.iconNetwork} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 quantity d-flex aligns-items-center justify-content-start">
                                {this.props.value}
                            </div>
                            <div className="col-4 d-flex align-items-center">
                                <div className="row">
                                    <div className="col d-flex justify-content-end align-items-center">
                                        <img src={this.getTypeIconGrowth()} className={(this.props.upgrowth <= 0) ? "down":"up"}/>
                                    </div>
                                    <div className="col">
                                        <div className="footer up d-flex justify-content-start align-items-center">
                                                <div className={(this.props.upgrowth <= 0) ? "down":"up"}>  {this.props.upgrowth} %</div>
                                        </div>
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