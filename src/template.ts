// Env
export const env = `const env = {};

module.exports = { env };`;

// Global variables
export const globalVariables = `const {} = require("kapUI-scripting");

const global_variables = {};

module.exports = { global_variables };`;

// Config
export const config = `/**
 * Configuration object for the kapUI Scripting build process.
 * @type {import('kapUI-scripting').Config}
 */
const config = {
    compiler: {
        autoCompress: false,
        fileExtension: "json",
        encodeJson: false,
        UI: {
            nameLength: 32,
            namespaceAmount: 16,
            namespaceLength: 32,
            obfuscateName: false,
            obfuscateType: false,
        },
    },
    installer: {
        autoInstall: true,
        developEvironment: true,
        previewVersion: false,
        customPath: false,
        installPath: "/your/minecraft/data/path",
    },
    manifest: {
        name: "kapUI Scripting",
        description: "Build with kapUI Scripting <3",
    },
};

module.exports = { config }`;

// Gitignore
export const gitignore = `# Node packages
node_modules

# Build Folders
.minecraft
.build
.save

# Build variables
kapbilly.env.cjs

# Compress package
Minecraft-UIBuild.mcpack`;
