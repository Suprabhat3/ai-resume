import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // Authentication disabled - Supabase not in use
  return NextResponse.next({
    request,
  })
}
