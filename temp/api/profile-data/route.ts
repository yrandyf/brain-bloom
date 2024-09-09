import { links } from "@/app/data/links";
import { delay } from "@/app/lib/utils/time";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    // await delay(2000)
    return NextResponse.json({ status: "success", data: { links } })


}
