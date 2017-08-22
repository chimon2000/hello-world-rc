const { FuseBox, EnvPlugin } = require('fuse-box')
const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'dist/$name.js',
    plugins: [
        EnvPlugin({
            DB_PASSWORD: process.env.DB_PASSWORD,
            DB_USERNAME: process.env.DB_USERNAME,
            DB_HOST: process.env.DB_HOST
        })
    ]
})

fuse.dev({ port: 4445, httpServer: false })

fuse
    .bundle('server')
    .watch('**') // watch only server related code.. bugs up atm
    .instructions(' > [index.ts]')
    // launch and restart express
    .completed(proc => proc.start())

fuse.run()
