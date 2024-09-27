#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((firstObjPath, secondObjPath, option = null) => {
    console.log(genDiff(firstObjPath, secondObjPath, option.format));
  });

program.parse();
