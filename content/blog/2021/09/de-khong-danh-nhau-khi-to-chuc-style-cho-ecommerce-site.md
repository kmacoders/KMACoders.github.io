---
title: Để không đánh nhau khi tổ chức style cho ecommerce site
description: 'Bài viết này dựa trên một truyền thuyết có thật... à nhầm một câu chuyện thực tế về cách mình và team đã cùng nhau giải quyết các vấn đề style khi làm một page eCommerce với khoảng 40+ screens ( desktop + mobile ). Bằng một cách thần kì nào đó không có cuộc đánh nhau nào xảy ra trong suốt quá trình code. Giờ thì bắt đầu thôi.'
author: 'Hưng'
image: 'https://res.cloudinary.com/kmacoders/image/upload/v1630769848/kmacoders.github.io/static/images/blog/2021/09/04-banner_oxfx2z.png'
tags: ['scss', 'webpack', 'shopify']
published: '2020-09-04'
---

## Đặt vấn đề
Chuyện diễn ra vào một ngày đẹp trời nọ. Ngày ấy mình chỉ code các app ( có thể hiểu là một dạng plugin ) cho nền tảng Shopify. Mọi thứ khá êm đềm vì khi ấy toàn bộ style của 1 app khá nhỏ. Quanh quẩn căng lắm 1000+ dòng ( kết quả bundle, tính chung cả project ). Ae tập trung làm logic là chủ yếu, không quá đặt nặng về style, thậm chí có vài vấn đề bọn mình còn ngồi tự bịa với nhau.
Thế rồi một ngày nọ bọn mình nhận yêu cầu làm theme cho Shopify ( do đội designer bên mình thiết kế ) , và outsource 1 shop khác ( cũng base trên Shopify nhưng do khách có thiết kế sẵn rồi ). Sơ sơ thì design trông như thế này 

