import getUser from "@/lib/getUser"
import getUsers from "@/lib/getUsers";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<IUser> = getUser(userId)
    const user: IUser = await userData

    if (!user) {
        return {
            title: "User Not Found"
        }
    }

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }

}

export default async function User({params: { userId}}:Params) {
    const userData = getUser(userId);

    const user: IUser = await userData;

    if (!user) return notFound();

    return (
        <>
            <div className="flex flex-col">
                <h3>Name: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <div>address: 
                    <span>{user?.address?.street}, {user?.address?.city}, {user?.address?.zipcode}</span>
                </div>
            </div>
        </>
    )
}


export async function generateStaticParams(): Promise<any> {
    const userData: Promise<any> = getUsers();
    const users = await userData;

    return users?.data?.map((user: IUser) => ({userId: user.id.toString()}));
}