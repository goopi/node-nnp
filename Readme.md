
# nnp

Node.js project structure generator.

## Installation

    $ npm install nnp

## Usage

```
  Usage: nnp [options] [dir]

  Options:

    -t, --type [name]  use the specified type [default]
    -V, --version      output the version number
    -h, --help         output usage information
```

## Templates

### Default

Default template, creating the following structure:

```
History.md
index.js
lib/<project>.js
Makefile
package.json
Readme.md
test/<project>.test.js
```

### Modular

Modular template:

```
models/index.js
package.json
public/javascripts/app.js
public/stylesheets/main.css
Readme.md
routes/index.js
server.js
views/index.jade
views/layout.jade
```

## License

MIT
