/**
 * Next MDX "provider import source" shim.
 *
 * Next config defaults `providerImportSource` to `next-mdx-import-source-file`
 * and resolves to:
 * - `src/mdx-components` (this file), then
 * - `mdx-components`, then
 * - `@mdx-js/react`
 *
 * The `@mdx-js/react` provider uses React context, which isn't available in the
 * React Server Components runtime used during Next build configuration
 * collection. For v0 we don't need component overrides, so we keep this shim
 * server-safe.
 */
export function useMDXComponents(components: Record<string, unknown> = {}) {
  return components;
}


