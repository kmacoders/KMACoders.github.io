__NUXT_JSONP__("/tags/shopify", {data:[{blogsByTag:[{slug:"de-khong-danh-nhau-khi-to-chuc-style-cho-ecommerce-site",description:"Bài viết này dựa trên một truyền thuyết có thật... à nhầm một câu chuyện thực tế về cách mình và team đã cùng nhau giải quyết các vấn đề style khi làm một page eCommerce với khoảng 40+ screens ( desktop + mobile ). Bằng một cách thần kì nào đó không có cuộc đánh nhau nào xảy ra trong suốt quá trình code. Giờ thì bắt đầu thôi.",title:"Để không đánh nhau khi tổ chức style cho eCommerce site",image:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630769848\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-banner_oxfx2z.png",tags:["scss","webpack","shopify"],published:"2020-09-04",contentBeforeJson:"\n## Đặt vấn đề\nChuyện diễn ra vào một ngày đẹp trời nọ. Ngày ấy mình chỉ code các app ( có thể hiểu là một dạng plugin ) cho nền tảng Shopify. Mọi thứ khá êm đềm vì khi ấy toàn bộ style của 1 app khá nhỏ. Quanh quẩn căng lắm 1000+ dòng ( kết quả bundle, tính chung cả project ). Ae tập trung làm logic là chủ yếu, không quá đặt nặng về style, thậm chí có vài vấn đề bọn mình còn ngồi tự bịa với nhau.\nThế rồi một ngày nọ bọn mình nhận yêu cầu làm theme cho Shopify ( do đội designer bên mình thiết kế ) , và outsource 1 shop khác ( cũng base trên Shopify nhưng do khách có thiết kế sẵn rồi ). Sơ sơ thì design trông như thế này \n\n![design figma](https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630770598\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-design.png)\n\nThì kia là bản Desktop nhé, chúng mình có 1 số lượng screen tương tự cho bản Mobile nữa. Và bọn mình bắt đầu triển khai project cho đến khi Bùm, vấn đề đã xuất hiện.\n\n## Atomic CSS hay SCSS\nViệc đầu tiên đau đầu là mình phân vân giữa việc để team code Atomic CSS hay là dùng SCSS. Về Atomic CSS thì [Tailwind](https:\u002F\u002Ftailwindcss.com\u002F) là cái tên hot trend nổi đình đám. Mình không đi sâu đến Atomic CSS ở đây, có thể mình sẽ viết ở một bài viết khác vì nó là trend và cũng có khá nhiều ưu điểm. Lược sơ qua có thể kế đến như :\n\n - Không phải suy nghĩ chuyện nên đặt tên class cha thế nào, class con thế nào, cháu thế nào cho đau đầu.\n -  Làm prototype với tốc độ ánh sáng, dựng lên cái khuân chỉ trong tích tắc \n - Bundle size nhẹ hơn, load trang nhanh hơn. Thành thật mà nói thì đây là cái làm mình đắn đo nhất. Vì cá nhân mình rất quan tâm đến performance của page ( chưa kể có khách hàng còn rất khó tính ), Shopify lúc đó cũng rất khuyến khích các trang có tốc độ nhanh. Mình đã xem một vài bài benchmark thì kể ra thích Tailwind thật.\n - Đỡ phải chia cấu trúc, đặt style ở đâu này kia. Team mình code Vue và Liquid ( của Shopify ) là chủ yếu, chúng dùng khá nhiều template. Đặt luôn vào template như thế thì còn gì bằng.\n - Trend, đùa, đã là trend thì ai chẳng thích đú. Ae trong team thì lại càng thích, và mình thì... ừ cũng thích.\n \n Ngồi kể cả đống kia ra, ấy thế mà, cuối cùng sau tất cả, mình và team vẫn chọn code SCSS, tại sao vậy ?\n Vì chúng mình làm thử. Rất nhanh sau đó, mình đã nhận ra một số điểm mà có lẽ team mình chưa nên dùng Atomic CSS ở thời điểm này. Sau rất nhiều đêm mất ngủ, mình đành setup lại, cấu trúc lại, tạm biệt cô em Tailwind sexy này \n\n- Tất nhiên lý do đầu là các bố các phải học, từng ông trong team phải mò vào docs của Tailwind và bắt đầu đọc thần chú với hàng nghìn class có sẵn của nó. Với mình thì nó hệ thống, dễ nhớ. Tuy nhiên, không phải là một lựa chọn bắt đầu project nhanh. \n - Loạn xì ngậu class, chiến trường class, nghĩa địa atomic... Âu, đúng vậy. Giời ơi nó lắm class vô cùng luôn. Khác với khi làm Admin Dashboard hay những thứ tương tự thế, thì thực sự các web, đặc biệt là e-commerce thì đúng là ối dồi ôi. Design của nó rất phức tạp, nhiều chi tiết nhỏ lỉnh kỉnh. Chưa kể yêu cầu Pixel Perfect đến từ sếp. Một cái div nhỏ khi ấy kéo dài lê thê là chuyện thường. Mà Liquid lại còn là một kiểu viết logic luôn trong HTML. Thật không tin nổi, mình đang đặt cả template, logic và style vào cùng một chỗ.\n - Một page ecommerce thì có rất nhiều element, nhiều component nhỏ. Như vậy khi atomic class tràn đầy trên template, việc thay đổi style của 1 element sẽ rất khó. Bạn sẽ phải tìm và thay một đống ( tương tự nếu có ) trên template đó. \n- Vẫn phải custom khá nhiều. Một số trường hợp design phức tạp bản thân Tailwind vẫn chưa thể cover với đống class atomic của nó được, mình đành vẫn tạo file scss rồi custom class vào đó.\n\nĐứng trước các vấn đề đó, sau một lần nữa lại những đêm mất ngủ, mình đành quyết định dùng SCSS. Nhưng câu hỏi đặt ra là mình sẽ dùng như thế nào để phù hợp với project đây.\n\n## Đi tìm chiếc structure hoàn hảo\nBan đầu, mình nghĩ là mình có thể chia theo page, cứ style của page nào thì viết vào file SCSS của page đấy.\n\n```\n|– pages\u002F  \n| |– _home.scss \u002F\u002F Home specific styles  \n| |– _about.scss \u002F\u002F About specific styles  \n| |– _contact.scss \u002F\u002F Contact specific styles  \n  ...\n ...\n – main.scss\n```\n\nThế rồi chỉ vài ngày sau mình nhận ra vấn đề của việc này, đó chính là quá trình maintain và update. Thử tượng tượng bạn đang muốn sửa cái Product Card của một người ae nào đó trong team viết. Bạn tìm đến được file template của Product Card rồi, nhanh chóng sau đó bạn tìm thấy class mà bạn muốn sửa. Nhưng no, css của file này đâu. Bạn nhanh trí nhớ ra, à hình như Product Card nằm trong trang Home, như vậy mình có thể tìm nó ở file `_home.scss` bên trên ( hoặc ông nào dùng Search của Vim hay Vscode để search cũng được nhé ). Bạn mò đến file scss này và bùm, ngoài code style của Product Card ra bạn còn thấy style của rất nhiều các thành phần khác có trong Home page nữa, như là Banner này, Slider này... Vậy thì có khi nào chỉ vì sửa Product Card mình lỡ tay động nhầm vào một cái khác không, chưa kể tìm ra mà sửa cũng mệt ( vì có mấy ông không viết theo nhóm, cứ đè ra đít file mà viết, thành ra các phần cứ đan xen đan xen nhau ).\n\nThế là mình phải nghĩ cách. Đúng là không thể thế này được. Cần chia nhỏ hơn. Code style nên đi kèm theo các snipets, component. Như vậy vừa dễ quản lý, lại dễ tìm, dễ sửa. Nhanh chóng ngay sau đó, mình bắt tay vào config lại Webpack cho project và kết quả ra như này\n\n![3 file](https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630772721\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-3-file.png)\n\nShopify lúc ấy chỉ cho phép 1 file bundle js, 1 file bunlde css cuối cùng, sử dụng cấu trúc phẳng. Nhưng nhờ có Webpack, mình đã tạo được thành từng folder như thế này. Sau đó mình sẽ tự động tìm hết các file `.scss` và `.ts` để merge lại rồi bundle ra thành `css` + `js` tương ứng.  Điều lợi của config này như mình đã nói bên trên, code vừa được tách ra thành logic, template, style ( khá giống Vue, Angular ) lại còn dễ tìm, dễ quản lý, dễ sửa.\n\n## Nâng cấp tiếp cấu trúc\n\nMọi thứ êm đẹp rồi mà, nâng cấp tiếp làm gì ?\nỪa thì có êm đẹp, anh em trong team lúc này đã đỡ đấm nhau hơn, nhưng mà vẫn chưa tối ưu. \n\n - Một site lớn như thế này, mình có thể tận dụng bộ grid system của Bootstrap 4 không, có chứ ( mình tách ra chỉ lấy đúng grid của Bootstrap, các phần khác mình không lấy ). \n - Khách yêu cầu sản phẩm phải có 2 theme, với 2 trường phái màu sắc khác nhau, 2 phong cách thiết kế khác nhau thì bây giờ làm thế nào ?\n -  Code reset CSS đặt ở đâu ?\n - Nhu cầu responsive, nhu cầu center element... ae ngày viết cả trăm lần. Thế không lẽ cứ mạnh ai người đấy viết ? Có thể chỉ để một người viết rồi ae dùng chung không ?\n - Sử dụng thư viện slider từ bên ngoài, giờ team muốn biến tấu đi, muốn custom lại nó một chút cho hợp với dự án, thế thì đặt ở đâu, custom ở đâu ?\n - ... vân vân mây mây\n \n Đúng thật là không ổn. Nên nhớ là team đang dùng SCSS cơ mà, nếu cứ code thế này thì khác gì dùng CSS, chẳng tận dụng được tí nào sức mạnh của nó cả. \n Và mình bắt đầu lùng sục các project trên git, tham khảo các dự án đã có, với mong muốn giải quyết vấn đề trong êm đẹp. Và thật may, cuối cùng mình đã tìm được. Ngay lập tức, mình áp dụng nó vào project \n ```\n sass\u002F  \n|  \n|– abstracts\u002F (or utilities\u002F)  \n| |– _variables.scss \u002F\u002F Sass Variables  \n| |– _functions.scss \u002F\u002F Sass Functions  \n| |– _mixins.scss \u002F\u002F Sass Mixins  \n|  \n|– base\u002F  \n| |– _reset.scss \u002F\u002F Reset\u002Fnormalize  \n| |– _typography.scss \u002F\u002F Typography rules  \n|  \n|– components\u002F (or modules\u002F)  \n| |– _buttons.scss \u002F\u002F Buttons  \n| |– _carousel.scss \u002F\u002F Carousel  \n| |– _slider.scss \u002F\u002F Slider  \n|  \n|– layout\u002F  \n| |– _navigation.scss \u002F\u002F Navigation  \n| |– _grid.scss \u002F\u002F Grid system  \n| |– _header.scss \u002F\u002F Header  \n| |– _footer.scss \u002F\u002F Footer  \n| |– _sidebar.scss \u002F\u002F Sidebar  \n| |– _forms.scss \u002F\u002F Forms  \n|  \n|– pages\u002F  \n| |– _home.scss \u002F\u002F Home specific styles  \n| |– _about.scss \u002F\u002F About specific styles  \n| |– _contact.scss \u002F\u002F Contact specific styles  \n|  \n|– themes\u002F  \n| |– _theme.scss \u002F\u002F Default theme  \n| |– _admin.scss \u002F\u002F Admin theme  \n|  \n|– vendors\u002F  \n| |– _bootstrap.scss \u002F\u002F Bootstrap  \n| |– _jquery-ui.scss \u002F\u002F jQuery UI  \n|  \n`– main.scss \u002F\u002F Main Sass file\n ```\n \n Ầu, thật đẹp. Cái này về từng folder có nhiệm vụ gì chắc mình không cần nói lại để tránh bài viết này dài. Cái này bạn có thể lên google search từ khoá ` sass 7 in 1 partern ` là được. \n À nhưng khoan đã, cấu trúc này đẹp đấy, rõ ràng đấy nhưng nếu import  cả 100+ file kia vào file `main.scss` thì sẽ thật kinh. Mình liền nảy sinh ra idea update lại như thế này. Ở mỗi một folder, mình thêm 1 file có dạng `_ten_folder-dir.scss`\n ![scss dir](https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630774433\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-scss-dir.png)\n \n Như bạn thấy, thay vì import tất cả các file vào `main.scss` thì ở mỗi folder ( trong 7 folder kia ) mình tạo ra 1 file `dir`.  Mình sẽ import toàn bộ file của folder đấy vào file `dir` tương ứng. Cuối cùng, sau khi có 7 file `dir` thì mình import cả 7 file này vào file `main.scss`. Thế là xong. File `main.scss` lúc này cũng đươc gọn hơn rất nhiều.\n```scss\n@import  '.\u002Fvendors\u002Fvendor-dir';\n@import  '.\u002Futils\u002Futils-dir';\n@import  '.\u002Fpages\u002Fpages-dir';\n@import  '.\u002Flayout\u002Flayout-dir';\n@import  '.\u002Fcomponents\u002Fcomponents-dir';\n@import  '.\u002Fsnippet\u002Fbackground-image';\n@import  '.\u002Fsections\u002Fsections-dir';\n@import  '.\u002Fbase\u002Fbase-dir';\n@import  '.\u002Fhelpers\u002Fhelpers-dir';\n\n\u002F* Auto impo@import all scss file from Theme folder *\u002F\n\u002F* Using @see https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fimpo@import-glob-loader *\u002F\n@import  \"..\u002F..\u002Fshopify\u002F**\u002F*.scss\";\n\n\u002F*\n* Code chung\n*\u002F\n@import  '.\u002Fgeneral';\n@import  '.\u002FvueGeneral';\n```\n\n## Hết\nVà thế là hết. Câu chuyện cuối cùng cũng đã có hồi kết.\nỞ thời điểm hiện tại thì đây là một cấu trúc mà mình thấy khá là tâm đắc. Ít nhất thì nó cũng giúp cho ae làm việc trong êm đẹp. Mỗi ngày đi làm nhìn nhau với tình thương mến thương. Không như ngày trước thỉnh thoảng đang làm lại có bố \" Ơ thằng kia code cái A này mày để ở đâu đấy\", hay là \"Ơ mày sửa kiểu *** gì hỏng hết style cái B của tao rồi \". Nghe chỉ muốn quay sang sút cho mỗi thằng phát.\nNên giờ yên bình rồi, kể được như thế, mình cũng vui vì không bõ công những đêm nghĩ cách. Thời gian đi fix với đi chửi nhau kia thì đi lên Now, lên Baemin đặt cho nhau cốc trà sữa có phải tình thương mến thương không.\nCuối tuần ngồi kể lể tí, đi nghe nhạc tí cho thư giãn. Hà Nội dạo này giãn cách, năm cô vít thứ 2 sau công nguyên,  word from home chán quá.\nPai pai !!!\n"}]}],fetch:{},mutations:void 0});