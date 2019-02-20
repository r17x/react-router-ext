import MainRouter from './MainRouter'

/**
 * An Example usage easy-react-router.
 * @name Usage
 * @param {Object} props
 * @property {Route[]} routes
 * @property {ReactElement} children
 * @return {ReactElement}
 * @example
 * const routeList = [
 *  // Basic 
 *  {
 *    path: '/',
 *    component: Home,
 *    exact: true,
 *  },
 *  
 *  // With Wrapper Component
 *  {
 *    path: '/',
 *    component: Home,
 *    exact: true,
 *    wrapper: AuthComponent,
 *  },
 *
 * // With Routes
 *  {
 *    path: '/',
 *    component: Home,
 *    exact: true,
 *    wrapper: AuthComponent,
 *    routes: [
 *      {
 *        path: '/article',
 *        component: Article,
 *        exact: true,
 *        routes: [
 *          {
 *            path: '/categories',
 *            component: Category,
 *            exact: true,
 *          },
 *        ]
 *      },
 *    ]
 *  }
 *
 * ]
 *
 * // Render
 * ReactDOM.render(<MainRoute routes={routeList}/>, node)
 *
 */

export default MainRouter
