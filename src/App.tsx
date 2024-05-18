import { useState } from "react"
import Header from "./components/Header/Header"
import SearchWrapper from "./components/SearchWrapper/SearchWrapper"
import Sidebar from "./components/SideBar/SideBar"
import StudentList from "./pages/StudentList/StudentList"
import AddOrEditStudent from "./pages/AddOrEditStudent/AddOrEditStudent"

function App() {
  const [addStudent, setAddStudent] = useState<boolean>(false);
  const [editStudent, setEditStudent] = useState<boolean>(false);

  const handleAddNewStudent = () => {
    setAddStudent(true);
  };

  const handleEditStudent = () => {
    setEditStudent(true);
  };

  const handleCancel = () => {
    setAddStudent(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        {addStudent ? <AddOrEditStudent isEditing={false} onCancel={handleCancel} /> : <div className="flex-1 p-2 bg-gray-300">
          <SearchWrapper handleAddNewStudent={handleAddNewStudent} />
          <StudentList />
        </div>}
      </div>
    </div>
  )
}

export default App