![design figma](https://res.cloudinary.com/kmacoders/image/upload/v1630770598/kmacoders.github.io/static/images/blog/2021/09/04-design.png)

Thì kia là bản Desktop nhé, chúng mình có 1 số lượng screen tương tự cho bản Mobile nữa. Và bọn mình bắt đầu triển khai project cho đến khi Bùm, vấn đề đã xuất hiện.

## Atomic CSS hay SCSS
Việc đầu tiên đau đầu là mình phân vân giữa việc để team code Atomic CSS hay là dùng SCSS. Về Atomic CSS thì [Tailwind](https://tailwindcss.com/) là cái tên hot trend nổi đình đám. Mình không đi sâu đến Atomic CSS ở đây, có thể mình sẽ viết ở một bài viết khác vì nó là trend và cũng có khá nhiều ưu điểm. Lược sơ qua có thể kế đến như :

 - Không phải suy nghĩ chuyện nên đặt tên class cha thế nào, class con thế nào, cháu thế nào cho đau đầu.
 -  Làm prototype với tốc độ ánh sáng, dựng lên cái khuân chỉ trong tích tắc 
 - Bundle size nhẹ hơn, load trang nhanh hơn. Thành thật mà nói thì đây là cái làm mình đắn đo nhất. Vì cá nhân mình rất quan tâm đến performance của page ( chưa kể có khách hàng còn rất khó tính ), Shopify lúc đó cũng rất khuyến khích các trang có tốc độ nhanh. Mình đã xem một vài bài benchmark thì kể ra thích Tailwind thật.
 - Đỡ phải chia cấu trúc, đặt style ở đâu này kia. Team mình code Vue và Liquid ( của Shopify ) là chủ yếu, chúng dùng khá nhiều template. Đặt luôn vào template như thế thì còn gì bằng.
 - Trend, đùa, đã là trend thì ai chẳng thích đú. Ae trong team thì lại càng thích, và mình thì... ừ cũng thích.
 
 Ngồi kể cả đống kia ra, ấy thế mà, cuối cùng sau tất cả, mình và team vẫn chọn code SCSS, tại sao vậy ?
 Vì chúng mình làm thử. Rất nhanh sau đó, mình đã nhận ra một số điểm mà có lẽ team mình chưa nên dùng Atomic CSS ở thời điểm này. Sau rất nhiều đêm mất ngủ, mình đành setup lại, cấu trúc lại, tạm biệt cô em Tailwind sexy này 

- Tất nhiên lý do đầu là các bố phải học, từng ông trong team phải mò vào docs của Tailwind và bắt đầu đọc thần chú với hàng nghìn class có sẵn của nó. Với mình thì nó hệ thống, dễ nhớ. Tuy nhiên, không phải là một lựa chọn bắt đầu project nhanh. 
 - Loạn xì ngậu class, chiến trường class, nghĩa địa atomic... Âu, đúng vậy. Giời ơi nó lắm class vô cùng luôn. Khác với khi làm Admin Dashboard hay những thứ tương tự thế, thì thực sự các web, đặc biệt là ecommerce thì đúng là ối dồi ôi. Design của nó rất phức tạp, nhiều chi tiết nhỏ lỉnh kỉnh. Chưa kể yêu cầu Pixel Perfect đến từ sếp. Một cái div nhỏ khi ấy kéo dài lê thê là chuyện thường. Mà Liquid lại còn là một kiểu viết logic luôn trong HTML. Thật không tin nổi, mình đang đặt cả template, logic và style vào cùng một chỗ.
 - Một page ecommerce thì có rất nhiều element, nhiều component nhỏ. Như vậy khi atomic class tràn đầy trên template, việc thay đổi style của 1 element sẽ rất khó. Bạn sẽ phải tìm và thay một đống ( tương tự nếu có ) trên template đó. 
- Vẫn phải custom khá nhiều. Một số trường hợp design phức tạp bản thân Tailwind vẫn chưa thể cover với đống class atomic của nó được, mình đành vẫn tạo file scss rồi custom class vào.

Đứng trước các vấn đề đó, sau một lần nữa lại những đêm mất ngủ, mình đành quyết định dùng SCSS. Nhưng câu hỏi đặt ra là mình sẽ dùng như thế nào để phù hợp với project đây.

## Đi tìm chiếc structure hoàn hảo
Ban đầu, mình nghĩ là mình có thể chia theo page, cứ style của page nào thì viết vào file SCSS của page đấy.

```
|– pages/  
| |– _home.scss // Home specific styles  
| |– _about.scss // About specific styles  
| |– _contact.scss // Contact specific styles  
  ...
 ...
 – main.scss
```

Thế rồi chỉ vài ngày sau mình nhận ra vấn đề của việc này, đó chính là quá trình maintain và update. Thử tượng tượng bạn đang muốn sửa cái Product Card của một người ae nào đó trong team viết. Bạn tìm đến được file template của Product Card rồi, nhanh chóng sau đó bạn tìm thấy class mà bạn muốn sửa. Nhưng no, css của file này đâu. Bạn nhanh trí nhớ ra, à hình như Product Card nằm trong trang Home, như vậy mình có thể tìm nó ở file `_home.scss` bên trên ( hoặc ông nào dùng Search của Vim hay Vscode để search cũng được nhé ). Bạn mò đến file scss này và bùm, ngoài code style của Product Card ra bạn còn thấy style của rất nhiều các thành phần khác có trong Home page nữa, như là Banner này, Slider này... Vậy thì có khi nào chỉ vì sửa Product Card mình lỡ tay động nhầm vào một cái khác không, chưa kể tìm ra mà sửa cũng mệt ( vì có mấy ông không viết theo nhóm, cứ đè ra đít file mà viết, thành ra các phần cứ đan xen đan xen nhau ).

Thế là mình phải nghĩ cách. Đúng là không thể thế này được. Cần chia nhỏ hơn. Code style nên đi kèm theo các snipets, component. Như vậy vừa dễ quản lý, lại dễ tìm, dễ sửa. Nhanh chóng ngay sau đó, mình bắt tay vào config lại Webpack cho project và kết quả ra như này

![3 file](https://res.cloudinary.com/kmacoders/image/upload/v1630772721/kmacoders.github.io/static/images/blog/2021/09/04-3-file.png)

Shopify lúc ấy chỉ cho phép 1 file bundle js, 1 file bunlde css cuối cùng, sử dụng cấu trúc phẳng. Nhưng nhờ có Webpack, mình đã tạo được thành từng folder như thế này. Sau đó mình sẽ tự động tìm hết các file `.scss` và `.ts` để merge lại rồi bundle ra thành `css` + `js` tương ứng.  Điều lợi của config này như mình đã nói bên trên, code vừa được tách ra thành logic, template, style ( khá giống Vue, Angular ) lại còn dễ tìm, dễ quản lý, dễ sửa.

## Nâng cấp tiếp cấu trúc

Mọi thứ êm đẹp rồi mà, nâng cấp tiếp làm gì ?
Ừa thì có êm đẹp, anh em trong team lúc này đã đỡ đấm nhau hơn, nhưng mà vẫn chưa tối ưu. 

 - Một site lớn như thế này, mình có thể tận dụng bộ grid system của Bootstrap 4 không, có chứ ( mình tách ra chỉ lấy đúng grid của Bootstrap, các phần khác mình không lấy ). 
 - Khách yêu cầu sản phẩm phải có 2 theme, với 2 trường phái màu sắc khác nhau, 2 phong cách thiết kế khác nhau thì bây giờ làm thế nào ?
 -  Code reset CSS đặt ở đâu ?
 - Nhu cầu responsive, nhu cầu center element... ae ngày viết cả trăm lần. Thế không lẽ cứ mạnh ai người đấy viết ? Có thể chỉ để một người viết rồi ae dùng chung không ?
 - Sử dụng thư viện slider từ bên ngoài, giờ team muốn biến tấu đi, muốn custom lại nó một chút cho hợp với dự án, thế thì đặt ở đâu, custom ở đâu ?
 - ... vân vân mây mây
 
 Đúng thật là không ổn. Nên nhớ là team đang dùng SCSS cơ mà, nếu cứ code thế này thì khác gì dùng CSS, chẳng tận dụng được tí nào sức mạnh của nó cả. 
 Và mình bắt đầu lùng sục các project trên git, tham khảo các dự án đã có, với mong muốn giải quyết vấn đề trong êm đẹp. Và thật may, cuối cùng mình đã tìm được. Ngay lập tức, mình áp dụng nó vào project 
 ```
 sass/  
|  
|– abstracts/ (or utilities/)  
| |– _variables.scss // Sass Variables  
| |– _functions.scss // Sass Functions  
| |– _mixins.scss // Sass Mixins  
|  
|– base/  
| |– _reset.scss // Reset/normalize  
| |– _typography.scss // Typography rules  
|  
|– components/ (or modules/)  
| |– _buttons.scss // Buttons  
| |– _carousel.scss // Carousel  
| |– _slider.scss // Slider  
|  
|– layout/  
| |– _navigation.scss // Navigation  
| |– _grid.scss // Grid system  
| |– _header.scss // Header  
| |– _footer.scss // Footer  
| |– _sidebar.scss // Sidebar  
| |– _forms.scss // Forms  
|  
|– pages/  
| |– _home.scss // Home specific styles  
| |– _about.scss // About specific styles  
| |– _contact.scss // Contact specific styles  
|  
|– themes/  
| |– _theme.scss // Default theme  
| |– _admin.scss // Admin theme  
|  
|– vendors/  
| |– _bootstrap.scss // Bootstrap  
| |– _jquery-ui.scss // jQuery UI  
|  
`– main.scss // Main Sass file
 ```
 
 Ầu, thật đẹp. Cái này về từng folder có nhiệm vụ gì chắc mình không cần nói lại để tránh bài viết này dài. Cái này bạn có thể lên google search từ khoá ` sass 7 in 1 partern ` là được. 
 À nhưng khoan đã, cấu trúc này đẹp đấy, rõ ràng đấy nhưng nếu import  cả 100+ file kia vào file `main.scss` thì sẽ thật kinh. Mình liền nảy sinh ra idea update lại như thế này. Ở mỗi một folder, mình thêm 1 file có dạng `_ten_folder-dir.scss`
 ![scss dir](https://res.cloudinary.com/kmacoders/image/upload/v1630774433/kmacoders.github.io/static/images/blog/2021/09/04-scss-dir.png)
 
 Như bạn thấy, thay vì import tất cả các file vào `main.scss` thì ở mỗi folder ( trong 7 folder kia ) mình tạo ra 1 file `dir`.  Mình sẽ import toàn bộ file của folder đấy vào file `dir` tương ứng. Cuối cùng, sau khi có 7 file `dir` thì mình import cả 7 file này vào file `main.scss`. Thế là xong. File `main.scss` lúc này cũng đươc gọn hơn rất nhiều.
```scss
@import  './vendors/vendor-dir';
@import  './utils/utils-dir';
@import  './pages/pages-dir';
@import  './layout/layout-dir';
@import  './components/components-dir';
@import  './snippet/background-image';
@import  './sections/sections-dir';
@import  './base/base-dir';
@import  './helpers/helpers-dir';

/* Auto impo@import all scss file from Theme folder */
/* Using @see https://www.npmjs.com/package/impo@import-glob-loader */
@import  "../../shopify/**/*.scss";

/*
* Code chung
*/
@import  './general';
@import  './vueGeneral';
```

## Hết
Và thế là hết. Câu chuyện cuối cùng cũng đã có hồi kết.
Ở thời điểm hiện tại thì đây là một cấu trúc mà mình thấy khá là tâm đắc. Ít nhất thì nó cũng giúp cho ae làm việc trong êm đẹp. Mỗi ngày đi làm nhìn nhau với tình thương mến thương. Không như ngày trước thỉnh thoảng đang làm lại có bố " Ơ thằng kia code cái A này mày để ở đâu đấy", hay là "Ơ mày sửa kiểu *** gì hỏng hết style cái B của tao rồi ". Nghe chỉ muốn quay sang sút cho mỗi thằng phát.
Nên giờ yên bình rồi, kể được như thế, mình cũng vui vì không bõ công những đêm nghĩ cách. Thời gian đi fix với đi chửi nhau kia thì đi lên Now, lên Baemin đặt cho nhau cốc trà sữa có phải tình thương mến thương không.
Cuối tuần ngồi kể lể tí, đi nghe nhạc tí cho thư giãn. Hà Nội dạo này giãn cách, năm cô vít thứ 2 sau công nguyên,  word from home chán quá.
Pai pai !!!
