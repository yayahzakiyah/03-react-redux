import logo from './logo.svg';
import './App.css';
import StudentView from './features/student/StudentView';
import StudentPage from './features/student/StudentPage';

function App() {
  return (
    <>
      <StudentPage view={StudentView}/>
    </>
  );
}

export default App;
