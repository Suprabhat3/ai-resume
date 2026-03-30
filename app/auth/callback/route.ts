import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const next = searchParams.get('next') ?? '/'

  // Authentication is coming soon
  return NextResponse.redirect(`${origin}/login?message=Login and Save your progress coming soon!`)
}
