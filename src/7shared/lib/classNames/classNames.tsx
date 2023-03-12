type Mods = Record<string, boolean | string>;

export function classNames(s: string, mods: Mods, additional: string[]) {
  return [
    s,
    ...additional,
    ...Object.entries(mods)
      .filter(([key, value]) => {
        return Boolean(value);
      })
      .map(([key, value]) => {
        return key;
      }),
  ].join(" ");
}
