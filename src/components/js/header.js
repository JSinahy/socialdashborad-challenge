import React, { Component } from 'react';
import '../css/main.css';
import '../css/header.css';
import '../../css/bootstrap.css'

export default class Header extends Component {
    render() {
        return (

            <div className="header-globe">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 line">
                            <div className="row">
                                <div className="col header-title">
                                    Social Media Dashboard
                                </div>
                            </div>
                            <div className="row">
                                <div className="col header-subtitle">
                                    Total Followers: 23, 004
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-3">
                            <div className="row">
                                <div className="col row">
                                <div className="col-6 header-subtitle d-flex align-items-start">Dark Mode</div>
                                <div className="col-6  d-flex align-items-end justify-content-end">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
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