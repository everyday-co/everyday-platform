import createMDX from "@next/mdx";
import { fileURLToPath } from "node:url";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Avoid incorrect workspace root inference when multiple lockfiles exist on the machine.
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  images: {
    // Note: `logo_files/` isn't under `public/` yet; we render it via <img> with a TODO to move to public.
    remotePatterns: [],
  },
};

export default withMDX(nextConfig);


