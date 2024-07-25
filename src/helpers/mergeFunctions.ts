export function mergeFunctions(
  ...eventHandlers: Array<((...args: never[]) => unknown) | undefined>
): () => void {
  const events: Array<() => unknown> = (eventHandlers as defined[]).filter(
    (v) => typeIs(v, 'function'),
  );

  return () => events.forEach((event) => event());
}
