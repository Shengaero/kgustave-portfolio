const ghpages = require('gh-pages');

ghpages.publish('./build', {
  branch: 'gh-pages'
}, (err) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('Published!');
})
