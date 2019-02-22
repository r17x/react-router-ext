import React from 'react'
import Route from 'react-router-dom/Route'
import Router from 'react-router-dom/BrowserRouter'
import PropsTypes from 'prop-types'

// Generate UUID
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  )
}

/**
 * @todo 
 * @param {...wrapper}
 * @param {ReactElement} component
 */
function applyMiddleware(wrapper){
  /* @todo */
}


/**
 * @ignore
 * @function WithSubRoutes
 * @param {Objet} props
 * @property {String} path - See on {@link https://reacttraining.com/react-router/web/api/Route/path-string}
 * @property {Boolean} exact - See on {@link https://reacttraining.com/react-router/web/api/Route/exact-bool}
 * @property {Object} component - See on {@link https://reacttraining.com/react-router/web/api/Route/component} 
 * @property {Function} wrapper - A Wrapper function for component
 * @property {Route[]|undefined} routes - {@link Route} 
 * @property {String|undefined} parent
 *
 * @return {ReactElement} - See [ReactElement]({@link https://reactjs.org/docs/react-api.html#createelement})
 */
function WithSubRoutes(props){
  this.component = props.component
  return  !(props.routes && 
        Array.isArray(props.routes) && 
        props.routes.length > 0) 
    // Return Route Element 
    ? React.createElement(
      Route,
      {
        path: props.parent 
          ? props.parent + props.path 
          : props.path,
        key: guid(),
        exact: props.exact,
        component: props.wrapper ? props.wrapper(props.component) : props.component
      },
      null
    )
    // Return Route Element With React.Fragment
    : React.createElement(
      React.Fragment,
      {key: guid()},
      React.createElement(
        Route,
        {
          path: props.parent 
            ? props.parent + props.path 
            : props.path,
          key: guid(),
          exact: props.exact,
          component: props.wrapper ? props.wrapper(props.component) : props.component
        } 
      ) ,
      props.routes.map( (subroute) => {
        subroute.parent = props.path 
        return WithSubRoutes(subroute)
      })
    )
    
}


/**
 * @ignore
 * @module MainRouter
 * @param {Object} props
 * @property {Route[]} routes
 * @property {ReactElement} children
 * @return {ReactElement}
 */
function MainRouter(props) {
  return React.createElement(
    Router,
    null,
    React.createElement(
      React.Fragment,
      null,
      props.children,
      props.routes.map(this.WithSubRoutes)
    )
  )
}

/**
 * @typedef {Object} Route  
 * @property {String} path {@link https://reacttraining.com/react-router/web/api/Route/path-string|Path-sting}
 * @property {Boolean} exact {@link https://reacttraining.com/react-router/web/api/Route/exact-bool|Exact-bool}
 * @property {Object} component  {@link https://reacttraining.com/react-router/web/api/Route/component|Component} 
 * @property {Function} wrapper - A Wrapper function for component
 * @property {Route[]} routes - {@link Route} 
 */

MainRouter.prototype.WithSubRoutes = WithSubRoutes
MainRouter.propTypes = {
  children: PropsTypes.oneOfType([
    PropsTypes.element, 
    PropsTypes.array, 
    PropsTypes.string, 
    PropsTypes.func
  ]),
  routes: PropsTypes.array.isRequired,
}

export default MainRouter

/**
 * @namespace Credits
 * @see {@link https://github.com/facebook/react|reactjs} for use this Project.
 * @see {@link https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom|react-router-dom} The main idea & goals.
 * @see {@link https://github.com/developit/microbundle|Microbundle 🔨} for bundle this Project.
 */
