module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": ["eslint:recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "globals": {
        "Feature": true,
        "Scenario": true,
        "BeforeSuite": true,
        "actor": true,
        "Helper": true,
        "process": true,
        "locate": true,
        "Given": true,
        "When": true,
        "Then": true
    },    
    "rules": {
        "indent": [
            "warn",
            4,
            { "SwitchCase": 1 }
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-use-before-define": "error",
        // "no-unused-vars": ["error", { "args": "all" }],
    },
}