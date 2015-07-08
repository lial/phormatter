/**
 * PHormatter module designated for phone numbers formatting.
 * Result of formated number depends on country and number
 *
 * This is a port of php library (https://github.com/mrXCray/PhoneCodes) for node.js
 *
 * Ported by LIAL (https://github.com/lial/)
 */

var phoneCodes = {
    9162: {
        name: 'Cocos',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    6723: {
        name: 'Norfolk',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    4175: {
        name: 'Liechtenstein',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    3428: {
        name: 'Canary',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    3395: {
        name: 'Corsica',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1907: {
        name: 'Alaska',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1876: {
        name: 'Jamaica',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1869: {
        name: 'St.KittsAndNevis',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1868: {
        name: 'TrinidadAndTobago',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1809: {
        name: 'Dominican',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1787: {
        name: 'PuertoRico',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1784: {
        name: 'St.VincentAndTheGrenadines',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1767: {
        name: 'Dominica',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1758: {
        name: 'St.Lucia',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1671: {
        name: 'Guam',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1670: {
        name: 'CommonwealthOfTheNorthernMarianaIslands',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1664: {
        name: 'Montserrat',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1649: {
        name: 'Turks&Caicos',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1473: {
        name: 'Grenada',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1441: {
        name: 'Bermuda',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1345: {
        name: 'CaymanIslands',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1340: {
        name: 'USVirginIslands',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1284: {
        name: 'Bahamas',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1268: {
        name: 'AntiguaAndBarbuda',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1264: {
        name: 'Anguilla',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    1246: {
        name: 'Barbados',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    998: {
        name: 'Uzbekistan',
        cityCodeLength: 4,
        zeroHack: false,
        exceptions: [71, 74, 65, 67, 72, 75, 79, 69, 61, 66, 76, 62, 73, 677, 673],
        exceptions_max: 3,
        exceptions_min: 2
    },
    996: {
        name: 'Kyrgyzstan',
        cityCodeLength: 4,
        zeroHack: false,
        exceptions: [31, 37, 313, 39, 35, 32, 34],
        exceptions_max: 3,
        exceptions_min: 2
    },
    995: {
        name: 'Georgia',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [32, 34],
        exceptions_max: 2,
        exceptions_min: 2
    },
    994: {
        name: 'Azerbaijan',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [12, 1445, 1302],
        exceptions_max: 4,
        exceptions_min: 2
    },
    993: {
        name: 'Turkmenistan',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    992: {
        name: 'Tajikistan',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    977: {
        name: 'Nepal',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1],
        exceptions_max: 1,
        exceptions_min: 1
    },
    976: {
        name: 'Mongolia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1],
        exceptions_max: 1,
        exceptions_min: 1
    },
    975: {
        name: 'Bhutan',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    974: {
        name: 'Qatar',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [48, 59, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 222, 223, 224, 225, 226, 227],
        exceptions_max: 3,
        exceptions_min: 2
    },
    973: {
        name: 'Bahrain',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    972: {
        name: 'Israel',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [50, 51, 52, 53, 58],
        exceptions_max: 2,
        exceptions_min: 2
    },
    971: {
        name: 'UnitedArabEmirates',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [5079],
        exceptions_max: 4,
        exceptions_min: 4
    },
    969: {
        name: 'Yemen,South',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [8],
        exceptions_max: 1,
        exceptions_min: 1
    },
    968: {
        name: 'Oman',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    967: {
        name: 'Yemen,North',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    966: {
        name: 'SaudiArabia',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    965: {
        name: 'Kuwait',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    964: {
        name: 'Iraq',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [1, 43, 49, 25, 62, 36, 32, 50, 23, 60, 42, 33, 24, 37, 53, 21, 30, 66],
        exceptions_max: 2,
        exceptions_min: 1
    },
    963: {
        name: 'Syria',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    962: {
        name: 'Jordan',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [59, 79, 73, 74, 17],
        exceptions_max: 2,
        exceptions_min: 2
    },
    961: {
        name: 'Lebanon',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    960: {
        name: 'Maldives',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    886: {
        name: 'Taiwan',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [89, 90, 91, 92, 93, 96, 60, 70, 94, 95],
        exceptions_max: 2,
        exceptions_min: 2
    },
    880: {
        name: 'Bangladesh',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [51, 2, 41, 81, 91, 31],
        exceptions_max: 2,
        exceptions_min: 1
    },
    856: {
        name: 'Laos',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [9],
        exceptions_max: 1,
        exceptions_min: 1
    },
    855: {
        name: 'Cambodia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1881, 1591, 1720],
        exceptions_max: 4,
        exceptions_min: 4
    },
    853: {
        name: 'Macau',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    852: {
        name: 'HongKong',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    850: {
        name: 'Korea,Dem.PeoplesRepublic',
        cityCodeLength: 4,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    692: {
        name: 'MarshallIslands',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [873],
        exceptions_max: 3,
        exceptions_min: 3
    },
    691: {
        name: 'Micronesia',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    690: {
        name: 'Tokelau',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    689: {
        name: 'FrenchPolynesia',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    688: {
        name: 'Tuvalu',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    687: {
        name: 'NewCaledonia',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    686: {
        name: 'Kiribati',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    685: {
        name: 'WesternSamoa',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    684: {
        name: 'AmericanSamoa',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    683: {
        name: 'NiueIslands',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    682: {
        name: 'CookIslands',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    681: {
        name: 'WallisAndFutuna',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    680: {
        name: 'Palau',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    679: {
        name: 'Fiji',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    678: {
        name: 'Vanuatu',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    677: {
        name: 'SolomonIslands',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    676: {
        name: 'Tonga',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    675: {
        name: 'PapuaNewGuinea',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    674: {
        name: 'Nauru',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    673: {
        name: 'Brunei',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    672: {
        name: 'ChristmasIsland',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    671: {
        name: 'Guam',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    670: {
        name: 'NorthernMarianaIslands',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [2348],
        exceptions_max: 4,
        exceptions_min: 4
    },
    599: {
        name: 'NetherlandsAntilles',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [46],
        exceptions_max: 2,
        exceptions_min: 2
    },
    598: {
        name: 'Uruguay',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [42, 2],
        exceptions_max: 2,
        exceptions_min: 1
    },
    597: {
        name: 'Suriname',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    596: {
        name: 'Martinique',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
        exceptions_max: 2,
        exceptions_min: 2
    },
    595: {
        name: 'Paraguay',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [541, 521],
        exceptions_max: 3,
        exceptions_min: 3
    },
    594: {
        name: 'FrenchGuiana',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    593: {
        name: 'Ecuador',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    592: {
        name: 'Guyana',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    591: {
        name: 'Bolivia',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [69, 4, 2, 92, 52, 3, 46],
        exceptions_max: 2,
        exceptions_min: 1
    },
    590: {
        name: 'FrenchAntilles',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    509: {
        name: 'Haiti',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [330, 420, 510, 851],
        exceptions_max: 3,
        exceptions_min: 3
    },
    508: {
        name: 'SaintPierreEtMiquelon',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    507: {
        name: 'Panama',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    506: {
        name: 'Costa',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    505: {
        name: 'Nicaragua',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    504: {
        name: 'Honduras',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    503: {
        name: 'ElSalvador',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    502: {
        name: 'Guatemala',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    501: {
        name: 'Belize',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    500: {
        name: 'Falkland',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    421: {
        name: 'SlovakRepublic',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [7, 89, 95, 92, 91],
        exceptions_max: 2,
        exceptions_min: 1
    },
    420: {
        name: 'CzechRepublic',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [5, 49, 67, 66, 17, 48, 35, 68, 69, 40, 19, 2, 47, 38],
        exceptions_max: 2,
        exceptions_min: 1
    },
    389: {
        name: 'Macedonia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [903, 901, 902],
        exceptions_max: 3,
        exceptions_min: 3
    },
    387: {
        name: 'BosniaAndHerzegovina',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    386: {
        name: 'Slovenia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [608, 602, 601],
        exceptions_max: 3,
        exceptions_min: 3
    },
    385: {
        name: 'Croatia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1],
        exceptions_max: 1,
        exceptions_min: 1
    },
    381: {
        name: 'Yugoslavia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [230],
        exceptions_max: 3,
        exceptions_min: 3
    },
    380: {
        name: 'Ukraine',
        cityCodeLength: 4,
        zeroHack: true,
        exceptions: [44, 432, 1762, 562, 622, 412, 522, 564, 53615, 642, 322, 448, 629, 512, 482, 532, 3355, 1821, 403, 222, 1852, 356, 3371, 267, 3443, 1694, 1965, 3058, 1627, 3385, 3356, 2718, 3370, 3260, 3231, 2785, 309, 2857, 2957, 2911, 294, 1705, 3, 295, 3250, 3387, 2523, 3246, 2674, 1854, 3433, 1711, 251, 2958, 2477, 2984, 307, 542, 352, 572, 552, 382, 472, 462, 654],
        exceptions_max: 5,
        exceptions_min: 1
    },
    378: {
        name: 'RepublicOfSanMarino',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    377: {
        name: 'Monaco',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    376: {
        name: 'Andorra',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    375: {
        name: 'Belarus',
        cityCodeLength: 4,
        zeroHack: false,
        exceptions: [17, 163, 162, 232, 222],
        exceptions_max: 3,
        exceptions_min: 2
    },
    374: {
        name: 'Armenia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1, 460, 520, 4300, 680, 860, 830, 550, 490, 570],
        exceptions_max: 4,
        exceptions_min: 1
    },
    373: {
        name: 'Moldova',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    372: {
        name: 'Estonia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2, 7],
        exceptions_max: 1,
        exceptions_min: 1
    },
    371: {
        name: 'Latvia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    370: {
        name: 'Lithuania',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [5, 37, 46, 45, 41],
        exceptions_max: 2,
        exceptions_min: 1
    },
    359: {
        name: 'Bulgaria',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [2, 56, 62, 94, 92, 52, 32, 76, 64, 84, 82, 44, 42, 38, 46, 5722, 73, 66, 58, 68, 34, 86, 54, 6071, 7443, 5152, 7112, 7128, 9744, 9527, 5731, 8141, 3041, 6514, 6151, 3071, 9131, 7142, 3145, 8362, 3751, 6191, 9171, 2031, 7181, 6141, 7133, 5561, 3542, 3151, 3561, 7481, 3181, 5514, 3134, 6161, 4761, 5751, 3051],
        exceptions_max: 4,
        exceptions_min: 1
    },
    358: {
        name: 'Finland',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [6, 5, 2, 8, 9, 3],
        exceptions_max: 1,
        exceptions_min: 1
    },
    357: {
        name: 'Cyprus',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2, 3, 91, 92, 93, 94, 95, 96, 98],
        exceptions_max: 2,
        exceptions_min: 1
    },
    356: {
        name: 'Malta',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    355: {
        name: 'Albania',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [65, 62, 52, 64, 82, 7426, 42, 63],
        exceptions_max: 4,
        exceptions_min: 2
    },
    354: {
        name: 'Iceland',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    353: {
        name: 'IrishRepublic',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1, 402, 507, 902, 905, 509, 502, 903, 506, 504, 404, 405],
        exceptions_max: 3,
        exceptions_min: 1
    },
    352: {
        name: 'Luxembourg',
        cityCodeLength: 2,
        zeroHack: true,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    351: {
        name: 'Azores',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1, 2, 96, 676, 765, 96765],
        exceptions_max: 5,
        exceptions_min: 1
    },
    350: {
        name: 'Gibraltar',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    299: {
        name: 'Greenland',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    298: {
        name: 'FaeroeIslands',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    297: {
        name: 'Aruba',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    291: {
        name: 'Eritrea',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1],
        exceptions_max: 1,
        exceptions_min: 1
    },
    290: {
        name: 'St.Helena',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    269: {
        name: 'ComorosAndMayotteIsland',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    268: {
        name: 'Swaziland',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    267: {
        name: 'Botswana',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    266: {
        name: 'Lesotho',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    265: {
        name: 'Malawi',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    264: {
        name: 'Namibia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [811, 812, 813],
        exceptions_max: 3,
        exceptions_min: 3
    },
    263: {
        name: 'Zimbabwe',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [9, 4, 637, 718],
        exceptions_max: 3,
        exceptions_min: 1
    },
    262: {
        name: 'ReunionIslands',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    261: {
        name: 'Madagascar',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    260: {
        name: 'Zambia',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [26],
        exceptions_max: 2,
        exceptions_min: 2
    },
    259: {
        name: 'Zanzibar',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    258: {
        name: 'Mozambique',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    257: {
        name: 'Burundi',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    256: {
        name: 'Uganda',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [481, 485, 493],
        exceptions_max: 3,
        exceptions_min: 3
    },
    255: {
        name: 'Tanzania',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    254: {
        name: 'Kenya',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [11, 2, 37],
        exceptions_max: 2,
        exceptions_min: 1
    },
    253: {
        name: 'Djibouti',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    252: {
        name: 'Somalia',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    251: {
        name: 'Ethiopia',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    250: {
        name: 'RwandeseRepublic',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    249: {
        name: 'Sudan',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [21, 51, 41, 31, 61, 11],
        exceptions_max: 2,
        exceptions_min: 2
    },
    248: {
        name: 'Seychelles',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    247: {
        name: 'Ascension',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    246: {
        name: 'DiegoGarcia',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    245: {
        name: 'Guinea-Bissau',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    244: {
        name: 'Angola',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [9],
        exceptions_max: 1,
        exceptions_min: 1
    },
    243: {
        name: 'DemocraticRepublic(ex.Zaire)',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    242: {
        name: 'Congo',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1],
        exceptions_max: 1,
        exceptions_min: 1
    },
    241: {
        name: 'GaboneseRepublic',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    240: {
        name: 'EquatorialGuinea',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    239: {
        name: 'SaoTome-e-Principe',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    238: {
        name: 'CapeVerde',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    237: {
        name: 'Cameroon',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    236: {
        name: 'CentralAfricanRepublic',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    235: {
        name: 'Chad',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    234: {
        name: 'Nigeria',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1, 2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    233: {
        name: 'Ghana',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    232: {
        name: 'SierraLeone',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    231: {
        name: 'Liberia',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    230: {
        name: 'Mauritius',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    229: {
        name: 'Benin',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    228: {
        name: 'Togolese',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    227: {
        name: 'Niger',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    226: {
        name: 'BurkinaFaso',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    225: {
        name: 'Ivory',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    224: {
        name: 'Guinea',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [4],
        exceptions_max: 1,
        exceptions_min: 1
    },
    223: {
        name: 'Mali',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    222: {
        name: 'Mauritania',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    221: {
        name: 'Senegal',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [63, 64, 67, 68, 82, 83, 84, 85, 86, 87, 90, 93, 94, 95, 96, 97, 98, 99],
        exceptions_max: 2,
        exceptions_min: 2
    },
    220: {
        name: 'Gambia',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    218: {
        name: 'Libya',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    216: {
        name: 'Tunisia',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    212: {
        name: 'Morocco',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    98: {
        name: 'Iran',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [61, 11, 31, 51, 41, 21, 81, 71],
        exceptions_max: 2,
        exceptions_min: 2
    },
    95: {
        name: 'Myanmar',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1, 2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    94: {
        name: 'SriLanka',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1, 9, 8],
        exceptions_max: 1,
        exceptions_min: 1
    },
    93: {
        name: 'Afganistan',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    92: {
        name: 'Pakistan',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [8288, 4521, 4331, 51, 21, 42, 61, 91, 71],
        exceptions_max: 4,
        exceptions_min: 2
    },
    91: {
        name: 'India',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [11, 22, 33, 44, 40],
        exceptions_max: 2,
        exceptions_min: 2
    },
    90: {
        name: 'Turkey',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    86: {
        name: 'China',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [20, 29, 10, 22, 27, 28, 21, 24, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390],
        exceptions_max: 4,
        exceptions_min: 2
    },
    84: {
        name: 'Vietnam',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [511, 350, 4, 8],
        exceptions_max: 3,
        exceptions_min: 1
    },
    82: {
        name: 'Korea,Republic',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [32, 62, 51, 2, 53, 42, 64, 16, 17, 18, 19],
        exceptions_max: 2,
        exceptions_min: 1
    },
    81: {
        name: 'Japan',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [78, 45, 44, 75, 93, 52, 25, 6, 11, 22, 54, 3, 48, 92, 53, 82, 1070, 3070, 4070],
        exceptions_max: 4,
        exceptions_min: 1
    },
    66: {
        name: 'Thailand',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    65: {
        name: 'Singapore',
        cityCodeLength: 0,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    64: {
        name: 'NewZealand',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [20, 21, 25, 26, 29],
        exceptions_max: 2,
        exceptions_min: 2
    },
    63: {
        name: 'Philippines',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [455, 4661, 2150, 2155, 452, 2],
        exceptions_max: 4,
        exceptions_min: 1
    },
    62: {
        name: 'Indonesia',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [22, 61, 21, 33, 36, 39, 35, 34, 24, 31, 81, 82],
        exceptions_max: 2,
        exceptions_min: 2
    },
    61: {
        name: 'Australia',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [14, 15, 16, 17, 18, 19, 41],
        exceptions_max: 2,
        exceptions_min: 2
    },
    60: {
        name: 'Malaysia',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [86, 88, 82, 85, 10, 18],
        exceptions_max: 2,
        exceptions_min: 2
    },
    58: {
        name: 'Venezuela',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    57: {
        name: 'Colombia',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1, 5, 7, 2, 4, 816],
        exceptions_max: 3,
        exceptions_min: 1
    },
    56: {
        name: 'Chile',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2],
        exceptions_max: 1,
        exceptions_min: 1
    },
    55: {
        name: 'Brazil',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [243, 187, 485, 186, 246, 533, 173, 142, 473, 125, 495, 138, 482, 424, 192, 247, 484, 144, 442, 532, 242, 245, 194, 182, 123, 474, 486],
        exceptions_max: 3,
        exceptions_min: 3
    },
    54: {
        name: 'Argentina',
        cityCodeLength: 4,
        zeroHack: false,
        exceptions: [291, 11, 297, 223, 261, 299, 358, 341, 387, 381, 342],
        exceptions_max: 3,
        exceptions_min: 2
    },
    53: {
        name: 'Cuba',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [680, 5, 8, 7, 686, 322, 419, 433, 335, 422, 692, 516, 226],
        exceptions_max: 3,
        exceptions_min: 1
    },
    52: {
        name: 'Mexico',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [473, 181, 981, 112, 331, 5, 8, 951, 771, 492, 131, 246, 961, 459, 747],
        exceptions_max: 3,
        exceptions_min: 1
    },
    51: {
        name: 'Peru',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1, 194, 198, 193, 190, 1877, 1878, 1879],
        exceptions_max: 4,
        exceptions_min: 1
    },
    49: {
        name: 'Germany',
        cityCodeLength: 4,
        zeroHack: false,
        exceptions: [651, 241, 711, 981, 821, 30, 971, 671, 921, 951, 521, 228, 234, 531, 421, 471, 961, 281, 611, 365, 40, 511, 209, 551, 641, 34202, 340, 351, 991, 771, 906, 231, 203, 211, 271, 911, 212, 841, 631, 721, 561, 221, 831, 261, 341, 871, 491, 591, 451, 621, 391, 291, 89, 395, 5021, 571, 441, 781, 208, 541, 69, 331, 851, 34901, 381, 33638, 751, 681, 861, 581, 731, 335, 741, 461, 761, 661, 345, 481, 34203, 375, 385, 34204, 361, 201, 33608, 161, 171, 172, 173, 177, 178, 179],
        exceptions_max: 5,
        exceptions_min: 2
    },
    48: {
        name: 'Poland',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [192, 795, 862, 131, 135, 836, 115, 604, 641, 417, 601, 602, 603, 605, 606, 501, 885],
        exceptions_max: 3,
        exceptions_min: 3
    },
    47: {
        name: 'Norway',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [43, 83, 62],
        exceptions_max: 2,
        exceptions_min: 2
    },
    46: {
        name: 'Sweden',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [33, 21, 31, 54, 44, 13, 46, 40, 19, 63, 8, 60, 90, 18, 42],
        exceptions_max: 2,
        exceptions_min: 1
    },
    45: {
        name: 'Denmark',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [9, 6, 7, 8, 1, 5, 3, 4, 251, 243, 249, 276, 70777, 80827, 90107, 90207, 90417, 90517],
        exceptions_max: 5,
        exceptions_min: 1
    },
    44: {
        name: 'UnitedKingdom',
        cityCodeLength: 4,
        zeroHack: false,
        exceptions: [21, 91, 44, 41, 51, 61, 31, 121, 117, 141, 185674, 18383, 15932, 116, 151, 113, 171, 181, 161, 207, 208, 158681, 115, 191, 177681, 114, 131, 18645],
        exceptions_max: 6,
        exceptions_min: 2
    },
    43: {
        name: 'Austria',
        cityCodeLength: 4,
        zeroHack: false,
        exceptions: [1, 662, 732, 316, 512, 463],
        exceptions_max: 3,
        exceptions_min: 1
    },
    41: {
        name: 'Switzerland',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1],
        exceptions_max: 1,
        exceptions_min: 1
    },
    40: {
        name: 'Romania',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1, 941, 916, 981],
        exceptions_max: 3,
        exceptions_min: 1
    },
    39: {
        name: 'Italy',
        cityCodeLength: 3,
        zeroHack: true,
        exceptions: [71, 80, 35, 51, 30, 15, 41, 45, 33, 70, 74, 95, 31, 90, 2, 59, 39, 81, 49, 75, 85, 50, 6, 19, 79, 55, 330, 333, 335, 339, 360, 347, 348, 349],
        exceptions_max: 3,
        exceptions_min: 1
    },
    36: {
        name: 'Hungary',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [1],
        exceptions_max: 1,
        exceptions_min: 1
    },
    34: {
        name: 'Spain',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [4, 6, 3, 5, 96, 93, 94, 91, 95, 98],
        exceptions_max: 2,
        exceptions_min: 1
    },
    33: {
        name: 'France',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [32, 14, 38, 59, 55, 88, 96, 28, 97, 42, 61],
        exceptions_max: 2,
        exceptions_min: 2
    },
    32: {
        name: 'Belgium',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2, 9, 7, 3, 476, 477, 478, 495, 496],
        exceptions_max: 3,
        exceptions_min: 1
    },
    31: {
        name: 'Netherlands',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [4160, 2268, 2208, 5253, 78, 72, 33, 20, 55, 26, 35, 74, 76, 40, 77, 10, 70, 75, 73, 38, 50, 15, 30, 58, 43, 24, 46, 13, 23, 45, 53, 61, 62, 65],
        exceptions_max: 4,
        exceptions_min: 2
    },
    30: {
        name: 'Greece',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [1, 41, 81, 51, 61, 31, 71, 93, 94, 95, 97556, 97557],
        exceptions_max: 5,
        exceptions_min: 1
    },
    27: {
        name: 'SouthAfrica',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [149, 1782, 1773, 444],
        exceptions_max: 4,
        exceptions_min: 3
    },
    21: {
        name: 'Algeria',
        cityCodeLength: 1,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    },
    20: {
        name: 'Egypt',
        cityCodeLength: 2,
        zeroHack: false,
        exceptions: [2, 3, 1221],
        exceptions_max: 4,
        exceptions_min: 1
    },
    8: {
        name: 'Russia, Kazakhstan',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [4162, 416332, 8512, 851111, 4722, 4725, 391379, 8442, 4732, 4152, 4154451, 4154459, 4154455, 41544513, 8142, 8332, 8612, 8622, 3525, 812, 8342, 8152, 3812, 4862, 3422, 342633, 8112, 9142, 8452, 3432, 3434, 3435, 4812, 3919, 8432, 8439, 3822, 4872, 3412, 3511, 3512, 3022, 4112, 4852, 4855, 3852, 3854, 8182, 818, 90, 3472, 4741, 4764, 4832, 4922, 8172, 8202, 8722, 4932, 493, 3952, 3951, 3953, 411533, 4842, 3842, 3843, 8212, 4942, 3912, 4712, 4742, 8362, 495, 499, 4966, 4964, 4967, 498, 8312, 8313, 3832, 383612, 3532, 8412, 4232, 423370, 423630, 8632, 8642, 8482, 4242, 8672, 8652, 4752, 4822, 482502, 4826300, 3452, 8422, 4212, 3466, 3462, 8712, 8352, 997, 901, 902, 903, 904, 905, 906, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 936, 937, 938, 950, 951, 952, 953, 960, 961, 962, 963, 964, 965, 967, 968, 980, 981, 982, 983, 984, 985, 987, 988, 989, 7152],
        exceptions_max: 8,
        exceptions_min: 2
    },
    7: {
        name: 'Russia, Kazakhstan',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [4162, 416332, 8512, 851111, 4722, 4725, 391379, 8442, 4732, 4152, 4154451, 4154459, 4154455, 41544513, 8142, 8332, 8612, 8622, 3525, 812, 8342, 8152, 3812, 4862, 3422, 342633, 8112, 9142, 8452, 3432, 3434, 3435, 4812, 3919, 8432, 8439, 3822, 4872, 3412, 3511, 3512, 3022, 4112, 4852, 4855, 3852, 3854, 8182, 818, 90, 3472, 4741, 4764, 4832, 4922, 8172, 8202, 8722, 4932, 493, 3952, 3951, 3953, 411533, 4842, 3842, 3843, 8212, 4942, 3912, 4712, 4742, 8362, 495, 499, 4966, 4964, 4967, 498, 8312, 8313, 3832, 383612, 3532, 8412, 4232, 423370, 423630, 8632, 8642, 8482, 4242, 8672, 8652, 4752, 4822, 482502, 4826300, 3452, 8422, 4212, 3466, 3462, 8712, 8352, 997, 901, 902, 903, 904, 905, 906, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 936, 937, 938, 950, 951, 952, 953, 960, 961, 962, 963, 964, 965, 967, 968, 980, 981, 982, 983, 984, 985, 987, 988, 989, 7152],
        exceptions_max: 8,
        exceptions_min: 2
    },
    1: {
        name: 'USA',
        cityCodeLength: 3,
        zeroHack: false,
        exceptions: [],
        exceptions_max: 0,
        exceptions_min: 0
    }
};

/**
 * Format phone number
 *
 * @param String phone Input phone number
 * @param Char divider Divider in number between digit blocks (Default is minus: 123-45-67)
 * @param Bool plusForce Is plus sign before number obligatory or as in input string (true - force plus)
 * @param Bool convertCharNumber Convert chars to digit in numbers (Eg: 1-800-APPLE will converted to 1-800-27753)
 *
 * @return string
 */
function format(phone, divider, plusForce, convertCharNumber) {

    if (!String.prototype.trim) {
        String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
    }

    var type = Object.prototype.toString.call(phone);

    if (phone == undefined || phone.length == 0 || type !== '[object String]') {
        return '';
    }

    if (divider == undefined) divider = '-';
    if (convertCharNumber == undefined) convertCharNumber = true;

    phone = phone.trim();
    var plus = plusForce || phone.charAt(0) == '+';
    phone = phone.replace(/[^0-9A-Za-z]/g, '');

    //Convert char phone number to digital
    if (convertCharNumber == true && isNaN(phone)) {
        phone = phone.toLowerCase();
        phone = phone.replace(/[abc]/g, '2');
        phone = phone.replace(/[def]/g, '3');
        phone = phone.replace(/[ghi]/g, '4');
        phone = phone.replace(/[jkl]/g, '5');
        phone = phone.replace(/[mno]/g, '6');
        phone = phone.replace(/[pqrs]/g, '7');
        phone = phone.replace(/[tuv]/g, '8');
        phone = phone.replace(/[wxyz]/g, '9');
    }

    //Change 00 to plus sign
    if (phone.substr(0, 2) == '00') {
        phone = phone.slice(2);
        plus = true;
    }

    //If phone number has more than 7 digits will search country in phoneCodes array
    if (phone.length > 7) {
        for (var countryCode in phoneCodes) {
            var data = phoneCodes[countryCode];
            countryCode = countryCode + '';
            var codeLen = countryCode.length;

            if (phone.substr(0, codeLen) == countryCode) {
                //Russia and Kazakhstan hack changes internal country code to international
                if (countryCode == '8') countryCode = '7';

                //If country found, cut phone to city code length
                phone = phone.substr(codeLen, phone.length - codeLen);

                var zero = false;
                //Check if city code has 0
                if (data.zeroHack && phone.charAt(0) == '0') {
                    zero = true;
                    phone = phone.slice(1);
                }

                var cityCode = null;
                //Match with exceptions first
                if (data.exceptions_max != 0)
                    for (var cityCodeLen = data.exceptions_max; cityCodeLen >= data.exceptions_min; cityCodeLen--)
                        if (inArray(parseInt(phone.substr(0, cityCodeLen)), data.exceptions)) {
                            cityCode = (zero ? '0' : '') + phone.substr(0, cityCodeLen);
                            phone = phone.substr(cityCodeLen, phone.length - cityCodeLen);
                            break;
                        }
                //If not found in exceptions, cut city code by default length
                if (cityCode == null) {
                    cityCode = phone.substr(0, data.cityCodeLength);
                    phone = phone.substr(data.cityCodeLength, phone.length - data.cityCodeLength);
                }

                return (plus ? '+' : '') + countryCode + ' (' + cityCode + ') ' + phoneBlocks(phone, divider);
            }
        }
    }
    //Return without country and city codes
    return (plus ? '+' : '') + phoneBlocks(phone, divider);
}

/**
 * Converts any number to formatted string XX-XX-.. or XXX-XX-XX-.., depends on quantity digits in number
 *
 * @param Number number Phone number
 * @param Char divider Divider of digits in phone number (Default value is minus. Eg: 123-45-67)
 *
 * @return string
 */
function phoneBlocks(number, divider) {
    number = number.toString();
    var add = '';

    if (number.length % 2) {
        add = number.slice(0, 1);
        number = number.slice(1);
    }
    var re = RegExp('((.{2})+?|(.{1,2})$)', 'g');
    number = number.match(re);
    number = (number instanceof Array) ? number.join(divider) : number;

    return add + number;
}

/**
 * Check if element is in array or not
 * @param string|int item Element which have to be check
 * @param array array Array of elemnts
 * @param bool strict Strict equal or not
 *
 * @return bool
 */
function inArray(item, array, strict) {
    var found = false, key, strict = !!strict;
    for (key in array) {
        if ((strict && array[key] === item) || (!strict && array[key] == item)) {
            found = true;
            break;
        }
    }

    return found;
}


module.exports.format = format;