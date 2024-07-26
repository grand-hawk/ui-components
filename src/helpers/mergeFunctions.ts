export function mergeFunctions<T extends (...args: never[]) => unknown>(
  ...eventHandlers: Array<T | undefined>
): () => void {
  const events: Array<(...args: never[]) => unknown> = (
    eventHandlers as defined[]
  ).filter((v) => typeIs(v, 'function'));

  return (...args: never[]) => events.forEach((event) => event(...args));
}
