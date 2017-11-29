# Amber Framework Website

Official website for Amber web application framework. 

## Installation

Create a pg database called `demo` and configure the `config/database.yml`
to provide the credentials to access the table.

Then:

```
shards install
amber migrate up
```

## Usage

To run the demo:

```
crystal build src/amberframework.cr
./amberframework
```

## Front-end capabilities

Amber framework includes a minimal configuration to generate `main.bundle.js` and `main.bundle.css` using SCSS ans JavaScript.

On development use:

```
npm install
npm run watch
```

To generate minified bundles for production execute:

```
npm install
npm run release
```

## Docker and Docker Compose

This will start an instance of postgres, migrate the database, run the specs,
and launch the site at http://localhost:3000

```
docker-compose up -d
```

To view the logs:

```
docker-compose logs -f
```

Note: The Docker images are compatible with Heroku.  

## Contributing

1. Fork it ( https://github.com/amberframework/amberframework.org/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Contributors

- [amberframework](https://github.com/amberframework) Amber Framework Organization - creator, maintainer
