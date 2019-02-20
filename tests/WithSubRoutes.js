import WithSubRoute from '../src/WithSubRoutes'

const params ={
  path: 'home',
  component: () => <div>Home</div>,
  exact: true,
} 

test('Test WithSubRoute', () => {
  const x = WithSubRoute(params)
  expect(WithSubRoute).toHaveReturned()
})
