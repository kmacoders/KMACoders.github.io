---
title: Webpack, nhật kí bóc tách
description: 'Một câu chuyện thú vị trong việc setup một config hoàn hảo cho project của team mình. Với các tình tiết ly kì, hấp dẫn kết hợp cùng văn phong của một con người đã từng thức đến 4h sáng chỉ vì Search google không ra lỗi cũng như nhận kha khá gạch đá của ae trong team nên ức quá không ngủ được'
author: 'Hưng'
image: 'https://res.cloudinary.com/kmacoders/image/upload/v1630578053/kmacoders.github.io/static/images/blog/2021/08/30-webpack-banner_ufhb7w.png'
tags: ['webpack']
published: '2020-08-30'
---

## Đặt vấn đề
Ngày mới học đến SCSS, công cụ đầu tiên mình dùng để bundle là Gulp. Một trong những điều mình thích nhất ở nó là config kiểu Pipeline, rất dễ đọc. Sau này thì để phục vụ cho công việc thì mình có dùng Webpack, Vite ( đối với các project build site ) và một chút Rollup ( đối với các lib ), hơn cả trong số này là Webpack. Và cũng giống như một số người config webpack từ đầu, mình cũng bị ngợp và thật sự là hơi rối. 
Ví dụ như đây là một file config webpack hồi ấy của mình

