export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  return Response.json({
    message: 'QuickBooks callback received. Replace this stub with token exchange and tenant persistence.',
    code: searchParams.get('code'),
    realmId: searchParams.get('realmId'),
    state: searchParams.get('state')
  });
}
