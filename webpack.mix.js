let mix = require("laravel-mix");

mix.js("resources/js/app.js", "js").setPublicPath("public/");
mix.sass("resources/css/app.scss", "css").setPublicPath("public/");
// mix.js("resources/js/app.js", "public/js").sass(
//     "resources/sass/app.scss",
//     "public/css"
// );
