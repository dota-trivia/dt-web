/** @type {import("prettier").Config} */
const config = {
    "endOfLine": "lf",
    "printWidth": 120,
    "tabWidth": 2,
    "singleQuote": true,
    "trailingComma": "all",
    "arrowParens": "always",
    "semi": true,
    "singleAttributePerLine": true,
    "plugins": [
        "@ianvs/prettier-plugin-sort-imports"
    ],
    "importOrder": [
        "^(react/(.*)$)|^(react$)",
        "^(next/(.*)$)|^(next$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@/(.*)$",
        "",
        "^[./]"
    ],
    "importOrderParserPlugins": [
        "typescript",
        "jsx",
        "decorators-legacy"
    ]
}


module.exports = config;