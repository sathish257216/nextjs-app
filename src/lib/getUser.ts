import { USER_DETAIL_API } from "@/app/utils/constant";


export default async function getUser(userId: string) {
    const res = await fetch(USER_DETAIL_API + userId);
    if(!res.ok) return undefined;
    
    const data = res.json();    
    return data;
}