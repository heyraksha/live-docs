"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
    console.error("Error digest:", error.digest);
  }, [error]);

  return (
    <html>
      <body>
        <NextError statusCode={0} title={error.digest || "An unexpected error occurred"} />
      </body>
    </html>
  );
}
