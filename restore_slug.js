const fs = require('fs');

const transcriptPath = '/Users/rayees/.gemini/antigravity-ide/brain/cea2d7ea-2ea8-4284-8d86-a69a891c2fd6/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const filePath = '/Users/rayees/Documents/cata new site/src/app/careers/[slug]/page.tsx';
const encoded = 'file:///Users/rayees/Documents/cata%20new%20site/src/app/careers/%5Bslug%5D/page.tsx';

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.type === 'VIEW_FILE' && data.content && data.content.includes(encoded)) {
      const contentLines = data.content.split('\n');
      let startIndex = -1;
      for (let i = 0; i < contentLines.length; i++) {
        if (contentLines[i].startsWith('1: ')) {
          startIndex = i;
          break;
        }
      }
      
      if (startIndex !== -1) {
        let endIndex = contentLines.length;
        for (let i = startIndex; i < contentLines.length; i++) {
          if (contentLines[i].includes('The above content shows the entire')) {
            endIndex = i;
            break;
          }
        }
        
        const restoredLines = [];
        for (let i = startIndex; i < endIndex; i++) {
          const match = contentLines[i].match(/^\d+:\s(.*)/);
          if (match) {
            restoredLines.push(match[1]);
          } else {
            const emptyMatch = contentLines[i].match(/^\d+:$/);
            if (emptyMatch) {
               restoredLines.push('');
            } else {
               restoredLines.push(contentLines[i].replace(/^\d+:\s?/, ''));
            }
          }
        }
        
        fs.writeFileSync(filePath, restoredLines.join('\n'));
        console.log(`Restored: ${filePath}`);
        process.exit(0);
      }
    }
  } catch (e) {}
}
