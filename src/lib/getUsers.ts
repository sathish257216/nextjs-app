import { USER_API } from "@/app/utils/constant";


export default async function getUsers() {
    const res = await fetch(USER_API);
    if(!res.ok) return undefined;

    const data = res.json();    
    return data;
}