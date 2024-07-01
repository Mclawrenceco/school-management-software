import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
// Import other components...

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <ProtectedRoute path="/student-dashboard" component={StudentDashboard} />
                <ProtectedRoute path="/teacher-dashboard" component={TeacherDashboard} />
                <ProtectedRoute path="/admin-dashboard" component={AdminDashboard} />
                {/* Add other protected routes... */}
            </Switch>
        </Router>
    );
};

export default App;
