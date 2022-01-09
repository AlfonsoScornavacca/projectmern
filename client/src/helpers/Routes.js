const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    account: '/account',
    projects: '/projects',
    project: (projectId) => projectId ? `/project/${projectId}` : '/project/projectID',
    admin: {
        users: '/admins/users'
    }
}

export default routes