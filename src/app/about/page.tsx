import getUsers from "@/lib/getUsers";
import User from "./User";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Users',
}

export default async function Page() {

  const userData: Promise<IUserData> = getUsers();

  return (
    <div className="about-container p-4">
      <h4>People work here</h4>
      <Suspense fallback={<h1>Loading...</h1>}>
        <User promise= {userData} />
      </Suspense>
    </div>
  );
}