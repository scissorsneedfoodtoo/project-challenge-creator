/* MAKE SURE THE FILES ARE IN ASCENDING ORDER */
const fs = require('fs');
const mongodb = require('mongodb');

// update these to change the input/output of the files
const PATH_TO_PROJECT_FILES = './variables-skyline';
const NAME = 'CSS Variables Skyline'
const DASHED_NAME = 'css-variables-skyline';
const FILES_TO_IGNORE = ['.DS_Store'];

let metaJson = {
  "name": NAME,
  "dashedName": DASHED_NAME,
  "order": 8,
  "time": "5 hours",
  "template": "",
  "required": [],
  "superBlock": "responsive-web-design",
  "superOrder": 1,
  "challengeOrder": [],
  "helpRoom": "Help",
  "fileName": `01-responsive-web-design/${DASHED_NAME}.json`
};

const CONTENT_A = `

## Description
<section id='description'>
Placeholder Description
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

\`\`\`yml
tests:
  - text: test-text
    testString: assert(code.match());

\`\`\`

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

\`\`\`html`;

const CONTENT_B = `\`\`\`

</div>
</section>


## Solution
<section id='solution'>

\`\`\`js
\`\`\`

</section>
`;

const INTRO_CONTENT = `---
title: Introduction to the ${NAME} Challenges
block: ${NAME}
superBlock: Responsive Web Design
---
## Introduction to the ${NAME} Challenges

<dfn>${NAME}</dfn> Placeholder Introduction.
`

let challengePart = 0;

fs.mkdirSync(`./new-files`);
fs.mkdirSync(`./new-files/intro`);
fs.mkdirSync(`./new-files/intro/${DASHED_NAME}`);
fs.writeFileSync(`./new-files/intro/${DASHED_NAME}/index.md`, INTRO_CONTENT);

fs.mkdirSync(`./new-files/challenges`);
fs.mkdirSync(`./new-files/challenges/${DASHED_NAME}`);

const PROJECT_FILES = fs.readdirSync(PATH_TO_PROJECT_FILES);

PROJECT_FILES.forEach((file, index) => {
  if(FILES_TO_IGNORE.indexOf(file) < 0) {

    challengePart ++;
    const CHALLENGE_TITLE = `Part ${challengePart}`    
    const MONGO_ID = mongodb.ObjectID();

    const FRONTMATTER = `---
id: ${MONGO_ID}
title: ${CHALLENGE_TITLE}
challengeType: 0
---`;

    const FILE_CONTENTS = fs.readFileSync(PATH_TO_PROJECT_FILES + '/' + file, 'utf8');

    const NEW_FILE = FRONTMATTER + CONTENT_A + FILE_CONTENTS + CONTENT_B;

    fs.writeFileSync(`./new-files/challenges/${DASHED_NAME}/part-${challengePart}.english.md`, NEW_FILE);
    console.log(`./new-files/challenges/${DASHED_NAME}/part-${challengePart}.english.md created`);

    const META = [
      MONGO_ID,
      CHALLENGE_TITLE
    ];

    // push data to the metaJson variable for each challenge
    metaJson.challengeOrder.push(META);
  }
});

// make directory for meta file
fs.mkdirSync(`./new-files/_meta`);
fs.mkdirSync(`./new-files/_meta/${DASHED_NAME}`);

// write meta file in new directory
fs.writeFileSync(`./new-files/_meta/${DASHED_NAME}/meta.json`, JSON.stringify(metaJson, null, 2));
console.log(`./new-files/_meta/${DASHED_NAME}/meta.json created`);
console.log('finished creating files');
