import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874"
        }
    });
}