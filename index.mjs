// Vercel Node.js serverless function that adapts TanStack Start's Web Fetch
// SSR handler to Node's (req, res) interface.
import handler from "../dist/server/server.js";

export const config = { runtime: "nodejs" };

export default async function vercelHandler(req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host;
  const url = `${protocol}://${host}${req.url}`;

  // Build a Web Request from the incoming Node request.
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else {
      headers.set(key, String(value));
    }
  }

  const method = req.method || "GET";
  const hasBody = method !== "GET" && method !== "HEAD";

  const request = new Request(url, {
    method,
    headers,
    body: hasBody ? req : undefined,
    // @ts-expect-error Node fetch requires duplex when streaming a body.
    duplex: hasBody ? "half" : undefined,
  });

  const response = await handler.fetch(request);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (!response.body) {
    res.end();
    return;
  }

  const reader = response.body.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
  } finally {
    res.end();
  }
}
