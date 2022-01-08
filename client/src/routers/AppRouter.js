import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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

export default function AppRouter() {
    return (
            <Router>
                <Layout>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/register" element={<RegisterPage />} />
                    <Route exact path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
                    <Route exact path="/projects" element={<PrivateRoute><ProjectsPage /></PrivateRoute>} />
                    <Route exact path="/project/:projectId"element={<PrivateRoute><ProjectPage /></PrivateRoute>} />
                    <Route exact path="/admins/users" element={<PrivateRoute><UsersPage /></PrivateRoute>}/>

                    <Route path="*" component={<NotFoundPage />}/>
                </Routes>
                </Layout>
            </Router>
    )
}
