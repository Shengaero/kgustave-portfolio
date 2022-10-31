require('gh-pages').publish('./build', {
  branch: 'gh-pages'
}, (err) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('Published!');
});
