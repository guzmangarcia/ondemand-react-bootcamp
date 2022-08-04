// server-handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import { rest } from 'msw'; // msw supports graphql too!
// import * as users from './users';

const handlers = [
  rest.get('/login', async (req, res, ctx) => {
    // const user = await users.login(JSON.parse(req.json()));
    // return res(ctx.json({ user }));
  }),
  rest.post('/checkout', async (req, res, ctx) => {
    const request = await users.login(JSON.parse(req.json()));
    // const isAuthorized = user.authorize(req.headers.Authorization);
    // if (!isAuthorized) {
    //   return res(ctx.status(401), ctx.json({ message: 'Not authorized' }));
    // }
    const shoppingCart = req.json();
    // do whatever other things you need to do with this shopping cart
    return res(ctx.json({ success: true }));
  }),
];

export default { handlers };
