import './App.css'
import UserForm from "./user/UserForm.tsx";
import UserFormWithStates from "./user/UserFormWithStates.tsx";
import UserFormWithReducer from "./user/UserFormWithReducer.tsx";

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
