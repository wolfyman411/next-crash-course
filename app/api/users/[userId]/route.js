const {NextResponse} = require("next/server")

export async function GET(request, context) {

    const {userId} = await context.params

    return NextResponse.json({
        userId
    })
}