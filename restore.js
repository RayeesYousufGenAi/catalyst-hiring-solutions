const fs = require('fs');

const transcriptPath = '/Users/rayees/.gemini/antigravity-ide/brain/cea2d7ea-2ea8-4284-8d86-a69a891c2fd6/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const filesToRestore = [
  '/Users/rayees/Documents/cata new site/src/app/page.tsx',
  '/Users/rayees/Documents/cata new site/src/components/Navbar.tsx',
  '/Users/rayees/Documents/cata new site/src/components/Footer.tsx',
  '/Users/rayees/Documents/cata new site/src/app/services/page.tsx',
  '/Users/rayees/Documents/cata new site/src/app/careers/page.tsx',
  '/Users/rayees/Documents/cata new site/src/app/careers/[slug]/page.tsx',
  '/Users/rayees/Documents/cata new site/src/components/HeroDashboard.tsx'
];

const foundFiles = new Set();

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.type === 'VIEW_FILE' && data.content && data.content.includes('File Path:')) {
      for (const filePath of filesToRestore) {
        // encoded file path check
        const encoded = filePath.replace(/ /g, '%20');
        if (data.content.includes(encoded) && !foundFiles.has(filePath)) {
          foundFiles.add(filePath);
          
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
                // If it's an empty line that was just "12:" without a trailing space
                const emptyMatch = contentLines[i].match(/^\d+:$/);
                if (emptyMatch) {
                   restoredLines.push('');
                } else {
                   // Some lines might not match if they wrapped, but usually they match
                   restoredLines.push(contentLines[i].replace(/^\d+:\s?/, ''));
                }
              }
            }
            
            fs.writeFileSync(filePath, restoredLines.join('\n'));
            console.log(`Restored: ${filePath}`);
          }
        }
      }
    }
  } catch (e) {}
}

if (fs.existsSync('/Users/rayees/Documents/cata new site/src/components/Logo.tsx')) {
  fs.unlinkSync('/Users/rayees/Documents/cata new site/src/components/Logo.tsx');
  console.log('Removed Logo.tsx');
}
