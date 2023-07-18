import React from "react";
import { Link } from "react-router-dom";
export default function Links() {
  const userLogin = [
    {
      id: 1,
      name: "Clinic",
    },
    {
      id: 2,
      name: "Patient",
    },
    {
      id: 3,
      name: "Provider",
    },
  ];
  return (
    <>
      {userLogin.map((user) => (
        <div key={user.id}>
          <Link to={`/${users.name}/login`}>{users.id}</Link>
        </div>
      ))}
    </>
  );
}
