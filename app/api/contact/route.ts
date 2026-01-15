import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxyS1Ew-V7P7FKIdclfHwkzEmW4BdvIUXdEDjgip40wYc_JuTftt9ccnz9f4ET5KYBo5A/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )

    const data = await res.text()

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
