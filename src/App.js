import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
// Import other components...

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/student-dashboard" component={StudentDashboard} />
                <Route path="/teacher-dashboard" component={TeacherDashboard} />
                <Route path="/admin-dashboard" component={AdminDashboard} />
                {/* Add other routes... */}
            </Switch>
        </Router>
    );
};

export default App;
