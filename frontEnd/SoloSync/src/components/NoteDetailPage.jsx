import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon } from "lucide-react";

const NoteDetailPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [update, setStatus] = useState("Not Started");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setTechStack(res.data.techStack || []);
        setStatus(res.data.update || "Not Started");
      } catch (error) {
        toast.error("Failed to fetch note");
        navigate("/");
      }
    };
    fetchNote();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    await api.put(`/notes/${id}`, { title, description, techStack, update })    ;
      toast.success("Updated!");
      navigate("/");
    } catch (error) {
      toast.error("Error updating");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-xl mx-auto">

        <Link to="/" className="flex items-center gap-1 text-sm text-base-content/60 hover:text-base-content mb-6 w-fit">
          <ArrowLeftIcon className="h-4 w-4" />
          Back
        </Link>

        <h2 className="text-lg font-semibold mb-4">Edit Note</h2>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <label className="text-sm text-base-content/60">Title</label>
            <input
              type="text"
              className="input input-bordered input-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-base-content/60">Description</label>
            <textarea
              className="textarea textarea-bordered h-28 text-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-base-content/60">Tech Stack (comma separated)</label>
            <input
              type="text"
              className="input input-bordered input-sm"
              value={techStack.join(", ")}
              onChange={(e) => setTechStack(e.target.value.split(","))}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-base-content/60">Status</label>
            <select
              className="select select-bordered select-sm w-full"
              value={update}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-sm w-full mt-2" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default NoteDetailPage;