![Webpack](https://res.cloudinary.com/kmacoders/image/upload/v1630578053/kmacoders.github.io/static/images/blog/2021/08/30-webpack-1_hjhbzl.png)


All in one trong một file cho nó nhanh. Nếu có config nào cần sự khác nhau giữa môi trường development và production thì mình sẽ dùng env để check như chỗ devtool kia. Mọi thứ ok, project mượt mà, fix phiếc dễ dàng, căn bản project cũng nhỏ, chẳng có gì lắm, quanh quẩn 5, 60 lines là xong rồi. 

## Đến công chuyện
### Bối cảnh 
Thì ai cũng phải lớn, project cũng không chỉ có bunlde cái này thành cái kia, ae trong team thì cũng yêu cầu nhiều hơn, các require của project cũng khó hơn. Thế là dẫn đến việc file config của mình lúc này phình khổng lồ.
Thành thực mà nói, ở một hai project đầu, dù config đã lên đến hơn 100, 150 lines thì mình vẫn để đấy. Vì sao, vì nó vẫn chạy. Nó vẫn chạy ngon, bundle production cuối cũng đúng ý ae muốn. Nhưng khổ nỗi là nếu có sửa gì đó thì ối dồi ôi. Hoặc khi sang project mới, nhìn lại đống config cũ chán chẳng thèm config sang. Ngày đấy may mà có các ae trong team Frontend của mình. Các ae như các tester, vì mình là người config, nên trong quá trình code ae đóng vai trò lớn trong việc giúp mình xem config đấy có sai ở đâu không, ae code có còn lỗi gì không blo bla. Cứ mỗi lần sửa ấy mà nó lại hoàn thiện hơn một chút. Mình cũng bị ăn gạch đá dẫn đến google nhiều hơn một chút. À đấy, sửa cũng phải sửa nhanh cơ, lại còn phải khéo, vì nếu ae đã lỡ code được nhiều rồi, project phình to rồi, mà đùng cái mình hâm dở bảo ae đổi lại cấu trúc thì chắc gạch đá đầy nhà. 
Sau cái đợt đấy thì mình khôn lên, không config all in one như kia nữa. Bắt đầu biết chia làm các config khác nhau.
### Chia thử 
Vì sao lại có chuyện chia làm config khác nhau. Vì đơn giản chúng ta có 2 môi trường code khác nhau, development và production. Các bạn cũng thừa hiểu là kể ra những sự khác nhau giữa 2 môi trường này có mà cả ngày. 
Một ví dụ đơn giản, code ở development thì không cần optimize gì, devtool source map thì cứ bật lên cho dễ check lỗi... Nhưng ở production, code của project cần được optimize hết sức có thể, để tăng khả năng load trang cho user, lúc ấy thì source map tất nhiên cũng chẳng có ý nghĩa gì.
Thế là sau khi ngộ ra vấn đề, cũng như tham khảo các tiền bối Tây lông, thì mình chia ra được cấu trúc như thế này

![Webpack](https://res.cloudinary.com/kmacoders/image/upload/v1630578054/kmacoders.github.io/static/images/blog/2021/08/30-webpack-2_r8hdag.png)


`Project structure`
```
...
...
├── config
      ├── addons /
              └── webpack.addons.js     
      ├── common-path.js   /* Chứa path input, output, src, blo bla */
      ├── webpack.common.js  
      ├── webpack.dev.js   
      ├── webpack.prod.js  

└── src /
└── webpack.config.js
... 
...
```
<br>

`webpack.config.js`
```js
const merge = require('webpack-merge');
const { mode, analyze } = require('webpack-nano/argv');
const hugCommonConfig = require('./config/webpack.common');
const hugDevConfig = require('./config/webpack.dev');
const hugProdConfig = require('./config/webpack.prod');
const addons = require('./config/addons/webpack.addons');


const development = merge([
  hugDevConfig,
  analyze && addons.analyze(),
])

const production = merge([
  hugProdConfig,
  analyze && addons.analyze(),
])

const getConfig = mode => {
  switch(mode) {
    case 'development':
      return merge([hugCommonConfig, development])
    case 'production':
      return merge([hugCommonConfig, production])
    default:
      throw new Error(`Unknow mode, ${mode}`)
  }

}
module.exports = getConfig(mode);
```

Các bạn nhìn thấy lúc này file config của mình đã rất ngắn, do mình chia làm 3 file config nhỏ ra. Cụ thể là webpack.common ( là những config có trên cả 2 môi trường ) , webpack.dev ( cho môi trường development) và webpack.prod ( cho môi trường production ), chưa kể các addons ( không có trong config, chỉ xuất hiện khi cần. Ví dụ như  Bundle Analyzer... )
Đi kèm với config này, mình sẽ có các câu script như sau :

![Webpack](https://res.cloudinary.com/kmacoders/image/upload/v1630578054/kmacoders.github.io/static/images/blog/2021/08/30-webpack-3_qj2xb6.png)


Thì việc chia như này giúp mình một số việc :

 - Tất nhiên đầu tiên là từ 1 file chia ra làm 3, 4 thì nó lại chẳng ngắn vch, đã ngắn thì dễ đọc dễ fix.
 - Các file riêng biệt cho từng môi trường, như vậy không cần phải check xem là môi trường nào lệnh nào như ảnh đầu tiên nữa. Cứ môi trường nào file đấy chạy. 
 - Việc merge lúc này đã có webpack-merge giúp mình. Tuỳ vào môi trường là dev hay prod, nó sẽ merge file common + file config của môi trường đấy.
 - Các addon ( một số plugin hỗ trợ ) lúc này có thể chỉ được thêm vào khi cần thiết. Như ảnh trên thì bạn thấy mình có dùng addons là bundleanalyzer. Thì đây là một plugin của webpack giúp mình hình dung ra được sự tương quan về các file size sau khi bundle. Và tất nhiên mình chẳng cần nó ở cả dev và prod, nếu đặt ở common thì lần nào build nó cũng chạy quá tốn thời gian. Thế nên mình để vào addon, dựa trên config kia, chỉ khi nào mình chạy lệnh npm run build:prod:bundleanalyzer thì plugin này mới được thêm vào config. Kết quả trông như thế này 
  
![Webpack](https://res.cloudinary.com/kmacoders/image/upload/v1630578054/kmacoders.github.io/static/images/blog/2021/08/30-webpack-4_xkbekt.png)


Nhìn là thấy quả thư viện swiper kia nặng vch.
Ở nhưng mà chưa hết nhé. Thế nếu chia 3, 4 file như này rồi mà vẫn có file config dài ơi là dài thì làm thế nào. Nhất là file webpack.common kia. Dài thôi rồi luôn. Cái khó ló cái khôn, mình lại bóc tách nhỏ tiếp thêm một lần nữa.

## Chia, chia nữa, chia mãi
Thì quay lại câu chuyện, dù đã chia như kia rồi, nhưng như mình nói, có file vẫn quá dài. Mình còn gặp thêm vấn đề là ở team mình có một số bạn không biết webpack. Thực ra đó là chuyện bình thường, vì config thì chỉ cần một người làm là được rồi.  Nhưng mà thử tưởng tượng cứ cái gì đổi config là các ông cũng réo mình, đổi cái port từ 3000 lên 3001 cũng réo. 
Lại một lần nữa cái khó ló cái khôn, với sự chỉ giáo của các tiền bối Tây lông, mình đã cho ra đời chiếc config custom nhỏ hơn nữa, và đặc biệt rất dễ hiểu, dễ sửa với các bạn không biết webpack như team mình.
Trước tiên, khoe nhẹ cái structure đã

![Webpack](https://res.cloudinary.com/kmacoders/image/upload/v1630578053/kmacoders.github.io/static/images/blog/2021/08/30-webpack-5_jhdzlf.png)

`New structure`

```
...
...
├── config
      ├── addons /
              └── webpack.addons.js     
      ├── parts /
              ├── webpack.module.js
              ├── webpack.parts.js
              ├── webpack.plugin.js
      ├── common-path.js   /* Chứa path input, output, src, blo bla */
      ├── webpack.common.js  
      ├── webpack.dev.js   
      ├── webpack.prod.js  

└── src /
└── webpack.config.js
... 
...
```


Một folder nữa tên là parts hiện ra. Vậy nó là gì ?
Khoan hãy nói về thằng parts này, quay lại với các concepts trong webpack. Ngay trên docs webpack đã nói là họ có 5, 6 concepta cơ bản là
 -   [Entry](https://webpack.js.org/concepts/#entry)
-   [Output](https://webpack.js.org/concepts/#output)
-   [Loaders](https://webpack.js.org/concepts/#loaders)
-   [Plugins](https://webpack.js.org/concepts/#plugins)
-   [Mode](https://webpack.js.org/concepts/#mode)
-   [Browser Compatibility](https://webpack.js.org/concepts/#browser-compatibility)
Thế thì tại sao mình không chia nhỏ dựa trên các concepts này và chức năng của chúng. Nôm na thì 3 file common, dev, prod trên kia giờ sẽ biến thành thế này

`webpack.common.js`

```js
const  path  =  require('path');
const commonPath =  require('./common-path');
const merge =  require('webpack-merge');
const parts =  require('./parts/webpack.parts');
const modules =  require('./parts/webpack.module');
const plugins =  require('./parts/webpack.plugin');
const  hugCommonConfig  =  merge([
	{ name:  'Vue3 Typescript Starter' },
	{ entry:  './src/index.ts' },
	{
		output: {
			path: commonPath.outputPath,
			filename:  'build/app.js',
			chunkFilename:  'build/vendors-script.js'
		}
	},
	modules.loadBabel(),
	modules.loadTypescript(),
	modules.loadVue(),
	modules.loadScss(),
	parts.commonOptimize(),
	plugins.extractCss({
		path: commonPath.outputPath,
		filename:  'build/main.css',
		chunkFilename:  'build/vendors-style.css'
	}),

	plugins.vueLoaderPlugin(),
	plugins.buildFeatureFlags(),
	plugins.styleLint(),
	parts.aliasWebpack(),
	parts.statsCommon()
])

// Todo
hugCommonConfig.node = { fs:  'empty'}
module.exports  =  hugCommonConfig
```
Tức là giờ mỗi một concepts hoặc 1 chức năng ( bunlde vue, bunlde scss... ) đã được đặt thành một function ( các function này được chia thành module, parts, hoặc plugin tuỳ chức năng ) và được gọi vào 3 file webpack.common, webpack.dev và webpack.prod.

Vậy thì việc này có tác dụng gì :

 - Tất nhiên lại là nó ngắn và gọn thôi rồi.
 - Khi muốn gỡ một chức năng nào đó, ví dụ gỡ styleLint khỏi project, mình chỉ cần đơn giản tìm đến đoạn code này, xoá đi là xong, thay vì phải lục cả đống config như ngày xưa. Nhất đâu xoá nhầm cả cái gì khác, ae code thấy lỗi thì thôi đem gạch về xây nhà.

`webpack.common.js`

```js
...
plugins.vueLoaderPlugin(),
plugins.buildFeatureFlags(),
plugins.styleLint(), // xoá đi dòng này là xong
parts.aliasWebpack(),
parts.statsCommon()
...
```
- Tiếp là nó giúp cho ae sửa nhanh hơn bao giờ hết. Ví dụ đoạn đổi port, mình config như thế này
`webpack.dev.js`
```js
const  hugDevConfig  =  merge([
	{ mode:  'development' },
	{ devtool:  'inline-source-map' },
	parts.devServer({port:  5000}), // đổi chỗ này thành port khác là xong
	plugins.cleanDist(),
	plugins.copyFromPublicToDist(),
	plugins.htmlWebpack(),
	parts.statsDev({excludeAssets: [/.liquid/,  /.svg/,  /.min.*/,  /.png/,  /.gif/]}),
]);
module.exports  =  hugDevConfig;
```

Đó, muôn vài tiện ích. Quay trở lại với folder parts ban nãy, thì ở bên trong mình chia nhỏ ra theo các concepts rồi viếc các hàm nhỏ chứa config webpack. Ví dụ như chỗ port kia nhé

`webpack.parts.js`
```js
...
...
// Hàm devServer ở bên trên. Với port được truyền từ ngoài vào
exports.devServer = (options) => ({
  // watch: true,
  devServer: {
    contentBase: commonPath.outputPath,
    compress: true,
    port: options.port,
  },
})

exports.statsDev = (options) => ({
  /**
   * Tells stats whether to add information about the built modules.
   * @see {@link https://webpack.js.org/configuration/stats/}
   */
   stats: {
    excludeAssets: options.excludeAssets,
    modules: false
  },
})

exports.commonOptimize = () => ({
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
          vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              enforce: true,
              chunks: 'all'
          }
      }
    }
  }
})
...
...
```

Hay đây là một ví dụ cho Vue

`webpack.modules.js`

```js
exports.loadVue = () => ({
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'],
    mainFields: ['vue', 'browser', 'module', 'main']
  }
})
```
Và ở file common mình gọi

`webpack.common.js`

```js
modules.loadBabel(),
modules.loadTypescript(),
modules.loadVue(), 
modules.loadScss(),
```

## Tóm lại
Thực ra ngày mới học mình lên youtube hay google search thì mỗi ông dạy webpack một kiểu. Cũng đúng vì mỗi project mỗi setup khác nhau, làm gì có cái nào giống cái nào. Chưa kể cú pháp của webpack cũng rất lằng nhằng. Thì đây là một chia sẻ của mình, một phương pháp của mình mà mình cho là khá ổn. Nó được xây dựng từ các vấn đề thực tế của team mình trong quá trình làm việc, cũng như là follow theo các anh Tây lông để tối ưu nhất có thể. Cá nhân mình thấy nó khá hay, ít nhất là ở thời điểm hiện tại. Biết đâu trong tương lai khi làm việc với các team khác, cty khác mình lại có những phương pháp khác thì mình lại bên lên đây để kí sự chém gió tiếp.
Thế nhé.
