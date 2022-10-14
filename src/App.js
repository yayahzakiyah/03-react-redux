import logo from './logo.svg';
import './App.css';
import StudentView from './features/student/StudentView';
import StudentPage from './features/student/StudentPage';
import StudentBookPage from './features/studentBook/StudentBookPage';
import StudentBookView from './features/studentBook/StudentBookView';

function App() {
  return (
    <>
      <StudentPage view={StudentView}/>
      <StudentBookPage view={StudentBookView}/>
    </>
  );
}

export default App;
