export const oidcSettings = {
  authority: 'https://localhost:5001',
  automaticSilentRenew: true,
  client_id: 'InventarioCruzRoja',
  redirect_uri: window.location.origin + '/oidc-callback',
  post_logout_redirect_uri: window.location.origin + '/oidc-logout-callback',
  popup_redirect_uri: window.location.origin + '/oidc-popup-callback',
  silent_redirect_uri: window.location.origin + '/silent-renew-oidc.html',
  response_type: 'code',
  scope: 'InventarioCruzRojaAPI openid profile'
}
