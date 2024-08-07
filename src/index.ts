import { Layout, reset, handle } from './handlers';

export default function parseMSKLC(layout: string): Layout {
  reset();

  const result: Partial<Layout> = {};

  for (const line of layout.split('\n')) {
    handle(result, line);
  }

  return result as Layout;
}
