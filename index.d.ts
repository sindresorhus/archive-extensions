/**
List of [archive file](http://en.wikipedia.org/wiki/Archive_file) extensions.

@example
```
import archiveExtensions = require('archive-extensions');

console.log(archiveExtensions);
//=> ['7z', 'a', …]
```
*/
declare const archiveExtensions: readonly string[];

export = archiveExtensions;
