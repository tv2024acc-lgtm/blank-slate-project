export type ApiError = {
  error?: string
}

export async function apiFetch<T>(path: string, options?: RequestInit & { token?: string }) {
  const headers = new Headers(options?.headers)
  headers.set('Content-Type', 'application/json')

  if (options?.token) {
    headers.set('Authorization', `Bearer ${options.token}`)
  }

  const res = await fetch(path, {
    ...options,
    headers,
  })

  const data = (await res.json().catch(() => null)) as ApiError | T | null

  if (!res.ok) {
    const msg = (data as ApiError | null)?.error || `Request failed (${res.status})`
    throw new Error(msg)
  }

  return data as T
}

