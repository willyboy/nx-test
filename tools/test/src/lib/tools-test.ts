import * as mswInit from 'msw/cli/init';
import {Tree} from '@nrwl/devkit';
async function addMockServiceWorkerJS(tree: Tree) {
  await mswInit({ publicDir: 'public', save: false, tree });
}



export default async function toolsTest(tree: Tree) {
  await addMockServiceWorkerJS(tree)
}