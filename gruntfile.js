module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                mangle: true,
                compress: true,
                comments: false
            },
            my_target: {
                files: {
                    'dist/index.js': ['dist/*.js'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};
