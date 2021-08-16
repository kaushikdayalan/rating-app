import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Import components
import Home from '../Components/Home';
import AddName from '../Components/AddName';

const MainRoutes = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addName" component={AddName} />
        </Switch>
    )
}

export default MainRoutes;