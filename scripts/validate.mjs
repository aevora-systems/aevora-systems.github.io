import fs from 'node:fs';
import path from 'node:path';

const pages=['index','organisms','research','roadmap','constitution','investors','about','pilot','privacy'];
for(const page of pages){
 if(!fs.existsSync(`src/pages/${page}.astro`))throw Error(`Missing Astro page ${page}`);
 if(!fs.existsSync(`src/content/pages/${page}.html`))throw Error(`Missing page body ${page}`);
}
for(const slug of ['business-organism','governed-autonomy','organism-vs-agent','authority-levels','internal-proving-ground']){
 if(!fs.existsSync(`src/pages/knowledge/${slug}.astro`))throw Error(`Missing knowledge route ${slug}`);
 if(!fs.existsSync(`src/content/pages/knowledge-${slug}.html`))throw Error(`Missing knowledge content ${slug}`);
}
for(const asset of [
 'public/site.js',
 'public/styles.css',
 'public/llms.txt',
 'public/assets/logos/Auryveth_Logo_Horizontal_White.svg',
 'public/assets/logos/Auryveth_Logo_Horizontal_Corporate.svg',
 'public/assets/logos/Auryveth_Logo_Emblem_Corporate.svg',
 'public/assets/social/Auryveth_Social_Avatar_1024.png',
 'brand-source/founder-constitution-v0.1.source.pdf',
 'public/.nojekyll'
]){
 if(!fs.existsSync(asset))throw Error(`Missing ${asset}`);
}
const src=fs.readFileSync('src/data/site.ts','utf8');
if(!src.includes('auryveth.github.io'))throw Error('Wrong AURYVETH GitHub Pages origin');
if(!src.includes("name: 'AURYVETH'"))throw Error('Public brand not switched to AURYVETH');
if(src.includes('hello@'))throw Error('Invented email');
const llms=fs.readFileSync('public/llms.txt','utf8');
if(!llms.includes('https://auryveth.github.io/knowledge/business-organism/'))throw Error('llms.txt missing canonical business-organism definition');
if(!llms.includes('Interpretation and evidence boundary'))throw Error('llms.txt missing evidence boundary');

function walk(dir){
 return fs.readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(path.join(dir,d.name)):[path.join(dir,d.name)]);
}
const residualBrandFiles=[];
for(const root of ['src','public']){
 for(const file of walk(root).filter(f=>/\.(?:astro|html|ts|js|css|json|svg|txt)$/i.test(f))){
   const t=fs.readFileSync(file,'utf8');
   if(/\baevora(?:-systems)?\b/i.test(t))residualBrandFiles.push(file);
 }
}
if(residualBrandFiles.length)throw Error('Old public brand remains in: '+residualBrandFiles.join(', '));
for(const file of ['src/components/SEOHead.astro','src/content/pages/knowledge-index.html']){
 const t=fs.readFileSync(file,'utf8');
 if(!t.includes('Business')&&!t.includes('business'))throw Error(`Suspect empty content: ${file}`);
}
console.log('PASS source: AURYVETH naming, core pages, 5 knowledge pages, brand sources and AURYVETH origin');
