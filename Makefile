develop:
	npx webpack serve --open

install:
	npm ci

build:
	rm -rf dist
	NODE_ENV=production npx webpack

test:
	npm test

watch:
	npm test -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=babel

lint:
	npx eslint .

.PHONY: test
