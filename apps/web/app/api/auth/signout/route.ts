import { removeSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    await removeSession();

    revalidatePath("/")
    return NextResponse.redirect(new URL("/", req.nextUrl))
}