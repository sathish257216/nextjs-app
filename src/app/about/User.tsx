const User = ({name, email}: any) => {

    return (
        <div className="user-card flex justify-start bg-[#a69cc2] m-5 p-4 w-1/4">
            <div className="flex flex-col">
                <h3>Name: {name}</h3>
                <h3>Email: {email}</h3>
            </div>
        </div>
    )
}

export default User;