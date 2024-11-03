"use client"; // Make sure this component is a client component
import React from "react";
import { useUser } from "@stackframe/stack";

const TestUserComponent = () => {
  const user = useUser();

  return (
    <div>
      {user ? (
        <p>User is signed in: {JSON.stringify(user)}</p>
      ) : (
        <p>No user is signed in.</p>
      )}
    </div>
  );
};

export default TestUserComponent;
