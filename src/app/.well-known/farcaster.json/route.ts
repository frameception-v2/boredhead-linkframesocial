import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiYm9yZWRoZWFkLWxpbmtmcmFtZXNvY2lhbC52ZXJjZWwuYXBwIn0",
      signature: "MHg3MzQ5MmYwNmM1OGUyMzM3NDdhMDljZjNiMjIxNzYzODBlNmE1NmRjYjZhNTFiZmJiNzc1OTYxMDdmZmI0NDhkMDE2NGQxYjA1YWM0Y2YyZTNkZTA3MTQwYTNlODM5ZDAxNmUwMzBlMzE0ODllMzFhZGNjYzI3YjBkNWI1NDE2MTFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
