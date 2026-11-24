import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Layers, c as Check, d as BookOpen, i as PenLine, l as ChartNoAxesColumn, n as Target, o as Headphones, r as Settings, s as Flame, u as CalendarDays } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COhGR5qw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var U$2 = "First contact";
var unit1 = [
	{
		id: "u1l1",
		unit: 1,
		unitTitle: U$2,
		indexLabel: "01",
		title: "Hallo! Say your name",
		goal: "Greet someone and say who you are.",
		grammar: "sein and heißen",
		minutes: 50,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Mila",
				de: "Hallo! Ich heiße Mila. Wie heißt du?",
				en: "Hello! My name is Mila. What is your name?"
			},
			{
				speaker: "Ben",
				de: "Hallo Mila! Ich heiße Ben. Freut mich.",
				en: "Hello Mila! My name is Ben. Pleased to meet you."
			},
			{
				speaker: "Mila",
				de: "Freut mich auch. Bist du neu hier?",
				en: "Pleased to meet you too. Are you new here?"
			},
			{
				speaker: "Ben",
				de: "Ja, ich bin neu. Ich lerne Deutsch.",
				en: "Yes, I am new. I am learning German."
			}
		],
		grammarNote: {
			lead: "Ich bin Ben. Ich heiße Ben.",
			rule: "sein (to be) changes with the person: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. heißen (to be called) works the same way: ich heiße, du heißt, er heißt, wir heißen.",
			contrast: "English uses am, are and is. German uses a different verb ending for each person, so the pronoun and the verb have to match.",
			examples: [
				{
					de: "Ich bin neu hier.",
					en: "I am new here."
				},
				{
					de: "Du bist nett.",
					en: "You are kind."
				},
				{
					de: "Deutsch ist eine Sprache.",
					en: "German is a language."
				}
			],
			table: [
				{
					a: "ich",
					b: "bin / heiße"
				},
				{
					a: "du",
					b: "bist / heißt"
				},
				{
					a: "er, sie, es",
					b: "ist / heißt"
				},
				{
					a: "wir",
					b: "sind / heißen"
				},
				{
					a: "ihr",
					b: "seid / heißt"
				},
				{
					a: "sie, Sie",
					b: "sind / heißen"
				}
			]
		},
		vocab: [
			{
				german: "hallo",
				english: "hello",
				example: "Hallo, Anna!"
			},
			{
				german: "ich",
				english: "I",
				example: "Ich heiße Ben."
			},
			{
				german: "du",
				english: "you (informal)",
				example: "Wie heißt du?"
			},
			{
				german: "Sie",
				english: "you (formal)",
				example: "Wie heißen Sie?"
			},
			{
				german: "heißen",
				english: "to be called",
				example: "Ich heiße Mila."
			},
			{
				german: "der Name",
				english: "name",
				article: "der",
				plural: "die Namen",
				example: "Mein Name ist Ben."
			},
			{
				german: "ja",
				english: "yes",
				example: "Ja, gern."
			},
			{
				german: "nein",
				english: "no",
				example: "Nein, danke."
			},
			{
				german: "danke",
				english: "thank you",
				example: "Danke schön!"
			},
			{
				german: "bitte",
				english: "please / you're welcome",
				example: "Ein Wasser, bitte."
			},
			{
				german: "Deutsch",
				english: "German",
				example: "Ich lerne Deutsch."
			},
			{
				german: "lernen",
				english: "to learn",
				example: "Ich lerne Deutsch."
			},
			{
				german: "und",
				english: "and",
				example: "Ben und Mila."
			},
			{
				german: "neu",
				english: "new",
				example: "Ich bin neu hier."
			},
			{
				german: "auch",
				english: "also / too",
				example: "Freut mich auch."
			}
		],
		questions: [
			{
				id: "u1l1q1",
				type: "gap",
				prompt: "Ich ___ Mila.",
				answer: "heiße",
				why: "With ich, heißen becomes heiße.",
				error: "verb"
			},
			{
				id: "u1l1q2",
				type: "choice",
				prompt: "Which sentence means “I am new”?",
				options: [
					"Ich bin neu.",
					"Ich bist neu.",
					"Ich ist neu."
				],
				answer: "Ich bin neu.",
				why: "The form of sein with ich is bin.",
				error: "verb"
			},
			{
				id: "u1l1q3",
				type: "order",
				prompt: "Build the question: What is your name? (informal)",
				words: [
					"du",
					"heißt",
					"Wie"
				],
				answer: "Wie heißt du?",
				why: "The question word comes first, then the verb, then du.",
				error: "word-order"
			},
			{
				id: "u1l1q4",
				type: "type",
				prompt: "Translate: My name is Anna.",
				answer: "Mein Name ist Anna.",
				aliases: ["Ich heiße Anna."],
				why: "Mein Name ist Anna uses ist. Ich heiße Anna is also natural.",
				error: "verb"
			},
			{
				id: "u1l1q5",
				type: "choice",
				prompt: "You meet a stranger in an office. How do you ask their name?",
				options: [
					"Wie heißt du?",
					"Wie heißen Sie?",
					"Wie heiße ich?"
				],
				answer: "Wie heißen Sie?",
				why: "Sie is the formal you, and it takes heißen, not heißt.",
				error: "pronoun"
			}
		],
		speaking: "Greet someone. Say your name and that you are learning German.",
		writing: "Write three sentences: a greeting, your name, and that you are learning German.",
		writingWords: 25,
		canDo: [
			"I can greet someone.",
			"I can say my name.",
			"I can ask a name, informally and formally."
		]
	},
	{
		id: "u1l2",
		unit: 1,
		unitTitle: U$2,
		indexLabel: "02",
		title: "Where are you from?",
		goal: "Ask and answer about origin, city and languages.",
		grammar: "W-questions and kommen",
		minutes: 50,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Jon",
				de: "Woher kommst du?",
				en: "Where are you from?"
			},
			{
				speaker: "Ada",
				de: "Ich komme aus Nigeria. Und du?",
				en: "I come from Nigeria. And you?"
			},
			{
				speaker: "Jon",
				de: "Ich komme aus Deutschland. Wohnst du in Berlin?",
				en: "I come from Germany. Do you live in Berlin?"
			},
			{
				speaker: "Ada",
				de: "Ja. Ich spreche Englisch und ein bisschen Deutsch.",
				en: "Yes. I speak English and a little German."
			}
		],
		grammarNote: {
			lead: "Woher kommst du?",
			rule: "In a W-question the question word comes first, then the verb, then the subject. Woher kommst du? is right. Woher du kommst? is not a question.",
			contrast: "English adds do: “Where do you come from?” German does not add a helper verb. The main verb itself moves to second place.",
			examples: [
				{
					de: "Ich komme aus Ghana.",
					en: "I come from Ghana."
				},
				{
					de: "Ich wohne in Berlin.",
					en: "I live in Berlin."
				},
				{
					de: "Ich komme aus der Schweiz.",
					en: "I come from Switzerland."
				}
			],
			table: [
				{
					a: "woher",
					b: "where from"
				},
				{
					a: "wo",
					b: "where"
				},
				{
					a: "wie",
					b: "how"
				},
				{
					a: "wer",
					b: "who"
				},
				{
					a: "was",
					b: "what"
				}
			]
		},
		vocab: [
			{
				german: "woher",
				english: "where from",
				example: "Woher kommst du?"
			},
			{
				german: "kommen",
				english: "to come",
				example: "Ich komme aus Ghana."
			},
			{
				german: "aus",
				english: "from",
				example: "Ich komme aus Deutschland."
			},
			{
				german: "Deutschland",
				english: "Germany",
				example: "Ich komme aus Deutschland."
			},
			{
				german: "Nigeria",
				english: "Nigeria",
				example: "Ich komme aus Nigeria."
			},
			{
				german: "Ghana",
				english: "Ghana",
				example: "Ich komme aus Ghana."
			},
			{
				german: "Österreich",
				english: "Austria",
				example: "Ich komme aus Österreich."
			},
			{
				german: "die Schweiz",
				english: "Switzerland",
				article: "die",
				example: "Ich komme aus der Schweiz."
			},
			{
				german: "wohnen",
				english: "to live",
				example: "Ich wohne in Berlin."
			},
			{
				german: "in",
				english: "in",
				example: "Ich wohne in Berlin."
			},
			{
				german: "sprechen",
				english: "to speak",
				example: "Ich spreche Deutsch."
			},
			{
				german: "Englisch",
				english: "English",
				example: "Ich spreche Englisch."
			},
			{
				german: "ein bisschen",
				english: "a little",
				example: "Ich spreche ein bisschen Deutsch."
			},
			{
				german: "die Sprache",
				english: "language",
				article: "die",
				plural: "die Sprachen",
				example: "Deutsch ist eine Sprache."
			},
			{
				german: "welche",
				english: "which",
				example: "Welche Sprache sprichst du?"
			}
		],
		questions: [
			{
				id: "u1l2q1",
				type: "order",
				prompt: "Build: Where are you from?",
				words: [
					"du",
					"Woher",
					"kommst"
				],
				answer: "Woher kommst du?",
				why: "Question word, then verb, then subject.",
				error: "word-order"
			},
			{
				id: "u1l2q2",
				type: "type",
				prompt: "Translate: I come from Germany.",
				answer: "Ich komme aus Deutschland.",
				why: "kommen with ich is komme. Origin uses aus.",
				error: "verb"
			},
			{
				id: "u1l2q3",
				type: "choice",
				prompt: "I come from Switzerland.",
				options: [
					"Ich komme aus der Schweiz.",
					"Ich komme aus Schweiz.",
					"Ich komme aus die Schweiz."
				],
				answer: "Ich komme aus der Schweiz.",
				why: "Schweiz is feminine, so aus der Schweiz.",
				error: "article"
			},
			{
				id: "u1l2q4",
				type: "gap",
				prompt: "Ich ___ in Berlin.",
				answer: "wohne",
				why: "wohnen with ich is wohne.",
				error: "verb"
			},
			{
				id: "u1l2q5",
				type: "choice",
				prompt: "Woher ___ du?",
				options: [
					"kommst",
					"kommen",
					"kommt"
				],
				answer: "kommst",
				why: "du takes kommst.",
				error: "verb"
			}
		],
		speaking: "Say where you come from, where you live, and which languages you speak.",
		writing: "Write four sentences about your origin, your city and your languages.",
		writingWords: 35,
		canDo: [
			"I can ask where someone is from.",
			"I can say my country and city.",
			"I can name a language I speak."
		]
	},
	{
		id: "u1l3",
		unit: 1,
		unitTitle: U$2,
		indexLabel: "03",
		title: "Numbers and a phone number",
		goal: "Understand 0 to 12 and give a phone number.",
		grammar: "Numbers 0–12",
		minutes: 45,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Lea",
				de: "Wie ist deine Telefonnummer?",
				en: "What is your phone number?"
			},
			{
				speaker: "Sam",
				de: "Meine Nummer ist null, eins, sieben, zwei.",
				en: "My number is zero, one, seven, two."
			},
			{
				speaker: "Lea",
				de: "Danke. Sag bitte die Zahlen von eins bis zehn.",
				en: "Thanks. Please say the numbers from one to ten."
			},
			{
				speaker: "Sam",
				de: "Eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn.",
				en: "One, two, three, four, five, six, seven, eight, nine, ten."
			}
		],
		grammarNote: {
			lead: "Meine Nummer ist null, eins, sieben, zwei.",
			rule: "Phone numbers are said one digit at a time. 0 is null and 1 is eins. Eleven and twelve do not follow the later pattern: elf, zwölf.",
			contrast: "English says “oh” for zero on the phone. German says null.",
			examples: [
				{
					de: "null",
					en: "zero"
				},
				{
					de: "elf",
					en: "eleven"
				},
				{
					de: "zwölf",
					en: "twelve"
				}
			]
		},
		vocab: [
			{
				german: "null",
				english: "zero",
				example: "Die Nummer ist null eins."
			},
			{
				german: "eins",
				english: "one",
				example: "eins"
			},
			{
				german: "zwei",
				english: "two",
				example: "zwei"
			},
			{
				german: "drei",
				english: "three",
				example: "drei"
			},
			{
				german: "vier",
				english: "four",
				example: "vier"
			},
			{
				german: "fünf",
				english: "five",
				example: "fünf"
			},
			{
				german: "sechs",
				english: "six",
				example: "sechs"
			},
			{
				german: "sieben",
				english: "seven",
				example: "sieben"
			},
			{
				german: "acht",
				english: "eight",
				example: "acht"
			},
			{
				german: "neun",
				english: "nine",
				example: "neun"
			},
			{
				german: "zehn",
				english: "ten",
				example: "zehn"
			},
			{
				german: "elf",
				english: "eleven",
				example: "elf"
			},
			{
				german: "zwölf",
				english: "twelve",
				example: "zwölf"
			},
			{
				german: "die Zahl",
				english: "number",
				article: "die",
				plural: "die Zahlen",
				example: "Die Zahl ist zehn."
			},
			{
				german: "die Telefonnummer",
				english: "phone number",
				article: "die",
				plural: "die Telefonnummern",
				example: "Wie ist deine Telefonnummer?"
			}
		],
		questions: [
			{
				id: "u1l3q1",
				type: "type",
				prompt: "Write “three” in German.",
				answer: "drei",
				why: "3 is drei.",
				error: "number"
			},
			{
				id: "u1l3q2",
				type: "gap",
				prompt: "Meine Nummer ist ___, eins, sieben.",
				answer: "null",
				why: "Zero on the phone is null.",
				error: "number"
			},
			{
				id: "u1l3q3",
				type: "choice",
				prompt: "Which word is 11?",
				options: [
					"elf",
					"elfe",
					"einzehn"
				],
				answer: "elf",
				why: "11 and 12 are irregular: elf and zwölf.",
				error: "number"
			},
			{
				id: "u1l3q4",
				type: "order",
				prompt: "Build: What is your phone number?",
				words: [
					"deine",
					"ist",
					"Wie",
					"Telefonnummer"
				],
				answer: "Wie ist deine Telefonnummer?",
				why: "Wie ist … is the pattern for asking for a number.",
				error: "word-order"
			},
			{
				id: "u1l3q5",
				type: "type",
				prompt: "Write 12 in German.",
				answer: "zwölf",
				aliases: ["zwoelf"],
				why: "12 is zwölf, not zwölfzehn.",
				error: "number"
			}
		],
		speaking: "Say your phone number slowly, one digit at a time. Invent one if you prefer.",
		writing: "Write the numbers 0 to 12 as words, then one sentence with a phone number.",
		writingWords: 20,
		canDo: [
			"I can count from 0 to 12.",
			"I can say a phone number.",
			"I know elf and zwölf."
		]
	},
	{
		id: "u1l4",
		unit: 1,
		unitTitle: U$2,
		indexLabel: "04",
		title: "Bigger numbers and age",
		goal: "Say numbers to 100 and answer “Wie alt bist du?”",
		grammar: "Numbers 13–100 and sein for age",
		minutes: 50,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Mia",
				de: "Wie alt bist du?",
				en: "How old are you?"
			},
			{
				speaker: "Eli",
				de: "Ich bin einundzwanzig Jahre alt.",
				en: "I am twenty-one years old."
			},
			{
				speaker: "Mia",
				de: "Ich bin dreißig Jahre alt.",
				en: "I am thirty years old."
			},
			{
				speaker: "Eli",
				de: "Aha. Sechzehn ist mein kleiner Cousin.",
				en: "Ah. Sixteen is my little cousin."
			}
		],
		grammarNote: {
			lead: "Ich bin einundzwanzig Jahre alt.",
			rule: "13 to 19 mostly end in -zehn: dreizehn, vierzehn, fünfzehn. Watch the shorter forms sechzehn and siebzehn. Tens: zwanzig, dreißig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig. From 21, write one word: ones + und + tens. einundzwanzig is 21.",
			contrast: "English says the tens first (twenty-one). German says the ones first (einundzwanzig).",
			examples: [
				{
					de: "sechzehn",
					en: "16"
				},
				{
					de: "dreißig",
					en: "30"
				},
				{
					de: "einundzwanzig",
					en: "21"
				}
			]
		},
		vocab: [
			{
				german: "wie alt",
				english: "how old",
				example: "Wie alt bist du?"
			},
			{
				german: "das Jahr",
				english: "year",
				article: "das",
				plural: "die Jahre",
				example: "Ich bin zwanzig Jahre alt."
			},
			{
				german: "zwanzig",
				english: "twenty",
				example: "Ich bin zwanzig."
			},
			{
				german: "dreißig",
				english: "thirty",
				example: "dreißig"
			},
			{
				german: "vierzig",
				english: "forty",
				example: "vierzig"
			},
			{
				german: "fünfzig",
				english: "fifty",
				example: "fünfzig"
			},
			{
				german: "sechzig",
				english: "sixty",
				example: "sechzig"
			},
			{
				german: "siebzig",
				english: "seventy",
				example: "siebzig"
			},
			{
				german: "achtzig",
				english: "eighty",
				example: "achtzig"
			},
			{
				german: "neunzig",
				english: "ninety",
				example: "neunzig"
			},
			{
				german: "hundert",
				english: "a hundred",
				example: "hundert"
			},
			{
				german: "einundzwanzig",
				english: "twenty-one",
				example: "Ich bin einundzwanzig."
			},
			{
				german: "sechzehn",
				english: "sixteen",
				example: "sechzehn"
			},
			{
				german: "siebzehn",
				english: "seventeen",
				example: "siebzehn"
			},
			{
				german: "achtzehn",
				english: "eighteen",
				example: "achtzehn"
			}
		],
		questions: [
			{
				id: "u1l4q1",
				type: "choice",
				prompt: "Which word is 16?",
				options: [
					"sechzehn",
					"sechszehn",
					"sechzig"
				],
				answer: "sechzehn",
				why: "16 drops the s: sechzehn. sechzig is 60.",
				error: "number"
			},
			{
				id: "u1l4q2",
				type: "type",
				prompt: "Write 21 as one German word.",
				answer: "einundzwanzig",
				why: "Ones first, then und, then the ten. One word.",
				error: "number"
			},
			{
				id: "u1l4q3",
				type: "type",
				prompt: "Translate: I am 30 years old.",
				answer: "Ich bin dreißig Jahre alt.",
				aliases: ["Ich bin dreissig Jahre alt."],
				why: "Age uses sein: ich bin … Jahre alt.",
				error: "verb"
			},
			{
				id: "u1l4q4",
				type: "gap",
				prompt: "Wie ___ bist du?",
				answer: "alt",
				why: "Wie alt bist du? asks for age.",
				error: "vocabulary"
			},
			{
				id: "u1l4q5",
				type: "choice",
				prompt: "Which word is 30?",
				options: [
					"dreißig",
					"dreizehn",
					"dreiundzig"
				],
				answer: "dreißig",
				why: "dreizehn is 13. dreißig is 30.",
				error: "number"
			}
		],
		speaking: "Say your age in a full sentence, then one other number between 20 and 100.",
		writing: "Write your age and the ages of two other people. Use Jahre alt.",
		writingWords: 30,
		canDo: [
			"I can say my age.",
			"I can read numbers to 100.",
			"I know sechzehn and siebzehn."
		]
	},
	{
		id: "u1l5",
		unit: 1,
		unitTitle: U$2,
		indexLabel: "05",
		title: "Spell your name",
		goal: "Use German letter names and choose du or Sie.",
		grammar: "du and Sie",
		minutes: 50,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Frau Adler",
				de: "Guten Tag. Wie heißen Sie?",
				en: "Good day. What is your name?"
			},
			{
				speaker: "Lina",
				de: "Guten Tag. Ich heiße Lina Berg.",
				en: "Good day. My name is Lina Berg."
			},
			{
				speaker: "Frau Adler",
				de: "Buchstabieren Sie Berg, bitte.",
				en: "Spell Berg, please."
			},
			{
				speaker: "Lina",
				de: "Be, e, er, ge.",
				en: "Be, e, er, ge."
			}
		],
		grammarNote: {
			lead: "Wie heißen Sie?",
			rule: "Use du with friends, family, children and classmates. Use Sie with adult strangers, in offices and with teachers unless they offer du. Sie is written with a capital and takes the plural verb: heißen, sind, kommen.",
			contrast: "English has one word, you. German makes you choose the relationship every time you speak.",
			examples: [
				{
					de: "Wie heißt du?",
					en: "What is your name? (informal)"
				},
				{
					de: "Wie heißen Sie?",
					en: "What is your name? (formal)"
				},
				{
					de: "Auf Wiedersehen.",
					en: "Goodbye. (formal)"
				}
			]
		},
		letters: [
			{
				g: "A",
				name: "a"
			},
			{
				g: "B",
				name: "be"
			},
			{
				g: "C",
				name: "tse"
			},
			{
				g: "D",
				name: "de"
			},
			{
				g: "E",
				name: "e"
			},
			{
				g: "F",
				name: "ef"
			},
			{
				g: "G",
				name: "ge"
			},
			{
				g: "H",
				name: "ha"
			},
			{
				g: "I",
				name: "i"
			},
			{
				g: "J",
				name: "jot"
			},
			{
				g: "K",
				name: "ka"
			},
			{
				g: "L",
				name: "el"
			},
			{
				g: "M",
				name: "em"
			},
			{
				g: "N",
				name: "en"
			},
			{
				g: "O",
				name: "o"
			},
			{
				g: "P",
				name: "pe"
			},
			{
				g: "Q",
				name: "ku"
			},
			{
				g: "R",
				name: "er"
			},
			{
				g: "S",
				name: "es"
			},
			{
				g: "T",
				name: "te"
			},
			{
				g: "U",
				name: "u"
			},
			{
				g: "V",
				name: "fau"
			},
			{
				g: "W",
				name: "we"
			},
			{
				g: "X",
				name: "iks"
			},
			{
				g: "Y",
				name: "ypsilon"
			},
			{
				g: "Z",
				name: "zet"
			},
			{
				g: "Ä",
				name: "ä"
			},
			{
				g: "Ö",
				name: "ö"
			},
			{
				g: "Ü",
				name: "ü"
			},
			{
				g: "ß",
				name: "eszett"
			}
		],
		vocab: [
			{
				german: "buchstabieren",
				english: "to spell",
				example: "Buchstabieren Sie bitte."
			},
			{
				german: "der Buchstabe",
				english: "letter",
				article: "der",
				plural: "die Buchstaben",
				example: "Der Buchstabe B heißt be."
			},
			{
				german: "Guten Tag",
				english: "good day",
				example: "Guten Tag, Frau Adler."
			},
			{
				german: "Guten Morgen",
				english: "good morning",
				example: "Guten Morgen!"
			},
			{
				german: "Guten Abend",
				english: "good evening",
				example: "Guten Abend!"
			},
			{
				german: "tschüss",
				english: "bye (informal)",
				example: "Tschüss, Ben!"
			},
			{
				german: "Auf Wiedersehen",
				english: "goodbye (formal)",
				example: "Auf Wiedersehen, Frau Adler."
			},
			{
				german: "der Vorname",
				english: "first name",
				article: "der",
				plural: "die Vornamen",
				example: "Mein Vorname ist Lina."
			},
			{
				german: "der Nachname",
				english: "surname",
				article: "der",
				plural: "die Nachnamen",
				example: "Mein Nachname ist Berg."
			},
			{
				german: "Frau",
				english: "Ms / Mrs",
				example: "Guten Tag, Frau Adler."
			},
			{
				german: "Herr",
				english: "Mr",
				example: "Guten Tag, Herr Berg."
			},
			{
				german: "gern",
				english: "gladly",
				example: "Ja, gern."
			},
			{
				german: "das Alphabet",
				english: "alphabet",
				article: "das",
				example: "Ich lerne das Alphabet."
			},
			{
				german: "hier",
				english: "here",
				example: "Ich bin neu hier."
			},
			{
				german: "der Kurs",
				english: "course",
				article: "der",
				plural: "die Kurse",
				example: "Der Kurs ist neu."
			}
		],
		questions: [
			{
				id: "u1l5q1",
				type: "choice",
				prompt: "A stranger at a reception desk. Which question is polite?",
				options: [
					"Wie heißen Sie?",
					"Wie heißt du?",
					"Du heißt wie?"
				],
				answer: "Wie heißen Sie?",
				why: "Sie is the safe choice with an adult you do not know.",
				error: "pronoun"
			},
			{
				id: "u1l5q2",
				type: "type",
				prompt: "What is the German name of the letter B?",
				answer: "be",
				why: "B is be, not bee.",
				error: "spelling"
			},
			{
				id: "u1l5q3",
				type: "gap",
				prompt: "Guten ___. Ich heiße Lara.",
				answer: "Tag",
				aliases: ["Morgen", "Abend"],
				why: "Guten Tag, Guten Morgen and Guten Abend are the set greetings.",
				error: "vocabulary"
			},
			{
				id: "u1l5q4",
				type: "choice",
				prompt: "The classroom name of the letter Z is…",
				options: [
					"zet",
					"zi",
					"zed"
				],
				answer: "zet",
				why: "Z is zet. C is tse, so they stay distinct.",
				error: "spelling"
			},
			{
				id: "u1l5q5",
				type: "order",
				prompt: "Build the formal question.",
				words: [
					"Sie",
					"heißen",
					"Wie"
				],
				answer: "Wie heißen Sie?",
				why: "Wie + plural verb + Sie.",
				error: "word-order"
			}
		],
		speaking: "Spell your first name with German letter names, then say Ich heiße and your name.",
		writing: "Write a short formal greeting: Guten Tag, your name, and where you come from.",
		writingWords: 30,
		canDo: [
			"I can choose du or Sie.",
			"I can spell a short name.",
			"I can say hello and goodbye formally."
		]
	},
	{
		id: "u1rev",
		unit: 1,
		unitTitle: U$2,
		indexLabel: "Review",
		title: "Unit 1 review",
		goal: "Put greetings, origin, numbers and Sie back together.",
		grammar: "Unit 1 mix",
		minutes: 35,
		kind: "review",
		dialogue: [
			{
				speaker: "Sara",
				de: "Guten Tag. Ich heiße Sara. Wie heißen Sie?",
				en: "Good day. My name is Sara. What is your name?"
			},
			{
				speaker: "Leo",
				de: "Ich heiße Leo Berger. Ich komme aus Österreich.",
				en: "My name is Leo Berger. I come from Austria."
			},
			{
				speaker: "Sara",
				de: "Sprechen Sie Deutsch?",
				en: "Do you speak German?"
			},
			{
				speaker: "Leo",
				de: "Ja, ein bisschen. Ich bin zwanzig Jahre alt.",
				en: "Yes, a little. I am twenty years old."
			}
		],
		vocab: [],
		questions: [
			{
				id: "u1rq1",
				type: "type",
				prompt: "Translate: I come from Austria and I live in Berlin.",
				answer: "Ich komme aus Österreich und ich wohne in Berlin.",
				aliases: ["Ich komme aus Österreich und wohne in Berlin."],
				why: "kommen for origin, wohnen for the city.",
				error: "verb"
			},
			{
				id: "u1rq2",
				type: "choice",
				prompt: "Which question asks for an age?",
				options: [
					"Wie alt bist du?",
					"Woher kommst du?",
					"Wie heißt du?"
				],
				answer: "Wie alt bist du?",
				why: "Wie alt uses sein: bist.",
				error: "vocabulary"
			},
			{
				id: "u1rq3",
				type: "gap",
				prompt: "Ich ___ einundzwanzig Jahre alt.",
				answer: "bin",
				why: "Age uses sein, and ich takes bin.",
				error: "verb"
			},
			{
				id: "u1rq4",
				type: "order",
				prompt: "Build the formal greeting question.",
				words: [
					"Sie",
					"heißen",
					"Wie"
				],
				answer: "Wie heißen Sie?",
				why: "Formal you uses heißen.",
				error: "pronoun"
			}
		],
		speaking: "Introduce yourself in four sentences: name, origin, age, language.",
		writing: "Write that introduction down. Aim for a clean paragraph.",
		writingWords: 40,
		canDo: [
			"I can introduce myself.",
			"I can ask the Unit 1 questions.",
			"I notice when a sentence uses the wrong verb ending."
		]
	},
	{
		id: "u1quiz",
		unit: 1,
		unitTitle: U$2,
		indexLabel: "Quiz",
		title: "Unit 1 checkpoint",
		goal: "Show you can use Unit 1 without the lesson open.",
		grammar: "Checkpoint",
		minutes: 25,
		kind: "checkpoint",
		dialogue: [{
			speaker: "Sam",
			de: "Guten Tag. Ich heiße Sam Adler.",
			en: "Good day. My name is Sam Adler."
		}, {
			speaker: "Sam",
			de: "Ich komme aus Österreich und wohne in Wien.",
			en: "I come from Austria and live in Vienna."
		}],
		passage: {
			de: "Guten Tag. Ich heiße Sam Adler. Ich komme aus Österreich und wohne in Wien. Ich bin siebenundzwanzig Jahre alt. Ich spreche Deutsch und Englisch. Meine Telefonnummer ist null, sechs, sechs, vier.",
			en: "Good day. My name is Sam Adler. I come from Austria and I live in Vienna. I am twenty-seven. I speak German and English. My phone number is zero, six, six, four."
		},
		vocab: [],
		questions: [
			{
				id: "u1qq1",
				type: "choice",
				prompt: "Where is Sam from?",
				options: [
					"Österreich",
					"Deutschland",
					"die Schweiz"
				],
				answer: "Österreich",
				why: "The text says: Ich komme aus Österreich.",
				error: "vocabulary"
			},
			{
				id: "u1qq2",
				type: "type",
				prompt: "How old is Sam? Write the number as a German word.",
				answer: "siebenundzwanzig",
				why: "27 is sieben + und + zwanzig, one word.",
				error: "number"
			},
			{
				id: "u1qq3",
				type: "gap",
				prompt: "Ich ___ aus Österreich.",
				answer: "komme",
				why: "kommen with ich is komme.",
				error: "verb"
			},
			{
				id: "u1qq4",
				type: "choice",
				prompt: "Which is 16?",
				options: [
					"sechzehn",
					"sechzig",
					"sechszehn"
				],
				answer: "sechzehn",
				why: "sechzehn is 16. sechzig is 60.",
				error: "number"
			},
			{
				id: "u1qq5",
				type: "type",
				prompt: "Write a formal goodbye.",
				answer: "Auf Wiedersehen.",
				aliases: ["Auf Wiedersehen"],
				why: "Auf Wiedersehen is the formal goodbye. Tschüss is informal.",
				error: "vocabulary"
			},
			{
				id: "u1qq6",
				type: "order",
				prompt: "Ask Sam’s name formally.",
				words: [
					"Sie",
					"heißen",
					"Wie"
				],
				answer: "Wie heißen Sie?",
				why: "A first meeting in this text uses Sie.",
				error: "pronoun"
			}
		],
		speaking: "Read Sam’s introduction aloud, then give your own in the same shape.",
		writing: "",
		writingWords: 0,
		canDo: ["I can use Unit 1 without looking every word up."]
	}
];
var U$1 = "People and family";
var unit2 = [
	{
		id: "u2l1",
		unit: 2,
		unitTitle: U$1,
		indexLabel: "01",
		title: "This is my family",
		goal: "Name family members with the right article and plural.",
		grammar: "Nouns, plurals, das ist",
		minutes: 55,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Nora",
				de: "Das ist meine Familie.",
				en: "This is my family."
			},
			{
				speaker: "Paul",
				de: "Wer ist das?",
				en: "Who is that?"
			},
			{
				speaker: "Nora",
				de: "Das ist mein Vater. Er heißt Sam. Das ist meine Schwester. Sie heißt Lea.",
				en: "That is my father. His name is Sam. That is my sister. Her name is Lea."
			},
			{
				speaker: "Paul",
				de: "Und das sind deine Eltern?",
				en: "And those are your parents?"
			},
			{
				speaker: "Nora",
				de: "Ja. Das sind meine Eltern.",
				en: "Yes. Those are my parents."
			}
		],
		grammarNote: {
			lead: "Das ist der Vater. Das sind die Eltern.",
			rule: "Use Das ist with one person and Das sind with a plural. Every noun has an article: der, die or das. Plurals are not one rule. Learn the plural with the word: der Vater, die Väter; die Schwester, die Schwestern; das Kind, die Kinder.",
			contrast: "English almost always adds -s. German plurals change in several ways, and sometimes the vowel changes too.",
			examples: [
				{
					de: "Das ist die Mutter.",
					en: "That is the mother."
				},
				{
					de: "Das sind die Kinder.",
					en: "Those are the children."
				},
				{
					de: "Die Schwester heißt Lea.",
					en: "The sister is called Lea."
				}
			]
		},
		vocab: [
			{
				german: "die Familie",
				english: "family",
				article: "die",
				plural: "die Familien",
				example: "Das ist meine Familie."
			},
			{
				german: "der Vater",
				english: "father",
				article: "der",
				plural: "die Väter",
				example: "Das ist der Vater."
			},
			{
				german: "die Mutter",
				english: "mother",
				article: "die",
				plural: "die Mütter",
				example: "Das ist die Mutter."
			},
			{
				german: "die Eltern",
				english: "parents",
				article: "die",
				example: "Das sind die Eltern."
			},
			{
				german: "der Bruder",
				english: "brother",
				article: "der",
				plural: "die Brüder",
				example: "Das ist der Bruder."
			},
			{
				german: "die Schwester",
				english: "sister",
				article: "die",
				plural: "die Schwestern",
				example: "Die Schwester heißt Lea."
			},
			{
				german: "das Kind",
				english: "child",
				article: "das",
				plural: "die Kinder",
				example: "Das Kind ist jung."
			},
			{
				german: "der Sohn",
				english: "son",
				article: "der",
				plural: "die Söhne",
				example: "Das ist der Sohn."
			},
			{
				german: "die Tochter",
				english: "daughter",
				article: "die",
				plural: "die Töchter",
				example: "Das ist die Tochter."
			},
			{
				german: "die Großmutter",
				english: "grandmother",
				article: "die",
				plural: "die Großmütter",
				example: "Die Großmutter heißt Ruth."
			},
			{
				german: "der Großvater",
				english: "grandfather",
				article: "der",
				plural: "die Großväter",
				example: "Der Großvater heißt Otto."
			},
			{
				german: "die Geschwister",
				english: "siblings",
				article: "die",
				example: "Hast du Geschwister?"
			},
			{
				german: "wer",
				english: "who",
				example: "Wer ist das?"
			},
			{
				german: "das",
				english: "that",
				example: "Wer ist das?"
			},
			{
				german: "das sind",
				english: "those are",
				example: "Das sind meine Eltern."
			}
		],
		questions: [
			{
				id: "u2l1q1",
				type: "choice",
				prompt: "Which article goes with Bruder?",
				options: [
					"der Bruder",
					"die Bruder",
					"das Bruder"
				],
				answer: "der Bruder",
				why: "Bruder is masculine: der Bruder, die Brüder.",
				error: "article"
			},
			{
				id: "u2l1q2",
				type: "type",
				prompt: "Write the plural: das Kind → ?",
				answer: "die Kinder",
				why: "Kind takes the plural Kinder, with the article die.",
				error: "article"
			},
			{
				id: "u2l1q3",
				type: "gap",
				prompt: "Das ___ meine Eltern.",
				answer: "sind",
				why: "Eltern is plural, so Das sind.",
				error: "verb"
			},
			{
				id: "u2l1q4",
				type: "choice",
				prompt: "One father.",
				options: [
					"Das ist der Vater.",
					"Das sind der Vater.",
					"Das ist die Vater."
				],
				answer: "Das ist der Vater.",
				why: "One person uses Das ist, and Vater is der.",
				error: "article"
			},
			{
				id: "u2l1q5",
				type: "type",
				prompt: "Translate: The sister is called Lea.",
				answer: "Die Schwester heißt Lea.",
				aliases: ["Die Schwester heißt Lea"],
				why: "die Schwester, and heißen with sie is heißt.",
				error: "verb"
			}
		],
		speaking: "Point to three imaginary people and name them: Das ist … Er/Sie heißt …",
		writing: "List five family words with article and plural, then write two Das ist / Das sind sentences.",
		writingWords: 30,
		canDo: [
			"I can name close family with articles.",
			"I know four plurals.",
			"I can use Das ist and Das sind."
		]
	},
	{
		id: "u2l2",
		unit: 2,
		unitTitle: U$1,
		indexLabel: "02",
		title: "Tall, young, kind",
		goal: "Describe people with sein and a simple adjective.",
		grammar: "Adjectives after sein",
		minutes: 45,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Paul",
				de: "Ist dein Bruder jung?",
				en: "Is your brother young?"
			},
			{
				speaker: "Nora",
				de: "Ja, er ist jung und groß.",
				en: "Yes, he is young and tall."
			},
			{
				speaker: "Paul",
				de: "Und deine Schwester?",
				en: "And your sister?"
			},
			{
				speaker: "Nora",
				de: "Sie ist klein und lustig. Meine Mutter ist sehr nett.",
				en: "She is short and funny. My mother is very kind."
			}
		],
		grammarNote: {
			lead: "Er ist groß.",
			rule: "After sein, the adjective has no ending. Er ist groß. Sie ist nett. Wir sind müde. Do not say Er ist großer.",
			contrast: "English also leaves the adjective bare after “is”. German only adds endings when the adjective sits in front of a noun. That comes later. For now, keep the adjective after sein.",
			examples: [
				{
					de: "Mein Vater ist ruhig.",
					en: "My father is calm."
				},
				{
					de: "Die Kinder sind jung.",
					en: "The children are young."
				},
				{
					de: "Sie ist sehr freundlich.",
					en: "She is very friendly."
				}
			]
		},
		vocab: [
			{
				german: "groß",
				english: "tall / big",
				example: "Er ist groß."
			},
			{
				german: "klein",
				english: "short / small",
				example: "Sie ist klein."
			},
			{
				german: "jung",
				english: "young",
				example: "Das Kind ist jung."
			},
			{
				german: "alt",
				english: "old",
				example: "Wie alt bist du?"
			},
			{
				german: "nett",
				english: "kind / nice",
				example: "Meine Mutter ist nett."
			},
			{
				german: "lustig",
				english: "funny",
				example: "Er ist lustig."
			},
			{
				german: "freundlich",
				english: "friendly",
				example: "Sie ist freundlich."
			},
			{
				german: "ruhig",
				english: "calm / quiet",
				example: "Mein Vater ist ruhig."
			},
			{
				german: "müde",
				english: "tired",
				example: "Ich bin müde."
			},
			{
				german: "interessant",
				english: "interesting",
				example: "Der Kurs ist interessant."
			},
			{
				german: "schön",
				english: "nice / beautiful",
				example: "Der Tag ist schön."
			},
			{
				german: "sehr",
				english: "very",
				example: "Sie ist sehr nett."
			},
			{
				german: "er",
				english: "he",
				example: "Er ist groß."
			},
			{
				german: "sie",
				english: "she / they",
				example: "Sie ist klein."
			},
			{
				german: "wir",
				english: "we",
				example: "Wir sind müde."
			}
		],
		questions: [
			{
				id: "u2l2q1",
				type: "gap",
				prompt: "Er ist ___. (tall)",
				answer: "groß",
				aliases: ["gross"],
				why: "After ist the adjective stays groß, with no ending.",
				error: "spelling"
			},
			{
				id: "u2l2q2",
				type: "choice",
				prompt: "Which sentence is correct?",
				options: [
					"Er ist groß.",
					"Er ist großer.",
					"Er ist große."
				],
				answer: "Er ist groß.",
				why: "No adjective ending after sein.",
				error: "verb"
			},
			{
				id: "u2l2q3",
				type: "type",
				prompt: "Translate: She is friendly.",
				answer: "Sie ist freundlich.",
				why: "sie (she) takes ist.",
				error: "verb"
			},
			{
				id: "u2l2q4",
				type: "order",
				prompt: "Build: My father is calm.",
				words: [
					"ruhig",
					"ist",
					"Vater",
					"Mein"
				],
				answer: "Mein Vater ist ruhig.",
				why: "Subject, verb in second place, adjective after sein.",
				error: "word-order"
			},
			{
				id: "u2l2q5",
				type: "choice",
				prompt: "We are tired.",
				options: [
					"Wir sind müde.",
					"Wir ist müde.",
					"Wir seid müde."
				],
				answer: "Wir sind müde.",
				why: "wir takes sind.",
				error: "verb"
			}
		],
		speaking: "Describe two people you know. Use ist or sind and one adjective each.",
		writing: "Write four sentences describing people. No adjective endings.",
		writingWords: 30,
		canDo: [
			"I can describe a person with sein.",
			"I do not add endings after ist.",
			"I know jung, alt, groß and klein."
		]
	},
	{
		id: "u2l3",
		unit: 2,
		unitTitle: U$1,
		indexLabel: "03",
		title: "I have a sister",
		goal: "Talk about siblings and simple possession with haben.",
		grammar: "haben",
		minutes: 50,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Paul",
				de: "Hast du Geschwister?",
				en: "Do you have siblings?"
			},
			{
				speaker: "Nora",
				de: "Ja, ich habe eine Schwester. Ich habe keinen Bruder.",
				en: "Yes, I have a sister. I do not have a brother."
			},
			{
				speaker: "Paul",
				de: "Ich habe einen Bruder. Er ist achtzehn.",
				en: "I have a brother. He is eighteen."
			},
			{
				speaker: "Nora",
				de: "Wir haben heute Zeit.",
				en: "We have time today."
			}
		],
		grammarNote: {
			lead: "Ich habe eine Schwester.",
			rule: "haben: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben. Learn two phrases as chunks: Ich habe einen Bruder. Ich habe eine Schwester. einen is the masculine form after haben. We will practise that pattern properly later.",
			contrast: "English uses have/has. German changes more: habe, hast, hat, haben, habt.",
			examples: [
				{
					de: "Ich habe eine Frage.",
					en: "I have a question."
				},
				{
					de: "Hast du Geschwister?",
					en: "Do you have siblings?"
				},
				{
					de: "Sie hat zwei Kinder.",
					en: "She has two children."
				}
			],
			table: [
				{
					a: "ich",
					b: "habe"
				},
				{
					a: "du",
					b: "hast"
				},
				{
					a: "er, sie, es",
					b: "hat"
				},
				{
					a: "wir",
					b: "haben"
				},
				{
					a: "ihr",
					b: "habt"
				},
				{
					a: "sie, Sie",
					b: "haben"
				}
			]
		},
		vocab: [
			{
				german: "haben",
				english: "to have",
				example: "Ich habe eine Schwester."
			},
			{
				german: "die Frage",
				english: "question",
				article: "die",
				plural: "die Fragen",
				example: "Ich habe eine Frage."
			},
			{
				german: "die Zeit",
				english: "time",
				article: "die",
				example: "Wir haben Zeit."
			},
			{
				german: "heute",
				english: "today",
				example: "Wir haben heute Zeit."
			},
			{
				german: "zwei",
				english: "two",
				example: "Sie hat zwei Kinder."
			},
			{
				german: "einen",
				english: "a (masculine, after haben)",
				example: "Ich habe einen Bruder."
			},
			{
				german: "eine",
				english: "a (feminine)",
				example: "Ich habe eine Schwester."
			},
			{
				german: "kein",
				english: "no / not a",
				example: "Ich habe keinen Bruder."
			},
			{
				german: "auch",
				english: "also",
				example: "Ich habe auch einen Bruder."
			},
			{
				german: "zusammen",
				english: "together",
				example: "Wir wohnen zusammen."
			},
			{
				german: "allein",
				english: "alone",
				example: "Er wohnt allein."
			},
			{
				german: "der Hund",
				english: "dog",
				article: "der",
				plural: "die Hunde",
				example: "Wir haben einen Hund."
			},
			{
				german: "die Katze",
				english: "cat",
				article: "die",
				plural: "die Katzen",
				example: "Sie hat eine Katze."
			},
			{
				german: "viele",
				english: "many",
				example: "Sie hat viele Fragen."
			},
			{
				german: "nur",
				english: "only",
				example: "Ich habe nur eine Schwester."
			}
		],
		questions: [
			{
				id: "u2l3q1",
				type: "gap",
				prompt: "Ich ___ eine Frage.",
				answer: "habe",
				why: "ich + haben = habe.",
				error: "verb"
			},
			{
				id: "u2l3q2",
				type: "choice",
				prompt: "du + haben",
				options: [
					"du hast",
					"du habst",
					"du haben"
				],
				answer: "du hast",
				why: "The du form is hast, not habst.",
				error: "verb"
			},
			{
				id: "u2l3q3",
				type: "type",
				prompt: "Translate: We have time.",
				answer: "Wir haben Zeit.",
				why: "wir takes haben.",
				error: "verb"
			},
			{
				id: "u2l3q4",
				type: "type",
				prompt: "Translate: I have a brother.",
				answer: "Ich habe einen Bruder.",
				why: "After haben, masculine Bruder uses einen in this phrase.",
				error: "article"
			},
			{
				id: "u2l3q5",
				type: "choice",
				prompt: "She has two children.",
				options: [
					"Sie hat zwei Kinder.",
					"Sie habe zwei Kinder.",
					"Sie hast zwei Kinder."
				],
				answer: "Sie hat zwei Kinder.",
				why: "she takes hat.",
				error: "verb"
			}
		],
		speaking: "Answer the question Hast du Geschwister? in two or three sentences.",
		writing: "Write what you have: family, a pet, or time today. Use habe or hat four times.",
		writingWords: 35,
		canDo: [
			"I can conjugate haben.",
			"I can say I have a sister or a brother.",
			"I can ask Hast du Geschwister?"
		]
	},
	{
		id: "u2l4",
		unit: 2,
		unitTitle: U$1,
		indexLabel: "04",
		title: "My, your, her",
		goal: "Use mein, dein, sein and ihr in the nominative.",
		grammar: "Possessive articles",
		minutes: 55,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Paul",
				de: "Wie heißt dein Vater?",
				en: "What is your father called?"
			},
			{
				speaker: "Nora",
				de: "Mein Vater heißt Sam. Seine Mutter heißt Ruth.",
				en: "My father is called Sam. His mother is called Ruth."
			},
			{
				speaker: "Paul",
				de: "Und deine Schwester?",
				en: "And your sister?"
			},
			{
				speaker: "Nora",
				de: "Meine Schwester heißt Lea. Ihr Kind heißt Pio.",
				en: "My sister is called Lea. Her child is called Pio."
			}
		],
		grammarNote: {
			lead: "Mein Vater heißt Sam. Meine Mutter heißt Ama.",
			rule: "Possessives take the shape of the noun, not of the owner. Masculine and neuter nominative have no ending: mein Vater, mein Kind. Feminine and plural add -e: meine Mutter, meine Eltern. dein is for du, sein for er, ihr for sie (she).",
			contrast: "English his/her follows the owner. German sein/ihr follows the owner, but the ending follows the noun: seine Mutter (his mother), ihre Mutter (her mother).",
			examples: [
				{
					de: "Das ist mein Bruder.",
					en: "That is my brother."
				},
				{
					de: "Das ist meine Schwester.",
					en: "That is my sister."
				},
				{
					de: "Das sind meine Eltern.",
					en: "Those are my parents."
				}
			],
			table: [
				{
					a: "ich + der/das",
					b: "mein"
				},
				{
					a: "ich + die / plural",
					b: "meine"
				},
				{
					a: "du + der/das",
					b: "dein"
				},
				{
					a: "du + die / plural",
					b: "deine"
				},
				{
					a: "er + die",
					b: "seine"
				},
				{
					a: "sie + der",
					b: "ihr"
				}
			]
		},
		vocab: [
			{
				german: "mein",
				english: "my (der/das)",
				example: "Mein Vater heißt Sam."
			},
			{
				german: "meine",
				english: "my (die / plural)",
				example: "Meine Mutter ist nett."
			},
			{
				german: "dein",
				english: "your (informal, der/das)",
				example: "Wie heißt dein Vater?"
			},
			{
				german: "deine",
				english: "your (informal, die / plural)",
				example: "Deine Schwester ist lustig."
			},
			{
				german: "sein",
				english: "his (der/das)",
				example: "Sein Kind ist jung."
			},
			{
				german: "seine",
				english: "his (die / plural)",
				example: "Seine Mutter heißt Ruth."
			},
			{
				german: "ihr",
				english: "her (der/das)",
				example: "Ihr Kind heißt Pio."
			},
			{
				german: "ihre",
				english: "her (die / plural)",
				example: "Ihre Schwester ist jung."
			},
			{
				german: "unser",
				english: "our (der/das)",
				example: "Unser Vater ist ruhig."
			},
			{
				german: "unsere",
				english: "our (die / plural)",
				example: "Unsere Familie ist groß."
			},
			{
				german: "heißen",
				english: "to be called",
				example: "Wie heißt deine Mutter?"
			},
			{
				german: "Personen",
				english: "people",
				example: "Das sind drei Personen."
			},
			{
				german: "der Freund",
				english: "friend (male)",
				article: "der",
				plural: "die Freunde",
				example: "Das ist mein Freund."
			},
			{
				german: "die Freundin",
				english: "friend (female)",
				article: "die",
				plural: "die Freundinnen",
				example: "Das ist meine Freundin."
			},
			{
				german: "zusammen",
				english: "together",
				example: "Wir lernen zusammen."
			}
		],
		questions: [
			{
				id: "u2l4q1",
				type: "choice",
				prompt: "my mother",
				options: [
					"meine Mutter",
					"mein Mutter",
					"meinen Mutter"
				],
				answer: "meine Mutter",
				why: "Mutter is die, so meine.",
				error: "possessive"
			},
			{
				id: "u2l4q2",
				type: "gap",
				prompt: "Wie heißt ___ Vater? (talking to a friend)",
				answer: "dein",
				why: "du + der Vater = dein Vater.",
				error: "possessive"
			},
			{
				id: "u2l4q3",
				type: "type",
				prompt: "Translate: Her sister is young.",
				answer: "Ihre Schwester ist jung.",
				why: "sie (she) + die Schwester = ihre.",
				error: "possessive"
			},
			{
				id: "u2l4q4",
				type: "choice",
				prompt: "my parents",
				options: [
					"meine Eltern",
					"mein Eltern",
					"meiner Eltern"
				],
				answer: "meine Eltern",
				why: "Plural takes the -e form: meine.",
				error: "possessive"
			},
			{
				id: "u2l4q5",
				type: "order",
				prompt: "Build: His mother is kind.",
				words: [
					"nett",
					"Mutter",
					"ist",
					"Seine"
				],
				answer: "Seine Mutter ist nett.",
				why: "Mutter is feminine, so seine, not sein.",
				error: "possessive"
			}
		],
		speaking: "Say three sentences: Mein/Meine … heißt … ist …",
		writing: "Describe three people with the right possessive. Include one plural.",
		writingWords: 40,
		canDo: [
			"I can choose mein or meine.",
			"I can use dein with a friend.",
			"I can tell sein from ihr."
		]
	},
	{
		id: "u2l5",
		unit: 2,
		unitTitle: U$1,
		indexLabel: "05",
		title: "Introduce your family",
		goal: "Give a short spoken and written family introduction.",
		grammar: "Putting Unit 2 together",
		minutes: 50,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Nora",
				de: "Hallo! Ich heiße Nora. Ich komme aus Ghana. Ich bin zweiundzwanzig Jahre alt.",
				en: "Hello! My name is Nora. I come from Ghana. I am twenty-two."
			},
			{
				speaker: "Nora",
				de: "Das ist meine Familie. Mein Vater heißt Kofi. Er ist groß und ruhig.",
				en: "This is my family. My father is called Kofi. He is tall and calm."
			},
			{
				speaker: "Nora",
				de: "Meine Mutter heißt Ama. Sie ist sehr nett.",
				en: "My mother is called Ama. She is very kind."
			},
			{
				speaker: "Nora",
				de: "Ich habe eine Schwester. Sie ist jung und lustig.",
				en: "I have a sister. She is young and funny."
			}
		],
		grammarNote: {
			lead: "Mein Vater heißt Kofi. Er ist groß und ruhig.",
			rule: "A clean introduction uses four moves: name and origin, Das ist meine Familie, a possessive plus heißt, then sein or haben with one extra fact. Keep adjectives after ist.",
			contrast: "You do not need long sentences. Two facts per person is enough at A1.",
			examples: [
				{
					de: "Ich habe eine Schwester.",
					en: "I have a sister."
				},
				{
					de: "Sie ist lustig.",
					en: "She is funny."
				},
				{
					de: "Wir haben Zeit.",
					en: "We have time."
				}
			]
		},
		vocab: [
			{
				german: "zuerst",
				english: "first",
				example: "Zuerst sage ich meinen Namen."
			},
			{
				german: "dann",
				english: "then",
				example: "Dann sage ich die Familie."
			},
			{
				german: "die Person",
				english: "person",
				article: "die",
				plural: "die Personen",
				example: "Das sind vier Personen."
			},
			{
				german: "stellen",
				english: "to introduce",
				example: "Ich stelle meine Familie vor."
			},
			{
				german: "vorstellen",
				english: "to introduce",
				example: "Ich stelle mich vor."
			},
			{
				german: "mich",
				english: "myself (me)",
				example: "Ich stelle mich vor."
			},
			{
				german: "heißen",
				english: "to be called",
				example: "Er heißt Kofi."
			},
			{
				german: "aus",
				english: "from",
				example: "Ich komme aus Ghana."
			},
			{
				german: "Jahre alt",
				english: "years old",
				example: "Ich bin zweiundzwanzig Jahre alt."
			},
			{
				german: "und",
				english: "and",
				example: "groß und ruhig"
			},
			{
				german: "auch",
				english: "also",
				example: "Sie ist auch nett."
			},
			{
				german: "natürlich",
				english: "of course",
				example: "Ja, natürlich."
			},
			{
				german: "genau",
				english: "exactly",
				example: "Genau, das ist mein Vater."
			},
			{
				german: "die Schwester",
				english: "sister",
				article: "die",
				plural: "die Schwestern",
				example: "Ich habe eine Schwester."
			},
			{
				german: "der Vater",
				english: "father",
				article: "der",
				plural: "die Väter",
				example: "Mein Vater heißt Kofi."
			}
		],
		questions: [
			{
				id: "u2l5q1",
				type: "order",
				prompt: "Build Nora’s sentence about her father.",
				words: [
					"Kofi",
					"heißt",
					"Vater",
					"Mein"
				],
				answer: "Mein Vater heißt Kofi.",
				why: "Possessive and noun, then the verb in second place.",
				error: "word-order"
			},
			{
				id: "u2l5q2",
				type: "gap",
				prompt: "Ich habe ___ Schwester.",
				answer: "eine",
				why: "Schwester is feminine: eine Schwester.",
				error: "article"
			},
			{
				id: "u2l5q3",
				type: "type",
				prompt: "Translate: She is young and funny.",
				answer: "Sie ist jung und lustig.",
				why: "Two adjectives after ist, joined by und. No endings.",
				error: "verb"
			}
		],
		speaking: "Introduce yourself and one person in your family. Six sentences is enough.",
		writing: "Write 40 to 60 words: your name, origin, age, and two family members.",
		writingWords: 45,
		canDo: [
			"I can introduce my family.",
			"I can combine haben, sein and a possessive.",
			"I can keep a short text clear."
		]
	},
	{
		id: "u2rev",
		unit: 2,
		unitTitle: U$1,
		indexLabel: "Review",
		title: "Unit 2 review",
		goal: "Mix family nouns, haben, sein and possessives.",
		grammar: "Unit 2 mix",
		minutes: 35,
		kind: "review",
		dialogue: [
			{
				speaker: "Nora",
				de: "Das ist mein Vater. Er ist groß.",
				en: "That is my father. He is tall."
			},
			{
				speaker: "Paul",
				de: "Hast du auch eine Schwester?",
				en: "Do you also have a sister?"
			},
			{
				speaker: "Nora",
				de: "Ja. Meine Schwester ist lustig.",
				en: "Yes. My sister is funny."
			},
			{
				speaker: "Paul",
				de: "Meine Eltern sind sehr nett.",
				en: "My parents are very kind."
			}
		],
		vocab: [],
		questions: [
			{
				id: "u2rq1",
				type: "type",
				prompt: "Write the plural of der Bruder.",
				answer: "die Brüder",
				aliases: ["die Brueder"],
				why: "Bruder umlauts in the plural: die Brüder.",
				error: "article"
			},
			{
				id: "u2rq2",
				type: "choice",
				prompt: "Correct sentence?",
				options: [
					"Sie hat einen Bruder.",
					"Sie haben einen Bruder.",
					"Sie hast einen Bruder."
				],
				answer: "Sie hat einen Bruder.",
				why: "she = hat. The phrase uses einen Bruder.",
				error: "verb"
			},
			{
				id: "u2rq3",
				type: "gap",
				prompt: "___ Mutter ist nett. (my)",
				answer: "Meine",
				why: "die Mutter takes meine.",
				error: "possessive"
			},
			{
				id: "u2rq4",
				type: "order",
				prompt: "Build: We are tired.",
				words: [
					"müde",
					"sind",
					"Wir"
				],
				answer: "Wir sind müde.",
				why: "wir + sind, adjective after the verb.",
				error: "verb"
			}
		],
		speaking: "Describe your family in one minute. Articles out loud.",
		writing: "Write the same description. Mark every der, die and das.",
		writingWords: 40,
		canDo: [
			"I can describe people.",
			"I can use haben without stopping to think.",
			"I hear the difference between mein and meine."
		]
	},
	{
		id: "u2quiz",
		unit: 2,
		unitTitle: U$1,
		indexLabel: "Quiz",
		title: "Unit 2 checkpoint",
		goal: "Read a family text and answer without notes.",
		grammar: "Checkpoint",
		minutes: 25,
		kind: "checkpoint",
		dialogue: [{
			speaker: "Nora",
			de: "Meine Familie ist nicht groß, aber nett.",
			en: "My family is not big, but it is kind."
		}],
		passage: {
			de: "Nora Berg ist zweiundzwanzig. Sie kommt aus Ghana. Ihr Vater heißt Kofi. Er ist groß und ruhig. Ihre Mutter heißt Ama. Nora hat eine Schwester. Die Schwester ist jung und lustig. Nora hat keinen Bruder.",
			en: "Nora Berg is twenty-two. She comes from Ghana. Her father is called Kofi. He is tall and calm. Her mother is called Ama. Nora has a sister. The sister is young and funny. Nora does not have a brother."
		},
		vocab: [],
		questions: [
			{
				id: "u2qq1",
				type: "choice",
				prompt: "Nora’s father is…",
				options: [
					"groß und ruhig",
					"jung und lustig",
					"klein und müde"
				],
				answer: "groß und ruhig",
				why: "The text says: Er ist groß und ruhig.",
				error: "vocabulary"
			},
			{
				id: "u2qq2",
				type: "gap",
				prompt: "___ Mutter heißt Ama. (her)",
				answer: "Ihre",
				why: "Nora is sie, and Mutter is feminine: ihre.",
				error: "possessive"
			},
			{
				id: "u2qq3",
				type: "type",
				prompt: "Translate: Nora has a sister.",
				answer: "Nora hat eine Schwester.",
				why: "hat + eine Schwester.",
				error: "verb"
			},
			{
				id: "u2qq4",
				type: "choice",
				prompt: "Plural of das Kind?",
				options: [
					"die Kinder",
					"die Kinds",
					"die Kinde"
				],
				answer: "die Kinder",
				why: "The plural is irregular: die Kinder.",
				error: "article"
			},
			{
				id: "u2qq5",
				type: "order",
				prompt: "Build: My father is calm.",
				words: [
					"ruhig",
					"ist",
					"Vater",
					"Mein"
				],
				answer: "Mein Vater ist ruhig.",
				why: "Verb second, adjective after ist.",
				error: "word-order"
			},
			{
				id: "u2qq6",
				type: "type",
				prompt: "How old is Nora? Write the German number word.",
				answer: "zweiundzwanzig",
				why: "22 is zwei + und + zwanzig.",
				error: "number"
			}
		],
		speaking: "Summarise Nora’s family in your own German, then switch to your family.",
		writing: "",
		writingWords: 0,
		canDo: ["I can read a short family text and answer from it."]
	}
];
var U = "Daily routine and time";
var unit3 = [
	{
		id: "u3l1",
		unit: 3,
		unitTitle: U,
		indexLabel: "01",
		title: "What time is it?",
		goal: "Tell the time on the hour, quarter and half hour.",
		grammar: "Clock times",
		minutes: 55,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Tim",
				de: "Wie spät ist es?",
				en: "What time is it?"
			},
			{
				speaker: "Ina",
				de: "Es ist halb neun.",
				en: "It is half past eight."
			},
			{
				speaker: "Tim",
				de: "Halb neun? Also acht Uhr dreißig?",
				en: "Half nine? So eight thirty?"
			},
			{
				speaker: "Ina",
				de: "Ja. Wir lernen um neun Uhr.",
				en: "Yes. We learn at nine o’clock."
			}
		],
		grammarNote: {
			lead: "Es ist halb vier.",
			rule: "Es ist drei Uhr means 3:00. Viertel nach drei is 3:15. Halb vier is 3:30, halfway to the next hour. Viertel vor vier is 3:45. um drei Uhr means at three o’clock.",
			contrast: "In English, “half four” is sometimes 4:30. In German, halb vier is always 3:30. The hour named is the one you are going towards.",
			examples: [
				{
					de: "Es ist Viertel nach drei.",
					en: "It is quarter past three."
				},
				{
					de: "Es ist halb vier.",
					en: "It is half past three."
				},
				{
					de: "Es ist Viertel vor vier.",
					en: "It is quarter to four."
				}
			]
		},
		vocab: [
			{
				german: "wie spät",
				english: "what time",
				example: "Wie spät ist es?"
			},
			{
				german: "die Uhr",
				english: "clock / o'clock",
				article: "die",
				plural: "die Uhren",
				example: "Es ist drei Uhr."
			},
			{
				german: "die Zeit",
				english: "time",
				article: "die",
				example: "Ich habe Zeit."
			},
			{
				german: "halb",
				english: "half (towards the hour)",
				example: "Es ist halb vier."
			},
			{
				german: "Viertel",
				english: "quarter",
				example: "Es ist Viertel nach drei."
			},
			{
				german: "nach",
				english: "past / after",
				example: "Viertel nach drei."
			},
			{
				german: "vor",
				english: "to / before",
				example: "Viertel vor vier."
			},
			{
				german: "um",
				english: "at (a clock time)",
				example: "Um neun Uhr lerne ich."
			},
			{
				german: "die Stunde",
				english: "hour",
				article: "die",
				plural: "die Stunden",
				example: "eine Stunde"
			},
			{
				german: "die Minute",
				english: "minute",
				article: "die",
				plural: "die Minuten",
				example: "dreißig Minuten"
			},
			{
				german: "der Morgen",
				english: "morning",
				article: "der",
				example: "am Morgen"
			},
			{
				german: "der Abend",
				english: "evening",
				article: "der",
				plural: "die Abende",
				example: "am Abend"
			},
			{
				german: "morgens",
				english: "in the mornings",
				example: "Ich lerne morgens."
			},
			{
				german: "abends",
				english: "in the evenings",
				example: "Abends koche ich."
			},
			{
				german: "mittags",
				english: "at midday",
				example: "Mittags esse ich."
			}
		],
		questions: [
			{
				id: "u3l1q1",
				type: "choice",
				prompt: "Halb vier is…",
				options: [
					"3:30",
					"4:30",
					"4:00"
				],
				answer: "3:30",
				why: "Halb looks forward. Halb vier is halfway to four, so 3:30.",
				error: "time"
			},
			{
				id: "u3l1q2",
				type: "type",
				prompt: "Write 3:15 in German. Start with Es ist.",
				answer: "Es ist Viertel nach drei.",
				why: "Quarter past uses Viertel nach.",
				error: "time"
			},
			{
				id: "u3l1q3",
				type: "gap",
				prompt: "Es ist Viertel ___ vier. (3:45)",
				answer: "vor",
				why: "Before the hour is vor.",
				error: "time"
			},
			{
				id: "u3l1q4",
				type: "type",
				prompt: "Translate: at seven o’clock.",
				answer: "um sieben Uhr",
				aliases: ["Um sieben Uhr."],
				why: "Clock times use um … Uhr.",
				error: "time"
			},
			{
				id: "u3l1q5",
				type: "choice",
				prompt: "Es ist acht Uhr.",
				options: [
					"8:00",
					"8:30",
					"7:30"
				],
				answer: "8:00",
				why: "On the hour you only need the number and Uhr.",
				error: "time"
			}
		],
		speaking: "Say four times: an exact hour, a half hour, a quarter past and a quarter to.",
		writing: "Write those four times as full sentences with Es ist or um.",
		writingWords: 25,
		canDo: [
			"I can ask the time.",
			"I know halb looks forward.",
			"I can say um … Uhr."
		]
	},
	{
		id: "u3l2",
		unit: 3,
		unitTitle: U,
		indexLabel: "02",
		title: "Days and months",
		goal: "Say when something happens with am and im.",
		grammar: "am, im, and verb-second",
		minutes: 50,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Ina",
				de: "Der Kurs ist am Montag.",
				en: "The course is on Monday."
			},
			{
				speaker: "Tim",
				de: "Und am Freitag?",
				en: "And on Friday?"
			},
			{
				speaker: "Ina",
				de: "Am Freitag arbeite ich. Im Januar habe ich frei.",
				en: "On Friday I work. In January I am off."
			},
			{
				speaker: "Tim",
				de: "Heute ist schön. Morgen lerne ich Deutsch.",
				en: "Today is nice. Tomorrow I study German."
			}
		],
		grammarNote: {
			lead: "Am Montag lerne ich Deutsch.",
			rule: "Days take am: am Montag, am Freitag. Months take im: im Januar, im Mai. heute, morgen and gestern stand alone. If the time expression comes first, the verb stays in second place: Am Freitag arbeite ich. Not Am Freitag ich arbeite.",
			contrast: "English can say “On Friday I work” with the subject still before the verb. German will not leave the verb late. Second place means second idea, not second word.",
			examples: [
				{
					de: "Heute ist Montag.",
					en: "Today is Monday."
				},
				{
					de: "Ich lerne am Sonntag.",
					en: "I study on Sunday."
				},
				{
					de: "Im Mai wohne ich in Berlin.",
					en: "In May I live in Berlin."
				}
			]
		},
		grids: [{
			title: "Days",
			items: [
				"Montag",
				"Dienstag",
				"Mittwoch",
				"Donnerstag",
				"Freitag",
				"Samstag",
				"Sonntag"
			]
		}, {
			title: "Months",
			items: [
				"Januar",
				"Februar",
				"März",
				"April",
				"Mai",
				"Juni",
				"Juli",
				"August",
				"September",
				"Oktober",
				"November",
				"Dezember"
			]
		}],
		vocab: [
			{
				german: "der Tag",
				english: "day",
				article: "der",
				plural: "die Tage",
				example: "Der Tag ist schön."
			},
			{
				german: "die Woche",
				english: "week",
				article: "die",
				plural: "die Wochen",
				example: "diese Woche"
			},
			{
				german: "der Monat",
				english: "month",
				article: "der",
				plural: "die Monate",
				example: "im Monat Mai"
			},
			{
				german: "heute",
				english: "today",
				example: "Heute ist Montag."
			},
			{
				german: "morgen",
				english: "tomorrow",
				example: "Morgen lerne ich."
			},
			{
				german: "gestern",
				english: "yesterday",
				example: "Nicht gestern, morgen."
			},
			{
				german: "am",
				english: "on (a day)",
				example: "am Montag"
			},
			{
				german: "im",
				english: "in (a month)",
				example: "im Januar"
			},
			{
				german: "der Montag",
				english: "Monday",
				article: "der",
				example: "Am Montag arbeite ich."
			},
			{
				german: "der Freitag",
				english: "Friday",
				article: "der",
				example: "Am Freitag habe ich Zeit."
			},
			{
				german: "der Sonntag",
				english: "Sunday",
				article: "der",
				example: "Am Sonntag koche ich."
			},
			{
				german: "der Januar",
				english: "January",
				article: "der",
				example: "im Januar"
			},
			{
				german: "der Mai",
				english: "May",
				article: "der",
				example: "im Mai"
			},
			{
				german: "das Wochenende",
				english: "weekend",
				article: "das",
				plural: "die Wochenenden",
				example: "am Wochenende"
			},
			{
				german: "jeden Tag",
				english: "every day",
				example: "Ich lerne jeden Tag."
			}
		],
		questions: [
			{
				id: "u3l2q1",
				type: "gap",
				prompt: "___ Montag lerne ich Deutsch.",
				answer: "Am",
				why: "Days use am.",
				error: "time"
			},
			{
				id: "u3l2q2",
				type: "choice",
				prompt: "in May",
				options: [
					"im Mai",
					"am Mai",
					"in Mai"
				],
				answer: "im Mai",
				why: "Months use im, which is in + dem.",
				error: "time"
			},
			{
				id: "u3l2q3",
				type: "order",
				prompt: "Build: On Friday I work.",
				words: [
					"ich",
					"arbeite",
					"Freitag",
					"Am"
				],
				answer: "Am Freitag arbeite ich.",
				why: "Time first, verb second, subject third.",
				error: "word-order"
			},
			{
				id: "u3l2q4",
				type: "type",
				prompt: "Translate: Today is Monday.",
				answer: "Heute ist Montag.",
				why: "heute needs no am. The verb is still second.",
				error: "time"
			},
			{
				id: "u3l2q5",
				type: "choice",
				prompt: "The day after today is…",
				options: [
					"morgen",
					"gestern",
					"morgens"
				],
				answer: "morgen",
				why: "morgen is tomorrow. morgens means in the mornings. gestern is yesterday.",
				error: "vocabulary"
			}
		],
		speaking: "Say what you do on three different days. Start one sentence with Am …",
		writing: "Write a week in five sentences. Use am, heute or morgen at least once at the start of a sentence.",
		writingWords: 40,
		canDo: [
			"I can name the days.",
			"I can use am and im.",
			"I keep the verb in second place."
		]
	},
	{
		id: "u3l3",
		unit: 3,
		unitTitle: U,
		indexLabel: "03",
		title: "What I do",
		goal: "Use regular present-tense verbs for daily actions.",
		grammar: "Regular present tense",
		minutes: 55,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Ina",
				de: "Ich arbeite am Montag.",
				en: "I work on Monday."
			},
			{
				speaker: "Tim",
				de: "Was machst du am Abend?",
				en: "What do you do in the evening?"
			},
			{
				speaker: "Ina",
				de: "Ich koche und ich höre Musik. Ich lerne auch Deutsch.",
				en: "I cook and I listen to music. I also study German."
			},
			{
				speaker: "Tim",
				de: "Am Wochenende spiele ich Fußball.",
				en: "At the weekend I play football."
			}
		],
		grammarNote: {
			lead: "Ich lerne Deutsch. Du lernst Deutsch.",
			rule: "Most verbs take these endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. If the stem ends in -t or -d, du and er add an extra e: du arbeitest, er arbeitet. frühstücken keeps the ß: ich frühstücke.",
			contrast: "English barely changes the verb (work / works). German marks the person on the verb, so the ending is the information.",
			examples: [
				{
					de: "Ich koche am Abend.",
					en: "I cook in the evening."
				},
				{
					de: "Du arbeitest am Montag.",
					en: "You work on Monday."
				},
				{
					de: "Wir wohnen in Berlin.",
					en: "We live in Berlin."
				}
			],
			table: [
				{
					a: "ich",
					b: "lerne / arbeite"
				},
				{
					a: "du",
					b: "lernst / arbeitest"
				},
				{
					a: "er, sie, es",
					b: "lernt / arbeitet"
				},
				{
					a: "wir",
					b: "lernen / arbeiten"
				},
				{
					a: "ihr",
					b: "lernt / arbeitet"
				},
				{
					a: "sie, Sie",
					b: "lernen / arbeiten"
				}
			]
		},
		vocab: [
			{
				german: "arbeiten",
				english: "to work",
				example: "Ich arbeite am Montag."
			},
			{
				german: "lernen",
				english: "to learn",
				example: "Ich lerne Deutsch."
			},
			{
				german: "spielen",
				english: "to play",
				example: "Ich spiele Fußball."
			},
			{
				german: "hören",
				english: "to listen",
				example: "Ich höre Musik."
			},
			{
				german: "machen",
				english: "to do / make",
				example: "Was machst du?"
			},
			{
				german: "kochen",
				english: "to cook",
				example: "Ich koche am Abend."
			},
			{
				german: "frühstücken",
				english: "to have breakfast",
				example: "Ich frühstücke um sieben."
			},
			{
				german: "wohnen",
				english: "to live",
				example: "Wir wohnen in Berlin."
			},
			{
				german: "die Musik",
				english: "music",
				article: "die",
				example: "Ich höre Musik."
			},
			{
				german: "der Fußball",
				english: "football",
				article: "der",
				example: "Er spielt Fußball."
			},
			{
				german: "was",
				english: "what",
				example: "Was machst du?"
			},
			{
				german: "auch",
				english: "also",
				example: "Ich lerne auch Deutsch."
			},
			{
				german: "gern",
				english: "gladly / like to",
				example: "Ich koche gern."
			},
			{
				german: "manchmal",
				english: "sometimes",
				example: "Manchmal spiele ich."
			},
			{
				german: "immer",
				english: "always",
				example: "Ich lerne immer am Morgen."
			}
		],
		questions: [
			{
				id: "u3l3q1",
				type: "gap",
				prompt: "Ich ___ Deutsch.",
				answer: "lerne",
				why: "ich takes -e: lerne.",
				error: "verb"
			},
			{
				id: "u3l3q2",
				type: "choice",
				prompt: "du + arbeiten",
				options: [
					"du arbeitest",
					"du arbeiten",
					"du arbeite"
				],
				answer: "du arbeitest",
				why: "The stem ends in t, so du arbeitest.",
				error: "verb"
			},
			{
				id: "u3l3q3",
				type: "type",
				prompt: "Translate: I cook on Monday.",
				answer: "Ich koche am Montag.",
				aliases: ["Am Montag koche ich."],
				why: "Both word orders are fine. The verb stays second.",
				error: "verb"
			},
			{
				id: "u3l3q4",
				type: "order",
				prompt: "Build: I listen to music.",
				words: [
					"Musik",
					"höre",
					"Ich"
				],
				answer: "Ich höre Musik.",
				why: "hören with ich is höre.",
				error: "verb"
			},
			{
				id: "u3l3q5",
				type: "gap",
				prompt: "Wir ___ in Berlin.",
				answer: "wohnen",
				why: "wir keeps the infinitive ending -en.",
				error: "verb"
			}
		],
		speaking: "Say five things you do in a normal day. Use ich and a time.",
		writing: "Write those five sentences. Include one du question: Was machst du …?",
		writingWords: 40,
		canDo: [
			"I can put endings on a regular verb.",
			"I remember arbeitest.",
			"I can ask what someone does."
		]
	},
	{
		id: "u3l4",
		unit: 3,
		unitTitle: U,
		indexLabel: "04",
		title: "The prefix goes last",
		goal: "Use separable verbs in the present tense.",
		grammar: "Separable verbs",
		minutes: 55,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Tim",
				de: "Ich stehe um sieben Uhr auf.",
				en: "I get up at seven."
			},
			{
				speaker: "Ina",
				de: "Der Kurs fängt um neun Uhr an.",
				en: "The course starts at nine."
			},
			{
				speaker: "Tim",
				de: "Am Samstag kaufe ich ein. Abends sehe ich fern.",
				en: "On Saturday I go shopping. In the evening I watch TV."
			},
			{
				speaker: "Ina",
				de: "Um acht Uhr rufe ich meine Mutter an.",
				en: "At eight I call my mother."
			}
		],
		grammarNote: {
			lead: "Ich stehe um sieben Uhr auf.",
			rule: "Some verbs have a prefix that splits off. The conjugated verb stays in second place. The prefix goes to the end of the clause. aufstehen → ich stehe … auf. einkaufen → ich kaufe … ein. anrufen → ich rufe … an. anfangen and fernsehen also change the vowel: er fängt an, er sieht fern.",
			contrast: "English keeps “get up” together. German opens the verb and closes the sentence with the prefix.",
			examples: [
				{
					de: "Ich kaufe am Samstag ein.",
					en: "I go shopping on Saturday."
				},
				{
					de: "Der Kurs fängt um neun Uhr an.",
					en: "The course starts at nine."
				},
				{
					de: "Ich rufe meine Mutter an.",
					en: "I call my mother."
				}
			],
			table: [
				{
					a: "aufstehen",
					b: "ich stehe … auf"
				},
				{
					a: "einkaufen",
					b: "ich kaufe … ein"
				},
				{
					a: "anrufen",
					b: "ich rufe … an"
				},
				{
					a: "anfangen",
					b: "er fängt … an"
				},
				{
					a: "fernsehen",
					b: "ich sehe … fern"
				}
			]
		},
		vocab: [
			{
				german: "aufstehen",
				english: "to get up",
				example: "Ich stehe um sieben Uhr auf."
			},
			{
				german: "anfangen",
				english: "to start",
				example: "Der Kurs fängt um neun an."
			},
			{
				german: "einkaufen",
				english: "to go shopping",
				example: "Ich kaufe am Samstag ein."
			},
			{
				german: "fernsehen",
				english: "to watch TV",
				example: "Abends sehe ich fern."
			},
			{
				german: "anrufen",
				english: "to call (phone)",
				example: "Ich rufe meine Mutter an."
			},
			{
				german: "der Samstag",
				english: "Saturday",
				article: "der",
				example: "am Samstag"
			},
			{
				german: "abends",
				english: "in the evening",
				example: "Abends sehe ich fern."
			},
			{
				german: "die Mutter",
				english: "mother",
				article: "die",
				plural: "die Mütter",
				example: "Ich rufe meine Mutter an."
			},
			{
				german: "der Kurs",
				english: "course",
				article: "der",
				plural: "die Kurse",
				example: "Der Kurs fängt an."
			},
			{
				german: "um",
				english: "at",
				example: "um sieben Uhr"
			},
			{
				german: "dann",
				english: "then",
				example: "Dann kaufe ich ein."
			},
			{
				german: "danach",
				english: "after that",
				example: "Danach rufe ich an."
			},
			{
				german: "zuerst",
				english: "first",
				example: "Zuerst stehe ich auf."
			},
			{
				german: "zuletzt",
				english: "last",
				example: "Zuletzt sehe ich fern."
			},
			{
				german: "der Film",
				english: "film",
				article: "der",
				plural: "die Filme",
				example: "Der Film fängt um acht an."
			}
		],
		questions: [
			{
				id: "u3l4q1",
				type: "order",
				prompt: "Build: I get up at seven.",
				words: [
					"auf",
					"Uhr",
					"Ich",
					"sieben",
					"stehe",
					"um"
				],
				answer: "Ich stehe um sieben Uhr auf.",
				why: "stehe is in second place. auf closes the sentence.",
				error: "word-order"
			},
			{
				id: "u3l4q2",
				type: "choice",
				prompt: "Which sentence is correct?",
				options: [
					"Ich stehe um sieben Uhr auf.",
					"Ich aufstehe um sieben Uhr.",
					"Ich stehe auf um sieben Uhr."
				],
				answer: "Ich stehe um sieben Uhr auf.",
				why: "The prefix does not stay glued to the verb, and it does not sit in the middle.",
				error: "word-order"
			},
			{
				id: "u3l4q3",
				type: "gap",
				prompt: "Ich kaufe am Samstag ___.",
				answer: "ein",
				why: "einkaufen sends ein to the end.",
				error: "word-order"
			},
			{
				id: "u3l4q4",
				type: "type",
				prompt: "Translate: I call my mother.",
				answer: "Ich rufe meine Mutter an.",
				why: "anrufen splits: rufe … an.",
				error: "verb"
			},
			{
				id: "u3l4q5",
				type: "gap",
				prompt: "Der Kurs ___ um neun Uhr an.",
				answer: "fängt",
				aliases: ["faengt", "fängt"],
				why: "anfangen changes a to ä in er/sie/es: fängt.",
				error: "verb"
			}
		],
		speaking: "Describe a morning with aufstehen and one other separable verb.",
		writing: "Write four sentences. Each one must split a verb.",
		writingWords: 35,
		canDo: [
			"I can split aufstehen, einkaufen and anrufen.",
			"I put the prefix at the end.",
			"I recognise fängt an."
		]
	},
	{
		id: "u3l5",
		unit: 3,
		unitTitle: U,
		indexLabel: "05",
		title: "From morning to night",
		goal: "Describe a full day with times and connectors.",
		grammar: "A day in order",
		minutes: 55,
		kind: "lesson",
		dialogue: [
			{
				speaker: "Ina",
				de: "Ich stehe um sieben Uhr auf. Zuerst frühstücke ich.",
				en: "I get up at seven. First I have breakfast."
			},
			{
				speaker: "Ina",
				de: "Dann lerne ich Deutsch. Um zwölf Uhr koche ich.",
				en: "Then I study German. At twelve I cook."
			},
			{
				speaker: "Tim",
				de: "Und am Abend?",
				en: "And in the evening?"
			},
			{
				speaker: "Ina",
				de: "Am Abend sehe ich fern. Um elf Uhr schlafe ich.",
				en: "In the evening I watch TV. At eleven I sleep."
			}
		],
		grammarNote: {
			lead: "Zuerst frühstücke ich. Dann lerne ich Deutsch.",
			rule: "Tell a day in order: zuerst, dann, danach, am Abend, zuletzt. When zuerst or a time starts the sentence, the verb is next: Zuerst frühstücke ich. schlafen is irregular, but the ich form is regular enough to learn as a chunk: ich schlafe.",
			contrast: "A list of infinitives is not a day. Each sentence needs one conjugated verb.",
			examples: [
				{
					de: "Zuerst stehe ich auf.",
					en: "First I get up."
				},
				{
					de: "Danach rufe ich meine Mutter an.",
					en: "After that I call my mother."
				},
				{
					de: "Um elf Uhr schlafe ich.",
					en: "At eleven I sleep."
				}
			]
		},
		vocab: [
			{
				german: "schlafen",
				english: "to sleep",
				example: "Um elf Uhr schlafe ich."
			},
			{
				german: "zuerst",
				english: "first",
				example: "Zuerst frühstücke ich."
			},
			{
				german: "dann",
				english: "then",
				example: "Dann lerne ich."
			},
			{
				german: "danach",
				english: "after that",
				example: "Danach koche ich."
			},
			{
				german: "zuletzt",
				english: "last",
				example: "Zuletzt schlafe ich."
			},
			{
				german: "am Abend",
				english: "in the evening",
				example: "Am Abend sehe ich fern."
			},
			{
				german: "am Morgen",
				english: "in the morning",
				example: "Am Morgen stehe ich auf."
			},
			{
				german: "um zwölf",
				english: "at twelve",
				example: "Um zwölf Uhr koche ich."
			},
			{
				german: "der Mittag",
				english: "midday",
				article: "der",
				example: "am Mittag"
			},
			{
				german: "die Routine",
				english: "routine",
				article: "die",
				plural: "die Routinen",
				example: "Das ist meine Routine."
			},
			{
				german: "normalerweise",
				english: "usually",
				example: "Normalerweise stehe ich um sieben auf."
			},
			{
				german: "früh",
				english: "early",
				example: "Ich stehe früh auf."
			},
			{
				german: "spät",
				english: "late",
				example: "Ich schlafe spät."
			},
			{
				german: "pünktlich",
				english: "on time",
				example: "Der Kurs fängt pünktlich an."
			},
			{
				german: "der Tag",
				english: "day",
				article: "der",
				plural: "die Tage",
				example: "Das ist mein Tag."
			}
		],
		questions: [
			{
				id: "u3l5q1",
				type: "order",
				prompt: "Build: At eight I study.",
				words: [
					"ich",
					"lerne",
					"Uhr",
					"acht",
					"Um"
				],
				answer: "Um acht Uhr lerne ich.",
				why: "Time first, verb second.",
				error: "word-order"
			},
			{
				id: "u3l5q2",
				type: "gap",
				prompt: "Zuerst ___ ich.",
				answer: "frühstücke",
				why: "frühstücken with ich is frühstücke. The sentence started with Zuerst, so the verb is next.",
				error: "verb"
			},
			{
				id: "u3l5q3",
				type: "type",
				prompt: "Translate: After that I call my mother.",
				answer: "Danach rufe ich meine Mutter an.",
				why: "Danach takes first place, rufe is second, an is last.",
				error: "word-order"
			}
		],
		speaking: "Describe your day from waking up to sleeping. Use at least one separable verb and one clock time.",
		writing: "Write about 50 words, morning to evening. Start two sentences with a time or with Zuerst, Dann or Danach.",
		writingWords: 50,
		canDo: [
			"I can describe a full day.",
			"I can start a sentence with a time.",
			"I can split a separable verb inside that day."
		]
	},
	{
		id: "u3rev",
		unit: 3,
		unitTitle: U,
		indexLabel: "Review",
		title: "Unit 3 review",
		goal: "Mix times, days and separable verbs.",
		grammar: "Unit 3 mix",
		minutes: 35,
		kind: "review",
		dialogue: [
			{
				speaker: "Tim",
				de: "Ich stehe um sechs Uhr auf.",
				en: "I get up at six."
			},
			{
				speaker: "Ina",
				de: "So früh? Ich frühstücke um halb acht.",
				en: "That early? I have breakfast at half past seven."
			},
			{
				speaker: "Tim",
				de: "Am Montag fängt die Arbeit um acht an.",
				en: "On Monday work starts at eight."
			},
			{
				speaker: "Ina",
				de: "Am Abend rufe ich dich an.",
				en: "In the evening I call you."
			}
		],
		vocab: [],
		questions: [
			{
				id: "u3rq1",
				type: "choice",
				prompt: "halb acht",
				options: [
					"7:30",
					"8:30",
					"8:00"
				],
				answer: "7:30",
				why: "Halb acht is halfway to eight.",
				error: "time"
			},
			{
				id: "u3rq2",
				type: "order",
				prompt: "Build: On Monday I work.",
				words: [
					"ich",
					"arbeite",
					"Montag",
					"Am"
				],
				answer: "Am Montag arbeite ich.",
				why: "Verb second after the day.",
				error: "word-order"
			},
			{
				id: "u3rq3",
				type: "gap",
				prompt: "Ich stehe um sechs Uhr ___.",
				answer: "auf",
				why: "aufstehen ends with auf.",
				error: "word-order"
			},
			{
				id: "u3rq4",
				type: "type",
				prompt: "Translate: The course starts at nine.",
				answer: "Der Kurs fängt um neun Uhr an.",
				aliases: ["Der Kurs fängt um neun an."],
				why: "fängt is second. an is last.",
				error: "verb"
			}
		],
		speaking: "Say your Monday in four sentences, with two times.",
		writing: "Write the Monday down. Check every verb ending.",
		writingWords: 40,
		canDo: [
			"I can tell the time.",
			"I can put a day first.",
			"I can hear a missing prefix."
		]
	},
	{
		id: "u3quiz",
		unit: 3,
		unitTitle: U,
		indexLabel: "Quiz",
		title: "Unit 3 checkpoint",
		goal: "Read a day and answer on time and word order.",
		grammar: "Checkpoint",
		minutes: 25,
		kind: "checkpoint",
		dialogue: [{
			speaker: "Tim",
			de: "Mein Montag fängt früh an.",
			en: "My Monday starts early."
		}],
		passage: {
			de: "Tim steht um sechs Uhr auf. Er frühstückt und arbeitet am Montag um acht Uhr. Um halb eins kocht er. Am Abend ruft er seine Mutter an und sieht fern. Er schläft um elf Uhr.",
			en: "Tim gets up at six. He has breakfast and works on Monday at eight. At half past twelve he cooks. In the evening he calls his mother and watches TV. He sleeps at eleven."
		},
		vocab: [],
		questions: [
			{
				id: "u3qq1",
				type: "choice",
				prompt: "When does Tim get up?",
				options: [
					"um sechs Uhr",
					"um acht Uhr",
					"um elf Uhr"
				],
				answer: "um sechs Uhr",
				why: "The first sentence: Tim steht um sechs Uhr auf.",
				error: "time"
			},
			{
				id: "u3qq2",
				type: "choice",
				prompt: "Um halb eins is…",
				options: [
					"12:30",
					"1:30",
					"11:30"
				],
				answer: "12:30",
				why: "Halb eins is halfway to one o’clock, so 12:30.",
				error: "time"
			},
			{
				id: "u3qq3",
				type: "choice",
				prompt: "Which sentence matches the text?",
				options: [
					"Er ruft seine Mutter an.",
					"Er anruft seine Mutter.",
					"Er ruft an seine Mutter."
				],
				answer: "Er ruft seine Mutter an.",
				why: "The prefix an closes the clause.",
				error: "word-order"
			},
			{
				id: "u3qq4",
				type: "gap",
				prompt: "Tim arbeitet ___ Montag.",
				answer: "am",
				why: "Days take am.",
				error: "time"
			},
			{
				id: "u3qq5",
				type: "type",
				prompt: "Translate: He works at eight.",
				answer: "Er arbeitet um acht Uhr.",
				aliases: ["Er arbeitet um acht."],
				why: "arbeiten with er adds -et: arbeitet.",
				error: "verb"
			},
			{
				id: "u3qq6",
				type: "order",
				prompt: "Build: At six I get up.",
				words: [
					"auf",
					"ich",
					"Uhr",
					"sechs",
					"stehe",
					"Um"
				],
				answer: "Um sechs Uhr stehe ich auf.",
				why: "Time, verb, subject, prefix last.",
				error: "word-order"
			}
		],
		speaking: "Retell Tim’s Monday in your own sentences, then change two times to match your day.",
		writing: "",
		writingWords: 0,
		canDo: ["I can follow a short day and talk about my own."]
	}
];
var lessons = [
	...unit1,
	...unit2,
	...unit3
];
var UNITS = [
	{
		id: 1,
		title: "First contact",
		blurb: "Greet people, say your name, and handle numbers."
	},
	{
		id: 2,
		title: "People and family",
		blurb: "Talk about family, age, and simple descriptions."
	},
	{
		id: 3,
		title: "Daily routine and time",
		blurb: "Tell the time and describe your day."
	}
];
var byId = new Map(lessons.map((lesson) => [lesson.id, lesson]));
var questionOwner = /* @__PURE__ */ new Map();
for (const lesson of lessons) for (const question of lesson.questions) questionOwner.set(question.id, {
	question,
	lesson
});
function lessonById(id) {
	return byId.get(id);
}
function findQuestion(id) {
	return questionOwner.get(id);
}
function stepsFor(lesson) {
	if (lesson.kind === "checkpoint") return ["Quiz"];
	if (lesson.kind === "review") return [
		"Recap",
		"Practice",
		"Check"
	];
	return [
		"Warm-up",
		"Input",
		"Grammar",
		"Practice",
		"Produce",
		"Wrap-up"
	];
}
function unitVocab(unit) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const lesson of lessons) {
		if (lesson.unit !== unit || lesson.kind !== "lesson") continue;
		for (const vocab of lesson.vocab) {
			const key = `${vocab.article ?? ""}|${vocab.german.toLowerCase()}`;
			if (seen.has(key)) continue;
			seen.add(key);
			out.push(vocab);
		}
	}
	return out;
}
function currentLesson(done, week) {
	const unit = week <= 1 ? 1 : week === 2 ? 2 : week === 3 ? 3 : 0;
	const pool = unit ? lessons.filter((lesson) => lesson.unit === unit) : lessons.filter((lesson) => lesson.kind !== "checkpoint");
	return pool.find((lesson) => !done[lesson.id]?.done) ?? pool[pool.length - 1] ?? lessons[0];
}
function todayISO(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function addDays(iso, days) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}
function daysBetween(from, to) {
	const [ay, am, ad] = from.split("-").map(Number);
	const [by, bm, bd] = to.split("-").map(Number);
	return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 864e5);
}
function studyWeek(startDate, today = todayISO()) {
	return Math.max(1, Math.floor(Math.max(0, daysBetween(startDate, today)) / 7) + 1);
}
function weekBounds(startDate, week) {
	const from = addDays(startDate, (week - 1) * 7);
	return {
		from,
		to: addDays(from, 6)
	};
}
function inWeek(date, startDate, week) {
	const { from, to } = weekBounds(startDate, week);
	return date >= from && date <= to;
}
function longDate(d = /* @__PURE__ */ new Date()) {
	return d.toLocaleDateString("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long"
	});
}
function greeting(d = /* @__PURE__ */ new Date()) {
	const h = d.getHours();
	if (h < 11) return "Guten Morgen";
	if (h < 18) return "Guten Tag";
	return "Guten Abend";
}
function fmt(total) {
	const s = Math.max(0, Math.floor(total));
	const m = Math.floor(s / 60);
	const r = s % 60;
	return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function wordCount(text) {
	const t = text.trim();
	if (!t) return 0;
	return t.split(/\s+/).length;
}
function streak(done, today = todayISO()) {
	let cursor = done[today]?.length ? today : addDays(today, -1);
	let n = 0;
	while (done[cursor]?.length) {
		n += 1;
		cursor = addDays(cursor, -1);
	}
	return n;
}
function bucket(hour) {
	if (hour < 12) return "Morning";
	if (hour < 17) return "Afternoon";
	return "Evening";
}
var ctx = null;
function primeAudio() {
	if (typeof window === "undefined") return;
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return;
	if (!ctx) ctx = new AC();
	ctx.resume();
}
function chime() {
	if (!ctx) return;
	[
		523.25,
		659.25,
		783.99
	].forEach((freq, i) => {
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = "sine";
		osc.frequency.value = freq;
		const start = ctx.currentTime + i * .16;
		gain.gain.setValueAtTime(1e-4, start);
		gain.gain.exponentialRampToValueAtTime(.07, start + .03);
		gain.gain.exponentialRampToValueAtTime(1e-4, start + .38);
		osc.connect(gain).connect(ctx.destination);
		osc.start(start);
		osc.stop(start + .4);
	});
}
function buzz(enabled) {
	if (!enabled || typeof navigator === "undefined" || !navigator.vibrate) return;
	navigator.vibrate([
		80,
		40,
		120
	]);
}
function germanVoice() {
	if (typeof window === "undefined" || !window.speechSynthesis) return void 0;
	const voices = window.speechSynthesis.getVoices();
	return voices.find((v) => v.lang === "de-DE") ?? voices.find((v) => v.lang.toLowerCase().startsWith("de"));
}
function canSpeak() {
	return typeof window !== "undefined" && "speechSynthesis" in window;
}
function stopSpeak() {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
}
function speakGerman(text, rate = .92) {
	if (!canSpeak()) return false;
	window.speechSynthesis.cancel();
	const utter = new SpeechSynthesisUtterance(text);
	utter.lang = "de-DE";
	utter.rate = rate;
	const voice = germanVoice();
	if (voice) utter.voice = voice;
	window.speechSynthesis.speak(utter);
	return true;
}
function speakLines(lines, rate = .92) {
	if (!canSpeak() || lines.length === 0) return false;
	window.speechSynthesis.cancel();
	const play = (i) => {
		if (i >= lines.length) return;
		const utter = new SpeechSynthesisUtterance(lines[i] ?? "");
		utter.lang = "de-DE";
		utter.rate = rate;
		const voice = germanVoice();
		if (voice) utter.voice = voice;
		utter.onend = () => play(i + 1);
		window.speechSynthesis.speak(utter);
	};
	play(0);
	return true;
}
var BENCHMARK_TARGETS = [
	{
		week: 1,
		target: "Give a short self-introduction and recognise about 200 words."
	},
	{
		week: 2,
		target: "Score 70% or better on an A1-style check."
	},
	{
		week: 3,
		target: "Know about 500 words and score 85% on an A1-style check."
	},
	{
		week: 4,
		target: "Speak for three minutes on a familiar topic."
	},
	{
		week: 5,
		target: "Write a 100-word email."
	},
	{
		week: 6,
		target: "Score 70% on an A2-style check and know about 1,200 words."
	},
	{
		week: 7,
		target: "Write a 120-word text."
	},
	{
		week: 8,
		target: "Give a five-minute talk and answer two questions."
	},
	{
		week: 9,
		target: "Score 60% on a B1-style check."
	},
	{
		week: 10,
		target: "Score 70% on a B1-style check across reading, listening, writing and speaking."
	}
];
function freshBenchmarks() {
	return BENCHMARK_TARGETS.map((b) => ({
		...b,
		result: "",
		status: "pending",
		score: null
	}));
}
function schedule(card, rating, now = Date.now()) {
	let ease = card.ease || 2.5;
	let interval = card.interval;
	let reps = card.reps;
	let lapses = card.lapses;
	if (rating === "again") return {
		...card,
		reps: 0,
		interval: 0,
		lapses: lapses + 1,
		ease: Math.max(1.3, ease - .2),
		due: now + 6e5
	};
	const q = rating === "hard" ? 3 : rating === "good" ? 4 : 5;
	if (reps === 0) interval = rating === "easy" ? 3 : 1;
	else if (reps === 1) interval = rating === "easy" ? 7 : rating === "hard" ? 3 : 6;
	else {
		const factor = rating === "hard" ? 1.2 : rating === "easy" ? ease * 1.3 : ease;
		interval = Math.max(1, Math.round(interval * factor));
	}
	reps += 1;
	ease = ease + (.1 - (5 - q) * (.08 + (5 - q) * .02));
	ease = Math.min(2.8, Math.max(1.3, ease));
	return {
		...card,
		ease,
		interval,
		reps,
		lapses,
		due: now + interval * 864e5
	};
}
function intervalLabel(card, rating) {
	if (rating === "again") return "10m";
	const next = schedule(card, rating);
	return next.interval <= 1 ? "1d" : `${next.interval}d`;
}
function cardKey(card) {
	return `${card.article ?? ""}|${card.german.trim().toLowerCase()}`;
}
function uid() {
	return Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function blankProgress() {
	return {
		step: 0,
		furthest: 0,
		canDo: [],
		speak: [],
		writeChecks: [],
		writing: "",
		done: false,
		quizBest: null,
		quizLast: null
	};
}
var EMPTY_PROGRESS = blankProgress();
function memoryStorage() {
	return {
		getItem: () => null,
		setItem: () => void 0,
		removeItem: () => void 0
	};
}
function workActual(timer, now = Date.now()) {
	const left = timer.running && timer.endsAt != null ? Math.max(0, Math.ceil((timer.endsAt - now) / 1e3)) : timer.remainingSec;
	return Math.max(0, timer.plannedSec - left);
}
function leftover(timer, now = Date.now()) {
	if (timer.running && timer.endsAt != null) return Math.max(0, Math.ceil((timer.endsAt - now) / 1e3));
	return timer.remainingSec;
}
var useStudy = create()(persist((set, get) => ({
	profile: null,
	cards: [],
	logs: [],
	progress: {},
	benchmarks: [],
	attempts: [],
	reviews: [],
	doneBlocks: {},
	timer: null,
	view: "today",
	activeLessonId: null,
	setProfile: (profile) => set({
		profile,
		benchmarks: get().benchmarks.length ? get().benchmarks : freshBenchmarks(),
		view: "today"
	}),
	updateProfile: (patch) => set({ profile: get().profile ? {
		...get().profile,
		...patch
	} : get().profile }),
	setView: (view) => set({ view }),
	openLesson: (id) => set({
		view: "lesson",
		activeLessonId: id
	}),
	saveProgress: (id, patch) => {
		const prev = get().progress[id] ?? blankProgress();
		set({ progress: {
			...get().progress,
			[id]: {
				...prev,
				...patch
			}
		} });
	},
	addVocab: (lessonId, items) => {
		const have = new Set(get().cards.map(cardKey));
		const now = Date.now();
		const fresh = [];
		for (const item of items) {
			const key = cardKey(item);
			if (have.has(key)) continue;
			have.add(key);
			fresh.push({
				id: uid(),
				...item,
				lessonId,
				due: now,
				interval: 0,
				ease: 2.5,
				reps: 0,
				lapses: 0
			});
		}
		if (fresh.length) set({ cards: [...get().cards, ...fresh] });
		return fresh.length;
	},
	patchCard: (id, patch) => set({ cards: get().cards.map((card) => card.id === id ? {
		...card,
		...patch
	} : card) }),
	rateCard: (id, rating) => {
		const card = get().cards.find((item) => item.id === id);
		if (!card) return;
		const next = schedule(card, rating);
		set({
			cards: get().cards.map((item) => item.id === id ? next : item),
			reviews: [...get().reviews, {
				cardId: id,
				rating,
				at: Date.now()
			}].slice(-400)
		});
	},
	logAttempt: (attempt) => set({ attempts: [...get().attempts, {
		...attempt,
		id: uid(),
		at: Date.now()
	}].slice(-300) }),
	setBenchmark: (week, patch) => set({ benchmarks: get().benchmarks.map((item) => item.week === week ? {
		...item,
		...patch
	} : item) }),
	startBlock: (input) => {
		const profile = get().profile;
		if (!profile) return;
		const prev = get().timer;
		let logs = get().logs;
		if (prev && prev.phase !== "break") logs = [...logs, {
			id: uid(),
			date: todayISO(),
			kind: prev.kind,
			planned: prev.plannedSec,
			actual: workActual(prev),
			completed: false,
			interruptions: prev.interruptions,
			focus: null,
			startedAt: prev.startedAt,
			lessonId: prev.lessonId,
			blockIndex: prev.blockIndex
		}];
		const sec = profile.focusMin * 60;
		const now = Date.now();
		set({
			logs,
			view: "focus",
			activeLessonId: input.lessonId,
			timer: {
				phase: "work",
				kind: input.kind,
				lessonId: input.lessonId,
				blockIndex: input.index,
				plannedSec: sec,
				startedAt: now,
				endsAt: now + sec * 1e3,
				remainingSec: sec,
				running: true,
				interruptions: 0,
				breakLong: false
			}
		});
	},
	pauseTimer: () => {
		const timer = get().timer;
		if (!timer?.running || timer.endsAt == null) return;
		set({ timer: {
			...timer,
			running: false,
			endsAt: null,
			remainingSec: Math.max(0, Math.ceil((timer.endsAt - Date.now()) / 1e3))
		} });
	},
	resumeTimer: () => {
		const timer = get().timer;
		if (!timer || timer.running || timer.phase === "rate") return;
		set({ timer: {
			...timer,
			running: true,
			endsAt: Date.now() + timer.remainingSec * 1e3
		} });
	},
	interrupt: () => {
		const timer = get().timer;
		if (!timer || timer.phase !== "work") return;
		set({ timer: {
			...timer,
			interruptions: timer.interruptions + 1
		} });
	},
	endWork: () => {
		const timer = get().timer;
		if (!timer || timer.phase !== "work") return;
		set({ timer: {
			...timer,
			phase: "rate",
			running: false,
			endsAt: null,
			remainingSec: leftover(timer)
		} });
	},
	submitFocus: (focus) => {
		const timer = get().timer;
		const profile = get().profile;
		if (!timer || !profile || timer.phase !== "rate") return;
		const date = todayISO();
		const log = {
			id: uid(),
			date,
			kind: timer.kind,
			planned: timer.plannedSec,
			actual: Math.max(0, timer.plannedSec - timer.remainingSec),
			completed: true,
			interruptions: timer.interruptions,
			focus,
			startedAt: timer.startedAt,
			lessonId: timer.lessonId,
			blockIndex: timer.blockIndex
		};
		const prevDone = get().doneBlocks[date] ?? [];
		const doneBlocks = timer.blockIndex >= 0 && !prevDone.includes(timer.blockIndex) ? {
			...get().doneBlocks,
			[date]: [...prevDone, timer.blockIndex]
		} : get().doneBlocks;
		const count = doneBlocks[date]?.length ?? 0;
		const long = count > 0 && count % 4 === 0;
		const breakSec = (long ? profile.longBreak : profile.shortBreak) * 60;
		const now = Date.now();
		set({
			logs: [...get().logs, log],
			doneBlocks,
			timer: {
				phase: "break",
				kind: timer.kind,
				lessonId: timer.lessonId,
				blockIndex: timer.blockIndex,
				plannedSec: breakSec,
				startedAt: now,
				endsAt: now + breakSec * 1e3,
				remainingSec: breakSec,
				running: true,
				interruptions: 0,
				breakLong: long
			}
		});
	},
	skipBreak: () => {
		const timer = get().timer;
		if (!timer || timer.phase !== "break") {
			set({
				timer: null,
				view: "today"
			});
			return;
		}
		const actual = Math.max(0, timer.plannedSec - leftover(timer));
		set({
			logs: [...get().logs, {
				id: uid(),
				date: todayISO(),
				kind: "Break",
				planned: timer.plannedSec,
				actual,
				completed: false,
				interruptions: 0,
				focus: null,
				startedAt: timer.startedAt,
				lessonId: null,
				blockIndex: -1
			}],
			timer: null,
			view: "today"
		});
	},
	finishBreak: () => {
		const timer = get().timer;
		if (!timer || timer.phase !== "break") {
			set({
				timer: null,
				view: "today"
			});
			return;
		}
		set({
			logs: [...get().logs, {
				id: uid(),
				date: todayISO(),
				kind: "Break",
				planned: timer.plannedSec,
				actual: timer.plannedSec,
				completed: true,
				interruptions: 0,
				focus: null,
				startedAt: timer.startedAt,
				lessonId: null,
				blockIndex: -1
			}],
			timer: null,
			view: "today"
		});
	},
	resetAll: () => set({
		profile: null,
		cards: [],
		logs: [],
		progress: {},
		benchmarks: [],
		attempts: [],
		reviews: [],
		doneBlocks: {},
		timer: null,
		view: "today",
		activeLessonId: null
	})
}), {
	name: "lernpfad-v1",
	version: 1,
	skipHydration: true,
	storage: createJSONStorage(() => typeof window === "undefined" ? memoryStorage() : localStorage),
	partialize: (state) => ({
		profile: state.profile,
		cards: state.cards,
		logs: state.logs,
		progress: state.progress,
		benchmarks: state.benchmarks,
		attempts: state.attempts,
		reviews: state.reviews,
		doneBlocks: state.doneBlocks,
		timer: state.timer
	})
}));
function remainingSec(timer, now) {
	if (timer.running && timer.endsAt != null) return Math.max(0, Math.ceil((timer.endsAt - now) / 1e3));
	return timer.remainingSec;
}
function normalizeGerman(s) {
	return s.trim().toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[.,!?;:„“”"']/g, "").replace(/\s+/g, " ").trim();
}
function matchesAnswer(input, answer, aliases = []) {
	const targets = [answer, ...aliases];
	const raw = input.trim().toLowerCase().replace(/\s+/g, " ");
	if (!raw) return {
		ok: false,
		hint: false
	};
	for (const t of targets) if (raw === t.trim().toLowerCase().replace(/\s+/g, " ")) return {
		ok: true,
		hint: false
	};
	const folded = normalizeGerman(input);
	for (const t of targets) if (folded && folded === normalizeGerman(t)) return {
		ok: true,
		hint: true
	};
	return {
		ok: false,
		hint: false
	};
}
function seededShuffle(items, seed) {
	let h = 2166136261;
	for (let i = 0; i < seed.length; i += 1) {
		h ^= seed.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	const arr = [...items];
	for (let i = arr.length - 1; i > 0; i -= 1) {
		h = Math.imul(h ^ h >>> 16, 2246822507);
		const j = (h >>> 0) % (i + 1);
		const tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	return arr;
}
function planPattern(track) {
	if (track === "intensive") return [
		"Lesson",
		"Lesson",
		"Drills",
		"Listening",
		"Output",
		"Lesson",
		"Lesson",
		"Drills",
		"Listening",
		"Output"
	];
	return [
		"Lesson",
		"Drills",
		"Listening",
		"Output"
	];
}
function titleFor(kind, lesson) {
	if (kind === "Lesson") return lesson.title;
	if (kind === "Drills") return `Drills · ${lesson.grammar}`;
	if (kind === "Listening") return `Listen · ${lesson.title}`;
	return `Speak and write · ${lesson.title}`;
}
function detailFor(kind, lesson) {
	if (kind === "Lesson") return lesson.goal;
	if (kind === "Drills") return "Short recall from mistakes and this unit.";
	if (kind === "Listening") return "Hear the dialogue, then answer from it.";
	return lesson.speaking;
}
function buildPlan(track, progress, week) {
	const lesson = currentLesson(progress, week);
	return planPattern(track).map((kind, index) => ({
		index,
		kind,
		lessonId: lesson.id,
		title: titleFor(kind, lesson),
		detail: detailFor(kind, lesson)
	}));
}
function drillQuestions(attempts, seed) {
	const counts = /* @__PURE__ */ new Map();
	for (const attempt of attempts) {
		if (attempt.correct) continue;
		counts.set(attempt.error, (counts.get(attempt.error) ?? 0) + 1);
	}
	const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 2).map(([error]) => error);
	let pool = lessons.flatMap((lesson) => lesson.questions);
	const focused = top.length ? pool.filter((question) => top.includes(question.error)) : pool;
	if (focused.length >= 4) pool = focused;
	return seededShuffle(pool, seed).slice(0, 6);
}
function listenQuestions(lesson) {
	const speakers = [...new Set(lesson.dialogue.map((line) => line.speaker))];
	const first = lesson.dialogue[0];
	const line = lesson.dialogue[Math.min(1, lesson.dialogue.length - 1)];
	const questions = [];
	if (first && speakers.length > 1) questions.push({
		id: `${lesson.id}-who`,
		type: "choice",
		prompt: "Who speaks first?",
		options: seededShuffle(speakers, `${lesson.id}-who`),
		answer: first.speaker,
		why: `${first.speaker} opens: ${first.de}`,
		error: "vocabulary"
	});
	if (line) {
		const clean = line.de.replace(/[.!?]/g, "");
		const parts = clean.split(" ").filter(Boolean);
		const last = parts[parts.length - 1] ?? "";
		questions.push({
			id: `${lesson.id}-line`,
			type: "gap",
			prompt: `Finish the line from ${line.speaker}: ${parts.slice(0, -1).join(" ")} ___.`,
			answer: last,
			aliases: [line.de, clean],
			why: `The line is: ${line.de}`,
			error: "vocabulary"
		});
	}
	return questions;
}
function topErrors(attempts) {
	const counts = /* @__PURE__ */ new Map();
	for (const attempt of attempts) {
		if (attempt.correct) continue;
		counts.set(attempt.error, (counts.get(attempt.error) ?? 0) + 1);
	}
	return [...counts.entries()].map(([error, count]) => ({
		error,
		count
	})).sort((a, b) => b.count - a.count).slice(0, 3);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Button({ variant = "primary", className, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-base font-semibold transition-opacity disabled:opacity-40", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spruce", variant === "primary" && "bg-spruce-fill text-spruce-ink hover:opacity-90", variant === "ghost" && "bg-transparent text-ink hover:bg-paper-2", variant === "soft" && "bg-paper-2 text-ink hover:bg-line", variant === "danger" && "bg-clay-soft text-ink", className),
		...props
	});
}
function Panel({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("rounded-2xl border border-line bg-card p-4 md:p-5", className),
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-semibold tracking-widest text-muted uppercase",
		children
	});
}
function Field({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("min-h-12 w-full rounded-xl border border-line bg-card px-3 text-ink outline-none focus:border-spruce", className),
		...props
	});
}
function GermanWord({ article, german, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className,
		children: [article ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("font-semibold", article === "der" ? "text-der" : article === "die" ? "text-die" : article === "das" ? "text-das" : ""),
			children: [article, " "]
		}) : null, german]
	});
}
function Ring({ progress, tone = "spruce", className }) {
	const r = 52;
	const c = 2 * Math.PI * r;
	const p = Math.max(0, Math.min(1, progress));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 120",
		className: cn("size-40", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r,
			className: "fill-none stroke-line",
			strokeWidth: "8"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r,
			className: cn("timer-arc fill-none", tone === "clay" ? "stroke-clay" : "stroke-spruce"),
			strokeWidth: "8",
			strokeLinecap: "round",
			strokeDasharray: c,
			strokeDashoffset: c * (1 - p),
			transform: "rotate(-90 60 60)"
		})]
	});
}
function Meter({ value, label }) {
	const v = Math.max(0, Math.min(1, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 overflow-hidden rounded-full bg-paper-2",
		role: "progressbar",
		"aria-valuenow": Math.round(v * 100),
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-spruce-fill",
			style: { width: `${v * 100}%` }
		})
	});
}
function Page({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 pb-28 md:px-8 md:pb-12",
		children
	});
}
function QuestionRunner({ questions, lessonId, onDone }) {
	const logAttempt = useStudy((s) => s.logAttempt);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [value, setValue] = (0, import_react.useState)("");
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [result, setResult] = (0, import_react.useState)(null);
	const [correct, setCorrect] = (0, import_react.useState)(0);
	const [finished, setFinished] = (0, import_react.useState)(false);
	const reported = (0, import_react.useRef)(false);
	const question = questions[index];
	(0, import_react.useEffect)(() => {
		setValue("");
		setPicked([]);
		setResult(null);
	}, [index]);
	(0, import_react.useEffect)(() => {
		if (!finished || reported.current) return;
		reported.current = true;
		onDone?.({
			correct,
			total: questions.length
		});
	}, [
		finished,
		correct,
		questions.length,
		onDone
	]);
	if (!questions.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "No questions in this set yet."
	});
	if (finished || !question) {
		const pct = Math.round(100 * correct / questions.length);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-paper-2 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Result" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 font-display text-3xl",
					children: [
						correct,
						" of ",
						questions.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: pct >= 70 ? "That holds. Keep going." : "Review the misses, then try the set again later."
				})
			]
		});
	}
	const bank = question.words ?? [];
	const order = seededShuffle(bank.map((word, wordIndex) => ({
		word,
		wordIndex
	})), question.id);
	const built = picked.map((wordIndex) => bank[wordIndex]).join(" ");
	function commit(text) {
		if (result) return;
		const marked = matchesAnswer(text, question.answer, question.aliases);
		setResult(marked);
		if (marked.ok) setCorrect((count) => count + 1);
		logAttempt({
			lessonId,
			questionId: question.id,
			answer: text,
			correct: marked.ok,
			error: question.error
		});
	}
	function next() {
		if (index + 1 >= questions.length) setFinished(true);
		else setIndex((n) => n + 1);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
				"Question ",
				index + 1,
				" of ",
				questions.length
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl leading-tight",
				children: question.prompt
			}),
			question.type === "choice" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: (question.options ?? []).map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !!result,
					onClick: () => commit(option),
					className: cn("min-h-12 rounded-xl border px-4 text-left font-semibold", result && option === question.answer && "border-spruce bg-spruce-soft", result && option !== question.answer && "opacity-60", !result && "border-line bg-card"),
					children: option
				}, option))
			}),
			question.type === "gap" || question.type === "type" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-3",
				onSubmit: (event) => {
					event.preventDefault();
					commit(value);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					value,
					onChange: (event) => setValue(event.target.value),
					disabled: !!result,
					placeholder: "Type in German",
					"aria-label": "Your answer",
					autoCapitalize: "off",
					autoCorrect: "off",
					spellCheck: false
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: !!result || !value.trim(),
					children: "Check"
				})]
			}) : null,
			question.type === "order" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-14 rounded-xl border border-dashed border-line bg-paper px-3 py-3 text-lg",
						children: built || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "Tap the words in order."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: order.map(({ word, wordIndex }) => {
							const used = picked.includes(wordIndex);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: used || !!result,
								onClick: () => setPicked((list) => [...list, wordIndex]),
								className: "min-h-11 rounded-full border border-line bg-card px-4 font-semibold disabled:opacity-30",
								children: word
							}, `${question.id}-${wordIndex}`);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "soft",
							onClick: () => setPicked((list) => list.slice(0, -1)),
							disabled: !picked.length || !!result,
							children: "Undo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => commit(built),
							disabled: picked.length !== bank.length || !!result,
							children: "Check"
						})]
					})
				]
			}),
			result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("rounded-xl px-4 py-3 text-sm", result.ok ? "bg-spruce-soft" : "bg-clay-soft"),
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: result.ok ? "Correct." : "Not quite."
					}),
					result.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1",
						children: ["Close enough. Prefer this spelling: ", question.answer]
					}) : null,
					!result.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1",
						children: ["Answer: ", question.answer]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: question.why
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3",
						onClick: next,
						children: index + 1 >= questions.length ? "See result" : "Next"
					})
				]
			})
		]
	});
}
function ListenPanel({ lessonId }) {
	const lesson = lessonById(lessonId);
	const [rate, setRate] = (0, import_react.useState)(.9);
	const [showText, setShowText] = (0, import_react.useState)(true);
	const [showEn, setShowEn] = (0, import_react.useState)(false);
	const [questions] = (0, import_react.useState)(() => lesson ? listenQuestions(lesson) : []);
	if (!lesson) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This lesson is missing." });
	const lines = lesson.dialogue;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Listening" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: lesson.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "The voice is your device’s German voice, not a studio recording."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (!canSpeak()) return;
							speakLines(lines.map((line) => line.de), rate);
						},
						disabled: !lines.length || !canSpeak(),
						children: "Play dialogue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "soft",
						onClick: () => stopSpeak(),
						children: "Stop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "soft",
						onClick: () => setRate((n) => n > .85 ? .75 : 1),
						children: rate < .85 ? "Slow" : rate > .95 ? "Normal" : "Clear"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setShowText((v) => !v),
						children: showText ? "Hide text" : "Show text"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setShowEn((v) => !v),
						children: showEn ? "Hide English" : "English"
					})
				]
			}),
			!canSpeak() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "This browser has no speech voice. Read the lines aloud."
			}) : null,
			showText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-line bg-card px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-muted uppercase",
								children: line.speaker
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-sm font-semibold text-spruce",
								onClick: () => speakGerman(line.de, rate),
								children: "Play"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg",
							children: line.de
						}),
						showEn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: line.en
						}) : null
					]
				}, `${line.speaker}-${index}`))
			}),
			lesson.passage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-2xl bg-paper-2 p-4 text-lg",
				children: showText ? lesson.passage.de : "Text hidden. Listen, then reveal it if you need to."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionRunner, {
				questions,
				lessonId: lesson.id
			})
		]
	});
}
function DrillRun() {
	const [questions] = (0, import_react.useState)(() => drillQuestions(useStudy.getState().attempts, todayISO()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Drills" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Retrieve it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Six items, weighted toward mistakes when you have some."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionRunner, {
				questions,
				lessonId: "drill"
			})
		]
	});
}
var ERROR_LABEL = {
	verb: "Verb form",
	"word-order": "Word order",
	article: "Article",
	pronoun: "Pronoun",
	spelling: "Spelling",
	vocabulary: "Vocabulary",
	time: "Time",
	possessive: "Possessive",
	number: "Number"
};
var SPEAK_CHECKS = [
	"Clear pronunciation",
	"Correct word order",
	"Used the target grammar",
	"Spoke without long pauses"
];
var WRITE_CHECKS = [
	"A greeting or a name is there",
	"Nouns start with a capital letter",
	"I used the target grammar",
	"I checked ä, ö, ü and ß"
];
function Player({ lessonId, embedded = false }) {
	const lesson = lessonById(lessonId);
	const saved = useStudy((s) => s.progress[lessonId] ?? EMPTY_PROGRESS);
	const saveProgress = useStudy((s) => s.saveProgress);
	const addVocab = useStudy((s) => s.addVocab);
	const setView = useStudy((s) => s.setView);
	const cards = useStudy((s) => s.cards);
	const rateCard = useStudy((s) => s.rateCard);
	const [showEn, setShowEn] = (0, import_react.useState)(false);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!lesson || lesson.kind !== "lesson") return;
		if (saved.step < 1 && saved.furthest < 1) return;
		addVocab(lesson.id, lesson.vocab);
	}, [
		lesson,
		saved.step,
		saved.furthest,
		addVocab
	]);
	if (!lesson) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "p-4",
		children: [
			"That lesson is not in this build.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "font-semibold text-spruce",
				onClick: () => setView("lessons"),
				children: "Back to lessons"
			})
		]
	});
	const steps = stepsFor(lesson);
	const step = Math.min(saved.step, steps.length - 1);
	const due = cards.filter((card) => card.due <= Date.now()).slice(0, 5);
	const warm = due[0];
	function go(next) {
		const clamped = Math.max(0, Math.min(steps.length - 1, next));
		if (clamped > saved.furthest + 1) return;
		saveProgress(lesson.id, {
			step: clamped,
			furthest: Math.max(saved.furthest, clamped)
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			!embedded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "self-start text-sm font-semibold text-spruce",
				onClick: () => setView("lessons"),
				children: "All lessons"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
					"Unit ",
					lesson.unit,
					" · ",
					lesson.indexLabel,
					" · ",
					lesson.grammar
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl leading-tight",
					children: lesson.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: lesson.goal
				})
			] }),
			lesson.kind !== "checkpoint" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: steps.map((label, index) => {
					const open = index <= saved.furthest;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !open && index !== step,
						onClick: () => go(index),
						className: cn("min-h-11 rounded-full px-3 text-sm font-semibold whitespace-nowrap", index === step ? "bg-spruce-fill text-spruce-ink" : "bg-paper-2 text-muted"),
						children: label
					}) }, label);
				})
			}),
			lesson.kind === "checkpoint" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkpoint, { lessonId: lesson.id }),
			lesson.kind === "review" && step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialogue, {
						lessonId: lesson.id,
						showEn,
						onToggle: () => setShowEn((v) => !v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "A few words from this unit. They enter your deck from the lessons, not again here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2",
						children: seededShuffle(unitVocab(lesson.unit), lesson.id).slice(0, 8).map((vocab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-3 rounded-xl bg-paper-2 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GermanWord, {
								article: vocab.article,
								german: vocab.german
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: vocab.english
							})]
						}, vocab.german))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => go(1),
						children: "Continue to practice"
					})
				]
			}),
			lesson.kind === "review" && step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionRunner, {
					questions: lesson.questions,
					lessonId: lesson.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "soft",
					onClick: () => go(2),
					children: "Continue to the checklist"
				})]
			}),
			lesson.kind === "review" && step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WrapUp, { lessonId: lesson.id }),
			lesson.kind === "lesson" && step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
						"Warm-up · ",
						Math.min(due.length, 5),
						" due"
					] }),
					warm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [due.length, " due"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GermanWord, {
								article: warm.article,
								german: warm.german
							})
						}),
						revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: warm.english }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: warm.example
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid grid-cols-4 gap-2",
									children: [
										"again",
										"hard",
										"good",
										"easy"
									].map((rating) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "min-h-12 rounded-xl bg-paper-2 text-sm font-semibold capitalize",
										onClick: () => {
											rateCard(warm.id, rating);
											setRevealed(false);
										},
										children: [rating, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block text-xs font-normal text-muted",
											children: intervalLabel(warm, rating)
										})]
									}, rating))
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							variant: "soft",
							onClick: () => setRevealed(true),
							children: "Show meaning"
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Nothing is due. A clean start."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => go(1),
						children: "Continue to the dialogue"
					})
				]
			}),
			lesson.kind === "lesson" && step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialogue, {
						lessonId: lesson.id,
						showEn,
						onToggle: () => setShowEn((v) => !v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: lesson.vocab.map((vocab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-line bg-card px-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GermanWord, {
										article: vocab.article,
										german: vocab.german
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [vocab.english, vocab.plural ? ` · plural ${vocab.plural}` : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1",
									children: vocab.example
								})
							]
						}, `${vocab.article ?? ""}-${vocab.german}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => go(2),
						children: "Continue to grammar"
					})
				]
			}),
			lesson.kind === "lesson" && step === 2 && lesson.grammarNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: lesson.grammarNote.lead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: lesson.grammarNote.rule
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: lesson.grammarNote.contrast
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2",
						children: lesson.grammarNote.examples.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-paper-2 px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: example.de }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: example.en
							})]
						}, example.de))
					}),
					lesson.grammarNote.table && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "w-full text-left text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: lesson.grammarNote.table.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-semibold",
								children: row.a
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2",
								children: row.b
							})]
						}, row.a)) })
					}),
					lesson.letters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-4 gap-2 sm:grid-cols-7",
						children: lesson.letters.map((letter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "w-full rounded-xl border border-line bg-card px-2 py-2 text-center",
							onClick: () => speakGerman(letter.name, .85),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-xl",
								children: letter.g
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: letter.name
							})]
						}) }, letter.g))
					}),
					lesson.grids?.map((grid) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-semibold",
						children: grid.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-2",
						children: grid.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 rounded-full bg-paper-2 px-3 text-sm font-semibold",
							onClick: () => speakGerman(item),
							children: item
						}) }, item))
					})] }, grid.title)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => go(3),
						children: "Continue to practice"
					})
				]
			}),
			lesson.kind === "lesson" && step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionRunner, {
					questions: lesson.questions,
					lessonId: lesson.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "soft",
					onClick: () => go(4),
					children: "Continue to speaking and writing"
				})]
			}),
			lesson.kind === "lesson" && step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Produce, { lessonId: lesson.id }),
			lesson.kind === "lesson" && step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "soft",
				onClick: () => go(5),
				children: "Continue to wrap-up"
			}),
			lesson.kind === "lesson" && step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WrapUp, { lessonId: lesson.id })
		]
	});
}
function Dialogue({ lessonId, showEn, onToggle }) {
	const lesson = lessonById(lessonId);
	if (!lesson) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "soft",
				onClick: () => {
					if (lesson.dialogue[0]) speakGerman(lesson.dialogue.map((line) => line.de).join(" "));
				},
				children: "Play all"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: onToggle,
				children: showEn ? "Hide English" : "English"
			})]
		}), lesson.dialogue.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-line bg-card px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: line.speaker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-sm font-semibold text-spruce",
						onClick: () => speakGerman(line.de),
						children: "Play"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-lg",
					children: line.de
				}),
				showEn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: line.en
				}) : null
			]
		}, `${line.speaker}-${index}`))]
	});
}
function Produce({ lessonId }) {
	const lesson = lessonById(lessonId);
	const saved = useStudy((s) => s.progress[lessonId] ?? EMPTY_PROGRESS);
	const saveProgress = useStudy((s) => s.saveProgress);
	const [audioUrl, setAudioUrl] = (0, import_react.useState)(null);
	const [recording, setRecording] = (0, import_react.useState)(false);
	const [recorder, setRecorder] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		return () => {
			if (audioUrl) URL.revokeObjectURL(audioUrl);
		};
	}, [audioUrl]);
	if (!lesson) return null;
	const count = wordCount(saved.writing);
	async function toggleRec() {
		if (recording && recorder) {
			recorder.stop();
			setRecording(false);
			return;
		}
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const next = new MediaRecorder(stream);
			const chunks = [];
			next.ondataavailable = (event) => {
				if (event.data.size) chunks.push(event.data);
			};
			next.onstop = () => {
				stream.getTracks().forEach((track) => track.stop());
				const url = URL.createObjectURL(new Blob(chunks, { type: next.mimeType || "audio/webm" }));
				setAudioUrl(url);
			};
			next.start();
			setRecorder(next);
			setRecording(true);
		} catch {
			toast("Microphone unavailable. Use the checklist anyway.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Speaking" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-lg",
				children: lesson.speaking
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "soft",
					onClick: () => void toggleRec(),
					children: recording ? "Stop recording" : "Record"
				})
			}),
			audioUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				className: "mt-3 w-full",
				controls: true,
				src: audioUrl
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "The recording stays in this session, on this device."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2",
				children: SPEAK_CHECKS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: saved.speak[index] ?? false,
						onChange: (event) => {
							const speak = [...saved.speak];
							speak[index] = event.target.checked;
							saveProgress(lesson.id, { speak });
						}
					}), label]
				}) }, label))
			})
		] }), lesson.writing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Writing" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2",
				children: lesson.writing
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "mt-3 min-h-36 w-full rounded-xl border border-line bg-paper px-3 py-3 outline-none focus:border-spruce",
				value: saved.writing,
				onChange: (event) => saveProgress(lesson.id, { writing: event.target.value }),
				"aria-label": "Writing draft"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: cn("mt-2 text-sm", count >= lesson.writingWords ? "text-spruce" : "text-muted"),
				children: [
					count,
					" / ",
					lesson.writingWords,
					" words"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2",
				children: WRITE_CHECKS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: saved.writeChecks[index] ?? false,
						onChange: (event) => {
							const writeChecks = [...saved.writeChecks];
							writeChecks[index] = event.target.checked;
							saveProgress(lesson.id, { writeChecks });
						}
					}), label]
				}) }, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-3",
				variant: "soft",
				onClick: () => {
					navigator.clipboard.writeText(saved.writing).then(() => toast("Copied. A tutor or partner can correct it."), () => toast("Select the text and copy it manually."));
				},
				children: "Copy text"
			})
		] }) : null]
	});
}
function WrapUp({ lessonId }) {
	const lesson = lessonById(lessonId);
	const saved = useStudy((s) => s.progress[lessonId] ?? EMPTY_PROGRESS);
	const saveProgress = useStudy((s) => s.saveProgress);
	const addVocab = useStudy((s) => s.addVocab);
	const setView = useStudy((s) => s.setView);
	(0, import_react.useEffect)(() => {
		if (lesson?.vocab.length) addVocab(lesson.id, lesson.vocab);
	}, [lesson, addVocab]);
	if (!lesson) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tick only what you can actually do. You can still mark the lesson complete and review later." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: lesson.canDo.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-12 items-start gap-3 rounded-xl bg-paper-2 px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "mt-1",
						checked: saved.canDo[index] ?? false,
						onChange: (event) => {
							const canDo = [...saved.canDo];
							canDo[index] = event.target.checked;
							saveProgress(lesson.id, { canDo });
						}
					}), item]
				}) }, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => {
					saveProgress(lesson.id, { done: true });
					setView("lessons");
					toast(saved.done ? "Still marked complete." : "Lesson marked complete.");
				},
				children: saved.done ? "Completed" : "Mark lesson complete"
			})
		]
	});
}
function Checkpoint({ lessonId }) {
	const lesson = lessonById(lessonId);
	const saved = useStudy((s) => s.progress[lessonId] ?? EMPTY_PROGRESS);
	const saveProgress = useStudy((s) => s.saveProgress);
	const [showEn, setShowEn] = (0, import_react.useState)(false);
	const [run, setRun] = (0, import_react.useState)(0);
	if (!lesson) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "70% passes. You get the answer after each item, and the first try counts."
			}),
			lesson.passage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Read" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg",
					children: lesson.passage.de
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-2 text-sm font-semibold text-spruce",
					onClick: () => setShowEn((v) => !v),
					children: showEn ? "Hide English" : "Show English"
				}),
				showEn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: lesson.passage.en
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionRunner, {
				questions: lesson.questions,
				lessonId: lesson.id,
				onDone: ({ correct, total }) => {
					const pct = Math.round(100 * correct / Math.max(1, total));
					const pass = pct >= 70;
					saveProgress(lesson.id, {
						quizLast: pct,
						quizBest: Math.max(saved.quizBest ?? 0, pct),
						done: pass ? true : saved.done
					});
				}
			}, run),
			saved.quizLast != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Last score ",
					saved.quizLast,
					"%. Best ",
					saved.quizBest ?? saved.quizLast,
					"%. ",
					saved.done ? "Checkpoint passed." : "Not passed yet."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "soft",
				onClick: () => setRun((n) => n + 1),
				children: "Try the checkpoint again"
			})
		]
	});
}
function useNow(ms = 250) {
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(Date.now()), ms);
		const onVis = () => setNow(Date.now());
		document.addEventListener("visibilitychange", onVis);
		return () => {
			window.clearInterval(id);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, [ms]);
	return now;
}
function TimerEngine() {
	const now = useNow();
	const timer = useStudy((s) => s.timer);
	const vibrate = useStudy((s) => s.profile?.vibrate ?? true);
	const seen = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!timer?.running || timer.endsAt == null || now < timer.endsAt) return;
		const key = `${timer.phase}:${timer.startedAt}:${timer.endsAt}`;
		if (seen.current === key) return;
		seen.current = key;
		if (timer.phase === "work") {
			chime();
			buzz(vibrate);
			useStudy.getState().endWork();
		} else if (timer.phase === "break") {
			chime();
			toast("Break finished. The next block is ready.");
			useStudy.getState().finishBreak();
		}
	}, [
		now,
		timer,
		vibrate
	]);
	return null;
}
var TIPS = [
	{
		title: "Stretch",
		body: "Stand up, roll your shoulders, and look far away for twenty seconds."
	},
	{
		title: "Water",
		body: "Leave the screen and drink a glass of water."
	},
	{
		title: "Breathe",
		body: "Four slow breaths, then the next block."
	},
	{
		title: "One slow line",
		body: "Listen once. Do not study it.",
		listen: true
	}
];
function Focus() {
	const timer = useStudy((s) => s.timer);
	const pauseTimer = useStudy((s) => s.pauseTimer);
	const resumeTimer = useStudy((s) => s.resumeTimer);
	const interrupt = useStudy((s) => s.interrupt);
	const endWork = useStudy((s) => s.endWork);
	const submitFocus = useStudy((s) => s.submitFocus);
	const skipBreak = useStudy((s) => s.skipBreak);
	const setView = useStudy((s) => s.setView);
	const now = useNow();
	if (!timer) return null;
	const left = remainingSec(timer, now);
	const progress = timer.plannedSec ? left / timer.plannedSec : 0;
	const tip = TIPS[Math.abs(timer.blockIndex) % TIPS.length] ?? TIPS[0];
	const lesson = lessonById(timer.lessonId);
	function leave() {
		if (timer && timer.running && timer.phase !== "rate") pauseTimer();
		setView("today");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-10 flex items-center gap-3 border-b border-line bg-paper px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 px-2 text-sm font-semibold",
						onClick: leave,
						children: "Close"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl tabular-nums",
							children: fmt(left)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-muted uppercase",
							children: timer.phase === "break" ? timer.breakLong ? "Long break" : "Short break" : timer.phase === "rate" ? "Block complete" : timer.kind
						})]
					}),
					timer.phase === "rate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-16" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 px-2 text-sm font-semibold",
						onClick: () => timer.running ? pauseTimer() : resumeTimer(),
						children: timer.running ? "Pause" : "Resume"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-2xl flex-col gap-5 px-4 py-5 pb-28",
				children: [
					timer.phase === "work" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid place-items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, { progress }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "absolute text-xs font-semibold tracking-widest text-muted uppercase",
									children: "Focus"
								})]
							})
						}),
						timer.kind === "Lesson" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Player, {
							lessonId: timer.lessonId,
							embedded: true
						}),
						timer.kind === "Drills" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrillRun, {}),
						timer.kind === "Listening" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenPanel, { lessonId: timer.lessonId }),
						timer.kind === "Output" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Produce, { lessonId: timer.lessonId })
					] }),
					timer.phase === "rate" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How was the focus?" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "One number, then a break."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-5 gap-2",
								children: [
									1,
									2,
									3,
									4,
									5
								].map((score) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-14 rounded-2xl border border-line bg-card font-display text-2xl",
									onClick: () => submitFocus(score),
									children: score
								}, score))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "1 scattered, 5 fully there. This is a note to yourself, not a grade."
							})
						]
					}),
					timer.phase === "break" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {
								progress,
								tone: "clay",
								className: "size-48"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: timer.breakLong ? "Long break" : "Short break" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: tip.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-muted",
								children: tip.body
							}),
							tip.listen && lesson?.dialogue[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "soft",
								onClick: () => speakGerman(lesson.dialogue[0].de, .75),
								children: "Play one slow line"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								onClick: skipBreak,
								children: "Skip break"
							})
						]
					})
				]
			}),
			timer.phase === "work" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-line bg-card px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-2xl items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "min-h-12 flex-1 text-sm font-semibold text-muted",
						onClick: interrupt,
						children: ["Distraction ", timer.interruptions > 0 ? `(${timer.interruptions})` : ""]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "flex-1",
						onClick: endWork,
						children: "Finish block"
					})]
				})
			})
		]
	});
}
function Onboarding() {
	const setProfile = useStudy((s) => s.setProfile);
	const [name, setName] = (0, import_react.useState)("");
	const [track, setTrack] = (0, import_react.useState)("intensive");
	const [startDate, setStartDate] = (0, import_react.useState)(todayISO());
	const [examDate, setExamDate] = (0, import_react.useState)("");
	const invalidExam = examDate !== "" && examDate < startDate;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-6 px-5 py-10",
			onSubmit: (event) => {
				event.preventDefault();
				if (!name.trim() || invalidExam) return;
				setProfile({
					name: name.trim(),
					track,
					startDate,
					examDate: examDate || null,
					focusMin: 25,
					shortBreak: 5,
					longBreak: 25,
					theme: "light",
					text: "md",
					vibrate: true,
					reviewLimit: 150,
					newLimit: 25
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl",
					children: "Lernpfad"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "A daily path from zero German to B1. Active recall, short blocks, original lessons."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Your name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "learner-name",
						required: true,
						maxLength: 40,
						value: name,
						onChange: (event) => setName(event.target.value),
						placeholder: "What should we call you?",
						className: "mt-2 min-h-12 w-full rounded-xl border border-line bg-card px-3 outline-none focus:border-spruce"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-xs font-semibold tracking-widest text-muted uppercase",
					children: "How you want to study"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid gap-2",
					children: [[
						"intensive",
						"Intensive",
						"10 weeks · about 5 hours · 10 blocks a day"
					], [
						"standard",
						"Standard",
						"24 weeks · about 2 hours · 4 blocks a day"
					]].map(([value, title, detail]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: cn("block cursor-pointer rounded-2xl border bg-card px-4 py-4", track === value ? "border-2 border-spruce" : "border-line"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "sr-only",
								type: "radio",
								name: "track",
								checked: track === value,
								onChange: () => setTrack(value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-2xl",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: detail
							})
						]
					}, value))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["Start date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							required: true,
							value: startDate,
							onChange: (event) => setStartDate(event.target.value),
							className: "mt-1 min-h-12 w-full rounded-xl border border-line bg-card px-3 font-normal"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["Exam date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: examDate,
							onChange: (event) => setExamDate(event.target.value),
							className: "mt-1 min-h-12 w-full rounded-xl border border-line bg-card px-3 font-normal"
						})]
					})]
				}),
				invalidExam ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-clay",
					children: "The exam date needs to be after the start date."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: !name.trim() || invalidExam,
					children: "Start week 1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Ten weeks is a serious plan, not a promise of an exam result. Your study stays on this device."
				})
			]
		})
	});
}
function esc(value) {
	if (/[",\n]/.test(value)) return `"${value.replace(/"/g, "\"\"")}"`;
	return value;
}
function cardsToCsv(rows) {
	const lines = ["german,english,article,plural,example"];
	for (const row of rows) lines.push([
		row.german,
		row.english,
		row.article ?? "",
		row.plural ?? "",
		row.example
	].map(esc).join(","));
	return lines.join("\n");
}
function parseLine(line) {
	const out = [];
	let cur = "";
	let quoted = false;
	for (let i = 0; i < line.length; i += 1) {
		const ch = line[i];
		if (quoted) {
			if (ch === "\"" && line[i + 1] === "\"") {
				cur += "\"";
				i += 1;
			} else if (ch === "\"") quoted = false;
			else cur += ch;
		} else if (ch === "\"") quoted = true;
		else if (ch === ",") {
			out.push(cur);
			cur = "";
		} else cur += ch;
	}
	out.push(cur);
	return out.map((s) => s.trim());
}
function articleOf(value) {
	const v = value.trim().toLowerCase();
	if (v === "der" || v === "die" || v === "das") return v;
}
function csvToVocab(text) {
	const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
	if (!lines.length) return [];
	const start = lines[0].toLowerCase().includes("german") ? 1 : 0;
	const items = [];
	for (const line of lines.slice(start)) {
		const cols = parseLine(line);
		const german = cols[0] ?? "";
		const english = cols[1] ?? "";
		if (!german || !english) continue;
		items.push({
			german,
			english,
			article: articleOf(cols[2] ?? ""),
			plural: cols[3] || void 0,
			example: cols[4] || german
		});
	}
	return items;
}
var RATINGS = [
	"again",
	"hard",
	"good",
	"easy"
];
function Cards() {
	const cards = useStudy((s) => s.cards);
	const profile = useStudy((s) => s.profile);
	const rateCard = useStudy((s) => s.rateCard);
	const addVocab = useStudy((s) => s.addVocab);
	const patchCard = useStudy((s) => s.patchCard);
	const reviewLimit = profile?.reviewLimit ?? 150;
	const newLimit = profile?.newLimit ?? 25;
	const queue = (0, import_react.useMemo)(() => {
		const now = Date.now();
		const due = cards.filter((card) => card.due <= now);
		const reviews = due.filter((card) => card.reps > 0).sort((a, b) => a.due - b.due).slice(0, reviewLimit);
		const fresh = due.filter((card) => card.reps === 0).slice(0, newLimit);
		return [...reviews, ...fresh];
	}, [
		cards,
		reviewLimit,
		newLimit
	]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [german, setGerman] = (0, import_react.useState)("");
	const [english, setEnglish] = (0, import_react.useState)("");
	const [article, setArticle] = (0, import_react.useState)("");
	const [plural, setPlural] = (0, import_react.useState)("");
	const [example, setExample] = (0, import_react.useState)("");
	const [mnemonic, setMnemonic] = (0, import_react.useState)("");
	const card = queue[index];
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
			if (!revealed || !card) return;
			const rating = {
				"1": "again",
				"2": "hard",
				"3": "good",
				"4": "easy"
			}[event.key];
			if (!rating) return;
			rateCard(card.id, rating);
			setRevealed(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		revealed,
		card,
		rateCard
	]);
	const dueCount = cards.filter((item) => item.due <= Date.now()).length;
	const mature = cards.filter((item) => item.interval >= 21).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Spaced repetition · SM-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl",
				children: "Cards"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: [
					dueCount,
					" due · ",
					cards.length,
					" saved · ",
					mature,
					" mature"
				]
			})
		] }),
		card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
				index + 1,
				" of ",
				queue.length,
				card.reps === 0 ? " · new" : "",
				card.lapses >= 8 ? " · leech" : ""
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-4xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GermanWord, {
					article: card.article,
					german: card.german
				})
			}),
			revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl",
						children: card.english
					}),
					card.plural ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: ["Plural: ", card.plural]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: card.example
					}),
					card.lapses >= 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex flex-col gap-2",
						onSubmit: (event) => {
							event.preventDefault();
							if (!mnemonic.trim()) return;
							patchCard(card.id, {
								example: mnemonic.trim(),
								lapses: 0
							});
							setMnemonic("");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "This card has failed often. Give it a new example sentence."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								value: mnemonic,
								onChange: (event) => setMnemonic(event.target.value),
								placeholder: "New example",
								"aria-label": "New example"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "soft",
								type: "submit",
								children: "Save example"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-4 gap-2",
						children: RATINGS.map((rating) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "min-h-14 rounded-xl bg-paper-2 text-sm font-semibold capitalize",
							onClick: () => {
								rateCard(card.id, rating);
								setRevealed(false);
								setIndex((n) => n + 1);
							},
							children: [rating, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-xs font-normal text-muted",
								children: intervalLabel(card, rating)
							})]
						}, rating))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 hidden text-xs text-muted md:block",
						children: "Keys 1–4"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-4",
				onClick: () => setRevealed(true),
				children: "Show meaning"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: "You’re caught up."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted",
			children: "New words arrive when you open a lesson’s dialogue. You can also add your own."
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: "Add a card"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-3 grid gap-2",
			onSubmit: (event) => {
				event.preventDefault();
				if (!german.trim() || !english.trim()) return;
				addVocab("manual", [{
					german: german.trim(),
					english: english.trim(),
					article: article || void 0,
					plural: plural.trim() || void 0,
					example: example.trim() || german.trim()
				}]);
				setGerman("");
				setEnglish("");
				setPlural("");
				setExample("");
				setArticle("");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					value: german,
					onChange: (event) => setGerman(event.target.value),
					placeholder: "German",
					"aria-label": "German"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					value: english,
					onChange: (event) => setEnglish(event.target.value),
					placeholder: "English",
					"aria-label": "English"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						"der",
						"die",
						"das"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `min-h-11 rounded-full border font-semibold ${article === item ? "border-spruce bg-spruce-soft" : "border-line"} ${item === "der" ? "text-der" : item === "die" ? "text-die" : "text-das"}`,
						onClick: () => setArticle((current) => current === item ? "" : item),
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					value: plural,
					onChange: (event) => setPlural(event.target.value),
					placeholder: "Plural, optional",
					"aria-label": "Plural"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					value: example,
					onChange: (event) => setExample(event.target.value),
					placeholder: "Example sentence",
					"aria-label": "Example"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Add to deck"
				})
			]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "soft",
				onClick: () => {
					const blob = new Blob([cardsToCsv(cards)], { type: "text/csv" });
					const url = URL.createObjectURL(blob);
					const link = document.createElement("a");
					link.href = url;
					link.download = `lernpfad-cards-${todayISO()}.csv`;
					link.click();
					URL.revokeObjectURL(url);
				},
				children: "Export CSV"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "inline-flex min-h-12 cursor-pointer items-center rounded-full bg-paper-2 px-5 font-semibold",
				children: ["Import CSV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					accept: ".csv,text/csv",
					className: "sr-only",
					onChange: (event) => {
						const file = event.target.files?.[0];
						if (!file) return;
						file.text().then((text) => addVocab("import", csvToVocab(text)));
						event.target.value = "";
					}
				})]
			})]
		})
	] });
}
function Lessons() {
	const progress = useStudy((s) => s.progress);
	const openLesson = useStudy((s) => s.openLesson);
	const [mode, setMode] = (0, import_react.useState)("path");
	const [query, setQuery] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => lessons.filter((lesson) => lesson.grammarNote), []).filter((lesson) => {
		return `${lesson.grammar} ${lesson.grammarNote?.rule ?? ""} ${lesson.title}`.toLowerCase().includes(query.trim().toLowerCase());
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "A1 · Units 1–3" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl",
				children: "Lessons"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Five lessons, a review and a checkpoint in each unit. Later units are not in this build."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex rounded-full bg-paper-2 p-1",
			children: ["path", "reference"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("min-h-11 flex-1 rounded-full text-sm font-semibold capitalize", mode === item ? "bg-card" : "text-muted"),
				onClick: () => setMode(item),
				children: item
			}, item))
		}),
		mode === "path" && UNITS.map((unit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: ["Unit ", unit.id] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: unit.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: unit.blurb
				})
			] }), lessons.filter((lesson) => lesson.unit === unit.id).map((lesson) => {
				const state = progress[lesson.id];
				const steps = stepsFor(lesson);
				const label = state?.done ? "Done" : state ? `Step ${Math.min(state.step + 1, steps.length)} of ${steps.length}` : "Not started";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openLesson(lesson.id),
					className: "flex min-h-20 items-center gap-3 rounded-2xl border border-line bg-card px-3 py-3 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 shrink-0 place-items-center rounded-xl bg-paper-2 font-display text-lg",
							children: lesson.indexLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: lesson.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm text-muted",
								children: lesson.goal
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-widest text-muted uppercase",
							children: label
						})
					]
				}, lesson.id);
			})]
		}, unit.id)),
		mode === "reference" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: "Search grammar",
					"aria-label": "Search grammar"
				}),
				filtered.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
						"Unit ",
						lesson.unit,
						" · ",
						lesson.grammar
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl",
						children: lesson.grammarNote?.lead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: lesson.grammarNote?.rule
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: lesson.grammarNote?.contrast
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3",
						variant: "soft",
						onClick: () => openLesson(lesson.id),
						children: "Open lesson"
					})
				] }, lesson.id)),
				!filtered.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "No grammar page matches that."
				})
			]
		})
	] });
}
function LessonRoute() {
	const id = useStudy((s) => s.activeLessonId);
	if (!id) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lessons, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Player, { lessonId: id }) });
}
function Progress() {
	const profile = useStudy((s) => s.profile);
	const logs = useStudy((s) => s.logs);
	const cards = useStudy((s) => s.cards);
	const benchmarks = useStudy((s) => s.benchmarks);
	const attempts = useStudy((s) => s.attempts);
	const reviews = useStudy((s) => s.reviews);
	const doneBlocks = useStudy((s) => s.doneBlocks);
	const setBenchmark = useStudy((s) => s.setBenchmark);
	const startBlock = useStudy((s) => s.startBlock);
	const progress = useStudy((s) => s.progress);
	const [weekPick, setWeekPick] = (0, import_react.useState)(() => Math.min(10, profile ? studyWeek(profile.startDate) : 1));
	if (!profile) return null;
	const week = studyWeek(profile.startDate);
	const weekLogs = logs.filter((log) => inWeek(log.date, profile.startDate, week) && log.kind !== "Break");
	const hours = weekLogs.reduce((sum, log) => sum + log.actual, 0) / 3600;
	const completion = weekLogs.length ? weekLogs.filter((log) => log.completed).length / weekLogs.length : 0;
	const buckets = /* @__PURE__ */ new Map();
	for (const log of weekLogs) {
		const name = bucket(new Date(log.startedAt).getHours());
		buckets.set(name, (buckets.get(name) ?? 0) + log.actual);
	}
	const best = [...buckets.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
	const byKind = [
		"Lesson",
		"Drills",
		"Listening",
		"Output"
	].map((kind) => ({
		kind,
		hours: weekLogs.filter((log) => log.kind === kind).reduce((sum, log) => sum + log.actual, 0) / 3600
	}));
	const maxHours = Math.max(.1, ...byKind.map((item) => item.hours));
	const benchmark = benchmarks.find((item) => item.week === weekPick);
	const misses = topErrors(attempts);
	const lastWrong = [...attempts].reverse().filter((attempt) => !attempt.correct).slice(0, 6);
	const recent = reviews.slice(-40);
	const retention = recent.length ? recent.filter((mark) => mark.rating !== "again").length / recent.length : null;
	const doneLessons = Object.values(progress).filter((item) => item.done).length;
	const todayDone = (doneBlocks[todayISO()] ?? []).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: ["Week ", week] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl",
				children: "Progress"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Ten weeks is a study plan, not a promise of an exam result."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3 gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
					label: "Focused",
					value: `${hours.toFixed(1)}h`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
					label: "Lessons",
					value: `${doneLessons}/21`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
					label: "Today",
					value: `${todayDone}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "This study week" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2",
				children: [
					"Completion ",
					weekLogs.length ? `${Math.round(completion * 100)}%` : "—",
					" · Best time ",
					best,
					retention != null ? ` · Recall ${Math.round(retention * 100)}%` : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3",
				children: byKind.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.kind }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted",
						children: [item.hours.toFixed(1), "h"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 overflow-hidden rounded-full bg-paper-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-spruce-fill",
						style: { width: `${item.hours / maxHours * 100}%` }
					})
				})] }, item.kind))
			}),
			!weekLogs.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Finish a block and this week will fill in."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Benchmarks" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block text-sm font-semibold",
				children: ["Week", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: "mt-1 min-h-12 w-full rounded-xl border border-line bg-card px-3",
					value: weekPick,
					onChange: (event) => setWeekPick(Number(event.target.value)),
					children: benchmarks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: item.week,
						children: ["Week ", item.week]
					}, item.week))
				})]
			}),
			benchmark && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3",
				children: [
					weekPick > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "This build teaches Units 1 to 3. Keep the benchmark and log it when you can attempt it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["Target", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-1 min-h-20 w-full rounded-xl border border-line bg-paper px-3 py-2 font-normal",
							value: benchmark.target,
							onChange: (event) => setBenchmark(benchmark.week, { target: event.target.value })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["What happened", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-1 min-h-20 w-full rounded-xl border border-line bg-paper px-3 py-2 font-normal",
							value: benchmark.result,
							onChange: (event) => setBenchmark(benchmark.week, { result: event.target.value }),
							placeholder: "A sentence is enough."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["Score, optional", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 0,
							max: 100,
							className: "mt-1 min-h-12 w-full rounded-xl border border-line bg-paper px-3",
							value: benchmark.score ?? "",
							onChange: (event) => setBenchmark(benchmark.week, { score: event.target.value === "" ? null : Number(event.target.value) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setBenchmark(benchmark.week, { status: "pass" }),
							children: "Pass"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "soft",
							onClick: () => setBenchmark(benchmark.week, { status: "fail" }),
							children: "Not yet"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: cn("text-sm", benchmark.status === "pass" ? "text-spruce" : "text-muted"),
						children: ["Status: ", benchmark.status === "pending" ? "not logged" : benchmark.status === "pass" ? "passed" : "not yet"]
					})
				]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Error bank" }),
			misses.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2",
				children: misses.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ERROR_LABEL[item.error] ?? item.error }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: item.count
					})]
				}, item.error))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Misses will collect here once you check a few answers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2",
				children: lastWrong.map((attempt) => {
					const found = findQuestion(attempt.questionId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: found?.question.prompt ?? "Drill item"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [" · you wrote ", attempt.answer || "—"]
						})]
					}, attempt.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-4",
				variant: "soft",
				onClick: () => {
					const lessonId = Object.keys(progress)[0] ?? "u1l1";
					primeAudio();
					startBlock({
						index: -1,
						kind: "Drills",
						lessonId
					});
				},
				children: "Drill the weak spots"
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			children: [cards.length, " cards in the deck. Vocabulary counts grow as you meet words in lessons."]
		})
	] });
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-line bg-card px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold tracking-widest text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-2xl",
			children: value
		})]
	});
}
function Settings$1() {
	const profile = useStudy((s) => s.profile);
	const updateProfile = useStudy((s) => s.updateProfile);
	const cards = useStudy((s) => s.cards);
	const resetAll = useStudy((s) => s.resetAll);
	const [arm, setArm] = (0, import_react.useState)(false);
	if (!profile) return null;
	function set(key, value) {
		updateProfile({ [key]: value });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "On this device" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Lessons, cards and logs stay in this browser. Nothing is uploaded."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm font-semibold",
				children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-1",
					value: profile.name,
					onChange: (event) => set("name", event.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Track"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex rounded-full bg-paper-2 p-1",
						children: [["intensive", "Intensive"], ["standard", "Standard"]].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("min-h-11 flex-1 rounded-full text-sm font-semibold", profile.track === value ? "bg-card" : "text-muted"),
							onClick: () => set("track", value),
							children: label
						}, value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: profile.track === "intensive" ? "About 5 hours, 10 blocks a day, 10 weeks." : "About 2 hours, 4 blocks a day, 24 weeks."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm font-semibold",
				children: ["Start date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-1",
					type: "date",
					value: profile.startDate,
					onChange: (event) => set("startDate", event.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm font-semibold",
				children: ["Exam date, optional", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-1",
					type: "date",
					value: profile.examDate ?? "",
					onChange: (event) => set("examDate", event.target.value || null)
				})]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: "Focus length"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				value: String(profile.focusMin),
				options: [
					"25",
					"30",
					"45"
				],
				suffix: " min",
				onChange: (value) => set("focusMin", Number(value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-semibold",
				children: "Short break"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				value: String(profile.shortBreak),
				options: ["5", "10"],
				suffix: " min",
				onChange: (value) => set("shortBreak", Number(value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-semibold",
				children: "Long break"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				value: String(profile.longBreak),
				options: [
					"20",
					"25",
					"30"
				],
				suffix: " min",
				onChange: (value) => set("longBreak", Number(value))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: "Appearance"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex rounded-full bg-paper-2 p-1",
				children: ["light", "dark"].map((theme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("min-h-11 flex-1 rounded-full text-sm font-semibold capitalize", profile.theme === theme ? "bg-card" : "text-muted"),
					onClick: () => set("theme", theme),
					children: theme
				}, theme))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-semibold",
				children: "Text size"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
				value: profile.text,
				options: [
					["sm", "Small"],
					["md", "Medium"],
					["lg", "Large"]
				],
				onChange: (value) => set("text", value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 flex min-h-12 items-center gap-3 text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: profile.vibrate,
					onChange: (event) => set("vibrate", event.target.checked)
				}), "Vibrate when a block ends"]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Deck limits" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block text-sm font-semibold",
				children: ["New cards a day", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-1",
					type: "number",
					min: 1,
					max: 100,
					value: profile.newLimit,
					onChange: (event) => set("newLimit", Number(event.target.value) || 1)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block text-sm font-semibold",
				children: ["Reviews a day", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					className: "mt-1",
					type: "number",
					min: 1,
					max: 500,
					value: profile.reviewLimit,
					onChange: (event) => set("reviewLimit", Number(event.target.value) || 1)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-4",
				variant: "soft",
				onClick: () => {
					const blob = new Blob([cardsToCsv(cards)], { type: "text/csv" });
					const url = URL.createObjectURL(blob);
					const link = document.createElement("a");
					link.href = url;
					link.download = `lernpfad-cards-${todayISO()}.csv`;
					link.click();
					URL.revokeObjectURL(url);
				},
				children: "Export cards"
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Reset this device"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Clears your profile, cards, logs and benchmarks from this browser."
			}),
			arm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: resetAll,
					children: "Delete everything"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => setArm(false),
					children: "Cancel"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-3",
				variant: "soft",
				onClick: () => setArm(true),
				children: "Reset"
			})
		] })
	] });
}
function Choice({ value, options, onChange, suffix = "" }) {
	const items = options.map((option) => Array.isArray(option) ? {
		value: option[0],
		label: option[1]
	} : {
		value: option,
		label: `${option}${suffix}`
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 flex rounded-full bg-paper-2 p-1",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: cn("min-h-11 flex-1 rounded-full text-sm font-semibold", value === item.value ? "bg-card" : "text-muted"),
			onClick: () => onChange(item.value),
			children: item.label
		}, item.value))
	});
}
var ICONS = {
	Lesson: BookOpen,
	Drills: Target,
	Listening: Headphones,
	Output: PenLine
};
function Today() {
	const profile = useStudy((s) => s.profile);
	const progress = useStudy((s) => s.progress);
	const cards = useStudy((s) => s.cards);
	const doneBlocks = useStudy((s) => s.doneBlocks);
	const benchmarks = useStudy((s) => s.benchmarks);
	const timer = useStudy((s) => s.timer);
	const startBlock = useStudy((s) => s.startBlock);
	const setView = useStudy((s) => s.setView);
	const now = useNow(1e3);
	if (!profile) return null;
	const today = todayISO();
	const week = studyWeek(profile.startDate, today);
	const totalWeeks = profile.track === "intensive" ? 10 : 24;
	const plan = buildPlan(profile.track, progress, week);
	const done = doneBlocks[today] ?? [];
	const next = plan.find((block) => !done.includes(block.index)) ?? null;
	const due = cards.filter((card) => card.due <= now).length;
	const lesson = next ? lessonById(next.lessonId) : lessonById(plan[0]?.lessonId ?? "");
	const unitLabel = week <= 3 ? `Unit ${Math.min(week, 3)} · ${lesson?.unitTitle ?? ""}` : "Review Units 1–3";
	const benchmark = benchmarks.find((item) => item.week === Math.min(week, 10));
	const dayStreak = streak(doneBlocks, today);
	let examLine = `Week ${week} of ${totalWeeks}`;
	let examProgress = Math.min(1, week / totalWeeks);
	if (profile.examDate) {
		const span = Math.max(1, daysBetween(profile.startDate, profile.examDate));
		const gone = daysBetween(profile.startDate, today);
		examProgress = Math.max(0, Math.min(1, gone / span));
		const left = daysBetween(today, profile.examDate);
		examLine = left >= 0 ? `${left} days to the exam` : "Exam date has passed";
	}
	function begin(block) {
		primeAudio();
		startBlock({
			index: block.index,
			kind: block.kind,
			lessonId: block.lessonId
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: longDate() }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-1 font-display text-4xl leading-tight",
				children: [
					greeting(),
					", ",
					profile.name,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: [
					"Week ",
					Math.min(week, totalWeeks),
					" · ",
					unitLabel
				]
			})
		] }),
		timer && timer.phase !== "rate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex min-h-14 items-center justify-between rounded-2xl bg-spruce-fill px-4 text-spruce-ink",
			onClick: () => setView("focus"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: timer.phase === "break" ? "Break running" : "Block paused" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl tabular-nums",
				children: fmt(remainingSec(timer, now))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "border-transparent bg-spruce-fill text-spruce-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-spruce-ink/80",
					children: next ? "Next block" : "Today"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl leading-tight",
					children: next ? next.title : "Today’s blocks are done."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-spruce-ink/90",
					children: next ? next.detail : "Review cards, or start an extra block if you still have attention left."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "bg-card text-ink",
						onClick: () => begin(next),
						children: [
							"Start ",
							profile.focusMin,
							" min"
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "bg-card text-ink",
						onClick: () => setView("cards"),
						children: "Review cards"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "bg-spruce text-spruce-ink",
						onClick: () => {
							const lessonId = plan[0]?.lessonId;
							if (!lessonId) return;
							primeAudio();
							startBlock({
								index: -1,
								kind: "Lesson",
								lessonId
							});
						},
						children: "Extra lesson"
					})] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3 gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Blocks",
					value: `${done.length}/${plan.length}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Cards due",
					value: String(due)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Streak",
					value: `${dayStreak}d`,
					icon: true
				})
			]
		}),
		profile.track === "intensive" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-1",
			"aria-hidden": "true",
			children: Array.from({ length: 10 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 flex-1 rounded-full", index + 1 < week ? "bg-spruce-fill" : index + 1 === Math.min(week, 10) ? "bg-clay" : "bg-line") }, index))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Today’s plan"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-muted",
				children: [profile.focusMin, " min blocks"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-2",
			children: plan.map((block) => {
				const Icon = ICONS[block.kind];
				const complete = done.includes(block.index);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => begin(block),
					className: "flex min-h-16 w-full items-center gap-3 rounded-2xl border border-line bg-card px-3 py-3 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 shrink-0 place-items-center rounded-full bg-spruce-soft text-spruce",
							children: complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold",
								children: block.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-sm text-muted",
								children: [
									block.kind,
									" · ",
									profile.focusMin,
									" min"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-widest text-muted uppercase",
							children: complete ? "Done" : "Start"
						})
					]
				}) }, block.index);
			})
		})] }),
		benchmark && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "rounded-2xl border border-line bg-card p-4 text-left",
			onClick: () => setView("progress"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
					"Week ",
					benchmark.week,
					" benchmark"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-semibold",
					children: benchmark.target
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: benchmark.status === "pending" ? "Not logged yet" : benchmark.status === "pass" ? "Passed" : "Not yet"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl",
				children: "Path"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted",
				children: examLine
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
			value: examProgress,
			label: "Progress toward the plan"
		})] })
	] });
}
function Stat({ label, value, icon = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-line bg-card px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-1 text-xs font-semibold tracking-widest text-muted uppercase",
			children: [icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { size: 12 }) : null, label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-2xl",
			children: value
		})]
	});
}
var NAV = [
	{
		id: "today",
		label: "Today",
		icon: CalendarDays
	},
	{
		id: "lessons",
		label: "Lessons",
		icon: BookOpen
	},
	{
		id: "cards",
		label: "Cards",
		icon: Layers
	},
	{
		id: "progress",
		label: "Progress",
		icon: ChartNoAxesColumn
	}
];
function Shell() {
	const view = useStudy((s) => s.view);
	const setView = useStudy((s) => s.setView);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink md:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r border-line bg-card px-4 py-6 md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 place-items-center rounded-xl bg-spruce-fill font-display text-lg text-spruce-ink",
						children: "L"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl leading-none",
						children: "Lernpfad"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "A1 toward B1"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-8 grid gap-1",
					"aria-label": "Primary",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
						item,
						active: view === item.id || item.id === "lessons" && view === "lesson",
						onClick: () => setView(item.id)
					}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
						item: {
							id: "settings",
							label: "Settings",
							icon: Settings
						},
						active: view === "settings",
						onClick: () => setView("settings")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-auto px-2 text-sm text-muted",
					children: "Units 1–3 are ready. The rest of the path is still being written."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "mx-auto flex w-full max-w-3xl justify-end px-4 pt-4 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-11 place-items-center rounded-full bg-paper-2",
						"aria-label": "Settings",
						onClick: () => setView("settings"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 18 })
					})
				}),
				view === "today" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Today, {}),
				view === "lessons" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lessons, {}),
				view === "lesson" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonRoute, {}),
				view === "cards" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cards, {}),
				view === "progress" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {}),
				view === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings$1, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "fixed inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-line bg-card md:hidden",
					"aria-label": "Primary",
					children: NAV.map((item) => {
						const Icon = item.icon;
						const active = view === item.id || item.id === "lessons" && view === "lesson";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold", active ? "text-spruce" : "text-muted"),
							"aria-current": active ? "page" : void 0,
							onClick: () => setView(item.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 }), item.label]
						}, item.id);
					})
				})
			]
		})]
	});
}
function NavButton({ item, active, onClick }) {
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		"aria-current": active ? "page" : void 0,
		className: cn("flex min-h-11 items-center gap-3 rounded-xl px-3 text-left font-semibold", active ? "bg-paper-2 text-ink" : "text-muted"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 }), item.label]
	});
}
function useHydrated() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		Promise.resolve(useStudy.persist.rehydrate()).finally(() => {
			const profile = useStudy.getState().profile;
			document.documentElement.classList.toggle("dark", profile?.theme === "dark");
			document.documentElement.dataset.text = profile?.text ?? "md";
			const timer = useStudy.getState().timer;
			if (timer && (timer.running || timer.phase === "rate" || timer.phase === "break")) useStudy.setState({ view: "focus" });
			setReady(true);
		});
	}, []);
	return ready;
}
function ThemeSync() {
	const theme = useStudy((s) => s.profile?.theme ?? "light");
	const text = useStudy((s) => s.profile?.text ?? "md");
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		document.documentElement.dataset.text = text;
	}, [theme, text]);
	return null;
}
function App() {
	const ready = useHydrated();
	const profile = useStudy((s) => s.profile);
	const view = useStudy((s) => s.view);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-4xl",
				children: "Lernpfad"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Opening your study space"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSync, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimerEngine, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { position: "top-center" }),
		profile ? view === "focus" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Focus, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {})
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { Home as component };
