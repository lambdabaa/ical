default: clean lib/parser.js

.PHONY: clean
clean:
	rm -rf lib/parser.js

lib/parser.js: lib/ical.json node_modules
	./node_modules/.bin/jison ./lib/ical.json \
		--json \
		--module-type commonjs
	mv ical.js lib/parser.js

node_modules: package.json
	npm install

.PHONY: test
test: lib/parser.js node_modules
	./node_modules/.bin/mocha
