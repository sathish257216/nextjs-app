import { USER_API } from "@/app/utils/constant";


export default async function getUsers(): Promise<any> {
    const res = await fetch(USER_API);
    const data = res.json();    
    return data;
}