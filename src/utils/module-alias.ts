import * as path from "path";
import { addAliases } from "module-alias";

const files = path.resolve(__dirname, "../..");

addAliases({
  "@src": path.join(files, "src"),
  "@tests": path.join(files, "tests"),
});
