import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {Home,DetailsPage} from '../componets';
export class Routing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/food-details/" component={DetailsPage}/>
                </Switch>
            </div>
        )
    }
}
export default Routing;