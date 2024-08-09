import { USER_DETAIL_API } from "@/app/utils/constant";


export default async function getUser(userId: string): Promise<any> {
    const res = await fetch(USER_DETAIL_API+userId);
    const data = res.json();    
    return data;
}