import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
const Github = () => {

    const data = useLoaderData()
//   const [data, setData] = useState(0);

//   useEffect(() => {
//     fetch("https://api.github.com/users/Lakszy")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
  return (
    <>
      <div className="text-4xl text-center font-bold">
        Github:{data.followers}
      </div>
      <img className="rounded-lg px-80" src={data.avatar_url} />
    </>
  );
};

export default Github


export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Lakszy')
    return response.json()
}
