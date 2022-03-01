import path from 'path'
import ical from 'node-ical'


export default {
  getRoutes: async () => {

    const calendar = await ical.async.fromURL('https://calendar.google.com/calendar/ical/rdc.normanok%40gmail.com/public/basic.ics');

    return [
      {
        path: '/calendar',
        template: 'src/pages/calendar.js',
        getData: async (resolved) => { 
          console.log({calendar,resolved})
          return {calendar} }
      },
    ]
  },
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
