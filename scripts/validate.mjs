import fs from 'node:fs';
import path from 'node:path';
const src=fs.readFileSync('src/data/site.ts','utf8');
const expected=['index','organisms','research','roadmap','constitution','investors','about','pilot','privacy'];
for(const page of expected){
 if(!fs.existsSync(`src/pages/${page}.astro`))throw Error(`Missing Astro page ${page}`);
 if(!fs.existsSync(`src/content/pages/${page==='index'?'index':page}.html`))throw Error(`Missing page body ${page}`);
}
for(const asset of ['public/site.js','public/styles.css','public/assets/logos/Aevora_Logo_Horizontal_White.svg','public/documents/Aevora_Founder_Constitution_v0.1.pdf']){
 if(!fs.existsSync(asset))throw Error(`Missing ${asset}`);
}
if(!src.includes('aevora-systems.github.io'))throw Error('Wrong organization origin');
if(src.includes('hello@aevora.com'))throw Error('Invented email');
console.log('PASS source: Astro pages, content, animation, brand assets, constitution, URL');
