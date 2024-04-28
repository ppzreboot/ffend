/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Page {
    url: string
    frontmatter: {
        title: string
        index: number
    }
}
