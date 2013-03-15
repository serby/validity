default: test lint

TESTS = $$(find test -name "*.test.js")

test:
	@./node_modules/.bin/mocha \
		-r should \
		-R spec \
		$(TESTS)

lint-changed:
	@jshint `git status --porcelain | sed -e "s/^...//g"`

lint:
	@jshint *.js test

.PHONY: default test lint lint-changed
