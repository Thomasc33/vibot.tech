export const serverOrigin = 'https://a.vibot.tech/api'

export function http(method, url, body, content = 'application/json') {
    if (!url.includes('http')) {
      url = serverOrigin + url
    }
  
    return window.fetch(url, {
      method,
      headers: {
        'Content-Type': content
      },
      body
    }).then(res => res.json())
  }
  
export function get(url, timeout = 5000) {
    return http('GET', url, null)
}

export function post(url, json, timeout = 5000) {
    return http('POST', url, JSON.stringify(json), null)
}
  