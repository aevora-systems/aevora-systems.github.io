import fs from 'node:fs';
const pages=['index','organisms','research','roadmap','constitution','investors','about','pilot','privacy'];
for(const page of pages){
 if(!fs.existsSync(`src/pages/${page}.astro`))throw Error(`Missing Astro page ${page}`);
 if(!fs.existsSync(`src/content/pages/${page}.html`))throw Error(`Missing page body ${page}`);
}
for(const slug of ['business-organism','governed-autonomy','organism-vs-agent','authority-levels','internal-proving-ground']){
 if(!fs.existsSync(`src/pages/knowledge/${slug}.astro`))throw Error(`Missing knowledge route ${slug}`);
 if(!fs.existsSync(`src/content/pages/knowledge-${slug}.html`))throw Error(`Missing knowledge content ${slug}`);
}
for(const asset of ['public/site.js','public/styles.css','public/assets/logos/Auryveth_Logo_Horizontal_White.svg','public/documents/Auryveth_Founder_Constitution_v0.1.pdf','public/.nojekyll']){
 if(!fs.existsSync(asset))throw Error(`Missing ${asset}`);
}
const src=fs.readFileSync('src/data/site.ts','utf8');
if(!src.includes('aevora-systems.github.io'))throw Error('Wrong organization origin');
if(src.includes('hello@auryveth.com'))throw Error('Invented email');
for(const file of ['src/components/SEOHead.astro','src/content/pages/knowledge-index.html']){
 const t=fs.readFileSync(file,'utf8');
 if(!t.includes('Business')&&!t.includes('business'))throw Error(`Suspect empty content: ${file}`);
}
console.log('PASS source: core pages, 5 knowledge pages, brand assets, constitution and verified origin');
