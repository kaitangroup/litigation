import { getQuickBooksConnectUrl } from '@/lib/quickbooks';
export async function GET() {
  return Response.redirect(getQuickBooksConnectUrl());
}
