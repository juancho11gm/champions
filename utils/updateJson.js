import fs from 'fs';

async function updateJson(
    fileName = 'data.json',
    content = ''
) {
    console.log('content', content);
    fs.writeFile(fileName, JSON.stringify(content), function writeJSON(err) {
        if (err) return console.log(err);
    });
}

export { updateJson };