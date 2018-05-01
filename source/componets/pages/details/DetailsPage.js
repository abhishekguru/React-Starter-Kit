import React from 'react';
import Request from 'superagent';
import {GlobalConstants} from '../../../global/globalConstants';
import './DetailsPage.css';
import {Redirect} from 'react-router-dom';
export class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: GlobalConstants.detailsPageObj
        }
    }
    render() {
        let veg = this.state.data.nonVeg
            ? "nonVeg"
            : "veg";
        let vegText = this.state.data.nonVeg
            ? "Non-Veg"
            : "Veg";
        if(this.state.data){
            return (
                <div className="DetailsPage">
                    <div className="thirty">
                    <img src={this.state.data.image} width="100%"/>
                    </div>
                    <div className="seventy">
                        <h3>{this.state.data.name}</h3>
                        {this.state.data.description}
                        <hr/>
                        <div className="half spicy-veg">
                            <span className={veg}>
                                <span className="spacer"></span>{vegText}
                            </span>
                            {this.state.data.spicy
                                ? <span className='spicy'>
                                        <span className="spacer"></span>Spicy
                                    </span>
                                : ''}
                        </div>
                    </div>
                </div>
            )
        }else {
            return (<Redirect to="/" />)
        }
    }
}
export default DetailsPage;