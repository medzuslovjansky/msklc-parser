import { Layout, reset, handle } from './handlers';

export default function parseMSKLC(layout: string) {
  reset();

  const result: Partial<Layout> = {};

  for (const line of layout.split('\n')) {
    handle(result, line);
  }

  return result;
}
