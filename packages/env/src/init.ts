import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { config } from "@dotenvx/dotenvx";

(() => {
  if (typeof window === "undefined") {
    config({
      path: resolve(dirname(fileURLToPath(import.meta.url)), "../.env"),
    });
  }
})();
