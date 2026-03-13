import { Link } from "react-router";
import { PlusIcon, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  return (
    <aside className="h-screen w-52 bg-base-200 border-r border-base-content/10 flex flex-col p-4">

      <div className="mb-8">
        <h1 className="text-xl font-bold font-mono text-primary">SoloSync</h1>
        <p className="text-xs text-base-content/40 mt-0.5">Personal Workspace</p>
      </div>

      <nav className="flex flex-col gap-2">
        <Link to="/create" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300 text-sm transition-colors">
          <PlusIcon className="h-4 w-4" />
          New Note
        </Link>
      </nav>

    </aside>
  );
};

export default Navbar;