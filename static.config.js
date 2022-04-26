import path from 'path'

export default {
  getRoutes: async () => { return []; },
  plugins: [
    [
      'react-static-plugin-less',
      {
        includePaths: ["..."],
        sourceMap: true,
        javascriptEnabled: true
      }
    ],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}