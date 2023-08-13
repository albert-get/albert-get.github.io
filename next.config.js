/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.node$/,
            loader: "node-loader",
            options: {
                name: "[path][name].[ext]",
            },
        })
     
        return config
    },
    output:'export',
}

module.exports = nextConfig
