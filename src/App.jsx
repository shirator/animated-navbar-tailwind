import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex w-screen h-screen bg-gray-500 fixed top-0 left-0">
      <Sidebar />
    </div>
  );
}

export default App;
