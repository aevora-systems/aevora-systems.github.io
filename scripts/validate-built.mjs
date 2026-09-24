import fs from 'node:fs';
const root='dist';
const paths=['index.html','about/index.html','organisms/index.html','research/index.html','roadmap/index.html','constitution/index.html','investors/index.html','pilot/index.html','privacy/index.html','knowledge/index.html','knowledge/business-organism/index.html','knowledge/governed-autonomy/index.html','404.html','sitemap.xml','robots.txt','site.js','styles.css'];
for(const p of paths){if(!fs.existsSync(`${root}/${p}`)) throw Error(`Missing build output ${p}`);}
for(const p of paths.filter(p=>p.endsWith('index.html'))){
 const txt=fs.readFileSync(`${root}/${p}`,'utf8');
 for(const needle of ['rel="canonical"','application/ld+json','name="description"','property="og:image"']){
  if(!txt.includes(needle))throw Error(`Missing SEO ${needle} on ${p}`);
 }
}
const site=fs.readFileSync(`${root}/sitemap.xml`,'utf8');
if(!site.includes('https://aevora-systems.github.io/knowledge/'))throw Error('Sitemap origin incorrect');
const robots=fs.readFileSync(`${root}/robots.txt`,'utf8');
if(!robots.includes('OAI-SearchBot'))throw Error('Missing crawler rule');
if(robots.includes('example.com'))throw Error('Placeholder production domain');
console.log(`PASS build: ${paths.length} required outputs, metadata, sitemap, crawler access`);
