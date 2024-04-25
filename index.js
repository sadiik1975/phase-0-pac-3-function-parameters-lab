// Define a function called introduction that takes one parameter, name, and returns a greeting.
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

// Define a function called introductionWithLanguage that takes two parameters, name and language, and returns a greeting.
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Define a function called introductionWithLanguageOptional that takes two parameters, name and language, with the second parameter having a default value of "JavaScript".
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Exporting functions if you are using Node.js environment, not necessary if you are running in the browser directly.
module.exports = { introduction, introductionWithLanguage, introductionWithLanguageOptional };
