import {default as MainRouter} from '../src/MainRouter'

const Home = () => <div> Home Page </div>

test('To Be Truthy', () => {
  /* Route List */
  const routes = [
    {
      name: 'Home',
      component: Home,
      exact: true,
    }
  ]

  /* Main Router Props */
  const props = {
    routes,
    children: () => <div> children </div>
  }

  const TheMainRouter = MainRouter(props) 
  expect(TheMainRouter).toBeTruthy()
})
