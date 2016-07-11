var path = require('path');
var sassTrue = require('sass-true');

sassTrue.runSass({file: 'test/_first.scss'}, describe, it);
