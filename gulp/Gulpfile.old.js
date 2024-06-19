//function defaultTask(cb) {
    // place code for your default task here
  //  cb();//
  //}
  
const gulp = require('gulp')


function firstTask(done) {
console.log('pirma uzduotis')
done()

}

function secondTask(done) {
    console.log('antra uzduotis')
    done()
}

function thirdTask(done) {
    console.log('trecia uzduotis')
    done()
}




exports.default = gulp.parallel(firstTask, secondTask, thirdTask)
  