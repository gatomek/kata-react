import './App.css'
import UserForm from "./components/userforms/UserForm.tsx";
import UserFormWithStates from "./components/userforms/UserFormWithStates.tsx";
import {UserFormWithReducer} from "./components/userforms/UserFormWithReducer.tsx";

function App() {
  return (
    <div style={{display: "flex"}}>
        <UserForm/>
        <UserFormWithStates/>
        <UserFormWithReducer/>
    </div>
  )
}

export default App
