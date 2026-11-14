import { access, readFile } from 'node:fs/promises';
const required=['index.html','about.html','services.html','cuisines.html','experiences.html','collaborations.html','gallery.html','plan-event.html','contact.html','privacy-policy.html','styles.css','refinements.css','app.js','public/assets/logos/foodcraft-white.png','public/assets/images/royal-wedding-buffet.png'];
for(const f of required) await access(f);
const html=await readFile('index.html','utf8');
for(const link of ['about.html','services.html','cuisines.html','experiences.html','collaborations.html','gallery.html','contact.html','plan-event.html']) if(!html.includes(link)) throw new Error(`Missing navigation link ${link}`);
console.log('Content and asset checks passed.');
