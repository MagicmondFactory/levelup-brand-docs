const fs = require('fs');

['business-card-spec.svg', 'application-card.svg'].forEach(fname => {
    const filePath = 'e:/levelup-brand-docs/assets/images/' + fname;
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace('viewBox="0 0 1920 1080"', 'viewBox="0 80 1920 944"');
    content = content.replace('viewBox="0 0 1943 1093"', 'viewBox="0 80 1943 944"');
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Successfully cropped outer header/footer bars from SVGs');
