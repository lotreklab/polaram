export const TEST = process.env.NODE_ENV === 'test';
export const API_ENDPOINT = `${TEST ? 'http://localhost' : 'https://api.instagram.com/v1/'}`;