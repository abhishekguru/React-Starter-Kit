import React from 'react';
import {Link} from 'react-router-dom';
import './LCard.css'
import {GlobalConstants} from '../../../global/globalConstants'
export class LCard extends React.Component {
    constructor(props) {
        super(props);
        this.handelClick = this
            .handelClick
            .bind(this);
    }
    handelClick(e){
        GlobalConstants.detailsPageObj = this.props.data
    }
    render() {
        let veg = this.props.data.nonVeg
            ? "nonVeg"
            : "veg";
        let vegText = this.props.data.nonVeg
            ? "Non-Veg"
            : "Veg";

        return (
            <div className="card-holder">
                <div className="card-wrap">
                    <img src={this.props.data.image} width="100%"/>
                    <h3 className="heading">{this.props.data.name}</h3>
                    <div className="button-wrap-with-des">
                        <div className="half spicy-veg">
                            <span className={veg}>
                                <span className="spacer"></span>{vegText}
                            </span>
                            {this.props.data.spicy
                                ? <span className='spicy'>
                                        <span className="spacer"></span>Spicy
                                    </span>
                                : ''}
                        </div>
                        <div className="half button-wrap">
                            <Link to="/food-details/" onClick={this.handelClick} className="details-btn">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LCard;