import {expectType} from 'tsd';
import archiveExtensions from './index.js';

expectType<readonly string[]>(archiveExtensions);
