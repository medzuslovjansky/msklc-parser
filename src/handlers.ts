import { scMap, vkMap } from './maps';

export type Layout = {
  name: string;
  script: string;
  company: string;
  localeName: string;
  localeId: string;
  version: string;
  copyright: string;
  states: Record<number, Record<string, string>>;
};

const BASE = 0;
const SHIFT = 1;
const CTRL = 2;
/** @deprecated */
const ALT = 4;
const ALT_GR = ALT | CTRL;
const SHIFT_ALT_GR = SHIFT | ALT_GR;

type Handler = (this: Partial<Layout>, args: string[]) => void;

type Handlers = {
  [key: string]: (this: Partial<Layout>, args: string[]) => void;
};

function parseValue(key: keyof Layout) {
  return function parseValue1([, value]) {
    this[key] = JSON.parse(value);
  } as Handler;
}

const noop: Handler = () => {
  /* noop */
};

const parseLigature: Handler = function ([vk, _1, index, ...chars]) {
  const state = [BASE, SHIFT, CTRL, ALT_GR, SHIFT_ALT_GR][+index];
  if (state === undefined) {
    return;
  }

  const code = vkMap.get(vk);
  if (code === undefined) {
    return;
  }

  this.states![state][code] = chars.map(parseChar).join('');
};

const parseLayout: Handler = function (args) {
  // eslint-disable-next-line prefer-const
  let [sc, _vk, vk2, _cap, s0, s1, s2, s6, s7] = args;
  if (vk2 !== '') {
    [sc, vk2, _cap, s0, s1, s2, s6, s7] = args;
  }

  const code = scMap.get(Number.parseInt(sc, 16));
  if (code === undefined) {
    return;
  }

  this.states ??= {};
  this.states[BASE] ??= {};
  this.states[SHIFT] ??= {};
  this.states[CTRL] ??= {};
  this.states[ALT_GR] ??= {};
  this.states[SHIFT_ALT_GR] ??= {};

  this.states[BASE][code] = parseChar(s0);
  this.states[SHIFT][code] = parseChar(s1);
  this.states[CTRL][code] = parseChar(s2);
  this.states[ALT_GR][code] = parseChar(s6);
  this.states[SHIFT_ALT_GR][code] = parseChar(s7);
};

function parseChar(ch: string): string {
  if (ch.length === 5 && ch.endsWith('@')) {
    const code = Number.parseInt(ch.slice(0, 4), 16);
    return String.fromCharCode(code);
  }
  if (ch.length === 4) {
    return String.fromCharCode(Number.parseInt(ch, 16));
  }
  if (ch === '-1') {
    return '';
  }
  return ch;
}

const handlers: Handlers = {
  KBD([, type, name]) {
    this.script = type === 'KBDMSLAT' ? 'Latn' : 'Cyrl';
    this.name = JSON.parse(name);
  },
  COPYRIGHT: parseValue('copyright'),
  COMPANY: parseValue('company'),
  LOCALENAME: parseValue('localeName'),
  LOCALEID: parseValue('localeId'),
  VERSION: parseValue('version'),
  LAYOUT: () => {
    handlers.default = parseLayout;
  },
  LIGATURE: () => {
    handlers.default = parseLigature;
  },
  DEADKEY: () => {
    handlers.default = noop;
  },
  default: noop,
};

export function reset() {
  handlers.default = noop;
}

export function handle(acc: Partial<Layout>, rawLine: string) {
  const line = rawLine.replace(/\/\/.*$/, '').trim();
  if (!line) return;

  const values = line.split('\t');
  const handler = handlers[values[0]] ?? handlers.default;

  handler.call(acc, values);
}
