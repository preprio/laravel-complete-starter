import { NextRequest } from 'next/server'
import { PreprMiddleware } from '@preprio/prepr-nextjs'
 
export function middleware(request: NextRequest) {
    return PreprMiddleware(request)
}