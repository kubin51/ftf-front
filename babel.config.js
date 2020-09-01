module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[
      // 开启 babel-plugin-import 插件的按需加载
      [
          "import",
        {libraryName:"ant-design-vue",libraryDirectory:"es",style:"css"}
      ]
  ]
}
