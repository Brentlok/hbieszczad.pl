import { initDictionary } from "astro-static-dict/server"
import { enUs } from "./dictionaries"

export const T = initDictionary({
    dictionary: enUs,
    isDev: import.meta.env.DEV
})