const languageMapping = {
    'AD': { code: 'ca', name: 'Catalan', flag: '🇦🇩' }, // Andorra
    'AE': { code: 'ar', name: 'Arabic', flag: '🇦🇪' }, // United Arab Emirates
    'AF': { code: 'ps', name: 'Pashto', flag: '🇦🇫' }, // Afghanistan (also Dari/fa)
    'AG': { code: 'en', name: 'English', flag: '🇦🇬' }, // Antigua and Barbuda
    'AI': { code: 'en', name: 'English', flag: '🇦🇮' }, // Anguilla
    'AL': { code: 'sq', name: 'Albanian', flag: '🇦🇱' }, // Albania
    'AM': { code: 'hy', name: 'Armenian', flag: '🇦🇲' }, // Armenia
    'AO': { code: 'pt', name: 'Portuguese', flag: '🇦🇴' }, // Angola
    'AQ': { code: 'und', name: 'No linguistic content', flag: '🇦🇶' }, // Antarctica (No indigenous population)
    'AR': { code: 'es', name: 'Spanish', flag: '🇦🇷' }, // Argentina (Corrected from original example)
    'AS': { code: 'en', name: 'English', flag: '🇦🇸' }, // American Samoa (also Samoan/sm)
    'AT': { code: 'de', name: 'German', flag: '🇦🇹' }, // Austria
    'AU': { code: 'en', name: 'English', flag: '🇦🇺' }, // Australia
    'AW': { code: 'nl', name: 'Dutch', flag: '🇦🇼' }, // Aruba (also Papiamento/pap)
    'AX': { code: 'sv', name: 'Swedish', flag: '🇦🇽' }, // Åland Islands
    'AZ': { code: 'az', name: 'Azerbaijani', flag: '🇦🇿' }, // Azerbaijan
    'BA': { code: 'bs', name: 'Bosnian', flag: '🇧🇦' }, // Bosnia and Herzegovina (also Croatian/hr, Serbian/sr)
    'BB': { code: 'en', name: 'English', flag: '🇧🇧' }, // Barbados
    'BD': { code: 'bn', name: 'Bengali', flag: '🇧🇩' }, // Bangladesh
    'BE': { code: 'nl', name: 'Dutch', flag: '🇧🇪' }, // Belgium (also French/fr, German/de)
    'BF': { code: 'fr', name: 'French', flag: '🇧🇫' }, // Burkina Faso
    'BG': { code: 'bg', name: 'Bulgarian', flag: '🇧🇬' }, // Bulgaria
    'BH': { code: 'ar', name: 'Arabic', flag: '🇧🇭' }, // Bahrain
    'BI': { code: 'fr', name: 'French', flag: '🇧🇮' }, // Burundi (also Kirundi/rn)
    'BJ': { code: 'fr', name: 'French', flag: '🇧🇯' }, // Benin
    'BL': { code: 'fr', name: 'French', flag: '🇧🇱' }, // Saint Barthélemy
    'BM': { code: 'en', name: 'English', flag: '🇧🇲' }, // Bermuda
    'BN': { code: 'ms', name: 'Malay', flag: '🇧🇳' }, // Brunei Darussalam
    'BO': { code: 'es', name: 'Spanish', flag: '🇧🇴' }, // Bolivia (also Quechua/qu, Aymara/ay, and others)
    'BQ': { code: 'nl', name: 'Dutch', flag: '🇧🇶' }, // Bonaire, Sint Eustatius and Saba (also Papiamento/pap, English/en)
    'BR': { code: 'pt', name: 'Portuguese', flag: '🇧🇷' }, // Brazil
    'BS': { code: 'en', name: 'English', flag: '🇧🇸' }, // Bahamas
    'BT': { code: 'dz', name: 'Dzongkha', flag: '🇧🇹' }, // Bhutan
    'BV': { code: 'no', name: 'Norwegian', flag: '🇧🇻' }, // Bouvet Island (Uninhabited)
    'BW': { code: 'en', name: 'English', flag: '🇧🇼' }, // Botswana (also Setswana/tn)
    'BY': { code: 'be', name: 'Belarusian', flag: '🇧🇾' }, // Belarus (also Russian/ru)
    'BZ': { code: 'en', name: 'English', flag: '🇧🇿' }, // Belize
    'CA': { code: 'en', name: 'English', flag: '🇨🇦' }, // Canada (also French/fr)
    'CC': { code: 'en', name: 'English', flag: '🇨🇨' }, // Cocos (Keeling) Islands (also Malay/ms)
    'CD': { code: 'fr', name: 'French', flag: '🇨🇩' }, // Congo, Democratic Republic of the (Lingala/ln, Kikongo/kg, Swahili/sw, Tshiluba/lua)
    'CF': { code: 'fr', name: 'French', flag: '🇨🇫' }, // Central African Republic (also Sango/sg)
    'CG': { code: 'fr', name: 'French', flag: '🇨🇬' }, // Congo, Republic of the (Lingala/ln, Kituba/ktu)
    'CH': { code: 'de', name: 'German', flag: '🇨🇭' }, // Switzerland (also French/fr, Italian/it, Romansh/rm)
    'CI': { code: 'fr', name: 'French', flag: '🇨🇮' }, // Côte d'Ivoire
    'CK': { code: 'en', name: 'English', flag: '🇨🇰' }, // Cook Islands (also Cook Islands Māori/rar)
    'CL': { code: 'es', name: 'Spanish', flag: '🇨🇱' }, // Chile
    'CM': { code: 'en', name: 'English', flag: '🇨🇲' }, // Cameroon (also French/fr)
    'CN': { code: 'zh-CN', name: 'Chinese (Simplified)', flag: '🇨🇳' }, // China
    'CO': { code: 'es', name: 'Spanish', flag: '🇨🇴' }, // Colombia
    'CR': { code: 'es', name: 'Spanish', flag: '🇨🇷' }, // Costa Rica
    'CU': { code: 'es', name: 'Spanish', flag: '🇨🇺' }, // Cuba
    'CV': { code: 'pt', name: 'Portuguese', flag: '🇨🇻' }, // Cabo Verde (also Kabuverdianu/kea)
    'CW': { code: 'nl', name: 'Dutch', flag: '🇨🇼' }, // Curaçao (also Papiamento/pap, English/en)
    'CX': { code: 'en', name: 'English', flag: '🇨🇽' }, // Christmas Island (also Chinese/zh, Malay/ms)
    'CY': { code: 'el', name: 'Greek', flag: '🇨🇾' }, // Cyprus (also Turkish/tr)
    'CZ': { code: 'cs', name: 'Czech', flag: '🇨🇿' }, // Czech Republic
    'DE': { code: 'de', name: 'German', flag: '🇩🇪' }, // Germany
    'DJ': { code: 'fr', name: 'French', flag: '🇩🇯' }, // Djibouti (also Arabic/ar, Somali/so, Afar/aa)
    'DK': { code: 'da', name: 'Danish', flag: '🇩🇰' }, // Denmark
    'DM': { code: 'en', name: 'English', flag: '🇩🇲' }, // Dominica
    'DO': { code: 'es', name: 'Spanish', flag: '🇩🇴' }, // Dominican Republic
    'DZ': { code: 'ar', name: 'Arabic', flag: '🇩🇿' }, // Algeria (also Berber/ber)
    'EC': { code: 'es', name: 'Spanish', flag: '🇪🇨' }, // Ecuador (also Kichwa/qu)
    'EE': { code: 'et', name: 'Estonian', flag: '🇪🇪' }, // Estonia
    'EG': { code: 'ar', name: 'Arabic', flag: '🇪🇬' }, // Egypt
    'EH': { code: 'ar', name: 'Arabic', flag: '🇪🇭' }, // Western Sahara (also Spanish/es, Berber/ber)
    'ER': { code: 'ti', name: 'Tigrinya', flag: '🇪🇷' }, // Eritrea (also Arabic/ar, English/en)
    'ES': { code: 'es', name: 'Spanish', flag: '🇪🇸' }, // Spain (also Catalan/ca, Galician/gl, Basque/eu)
    'ET': { code: 'am', name: 'Amharic', flag: '🇪🇹' }, // Ethiopia
    'FI': { code: 'fi', name: 'Finnish', flag: '🇫🇮' }, // Finland (also Swedish/sv)
    'FJ': { code: 'en', name: 'English', flag: '🇫🇯' }, // Fiji (also Fijian/fj, Hindi/hif)
    'FK': { code: 'en', name: 'English', flag: '🇫🇰' }, // Falkland Islands (Malvinas)
    'FM': { code: 'en', name: 'English', flag: '🇫🇲' }, // Micronesia, Federated States of
    'FO': { code: 'fo', name: 'Faroese', flag: '🇫🇴' }, // Faroe Islands (also Danish/da)
    'FR': { code: 'fr', name: 'French', flag: '🇫🇷' }, // France
    'GA': { code: 'fr', name: 'French', flag: '🇬🇦' }, // Gabon
    'GB': { code: 'en', name: 'English', flag: '🇬🇧' }, // United Kingdom
    'GD': { code: 'en', name: 'English', flag: '🇬🇩' }, // Grenada
    'GE': { code: 'ka', name: 'Georgian', flag: '🇬🇪' }, // Georgia
    'GF': { code: 'fr', name: 'French', flag: '🇬🇫' }, // French Guiana
    'GG': { code: 'en', name: 'English', flag: '🇬🇬' }, // Guernsey (also French/fr)
    'GH': { code: 'en', name: 'English', flag: '🇬🇭' }, // Ghana
    'GI': { code: 'en', name: 'English', flag: '🇬🇮' }, // Gibraltar
    'GL': { code: 'kl', name: 'Kalaallisut', flag: '🇬🇱' }, // Greenland (also Danish/da)
    'GM': { code: 'en', name: 'English', flag: '🇬🇲' }, // Gambia
    'GN': { code: 'fr', name: 'French', flag: '🇬🇳' }, // Guinea
    'GP': { code: 'fr', name: 'French', flag: '🇬🇵' }, // Guadeloupe
    'GQ': { code: 'es', name: 'Spanish', flag: '🇬🇶' }, // Equatorial Guinea (also French/fr, Portuguese/pt)
    'GR': { code: 'el', name: 'Greek', flag: '🇬🇷' }, // Greece
    'GS': { code: 'en', name: 'English', flag: '🇬🇸' }, // South Georgia and the South Sandwich Islands (Uninhabited)
    'GT': { code: 'es', name: 'Spanish', flag: '🇬🇹' }, // Guatemala
    'GU': { code: 'en', name: 'English', flag: '🇬🇺' }, // Guam (also Chamorro/ch)
    'GW': { code: 'pt', name: 'Portuguese', flag: '🇬🇼' }, // Guinea-Bissau
    'GY': { code: 'en', name: 'English', flag: '🇬🇾' }, // Guyana
    'HK': { code: 'zh-TW', name: 'Chinese (Traditional)', flag: '🇭🇰' }, // Hong Kong (also English/en)
    'HM': { code: 'en', name: 'English', flag: '🇭🇲' }, // Heard Island and McDonald Islands (Uninhabited)
    'HN': { code: 'es', name: 'Spanish', flag: '🇭🇳' }, // Honduras
    'HR': { code: 'hr', name: 'Croatian', flag: '🇭🇷' }, // Croatia
    'HT': { code: 'fr', name: 'French', flag: '🇭🇹' }, // Haiti (also Haitian Creole/ht)
    'HU': { code: 'hu', name: 'Hungarian', flag: '🇭🇺' }, // Hungary
    'ID': { code: 'id', name: 'Indonesian', flag: '🇮🇩' }, // Indonesia
    'IE': { code: 'en', name: 'English', flag: '🇮🇪' }, // Ireland (also Irish/ga)
    'IL': { code: 'he', name: 'Hebrew', flag: '🇮🇱' }, // Israel (also Arabic/ar)
    'IM': { code: 'en', name: 'English', flag: '🇮🇲' }, // Isle of Man (also Manx/gv)
    'IN': { code: 'hi', name: 'Hindi', flag: '🇮🇳' }, // India (also English/en and 21 other official languages)
    'IO': { code: 'en', name: 'English', flag: '🇮🇴' }, // British Indian Ocean Territory
    'IQ': { code: 'ar', name: 'Arabic', flag: '🇮🇶' }, // Iraq (also Kurdish/ku)
    'IR': { code: 'fa', name: 'Persian', flag: '🇮🇷' }, // Iran
    'IS': { code: 'is', name: 'Icelandic', flag: '🇮🇸' }, // Iceland
    'IT': { code: 'it', name: 'Italian', flag: '🇮🇹' }, // Italy
    'JE': { code: 'en', name: 'English', flag: '🇯🇪' }, // Jersey (also French/fr)
    'JM': { code: 'en', name: 'English', flag: '🇯🇲' }, // Jamaica
    'JO': { code: 'ar', name: 'Arabic', flag: '🇯🇴' }, // Jordan
    'JP': { code: 'ja', name: 'Japanese', flag: '🇯🇵' }, // Japan
    'KE': { code: 'sw', name: 'Swahili', flag: '🇰🇪' }, // Kenya (also English/en)
    'KG': { code: 'ky', name: 'Kyrgyz', flag: '🇰🇬' }, // Kyrgyzstan (also Russian/ru)
    'KH': { code: 'km', name: 'Khmer', flag: '🇰🇭' }, // Cambodia
    'KI': { code: 'en', name: 'English', flag: '🇰🇮' }, // Kiribati (also Gilbertese/gil)
    'KM': { code: 'ar', name: 'Arabic', flag: '🇰🇲' }, // Comoros (also French/fr, Comorian/zdj)
    'KN': { code: 'en', name: 'English', flag: '🇰🇳' }, // Saint Kitts and Nevis
    'KP': { code: 'ko', name: 'Korean', flag: '🇰🇵' }, // Korea, Democratic People's Republic of (North Korea)
    'KR': { code: 'ko', name: 'Korean', flag: '🇰🇷' }, // Korea, Republic of (South Korea)
    'KW': { code: 'ar', name: 'Arabic', flag: '🇰🇼' }, // Kuwait
    'KY': { code: 'en', name: 'English', flag: '🇰🇾' }, // Cayman Islands
    'KZ': { code: 'kk', name: 'Kazakh', flag: '🇰🇿' }, // Kazakhstan (also Russian/ru)
    'LA': { code: 'lo', name: 'Lao', flag: '🇱🇦' }, // Lao People's Democratic Republic
    'LB': { code: 'ar', name: 'Arabic', flag: '🇱🇧' }, // Lebanon
    'LC': { code: 'en', name: 'English', flag: '🇱🇨' }, // Saint Lucia
    'LI': { code: 'de', name: 'German', flag: '🇱🇮' }, // Liechtenstein
    'LK': { code: 'si', name: 'Sinhala', flag: '🇱🇰' }, // Sri Lanka (also Tamil/ta)
    'LR': { code: 'en', name: 'English', flag: '🇱🇷' }, // Liberia
    'LS': { code: 'en', name: 'English', flag: '🇱🇸' }, // Lesotho (also Sotho/st)
    'LT': { code: 'lt', name: 'Lithuanian', flag: '🇱🇹' }, // Lithuania
    'LU': { code: 'lb', name: 'Luxembourgish', flag: '🇱🇺' }, // Luxembourg (also French/fr, German/de)
    'LV': { code: 'lv', name: 'Latvian', flag: '🇱🇻' }, // Latvia
    'LY': { code: 'ar', name: 'Arabic', flag: '🇱🇾' }, // Libya
    'MA': { code: 'ar', name: 'Arabic', flag: '🇲🇦' }, // Morocco (also Berber/ber - Tamazight)
    'MC': { code: 'fr', name: 'French', flag: '🇲🇨' }, // Monaco
    'MD': { code: 'ro', name: 'Romanian', flag: '🇲🇩' }, // Moldova
    'ME': { code: 'sr', name: 'Montenegrin', flag: '🇲🇪' }, // Montenegro (Often classified under Serbian 'sr')
    'MF': { code: 'fr', name: 'French', flag: '🇲🇫' }, // Saint Martin (French part)
    'MG': { code: 'fr', name: 'French', flag: '🇲🇬' }, // Madagascar (also Malagasy/mg)
    'MH': { code: 'en', name: 'English', flag: '🇲🇭' }, // Marshall Islands (also Marshallese/mh)
    'MK': { code: 'mk', name: 'Macedonian', flag: '🇲🇰' }, // North Macedonia (also Albanian/sq)
    'ML': { code: 'fr', name: 'French', flag: '🇲🇱' }, // Mali
    'MM': { code: 'my', name: 'Burmese', flag: '🇲🇲' }, // Myanmar
    'MN': { code: 'mn', name: 'Mongolian', flag: '🇲🇳' }, // Mongolia
    'MO': { code: 'zh-TW', name: 'Chinese (Traditional)', flag: '🇲🇴' }, // Macao (also Portuguese/pt)
    'MP': { code: 'en', name: 'English', flag: '🇲🇵' }, // Northern Mariana Islands (also Chamorro/ch, Carolinian/cal)
    'MQ': { code: 'fr', name: 'French', flag: '🇲🇶' }, // Martinique
    'MR': { code: 'ar', name: 'Arabic', flag: '🇲🇷' }, // Mauritania
    'MS': { code: 'en', name: 'English', flag: '🇲🇸' }, // Montserrat
    'MT': { code: 'mt', name: 'Maltese', flag: '🇲🇹' }, // Malta (also English/en)
    'MU': { code: 'en', name: 'English', flag: '🇲🇺' }, // Mauritius (French/fr also common; no official language)
    'MV': { code: 'dv', name: 'Dhivehi', flag: '🇲🇻' }, // Maldives
    'MW': { code: 'en', name: 'English', flag: '🇲🇼' }, // Malawi (also Chewa/ny)
    'MX': { code: 'es', name: 'Spanish', flag: '🇲🇽' }, // Mexico
    'MY': { code: 'ms', name: 'Malay', flag: '🇲🇾' }, // Malaysia
    'MZ': { code: 'pt', name: 'Portuguese', flag: '🇲🇿' }, // Mozambique
    'NA': { code: 'en', name: 'English', flag: '🇳🇦' }, // Namibia
    'NC': { code: 'fr', name: 'French', flag: '🇳🇨' }, // New Caledonia
    'NE': { code: 'fr', name: 'French', flag: '🇳🇪' }, // Niger
    'NF': { code: 'en', name: 'English', flag: '🇳🇫' }, // Norfolk Island (also Norfuk)
    'NG': { code: 'en', name: 'English', flag: '🇳🇬' }, // Nigeria (Hausa/ha, Yoruba/yo, Igbo/ig are major languages)
    'NI': { code: 'es', name: 'Spanish', flag: '🇳🇮' }, // Nicaragua
    'NL': { code: 'nl', name: 'Dutch', flag: '🇳🇱' }, // Netherlands
    'NO': { code: 'no', name: 'Norwegian', flag: '🇳🇴' }, // Norway (Bokmål/nb and Nynorsk/nn)
    'NP': { code: 'ne', name: 'Nepali', flag: '🇳🇵' }, // Nepal
    'NR': { code: 'en', name: 'English', flag: '🇳🇷' }, // Nauru (also Nauruan/na)
    'NU': { code: 'en', name: 'English', flag: '🇳🇺' }, // Niue (also Niuean/niu)
    'NZ': { code: 'en', name: 'English', flag: '🇳🇿' }, // New Zealand (also Maori/mi, NZ Sign Language)
    'OM': { code: 'ar', name: 'Arabic', flag: '🇴🇲' }, // Oman
    'PA': { code: 'es', name: 'Spanish', flag: '🇵🇦' }, // Panama
    'PE': { code: 'es', name: 'Spanish', flag: '🇵🇪' }, // Peru (also Quechua/qu, Aymara/ay)
    'PF': { code: 'fr', name: 'French', flag: '🇵🇫' }, // French Polynesia (also Tahitian/ty)
    'PG': { code: 'en', name: 'English', flag: '🇵🇬' }, // Papua New Guinea (also Tok Pisin/tpi, Hiri Motu/ho)
    'PH': { code: 'tl', name: 'Filipino', flag: '🇵🇭' }, // Philippines (also English/en)
    'PK': { code: 'ur', name: 'Urdu', flag: '🇵🇰' }, // Pakistan (also English/en)
    'PL': { code: 'pl', name: 'Polish', flag: '🇵🇱' }, // Poland
    'PM': { code: 'fr', name: 'French', flag: '🇵🇲' }, // Saint Pierre and Miquelon
    'PN': { code: 'en', name: 'English', flag: '🇵🇳' }, // Pitcairn Islands (also Pitkern)
    'PR': { code: 'es', name: 'Spanish', flag: '🇵🇷' }, // Puerto Rico (also English/en)
    'PS': { code: 'ar', name: 'Arabic', flag: '🇵🇸' }, // Palestine, State of
    'PT': { code: 'pt', name: 'Portuguese', flag: '🇵🇹' }, // Portugal
    'PW': { code: 'en', name: 'English', flag: '🇵🇼' }, // Palau (also Palauan/pau)
    'PY': { code: 'es', name: 'Spanish', flag: '🇵🇾' }, // Paraguay (also Guarani/gn)
    'QA': { code: 'ar', name: 'Arabic', flag: '🇶🇦' }, // Qatar
    'RE': { code: 'fr', name: 'French', flag: '🇷🇪' }, // Réunion
    'RO': { code: 'ro', name: 'Romanian', flag: '🇷🇴' }, // Romania
    'RS': { code: 'sr', name: 'Serbian', flag: '🇷🇸' }, // Serbia
    'RU': { code: 'ru', name: 'Russian', flag: '🇷🇺' }, // Russian Federation
    'RW': { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' }, // Rwanda (also French/fr, English/en, Swahili/sw)
    'SA': { code: 'ar', name: 'Arabic', flag: '🇸🇦' }, // Saudi Arabia
    'SB': { code: 'en', name: 'English', flag: '🇸🇧' }, // Solomon Islands
    'SC': { code: 'fr', name: 'French', flag: '🇸🇨' }, // Seychelles (also English/en, Seychellois Creole/crs)
    'SD': { code: 'ar', name: 'Arabic', flag: '🇸🇩' }, // Sudan (also English/en)
    'SE': { code: 'sv', name: 'Swedish', flag: '🇸🇪' }, // Sweden
    'SG': { code: 'en', name: 'English', flag: '🇸🇬' }, // Singapore (also Malay/ms, Mandarin Chinese/zh-CN, Tamil/ta)
    'SH': { code: 'en', name: 'English', flag: '🇸🇭' }, // Saint Helena, Ascension and Tristan da Cunha
    'SI': { code: 'sl', name: 'Slovenian', flag: '🇸🇮' }, // Slovenia
    'SJ': { code: 'no', name: 'Norwegian', flag: '🇸🇯' }, // Svalbard and Jan Mayen
    'SK': { code: 'sk', name: 'Slovak', flag: '🇸🇰' }, // Slovakia
    'SL': { code: 'en', name: 'English', flag: '🇸🇱' }, // Sierra Leone
    'SM': { code: 'it', name: 'Italian', flag: '🇸🇲' }, // San Marino
    'SN': { code: 'fr', name: 'French', flag: '🇸🇳' }, // Senegal
    'SO': { code: 'so', name: 'Somali', flag: '🇸🇴' }, // Somalia (also Arabic/ar)
    'SR': { code: 'nl', name: 'Dutch', flag: '🇸🇷' }, // Suriname
    'SS': { code: 'en', name: 'English', flag: '🇸🇸' }, // South Sudan
    'ST': { code: 'pt', name: 'Portuguese', flag: '🇸🇹' }, // Sao Tome and Principe
    'SV': { code: 'es', name: 'Spanish', flag: '🇸🇻' }, // El Salvador
    'SX': { code: 'nl', name: 'Dutch', flag: '🇸🇽' }, // Sint Maarten (Dutch part) (also English/en)
    'SY': { code: 'ar', name: 'Arabic', flag: '🇸🇾' }, // Syrian Arab Republic
    'SZ': { code: 'en', name: 'English', flag: '🇸🇿' }, // Eswatini (also Swazi/ss)
    'TC': { code: 'en', name: 'English', flag: '🇹🇨' }, // Turks and Caicos Islands
    'TD': { code: 'fr', name: 'French', flag: '🇹🇩' }, // Chad (also Arabic/ar)
    'TF': { code: 'fr', name: 'French', flag: '🇹🇫' }, // French Southern Territories
    'TG': { code: 'fr', name: 'French', flag: '🇹🇬' }, // Togo
    'TH': { code: 'th', name: 'Thai', flag: '🇹🇭' }, // Thailand
    'TJ': { code: 'tg', name: 'Tajik', flag: '🇹🇯' }, // Tajikistan
    'TK': { code: 'en', name: 'English', flag: '🇹🇰' }, // Tokelau (also Tokelauan/tkl)
    'TL': { code: 'pt', name: 'Portuguese', flag: '🇹🇱' }, // Timor-Leste (also Tetum/tet)
    'TM': { code: 'tk', name: 'Turkmen', flag: '🇹🇲' }, // Turkmenistan
    'TN': { code: 'ar', name: 'Arabic', flag: '🇹🇳' }, // Tunisia
    'TO': { code: 'en', name: 'English', flag: '🇹🇴' }, // Tonga (also Tongan/to)
    'TR': { code: 'tr', name: 'Turkish', flag: '🇹🇷' }, // Turkey
    'TT': { code: 'en', name: 'English', flag: '🇹🇹' }, // Trinidad and Tobago
    'TV': { code: 'en', name: 'English', flag: '🇹🇻' }, // Tuvalu (also Tuvaluan/tvl)
    'TW': { code: 'zh-TW', name: 'Chinese (Traditional)', flag: '🇹🇼' }, // Taiwan, Province of China
    'TZ': { code: 'sw', name: 'Swahili', flag: '🇹🇿' }, // Tanzania, United Republic of (also English/en)
    'UA': { code: 'uk', name: 'Ukrainian', flag: '🇺🇦' }, // Ukraine
    'UG': { code: 'en', name: 'English', flag: '🇺🇬' }, // Uganda (also Swahili/sw)
    'UM': { code: 'en', name: 'English', flag: '🇺🇲' }, // United States Minor Outlying Islands
    'US': { code: 'en', name: 'English', flag: '🇺🇸' }, // United States (No official language at federal level)
    'UY': { code: 'es', name: 'Spanish', flag: '🇺🇾' }, // Uruguay
    'UZ': { code: 'uz', name: 'Uzbek', flag: '🇺🇿' }, // Uzbekistan
    'VA': { code: 'la', name: 'Latin', flag: '🇻🇦' }, // Holy See (Vatican City State) (also Italian/it)
    'VC': { code: 'en', name: 'English', flag: '🇻🇨' }, // Saint Vincent and the Grenadines
    'VE': { code: 'es', name: 'Spanish', flag: '🇻🇪' }, // Venezuela
    'VG': { code: 'en', name: 'English', flag: '🇻🇬' }, // Virgin Islands, British
    'VI': { code: 'en', name: 'English', flag: '🇻🇮' }, // Virgin Islands, U.S.
    'VN': { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' }, // Viet Nam
    'VU': { code: 'bi', name: 'Bislama', flag: '🇻🇺' }, // Vanuatu (also English/en, French/fr)
    'WF': { code: 'fr', name: 'French', flag: '🇼🇫' }, // Wallis and Futuna
    'WS': { code: 'sm', name: 'Samoan', flag: '🇼🇸' }, // Samoa (also English/en)
    'YE': { code: 'ar', name: 'Arabic', flag: '🇾🇪' }, // Yemen
    'YT': { code: 'fr', name: 'French', flag: '🇾🇹' }, // Mayotte
    'ZA': { code: 'zu', name: 'Zulu', flag: '🇿🇦' }, // South Africa (10 other official languages including English/en, Afrikaans/af, Xhosa/xh etc.)
    'ZM': { code: 'en', name: 'English', flag: '🇿🇲' }, // Zambia
    'ZW': { code: 'en', name: 'English', flag: '🇿🇼' }, // Zimbabwe (also Shona/sn, Ndebele/nd and others)
  };
  
  export default languageMapping;