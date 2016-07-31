.DEFAULT_GOAL := help

.PHONY: build \
				clean \
				help \
				install \
				reload \
				tree \
				watch

.SILENT:

# generate assets
build: tree
	tasks/build

# clean generated assets
clean:
	tasks/clean

# show some help
help:
	tasks/help

# install project dependencies
install:
	tasks/install

# issue a reload signal to nginx
reload:
	tasks/reload

# generate the public file tree
tree:
	tasks/tree

# build whenever something changes
watch:
	tasks/watch
