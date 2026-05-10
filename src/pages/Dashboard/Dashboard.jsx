import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />

            <Route path="/users" element={<Users />}>
              {/* First Child */}
              <Route index element={<TableDashboard />} />
              {/* Second Child */}
              <Route path="add" element={<FormDashboard />} />
            </Route>

            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
