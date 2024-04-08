# 启动

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

# 图标库的的选择

原本是想用 react-native-vector-icons 接入 iconfont 的
接入有点麻烦，而且太占内存，即使没有使用的图标也会打包，每次更新图标都需要替换 ttf 文件，ttf 的文件好像图标颜色不友好，遂放弃 react-native-vector-icons
react-native-svg-transformer 可以完美解决现在的需求，将需要的 svg 直接引入即可
尝试和 react-native-svg，但渲染失败了
react-native-svg-transformer 缺点，需要再项目中保留大量的 svg 文件，并且没有默认的图标提供使用(这个应该不算确定，他的本来就不是用来提供图标的)
