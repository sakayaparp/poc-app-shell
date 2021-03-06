if (process.env.NODE_ENV === 'test') {
  // behavior for the test environment, we'll try to make it work

  if (typeof window !== 'undefined') {
    require('.//index.5f9de3.js');
    const ctx = window['dbg:piral'];
    const dependencies = (ctx && ctx.pilets && ctx.pilets.getDependencies({})) || {};
    module.exports = dependencies['app-shell'] || {};
  } else {
    console.error('Your test environment does not define "window". Please make sure to provide a proper environment.');
    module.exports = {};
  }
} else {
  // under "normal" circumstances disallow such an import
  throw new Error("This file should not be included anywhere. Usually, this means you've imported the Piral instance directly.");
}
