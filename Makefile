ical.js: lib/ical.json node_modules
	./node_modules/.bin/jison ./lib/ical.json --json --module-type commonjs

node_modules: package.json
	npm install

.PHONY: clean
clean:
	rm -rf ical.js node_modules

.PHONY: test
test: ical.js node_modules
	./node_modules/.bin/mocha
