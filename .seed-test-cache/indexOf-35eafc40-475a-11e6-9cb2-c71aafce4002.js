var path = require('path');
var sassTrue = require('sass-true');

sassTrue.runSass({file: 'test/_indexOf.scss'}, describe, it);
