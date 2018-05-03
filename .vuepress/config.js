module.exports = {
  base: '/til/',
  title: '#',
  themeConfig: {
    sidebar: [
      [ '/', 'Giris'],
      {
        title: '2018',
        collapsable: true,
        children: [
          ['/a/entries/2018/May-2018/', 'May 2018']
        ]
      }
    ]
  },
  homepage: true,
   head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ]
};

