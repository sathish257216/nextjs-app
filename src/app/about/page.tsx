import getUsers from "@/lib/getUsers";
import User from "./User";

export default async function Page() {

  const userData: Promise<any> = getUsers();
  const users = await userData;

  console.info("users", users)
  console.log('users ',users)
  return (
    <div className="about-container p-4">
      <h4>People work here</h4>
      {
        users?.data?.map((user: any) => (
          <User key={user.id} name={user.name} email={user.email} />
        ))

      }
    </div>
  );
}