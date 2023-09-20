const host = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'
export const hostDeploy = import.meta.env.VITE_DEPLOY_URL || 'http://localhost:5173/'
export const local = 'https://localhost:5173'

export default host
