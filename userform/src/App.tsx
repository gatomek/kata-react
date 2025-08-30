import './App.css'
import UserForm from "./user/UserForm.tsx";
import UserFormWithStates from "./user/UserFormWithStates.tsx";
import UserFormWithReducer from "./user/UserFormWithReducer.tsx";

function App() {
  return (
    <>
        <UserForm/>
        <UserFormWithStates/>
        <UserFormWithReducer/>
    </>
  )
}

export default App
