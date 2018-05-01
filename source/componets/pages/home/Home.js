import React from 'react';
import Request from 'superagent';
import {GlobalConstants} from '../../../global/globalConstants';
import {LCard} from '../../layout/card/LCard'
import './Home.css'
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        let url = GlobalConstants.END_POINT_URL
        Request
            .get(url)
            .then((data) => {
                if (data.body) {
                    this.setState({data: data.body})
                }
            });
    }
    render() {
        let itemsToRender = [];
        if (this.state.data) {
            this.state.data.map((value , key) => {
                itemsToRender.push(<LCard data={value} key={key+1}/>)
            })
        }
        return (
            <div className="home">
                {itemsToRender && itemsToRender}
            </div>
        )
    }
}
export default Home;