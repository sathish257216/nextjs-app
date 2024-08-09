import Link from "next/link";

type IPromise = {
    promise: Promise<any>;
}

export default async function User({promise}: IPromise) {
    
  const users = await promise;

    return (
        <>
            {
                users?.data?.map((user: any) => (
                    <div key={user.id} className="user-card flex justify-start bg-[#a69cc2] m-5 p-4 w-1/4">
                        <div className="flex flex-col">
                            <h3>Name: {user.name}</h3>
                            <h3>Email: {user.email}</h3>
                            <br />
                            <Link href={'about/'+user.id}>User Detail</Link>
                        </div>
                    </div>
                ))
        
            }
        </>
        
        
    )
}