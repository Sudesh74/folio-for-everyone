const APP_NAME     = 'folio-for-everyone';
const DATA_API_KEY = '.data-api';

const html         = document.documentElement;
const body         = document.body;
const isDebug      = !!html.getAttribute('data-debug');

export { APP_NAME, DATA_API_KEY, html, body, isDebug };
