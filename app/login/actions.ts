'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  // Authentication is coming soon
  redirect('/login?message=Login and Save your progress coming soon!')
}

export async function signup(formData: FormData) {
  // Authentication is coming soon
  redirect('/login?message=Login and Save your progress coming soon!')
}
