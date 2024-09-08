import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// basic middleware to redirect from '/' /tasks

export function middleware(request: NextRequest) {
	return NextResponse.redirect(new URL('/tasks', request.url))
}

export const config = {
	matcher: '/'
}
