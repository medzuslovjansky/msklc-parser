import { parseMSKLC } from './index';

describe('parseMSKLC', () => {
  it('should parse a layout', () => {
    const layout = parseMSKLC(getLayout());
    expect(layout).toMatchSnapshot();
  });
});

function getLayout() {
  return `\
KBD	KBDMSLAT	"Medžuslovjansky (latinica)"

COPYRIGHT	"(c) 2013 Adam Gola"

COMPANY	"Adam Gola, Roberto Lombino jr."

LOCALENAME	"sl-SI"

LOCALEID	"00000424"

VERSION	1.0

SHIFTSTATE

0	//Column 4
1	//Column 5 : Shft
2	//Column 6 :       Ctrl
6	//Column 7 :       Ctrl Alt
7	//Column 8 : Shft  Ctrl Alt

LAYOUT		;an extra '@' at the end is a dead key

//SC	VK_		Cap	0	1	2	6	7
//--	----		----	----	----	----	----	----

02	1		0	1	0021	-1	201a	030f@		// DIGIT ONE, EXCLAMATION MARK, <none>, SINGLE LOW-9 QUOTATION MARK, COMBINING DOUBLE GRAVE ACCENT
03	2		0	2	0040	-1	2018	00af@		// DIGIT TWO, COMMERCIAL AT, <none>, LEFT SINGLE QUOTATION MARK, MACRON
04	3		0	3	0023	-1	2019	0311@		// DIGIT THREE, NUMBER SIGN, <none>, RIGHT SINGLE QUOTATION MARK, COMBINING INVERTED BREVE
05	4		0	4	0024	-1	20ac	00a4@		// DIGIT FOUR, DOLLAR SIGN, <none>, EURO SIGN, CURRENCY SIGN
06	5		0	5	0025	-1	00a8@	02dc@		// DIGIT FIVE, PERCENT SIGN, <none>, DIAERESIS, SMALL TILDE
07	6		0	6	005e	-1	02c6@	00b8@		// DIGIT SIX, CIRCUMFLEX ACCENT, <none>, MODIFIER LETTER CIRCUMFLEX ACCENT, CEDILLA
08	7		0	7	0026	-1	02dd@	002c@		// DIGIT SEVEN, AMPERSAND, <none>, DOUBLE ACUTE ACCENT, COMMA
09	8		0	8	002a	-1	02d9@	00a6@		// DIGIT EIGHT, ASTERISK, <none>, DOT ABOVE, BROKEN BAR
0a	9		0	9	0028	-1	02d8@	02db@		// DIGIT NINE, LEFT PARENTHESIS, <none>, BREVE, OGONEK
0b	0		0	0	0029	-1	002f@	00b7@		// DIGIT ZERO, RIGHT PARENTHESIS, <none>, SOLIDUS, MIDDLE DOT
0c	OEM_MINUS	0	002d	005f	-1	2013	2014		// HYPHEN-MINUS, LOW LINE, <none>, EN DASH, EM DASH
0d	OEM_PLUS	0	003d	002b	-1	2212	00b1		// EQUALS SIGN, PLUS SIGN, <none>, MINUS SIGN, PLUS-MINUS SIGN
10	Q		5	q	Q	-1	015b	015a		// LATIN SMALL LETTER Q, LATIN CAPITAL LETTER Q, <none>, LATIN SMALL LETTER S WITH ACUTE, LATIN CAPITAL LETTER S WITH ACUTE
11	W		5	w	W	-1	0119	0118		// LATIN SMALL LETTER W, LATIN CAPITAL LETTER W, <none>, LATIN SMALL LETTER E WITH OGONEK, LATIN CAPITAL LETTER E WITH OGONEK
12	E		5	e	E	-1	011b	011a		// LATIN SMALL LETTER E, LATIN CAPITAL LETTER E, <none>, LATIN SMALL LETTER E WITH CARON, LATIN CAPITAL LETTER E WITH CARON
13	R		5	r	R	-1	0155	0154		// LATIN SMALL LETTER R, LATIN CAPITAL LETTER R, <none>, LATIN SMALL LETTER R WITH ACUTE, LATIN CAPITAL LETTER R WITH ACUTE
14	T		5	t	T	-1	%%	%%		// LATIN SMALL LETTER T, LATIN CAPITAL LETTER T, <none>, <null>, <null>
15	Y		1	y	Y	-1	-1	-1		// LATIN SMALL LETTER Y, LATIN CAPITAL LETTER Y, <none>, <none>, <none>
16	U		5	u	U	-1	0173	0172		// LATIN SMALL LETTER U, LATIN CAPITAL LETTER U, <none>, LATIN SMALL LETTER U WITH OGONEK, LATIN CAPITAL LETTER U WITH OGONEK
17	I		5	i	I	-1	0117	0116		// LATIN SMALL LETTER I, LATIN CAPITAL LETTER I, <none>, LATIN SMALL LETTER E WITH DOT ABOVE, LATIN CAPITAL LETTER E WITH DOT ABOVE
18	O		5	o	O	-1	022f	022e		// LATIN SMALL LETTER O, LATIN CAPITAL LETTER O, <none>, LATIN SMALL LETTER O WITH DOT ABOVE, LATIN CAPITAL LETTER O WITH DOT ABOVE
19	P		1	p	P	-1	00a7	00b6		// LATIN SMALL LETTER P, LATIN CAPITAL LETTER P, <none>, SECTION SIGN, PILCROW SIGN
1a	OEM_4		0	005b	007b	001b	00ab	2039		// LEFT SQUARE BRACKET, LEFT CURLY BRACKET, ESCAPE, LEFT-POINTING DOUBLE ANGLE QUOTATION MARK, SINGLE LEFT-POINTING ANGLE QUOTATION MARK
1b	OEM_6		0	005d	007d	001d	00bb	203a		// RIGHT SQUARE BRACKET, RIGHT CURLY BRACKET, INFORMATION SEPARATOR THREE, RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK, SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
1e	A		5	a	A	-1	00e5	00c5		// LATIN SMALL LETTER A, LATIN CAPITAL LETTER A, <none>, LATIN SMALL LETTER A WITH RING ABOVE, LATIN CAPITAL LETTER A WITH RING ABOVE
1f	S		5	s	S	-1	0161	0160		// LATIN SMALL LETTER S, LATIN CAPITAL LETTER S, <none>, LATIN SMALL LETTER S WITH CARON, LATIN CAPITAL LETTER S WITH CARON
20	D		5	d	D	-1	%%	%%		// LATIN SMALL LETTER D, LATIN CAPITAL LETTER D, <none>, <null>, <null>
21	F		5	f	F	-1	0111	0110		// LATIN SMALL LETTER F, LATIN CAPITAL LETTER F, <none>, LATIN SMALL LETTER D WITH STROKE, LATIN CAPITAL LETTER D WITH STROKE
22	G		1	g	G	-1	-1	-1		// LATIN SMALL LETTER G, LATIN CAPITAL LETTER G, <none>, <none>, <none>
23	H		1	h	H	-1	-1	-1		// LATIN SMALL LETTER H, LATIN CAPITAL LETTER H, <none>, <none>, <none>
24	J		1	j	J	-1	-1	-1		// LATIN SMALL LETTER J, LATIN CAPITAL LETTER J, <none>, <none>, <none>
25	K		1	k	K	-1	00d7	00a9		// LATIN SMALL LETTER K, LATIN CAPITAL LETTER K, <none>, MULTIPLICATION SIGN, COPYRIGHT SIGN
26	L		5	l	L	-1	013a	0139		// LATIN SMALL LETTER L, LATIN CAPITAL LETTER L, <none>, LATIN SMALL LETTER L WITH ACUTE, LATIN CAPITAL LETTER L WITH ACUTE
27	OEM_1		0	003b	003a	001d	201e	201c		// SEMICOLON, COLON, INFORMATION SEPARATOR THREE, DOUBLE LOW-9 QUOTATION MARK, LEFT DOUBLE QUOTATION MARK
28	OEM_7		0	0027	0022	-1	2019	201d		// APOSTROPHE, QUOTATION MARK, <none>, RIGHT SINGLE QUOTATION MARK, RIGHT DOUBLE QUOTATION MARK
29	OEM_3		0	0060@	007e@	-1	02cb@	0301		// GRAVE ACCENT, TILDE, <none>, MODIFIER LETTER GRAVE ACCENT, COMBINING ACUTE ACCENT
2b	OEM_5		0	005c	007c	001c	00f7	2219		// REVERSE SOLIDUS, VERTICAL LINE, INFORMATION SEPARATOR FOUR, DIVISION SIGN, BULLET OPERATOR
2c	Z		5	z	Z	-1	017e	017d		// LATIN SMALL LETTER Z, LATIN CAPITAL LETTER Z, <none>, LATIN SMALL LETTER Z WITH CARON, LATIN CAPITAL LETTER Z WITH CARON
2d	X		5	x	X	-1	017a	0179		// LATIN SMALL LETTER X, LATIN CAPITAL LETTER X, <none>, LATIN SMALL LETTER Z WITH ACUTE, LATIN CAPITAL LETTER Z WITH ACUTE
2e	C		5	c	C	-1	010d	010c		// LATIN SMALL LETTER C, LATIN CAPITAL LETTER C, <none>, LATIN SMALL LETTER C WITH CARON, LATIN CAPITAL LETTER C WITH CARON
2f	V		5	v	V	-1	0107	0106		// LATIN SMALL LETTER V, LATIN CAPITAL LETTER V, <none>, LATIN SMALL LETTER C WITH ACUTE, LATIN CAPITAL LETTER C WITH ACUTE
30	B		1	b	B	-1	-1	-1		// LATIN SMALL LETTER B, LATIN CAPITAL LETTER B, <none>, <none>, <none>
31	N		5	n	N	-1	0144	0143		// LATIN SMALL LETTER N, LATIN CAPITAL LETTER N, <none>, LATIN SMALL LETTER N WITH ACUTE, LATIN CAPITAL LETTER N WITH ACUTE
32	M		1	m	M	-1	2122	00ae		// LATIN SMALL LETTER M, LATIN CAPITAL LETTER M, <none>, TRADE MARK SIGN, REGISTERED SIGN
33	OEM_COMMA	0	002c	003c	-1	2030	2032		// COMMA, LESS-THAN SIGN, <none>, PER MILLE SIGN, PRIME
34	OEM_PERIOD	0	002e	003e	-1	2026	2033		// FULL STOP, GREATER-THAN SIGN, <none>, HORIZONTAL ELLIPSIS, DOUBLE PRIME
35	OEM_2		0	002f	003f	-1	00b0	00ad		// SOLIDUS, QUESTION MARK, <none>, DEGREE SIGN, SOFT HYPHEN
39	SPACE		0	0020	0020	0020	-1	00a0		// SPACE, SPACE, SPACE, <none>, NO-BREAK SPACE
56	OEM_102	0	005c	007c	001c	00f7	2219		// REVERSE SOLIDUS, VERTICAL LINE, INFORMATION SEPARATOR FOUR, DIVISION SIGN, BULLET OPERATOR
53	DECIMAL	0	002c	002c	-1	-1	-1		// COMMA, COMMA, , ,

LIGATURE

//VK_	Mod#	Char0	Char1	Char2	Char3
//----		----	----	----	----	----

D		3	0064	0301		// LATIN SMALL LETTER D + COMBINING ACUTE ACCENT
D		4	0044	0301		// LATIN CAPITAL LETTER D + COMBINING ACUTE ACCENT
T		3	0074	0301		// LATIN SMALL LETTER T + COMBINING ACUTE ACCENT
T		4	0054	0301		// LATIN CAPITAL LETTER T + COMBINING ACUTE ACCENT

DEADKEY	030f

0041	0200	// A -> Ȁ
0061	0201	// a -> ȁ
0045	0204	// E -> Ȅ
0065	0205	// e -> ȅ
0049	0208	// I -> Ȉ
0069	0209	// i -> ȉ
004f	020c	// O -> Ȍ
006f	020d	// o -> ȍ
0055	0214	// U -> Ȕ
0075	0215	// u -> ȕ
030f	030f	// ̏ -> ̏
0020	030f	//   -> ̏

DEADKEY	00af

0041	0100	// A -> Ā
0061	0101	// a -> ā
0045	0112	// E -> Ē
0065	0113	// e -> ē
0049	012a	// I -> Ī
0069	012b	// i -> ī
004f	014c	// O -> Ō
006f	014d	// o -> ō
0055	016a	// U -> Ū
0075	016b	// u -> ū
0059	0232	// Y -> Ȳ
0079	0233	// y -> ȳ
00af	0304	// ¯ -> ̄
0027	02c9	// ' -> ˉ
0020	00af	//   -> ¯

DEADKEY	0311

0041	0202	// A -> Ȃ
0061	0203	// a -> ȃ
0045	0206	// E -> Ȇ
0065	0207	// e -> ȇ
0049	020a	// I -> Ȋ
0069	020b	// i -> ȋ
004f	020e	// O -> Ȏ
006f	020f	// o -> ȏ
0055	0216	// U -> Ȗ
0075	0217	// u -> ȗ
0311	0311	// ̑ -> ̑
0020	0311	//   -> ̑

DEADKEY	00a4

0063	00a2	// c -> ¢
006c	00a3	// l -> £
0079	00a5	// y -> ¥
0068	20b4	// h -> ₴
006e	2116	// n -> №
003d	2260	// = -> ≠
002c	2264	// , -> ≤
002e	2265	// . -> ≥
2219	2022	// ∙ -> •
0078	2020	// x -> †
0058	2021	// X -> ‡
004e	221e	// N -> ∞
0021	00a1	// ! -> ¡
003f	00bf	// ? -> ¿
002b	2248	// + -> ≈
0072	20bd	// r -> ₽
0020	00a4	//   -> ¤

DEADKEY	00a8

0041	00c4	// A -> Ä
0061	00e4	// a -> ä
0045	00cb	// E -> Ë
0065	00eb	// e -> ë
0049	00cf	// I -> Ï
0069	00ef	// i -> ï
004f	00d6	// O -> Ö
006f	00f6	// o -> ö
0055	00dc	// U -> Ü
0075	00fc	// u -> ü
0059	0178	// Y -> Ÿ
0079	00ff	// y -> ÿ
0053	1e9e	// S -> ẞ
0073	00df	// s -> ß
00a8	0308	// ¨ -> ̈
0020	00a8	//   -> ¨

DEADKEY	02dc

0041	00c3	// A -> Ã
0061	00e3	// a -> ã
0045	1ebc	// E -> Ẽ
0065	1ebd	// e -> ẽ
0049	0128	// I -> Ĩ
0069	0129	// i -> ĩ
004e	00d1	// N -> Ñ
006e	00f1	// n -> ñ
004f	00d5	// O -> Õ
006f	00f5	// o -> õ
0055	0168	// U -> Ũ
0075	0169	// u -> ũ
0059	1ef8	// Y -> Ỹ
0079	1ef9	// y -> ỹ
02dc	0303	// ˜ -> ̃
0020	02dc	//   -> ˜

DEADKEY	02c6

0041	00c2	// A -> Â
0061	00e2	// a -> â
0045	00ca	// E -> Ê
0065	00ea	// e -> ê
0049	00ce	// I -> Î
0069	00ee	// i -> î
004f	00d4	// O -> Ô
006f	00f4	// o -> ô
0055	00db	// U -> Û
0075	00fb	// u -> û
0059	0176	// Y -> Ŷ
0079	0177	// y -> ŷ
0057	0174	// W -> Ŵ
0077	0175	// w -> ŵ
0043	0108	// C -> Ĉ
0063	0109	// c -> ĉ
0044	1e12	// D -> Ḓ
0064	1e13	// d -> ḓ
0047	011c	// G -> Ĝ
0067	011d	// g -> ĝ
004a	0134	// J -> Ĵ
006a	0135	// j -> ĵ
0053	015c	// S -> Ŝ
0073	015d	// s -> ŝ
0054	1e70	// T -> Ṱ
0074	1e71	// t -> ṱ
0048	0124	// H -> Ĥ
0068	0125	// h -> ĥ
005a	1e90	// Z -> Ẑ
007a	1e91	// z -> ẑ
02c6	0302	// ˆ -> ̂
0020	02c6	//   -> ˆ

DEADKEY	00b8

0043	00c7	// C -> Ç
0063	00e7	// c -> ç
0044	1e10	// D -> Ḑ
0064	1e11	// d -> ḑ
0047	0122	// G -> Ģ
0067	0123	// g -> ģ
004b	0136	// K -> Ķ
006b	0137	// k -> ķ
004c	013b	// L -> Ļ
006c	013c	// l -> ļ
004e	0145	// N -> Ņ
006e	0146	// n -> ņ
0052	0156	// R -> Ŗ
0072	0157	// r -> ŗ
0053	015e	// S -> Ş
0073	015f	// s -> ş
0054	0162	// T -> Ţ
0074	0163	// t -> ţ
0041	1ea0	// A -> Ạ
0061	1ea1	// a -> ạ
0045	1eb8	// E -> Ẹ
0065	1eb9	// e -> ẹ
0049	1eca	// I -> Ị
0069	1ecb	// i -> ị
004f	1ecc	// O -> Ọ
006f	1ecd	// o -> ọ
0055	1ee4	// U -> Ụ
0075	1ee5	// u -> ụ
0059	1ef4	// Y -> Ỵ
0079	1ef5	// y -> ỵ
00b8	0327	// ¸ -> ̧
0027	0323	// ' -> ̣
0020	00b8	//   -> ¸

DEADKEY	02dd

004f	0150	// O -> Ő
006f	0151	// o -> ő
0055	0170	// U -> Ű
0075	0171	// u -> ű
02dd	030b	// ˝ -> ̋
0020	02dd	//   -> ˝

DEADKEY	002c

0053	0218	// S -> Ș
0073	0219	// s -> ș
0054	021a	// T -> Ț
0074	021b	// t -> ț
002c	0326	// , -> ̦
0020	002c	//   -> ,

DEADKEY	02d9

0043	010a	// C -> Ċ
0063	010b	// c -> ċ
0044	1e0a	// D -> Ḋ
0064	1e0b	// d -> ḋ
0045	0116	// E -> Ė
0065	0117	// e -> ė
0047	0120	// G -> Ġ
0067	0121	// g -> ġ
0048	1e22	// H -> Ḣ
0068	1e23	// h -> ḣ
0049	0130	// I -> İ
0069	0131	// i -> ı
004c	013f	// L -> Ŀ
006c	0140	// l -> ŀ
004e	1e44	// N -> Ṅ
006e	1e45	// n -> ṅ
004f	022e	// O -> Ȯ
006f	022f	// o -> ȯ
0052	1e58	// R -> Ṙ
0072	1e59	// r -> ṙ
0053	1e60	// S -> Ṡ
0073	1e61	// s -> ṡ
0054	1e6a	// T -> Ṫ
0074	1e6b	// t -> ṫ
005a	017b	// Z -> Ż
007a	017c	// z -> ż
02d9	0307	// ˙ -> ̇
0020	02d9	//   -> ˙

DEADKEY	00a6

0041	00c6	// A -> Æ
0061	00e6	// a -> æ
0044	00d0	// D -> Ð
0064	00f0	// d -> ð
004f	0152	// O -> Œ
006f	0153	// o -> œ
0054	00de	// T -> Þ
0074	00fe	// t -> þ
0073	017f	// s -> ſ
005a	01b7	// Z -> Ʒ
007a	0292	// z -> ʒ
006b	0138	// k -> ĸ
0045	018f	// E -> Ə
0065	0259	// e -> ə
017d	01ee	// Ž -> Ǯ
017e	01ef	// ž -> ǯ
0049	0132	// I -> Ĳ
0069	0133	// i -> ĳ
0046	01f1	// F -> Ǳ
0066	01f3	// f -> ǳ
0047	01f2	// G -> ǲ
0067	01f2	// g -> ǲ
004c	01c7	// L -> Ǉ
006c	01c9	// l -> ǉ
003a	01c8	// : -> ǈ
003b	01c8	// ; -> ǈ
004e	01ca	// N -> Ǌ
006e	01cc	// n -> ǌ
004d	01cb	// M -> ǋ
006d	01cb	// m -> ǋ
0058	01c4	// X -> Ǆ
0078	01c6	// x -> ǆ
0043	01c5	// C -> ǅ
0063	01c5	// c -> ǅ
0020	00a6	//   -> ¦

DEADKEY	02d8

0041	0102	// A -> Ă
0061	0103	// a -> ă
0045	0114	// E -> Ĕ
0065	0115	// e -> ĕ
0047	011e	// G -> Ğ
0067	011f	// g -> ğ
0049	012c	// I -> Ĭ
0069	012d	// i -> ĭ
004f	014e	// O -> Ŏ
006f	014f	// o -> ŏ
0055	016c	// U -> Ŭ
0075	016d	// u -> ŭ
02d8	0306	// ˘ -> ̆
0020	02d8	//   -> ˘

DEADKEY	02db

0041	0104	// A -> Ą
0061	0105	// a -> ą
0045	0118	// E -> Ę
0065	0119	// e -> ę
0049	012e	// I -> Į
0069	012f	// i -> į
004f	01ea	// O -> Ǫ
006f	01eb	// o -> ǫ
0055	0172	// U -> Ų
0075	0173	// u -> ų
02db	0328	// ˛ -> ̨
0020	02db	//   -> ˛

DEADKEY	002f

0044	0110	// D -> Đ
0064	0111	// d -> đ
004f	00d8	// O -> Ø
006f	00f8	// o -> ø
004c	0141	// L -> Ł
006c	0142	// l -> ł
0054	0166	// T -> Ŧ
0074	0167	// t -> ŧ
0047	01e4	// G -> Ǥ
0067	01e5	// g -> ǥ
0048	0126	// H -> Ħ
0068	0127	// h -> ħ
005b	2190	// [ -> ←
005d	2192	// ] -> →
002d	2191	// - -> ↑
0027	2193	// ' -> ↓
003b	2199	// ; -> ↙
005c	2198	// \\ -> ↘
0030	2196	// 0 -> ↖
003d	2197	// = -> ↗
0020	002f	//   -> /

DEADKEY	00b7

0061	00aa	// a -> ª
006f	00ba	// o -> º
004c	1e36	// L -> Ḷ
006c	1e37	// l -> ḷ
0048	1e24	// H -> Ḥ
0068	1e25	// h -> ḥ
004e	014a	// N -> Ŋ
006e	014b	// n -> ŋ
0020	00b7	//   -> ·

DEADKEY	0060

0041	00c1	// A -> Á
0061	00e1	// a -> á
0043	0106	// C -> Ć
0063	0107	// c -> ć
0045	00c9	// E -> É
0065	00e9	// e -> é
0047	01f4	// G -> Ǵ
0067	01f5	// g -> ǵ
0049	00cd	// I -> Í
0069	00ed	// i -> í
004b	1e30	// K -> Ḱ
006b	1e31	// k -> ḱ
004c	0139	// L -> Ĺ
006c	013a	// l -> ĺ
004e	0143	// N -> Ń
006e	0144	// n -> ń
004f	00d3	// O -> Ó
006f	00f3	// o -> ó
0052	0154	// R -> Ŕ
0072	0155	// r -> ŕ
0053	015a	// S -> Ś
0073	015b	// s -> ś
0055	00da	// U -> Ú
0075	00fa	// u -> ú
0059	00dd	// Y -> Ý
0079	00fd	// y -> ý
005a	0179	// Z -> Ź
007a	017a	// z -> ź
0057	1e82	// W -> Ẃ
0077	1e83	// w -> ẃ
022e	01fe	// Ȯ -> Ǿ
022f	01ff	// ȯ -> ǿ
0051	01fc	// Q -> Ǽ
0071	01fd	// q -> ǽ
00c5	01fa	// Å -> Ǻ
00e5	01fb	// å -> ǻ

DEADKEY	007e

0041	0104	// A -> Ą
0061	0105	// a -> ą
0045	00cb	// E -> Ë
0065	00eb	// e -> ë
004c	0141	// L -> Ł
006c	0142	// l -> ł
004f	00d4	// O -> Ô
006f	00f4	// o -> ô
0053	00c4	// S -> Ä
0073	00e4	// s -> ä
0055	016e	// U -> Ů
0075	016f	// u -> ů
0172	00d9	// Ų -> Ù
0173	00f9	// ų -> ù
00c5	00c3	// Å -> Ã
00e5	00e3	// å -> ã
005a	017b	// Z -> Ż
007a	017c	// z -> ż
0047	01e6	// G -> Ǧ
0067	01e7	// g -> ǧ
0048	021e	// H -> Ȟ
0068	021f	// h -> ȟ
004b	01e8	// K -> Ǩ
006b	01e9	// k -> ǩ
007e	02c7	// ~ -> ˇ
0044	010e	// D -> Ď
0064	010f	// d -> ď
004e	0147	// N -> Ň
006e	0148	// n -> ň
0052	0158	// R -> Ř
0072	0159	// r -> ř
0054	0164	// T -> Ť
0074	0165	// t -> ť
004a	013d	// J -> Ľ
006a	013e	// j -> ľ
0020	007e	//   -> ~

DEADKEY	02cb

0041	00c0	// A -> À
0061	00e0	// a -> à
0045	00c8	// E -> È
0065	00e8	// e -> è
0049	00cc	// I -> Ì
0069	00ec	// i -> ì
004f	00d2	// O -> Ò
006f	00f2	// o -> ò
0055	00d9	// U -> Ù
0075	00f9	// u -> ù
0059	1ef2	// Y -> Ỳ
0079	1ef3	// y -> ỳ
0057	1e80	// W -> Ẁ
0077	1e81	// w -> ẁ
02cb	0300	// ˋ -> ̀
0020	02cb	//   -> ˋ


KEYNAME

01	Esc
0e	Backspace
0f	Tab
1c	Enter
1d	Ctrl
2a	Shift
36	"Right Shift"
37	"Num *"
38	Alt
39	Space
3a	"Caps Lock"
3b	F1
3c	F2
3d	F3
3e	F4
3f	F5
40	F6
41	F7
42	F8
43	F9
44	F10
45	Pause
46	"Scroll Lock"
47	"Num 7"
48	"Num 8"
49	"Num 9"
4a	"Num -"
4b	"Num 4"
4c	"Num 5"
4d	"Num 6"
4e	"Num +"
4f	"Num 1"
50	"Num 2"
51	"Num 3"
52	"Num 0"
53	"Num Del"
54	"Sys Req"
57	F11
58	F12
7c	F13
7d	F14
7e	F15
7f	F16
80	F17
81	F18
82	F19
83	F20
84	F21
85	F22
86	F23
87	F24

KEYNAME_EXT

1c	"Num Enter"
1d	"Right Ctrl"
35	"Num /"
37	"Prnt Scrn"
38	"Right Alt"
45	"Num Lock"
46	Break
47	Home
48	Up
49	"Page Up"
4b	Left
4d	Right
4f	End
50	Down
51	"Page Down"
52	Insert
53	Delete
54	<00>
56	Help
5b	"Left Windows"
5c	"Right Windows"
5d	Application

KEYNAME_DEAD

030f	"COMBINING DOUBLE GRAVE ACCENT"
00af	"MACRON"
0311	"COMBINING INVERTED BREVE"
00a4	"CURRENCY SIGN"
00a8	"DIAERESIS"
02dc	"SMALL TILDE"
02c6	"MODIFIER LETTER CIRCUMFLEX ACCENT"
00b8	"CEDILLA"
02dd	"DOUBLE ACUTE ACCENT"
002c	"COMMA"
02d9	"DOT ABOVE"
00a6	"BROKEN BAR"
02d8	"BREVE"
02db	"OGONEK"
002f	"SOLIDUS"
00b7	"MIDDLE DOT"
0060	"GRAVE ACCENT"
007e	"TILDE"
02cb	"MODIFIER LETTER GRAVE ACCENT"


DESCRIPTIONS

0409	Medžuslovjansky (latinica)

LANGUAGENAMES

0409	Slovenian (Slovenia)

ENDKBD`;
}
