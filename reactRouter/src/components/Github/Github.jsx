import { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/zammar-ahmar")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="bg-gray-400 text-2xl text-center p-4">
         <h2> {data.name}</h2>


      <img
        src={data.avatar_url}
        alt="Avatar"
        className="w-32 h-32 rounded-full mx-auto mb-4 pt-2"
      />

      <h1>Followers: {data.followers} ^_^ </h1>
     
    </div>
  );
}

export default Github;