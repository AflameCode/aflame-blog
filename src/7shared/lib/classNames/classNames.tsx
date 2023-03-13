type Mods = Record<string, boolean | string>;

export function classNames(
  s: string,
  mods: Mods = {},
  additional: Array<string | undefined>
) {
  return [
    s,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => {
        return Boolean(value);
      })
      .map(([key, value]) => {
        return key;
      }),
  ].join(" ");
}
