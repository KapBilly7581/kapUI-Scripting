import { config, env, globalVariables, gitignore } from "../../template";
import { GenerateDir } from "./GenerateDir";
import fs from "fs";

export function firstRun() {
    // Template Object
    const template: { [file: string]: string } = {
        ".gitignore": gitignore,
        "kapbilly.config.cjs": config
            .replace("{packname}", "kapUI Scripting")
            .replace("{packdescription}", "Build with kapUI Scripting <3")
            .replace("{autoinstall}", "true")
            .replace("{development}", "true")
            .replace("{preview}", "false"),
        "kapbilly.global_variables.cjs": globalVariables,
        "kapbilly.env.cjs": env,
    };

    // Generator
    for (const file in template) {
        if (!fs.existsSync(file)) {
            GenerateDir(file);
            fs.writeFileSync(file, template[file], "utf-8");
        }
    }
}
