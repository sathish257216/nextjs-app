import getUser from "@/lib/getUser"

type Params = {
    params: {
        userId: string
    }
}
export default async function User({params: { userId}}:Params) {
    const userData = getUser(userId);

    const user = await userData;

    return (
        <>
            <div className="flex flex-col">
                <h3>Name: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <div>address: 
                    <span>{user.address.street}, {user.address.city}, {user.address.zipCode}</span>
                </div>
            </div>
        </>
    )
}