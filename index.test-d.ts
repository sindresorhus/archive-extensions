import {expectType} from 'tsd';
import archiveExtensions = require('.');
import archiveExtensionsJson = require('./archive-extensions.json');

expectType<readonly string[]>(archiveExtensions);
expectType<readonly string[]>(archiveExtensionsJson);
