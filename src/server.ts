import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import BaseRoute from './routes/base.route';

validateEnv();

// const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

const app = new App([new BaseRoute({name:"teste",route:"/route",relations:[{key:"teste", child:"sub_teste"}]})]);

app.listen();
