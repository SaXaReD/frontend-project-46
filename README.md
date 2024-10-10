# Finding the differences
This is the program for finding the differences between two files.
## Hexlet tests and linter status:
[![Actions Status](https://github.com/SaXaReD/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SaXaReD/frontend-project-46/actions)
[![linter status](https://github.com/SaXaReD/frontend-project-46/actions/workflows/linter.yml/badge.svg)](https://github.com/SaXaReD/frontend-project-46/actions/workflows/linter.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/62173092708a983e7f3e/maintainability)](https://codeclimate.com/github/SaXaReD/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/62173092708a983e7f3e/test_coverage)](https://codeclimate.com/github/SaXaReD/frontend-project-46/test_coverage)
## Requirements
``
Node.js - 20.x
``
## Installing
```
$ git clone https://github.com/SaXaReD/frontend-project-46.git
$ cd frontend-project-46/
$ make install
$ npm link
```
## How to use
The program supports various input formats: yaml, json.
And generates reports as plain text, stylish and json.
To compare 2 files enter the command 'gendiff', and 2 paths (relative or absolute) to files like below:
```
$ gendiff file1.json file2.json
```
after that you will get the result of the work of the programm in stylish format. This is the default format. If you want to use another format you need to specify it like below:
```
$ gendiff -f plain file1.json file2.json
```
## Example of work
### gendiff JSON Files:
[![asciicast](https://asciinema.org/a/zas3DfWun5qUkei29OHk9PnaO.svg)](https://asciinema.org/a/zas3DfWun5qUkei29OHk9PnaO)
### gendiff YAML Files:
[![asciicast](https://asciinema.org/a/Tlk4tQ8mxg67DPgOzUp1iyiEO.svg)](https://asciinema.org/a/Tlk4tQ8mxg67DPgOzUp1iyiEO)
### gendiff for nested data
[![asciicast](https://asciinema.org/a/LEB9DFDGxmWm1GfEqsCxXIaxj.svg)](https://asciinema.org/a/LEB9DFDGxmWm1GfEqsCxXIaxj)
### gendiff to plain format
[![asciicast](https://asciinema.org/a/PPSEuwtsmM4qmUHcCa3iG85FZ.svg)](https://asciinema.org/a/PPSEuwtsmM4qmUHcCa3iG85FZ)
### gendiff to json format
[![asciicast](https://asciinema.org/a/rnHDmfUSEloDWDfN5vaVoKnMw.svg)](https://asciinema.org/a/rnHDmfUSEloDWDfN5vaVoKnMw)