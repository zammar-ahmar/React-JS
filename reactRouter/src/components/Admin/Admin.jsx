import react from "react";
import { useParams } from "react-router-dom";
function Admin({  }) {
  const {adminId} = useParams();
  return (
    <div className="bg-gray-400 text-2xl text-center p-4 ">
        admin: {adminId}
    </div>
  )}

  export default Admin;