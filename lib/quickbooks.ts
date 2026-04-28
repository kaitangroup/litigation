const base = process.env.QUICKBOOKS_ENVIRONMENT === 'production'
  ? 'https://appcenter.intuit.com/connect/oauth2'
  : 'https://appcenter.intuit.com/connect/oauth2';

export function getQuickBooksConnectUrl() {
  const clientId = process.env.QUICKBOOKS_CLIENT_ID;
  const redirectUri = process.env.QUICKBOOKS_REDIRECT_URI;
  const scope = encodeURIComponent('com.intuit.quickbooks.accounting');
  const state = 'replace-with-signed-state-token';
  return `${base}?client_id=${clientId}&response_type=code&scope=${scope}&redirect_uri=${encodeURIComponent(redirectUri || '')}&state=${state}`;
}
