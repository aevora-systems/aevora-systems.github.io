import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const root=process.cwd();
const publicDir=path.join(root,'public');
const logoPath=path.join(publicDir,'assets/logos/Auryveth_Logo_Horizontal_Corporate.svg');
const logoSvg=await fs.readFile(logoPath,'utf8');
const logoData='data:image/svg+xml;base64,'+Buffer.from(logoSvg).toString('base64');

await fs.mkdir(path.join(publicDir,'assets/social'),{recursive:true});
await fs.mkdir(path.join(publicDir,'documents'),{recursive:true});

const og=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#03284e"/>
<image href="${logoData}" x="80" y="72" width="620" height="164" preserveAspectRatio="xMinYMid meet"/>
<text x="90" y="385" font-family="Arial,DejaVu Sans,sans-serif" font-size="42" font-weight="700" fill="#f8fcfd">We build. We learn. We evolve -</text>
<text x="90" y="438" font-family="Arial,DejaVu Sans,sans-serif" font-size="42" font-weight="700" fill="#00a9b3">toward a better future.</text>
<rect x="90" y="488" width="260" height="6" fill="#00a9b3"/>
<text x="90" y="548" font-family="Arial,DejaVu Sans,sans-serif" font-size="25" fill="#cbdce6">Auryveth | Governed digital business organisms</text>
</svg>`;
await sharp(Buffer.from(og)).jpeg({quality:88,progressive:true}).toFile(path.join(publicDir,'assets/social/Auryveth_OpenGraph_1200x630.jpg'));

const cover=`<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="500">
<rect width="1500" height="500" fill="#03284e"/>
<image href="${logoData}" x="85" y="65" width="760" height="200" preserveAspectRatio="xMinYMid meet"/>
<text x="96" y="382" font-family="Arial,DejaVu Sans,sans-serif" font-size="29" fill="#00a9b3">We build. We learn. We evolve - toward a better future.</text>
</svg>`;
await sharp(Buffer.from(cover)).jpeg({quality:88,progressive:true}).toFile(path.join(publicDir,'assets/social/Auryveth_Social_Cover_1500x500.jpg'));

const srcPdf=await fs.readFile(path.join(root,'brand-source/founder-constitution-v0.1.source.pdf'));
const pdf=await PDFDocument.load(srcPdf);
const times=await pdf.embedFont(StandardFonts.TimesRoman);
const timesBold=await pdf.embedFont(StandardFonts.TimesRomanBold);
const timesItalic=await pdf.embedFont(StandardFonts.TimesRomanItalic);
const helvBold=await pdf.embedFont(StandardFonts.HelveticaBold);
const logoPng=await sharp(Buffer.from(logoSvg)).png().toBuffer();
const logoImage=await pdf.embedPng(logoPng);
const C={body:rgb(22/255,33/255,42/255),bold:rgb(11/255,30/255,45/255),footer:rgb(93/255,107/255,115/255)};
const R=[
[0,59.15,797.9259,235.4816,805.5009,'AEVORA  /  FOUNDING RECORD  /  VERSION 0.1','bold',7.5,'footer','white'],
[0,59.15,431.1660,97.5696,441.7710,'Aevora','bold',10.5,'body','white'],
[1,59.15,122.3510,514.4800,134.5310,'This document records the founding principles intended to guide Aevora as the ','regular',12,'body','white'],
[1,59.15,222.8135,525.5722,233.4710,'clear version history so Aevora can explain not only what it believes, but how and why those ','regular',10.5,'body','white'],
[1,178.5,266.9135,323.8823,277.5710,'Aevora Founder Constitution','regular',10.5,'body','gray'],
[1,59.15,459.2010,530.0690,471.3810,'Aevora exists to develop persistent, learning digital organisms capable of working ','regular',12,'body','white'],
[1,59.15,598.7635,452.5849,609.4210,'Aevora will pursue this future incrementally, experimentally, and responsibly.','regular',10.5,'body','white'],
[2,59.15,141.9510,536.5194,154.1310,'researchers, and future Aevora teams. They are deliberately written as operational ','regular',12,'body','white'],
[2,99.3,400.0635,504.3278,410.7210,'Aevora systems must maintain enough evidence to determine what an organism ','regular',10.5,'body','white'],
[3,99.3,340.4635,487.8092,351.1210,'A convincing demonstration is not enough. Aevora will distinguish measured ','regular',10.5,'body','white'],
[3,99.3,430.0135,513.0638,440.6710,"Experiments may fail. Organisms may make mistakes. Aevora's responsibility is to ",'regular',10.5,'body','white'],
[3,99.3,500.4810,515.6940,511.5910,'Customers should receive measurable value before Aevora demands scale.','bold',11,'bold','white'],
[3,99.3,519.5635,498.2259,530.2211,'Aevora will seek evidence that its systems save meaningful time, reduce errors, ','regular',10.5,'body','white'],
[4,99.3,105.6135,496.4305,116.2710,'Aevora Research explores new forms of learning, autonomy, digital organisms, ','regular',10.5,'body','white'],
[4,99.3,176.0810,374.0028,187.1910,'Aevora should become more resilient as it grows.','bold',11,'bold','white'],
[4,99.3,301.2635,497.2081,311.9210,"information, but Aevora's network must remain capable of isolating, replacing, ",'regular',10.5,'body','white'],
[4,99.3,497.6135,472.0296,508.2710,'without silently transforming Aevora into the uncontrolled owner of their ','regular',10.5,'body','white'],
[4,99.3,551.5310,390.8113,562.6410,'Aevora will not optimize solely for replacing people.','bold',11,'bold','white'],
[4,99.3,641.0811,508.3669,652.1910,'Aevora must remain capable of evolving beyond its original assumptions.','bold',11,'bold','white'],
[4,99.3,676.7135,499.8970,687.3710,'Evidence may require Aevora to replace technologies and revise methods while ','regular',10.5,'body','white'],
[5,59.15,87.9395,328.7726,105.9395,'What Aevora commits to preserving','heading',18,'bold','white'],
[5,81.3,124.8510,487.6473,137.0310,'Aevora will be built as a long-lived institution rather than a temporary ','regular',12,'body','white'],
[5,59.1395,406.1660,477.9650,416.7710,'And as Aevora itself encounters new evidence, failures, opportunities, and discoveries:','italic',10.5,'body','white'],
[5,59.15,612.1135,491.4680,622.7710,"what changed and why. The history of the constitution is part of Aevora's institutional ",'regular',10.5,'body','white']
];
const fonts={regular:times,bold:timesBold,italic:timesItalic,heading:helvBold};
const brand=t=>t.replaceAll('AEVORA','AURYVETH').replaceAll('Aevora','Auryveth').replaceAll('aevora','auryveth');
for(let i=0;i<pdf.getPages().length;i++){
  const page=pdf.getPage(i), h=page.getHeight(), w=page.getWidth();
  if(i===0){
    page.drawRectangle({x:52,y:h-122,width:293,height:86,color:rgb(1,1,1)});
    page.drawImage(logoImage,{x:58,y:h-120,width:279,height:73});
  }
  for(const r of R.filter(x=>x[0]===i)){
    const [_,x0,y0,x1,y1,txt,style,size,colorKey,bg]=r;
    const fill=bg==='gray'?rgb(.95,.96,.97):rgb(1,1,1);
    page.drawRectangle({x:x0-.5,y:h-(y1+.5),width:(x1-x0)+1.2,height:(y1-y0)+.9,color:fill});
    const f=fonts[style], newText=brand(txt); let fs=size;
    const max=w-59-x0, tw=f.widthOfTextAtSize(newText,fs); if(tw>max)fs*=max/tw*.99;
    page.drawText(newText,{x:x0,y:h-(y1-.8),size:fs,font:f,color:C[colorKey]});
  }
}
pdf.setTitle('Auryveth Founder Constitution v0.1');
pdf.setSubject('Auryveth founding principles, governance direction, and institutional commitments');
pdf.setKeywords(['Auryveth','founder constitution','governed autonomy','digital business organisms']);
await fs.writeFile(path.join(publicDir,'documents/Auryveth_Founder_Constitution_v0.1.pdf'),await pdf.save({useObjectStreams:true}));

for(const stale of [
 'public/assets/social/Aevora_OpenGraph_1200x630.jpg',
 'public/assets/social/Aevora_Social_Cover_1500x500.jpg',
 'public/documents/Aevora_Founder_Constitution_v0.1.pdf'
]){
  await fs.rm(path.join(root,stale),{force:true});
}
console.log('Generated AURYVETH social images and constitution PDF');
