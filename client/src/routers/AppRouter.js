import {Routes, Route} from 'react-router-dom';
import routes from '../helpers/Routes';
import roles from '../helpers/Roles';
import Layout from '../layouts/Layout';
import AccountPage from '../Pages/AccountPage';
import UsersPage from '../Pages/Admins/UsersPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage';
import ProjectPage from '../Pages/ProjectPage';
import ProjectsPage from '../Pages/ProjectsPage';
import RegisterPage from '../Pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export default function AppRouter() {
    return (
            //<Router>
                <Layout>
                <Routes>
                    <Route exact path={routes.home} element={<PublicRoute><HomePage /></PublicRoute>} />
                    <Route exact path={routes.login} element={<PublicRoute><LoginPage /></PublicRoute>} />
                    <Route exact path={routes.register} element={<PublicRoute><RegisterPage /></PublicRoute>} />
                    <Route exact path={routes.account} element={<PrivateRoute><AccountPage /></PrivateRoute>} />
                    <Route exact path={routes.projects} element={<PrivateRoute><ProjectsPage /></PrivateRoute>} />
                    <Route exact path={routes.project()}element={<PrivateRoute><ProjectPage /></PrivateRoute>} />
                    <Route hasRole={roles.admin} exact path={routes.admin.users} element={<PrivateRoute><UsersPage /></PrivateRoute>}/>

                    <Route path="*" component={<NotFoundPage />}/>
                </Routes>
                </Layout>
            //</Router>
    )
}
