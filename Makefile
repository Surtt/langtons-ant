start:
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

story:
	npm run storybook

build-story:
	npm run build-storybook
	
.PHONY: test
