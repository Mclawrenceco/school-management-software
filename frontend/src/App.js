import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import MarkAttendance from './components/Attendance/MarkAttendance';
import ViewAttendance from './components/Attendance/ViewAttendance';
import RecordGrade from './components/Grade/RecordGrade';
import ViewGrades from './components/Grade/ViewGrades';
import CreateTimetable from './components/Timetable/CreateTimetable';
import ViewTimetables from './components/Timetable/ViewTimetables';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute path="/student-dashboard" component={StudentDashboard} />
        <ProtectedRoute path="/teacher-dashboard" component={TeacherDashboard} />
        <ProtectedRoute path="/admin-dashboard" component={AdminDashboard} />
        <ProtectedRoute path="/mark-attendance" component={MarkAttendance} />
        <ProtectedRoute path="/view-attendance" component={ViewAttendance} />
        <ProtectedRoute path="/record-grade" component={RecordGrade} />
        <ProtectedRoute path="/view-grades" component={ViewGrades} />
        <ProtectedRoute path="/create-timetable" component={CreateTimetable} />
        <ProtectedRoute path="/view-timetables" component={ViewTimetables} />
      </Switch>
    </Router>
  );
};

export default App;
