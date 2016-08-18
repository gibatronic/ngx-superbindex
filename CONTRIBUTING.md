# Contributing

## Requirements

* `darwin` or `linux` operating system
* Node.js `v4+` with npm `v2+`

## Structure

```tree
.
├── client .......... source folder
│   ├── scripts ..... JavaScript files
│   ├── styles ...... SASS files
│   └── templates ... XSLT files
├── public .......... distribution folder
└── tasks ........... project tasks
```

## Setup

After cloning the project, install dependencies with:

```bash
make install
```

## Task runner

Check available tasks with:

```bash
make help
```

## Build

To manually build the project, run:

```bash
make build
```

You may also point the `xslt_stylesheet` directive to `public/main.xslt` and automatically build and reload nginx with:

```bash
make watch
```

## Code style

* Scripts: [JSHint](http://jshint.com/)
* Styles: [BEM](http://getbem.com/)
