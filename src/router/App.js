import React from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
 } from "react-router-dom";

 const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

export default function App(props) {
  return (
    <div>
      <Router>
        <ul>
          {
            routes.map(route => (
              <li key={route.path}>
                <Link to={route.path}>{route.path.slice(1)}</Link>
              </li>
            ))
          }
        </ul>
        {
         routes.map(route => (
           <Route path={route.path} key={route.path}>
             <RouteWithSubRoutes {...props} route={route} />
           </Route>
         ))
        }
      </Router>
    </div>
  )
}
function RouteWithSubRoutes(props) {
  let {route} = props;
  return(
    <Route path={route.path}>
      <route.component {...props} routes={route.routes} />
    </Route>
  )
}

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos(props) {
  let {routes} = props;
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>   
      <Switch>
        {
          routes.map(route => (
            <Route key={route.path} path={route.path}>
              <RouteWithSubRoutes {...props} route={route}/>
            </Route>
          ))
        }
      </Switch>
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}
