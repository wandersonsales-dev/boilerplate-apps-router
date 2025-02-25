module.exports = {
  //Lint and Pretiffy TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm run test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
