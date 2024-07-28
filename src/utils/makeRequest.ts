interface ApiResponse<T> {
  error: boolean
  status?: number
  statusText?: string
  errorDetails?: any
  data?: T
}

export const makeRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  const res = await fetch(url, {
    next: { revalidate: 3600 },
    ...options,
    headers,
  })

  if (!res.ok) {
    const errorDetails = await res.json()

    return {
      error: true,
      status: res.status,
      statusText: res.statusText,
      errorDetails,
    }
  }

  const data: T = await res.json()

  return {
    error: false,
    data,
  }
}
