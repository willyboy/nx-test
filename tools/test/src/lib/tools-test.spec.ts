import toolsTest from './tools-test';

describe('toolsTest', () => {
  it('should work', async () => {
   await expect(toolsTest({} as any)).resolves.toBeUndefined()
  });
});
