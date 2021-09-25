//import always go at the top
//image kucultme ile alakali importlar burada
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
//sass ile alakali importlar burada



function squashImages(done) {
    gulp.src('images/*')//grab all images in the images folder
        .pipe(imagemin())// run every image through the imagemin engine
        .pipe(gulp.dest('images/dist'))//put the optimized images here
done();
    }
//image kucultmek icin code lar.

function sayHi(done) {
    console.log('hello from Gulp!');
    done();
}

export { 
    sayHi as hello, 
    squashImages as crunch,
    compileSass as compile
} 
// terminal de gulp hello yazdigimizda hello from gulp yazisi cikacak kac sn de bitirdigini verecek.
//virgulden sonra squashImage fonksiyonundakini termnal de gulp crunch diyerek isleme soktuk boylece imageleri kuculttu.