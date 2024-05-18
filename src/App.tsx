import Header from "./Components/Header/Header"
import SearchWrapper from "./Components/SearchWrapper/SearchWrapper"
import Sidebar from "./Components/SideBar/SideBar"
import StudentList from "./pages/StudentList/StudentList"

function App() {

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex-1 p-4 bg-gray-300">
          <SearchWrapper />
          <StudentList  />
        </div>
      </div>
    </div>
  )
}

export default App
