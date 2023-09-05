import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
    components: {
        variable: "components",
    },
});

site.ignore("README.md");

site.copy("static", ".");

site.use(code_highlight());
site.use(date());
site.use(metas());
site.use(sitemap());
site.use(tailwindcss());
site.use(tailwindcss());
site.use(postcss());

export default site;
