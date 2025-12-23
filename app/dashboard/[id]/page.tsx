import React from "react";

export default function Dashboard({ id }: { id: string }) {
  const isAdmin = true; // This would typically come from user authentication logic
  return (
    <div>{isAdmin ? <h1>Admin Dashboard</h1> : <h1>User Dashboard</h1>}</div>
  );
}
