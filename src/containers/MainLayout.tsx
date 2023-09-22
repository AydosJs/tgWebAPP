import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen space-y-4 bg-white displays">
      <Header />
      <main className="p-6 min-h-[calc(100vh_-_104px)]">
        <Outlet />
      </main>
    </div>
  )
}