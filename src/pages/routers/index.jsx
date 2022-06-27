import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { PageArea } from "./styled";
import Home from "./Home";
import NotFound from "./NotFound";
import { BsQuestion, BsHouse, BsHeart } from "react-icons/bs";
import About from "./About";
import Favourites from "./Favourites";

const Routes = () => {

    // const [ isActive, setIsActive ] = useState(false)

    return (
        <PageArea>
           <div className="container-musicas">

                <div className="pages">
                    <Switch>

                        <Route exact path="/">
                            <Home  />
                        </Route>

                        <Route exact path="/about" >
                            <About />
                        </Route>

                        <Route exact path="/favourites" >
                            <Favourites />
                        </Route>

                        <Route>
                            <NotFound />
                        </Route>
                        

                    </Switch>
                </div>

            </div>

            <div className="menu-container">
                
                <Link to="/">
                    <div className="button">
                        <BsHouse className="btn-icon" />
                    </div>
                </Link>
                <Link to="favourites">
                    <div className="button" >
                        <BsHeart className="btn-icon" />
                    </div>
                </Link>
                <Link to="/about">
                    <div className="button">
                        <BsQuestion className="btn-icon" />
                    </div>
                </Link>
                
            </div>
        </PageArea>
        
    );

}

export default Routes;