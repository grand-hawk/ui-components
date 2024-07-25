export function mergeProps(
  ...props: Array<object | undefined>
): Record<string, unknown> {
  let merged = {};
  for (const prop of props) if (prop) merged = { ...merged, ...prop };
  return merged;
}
