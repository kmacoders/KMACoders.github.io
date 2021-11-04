__NUXT_JSONP__("/blog/de-khong-danh-nhau-khi-to-chuc-style-cho-ecommerce-site", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{blogDetail:{slug:G,description:H,title:I,author:"Hưng",image:J,tags:[K,w,L],published:M,toc:[{id:N,depth:p,text:O},{id:P,depth:p,text:Q},{id:R,depth:p,text:S},{id:T,depth:p,text:U},{id:V,depth:p,text:W}],body:{type:"root",children:[{type:b,tag:q,props:{id:N},children:[{type:b,tag:o,props:{href:"#%C4%91%E1%BA%B7t-v%E1%BA%A5n-%C4%91%E1%BB%81",ariaHidden:r,tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Chuyện diễn ra vào một ngày đẹp trời nọ. Ngày ấy mình chỉ code các app ( có thể hiểu là một dạng plugin ) cho nền tảng Shopify. Mọi thứ khá êm đềm vì khi ấy toàn bộ style của 1 app khá nhỏ. Quanh quẩn căng lắm 1000+ dòng ( kết quả bundle, tính chung cả project ). Ae tập trung làm logic là chủ yếu, không quá đặt nặng về style, thậm chí có vài vấn đề bọn mình còn ngồi tự bịa với nhau.\nThế rồi một ngày nọ bọn mình nhận yêu cầu làm theme cho Shopify ( do đội designer bên mình thiết kế ) , và outsource 1 shop khác ( cũng base trên Shopify nhưng do khách có thiết kế sẵn rồi ). Sơ sơ thì design trông như thế này"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:x,props:{alt:"design figma",src:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630770598\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-design.png"},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Thì kia là bản Desktop nhé, chúng mình có 1 số lượng screen tương tự cho bản Mobile nữa. Và bọn mình bắt đầu triển khai project cho đến khi Bùm, vấn đề đã xuất hiện."}]},{type:a,value:c},{type:b,tag:q,props:{id:P},children:[{type:b,tag:o,props:{href:"#atomic-css-hay-scss",ariaHidden:r,tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Việc đầu tiên đau đầu là mình phân vân giữa việc để team code Atomic CSS hay là dùng SCSS. Về Atomic CSS thì "},{type:b,tag:o,props:{href:"https:\u002F\u002Ftailwindcss.com\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Tailwind"}]},{type:a,value:" là cái tên hot trend nổi đình đám. Mình không đi sâu đến Atomic CSS ở đây, có thể mình sẽ viết ở một bài viết khác vì nó là trend và cũng có khá nhiều ưu điểm. Lược sơ qua có thể kế đến như :"}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Không phải suy nghĩ chuyện nên đặt tên class cha thế nào, class con thế nào, cháu thế nào cho đau đầu."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Làm prototype với tốc độ ánh sáng, dựng lên cái khuân chỉ trong tích tắc"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Bundle size nhẹ hơn, load trang nhanh hơn. Thành thật mà nói thì đây là cái làm mình đắn đo nhất. Vì cá nhân mình rất quan tâm đến performance của page ( chưa kể có khách hàng còn rất khó tính ), Shopify lúc đó cũng rất khuyến khích các trang có tốc độ nhanh. Mình đã xem một vài bài benchmark thì kể ra thích Tailwind thật."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Đỡ phải chia cấu trúc, đặt style ở đâu này kia. Team mình code Vue và Liquid ( của Shopify ) là chủ yếu, chúng dùng khá nhiều template. Đặt luôn vào template như thế thì còn gì bằng."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Trend, đùa, đã là trend thì ai chẳng thích đú. Ae trong team thì lại càng thích, và mình thì... ừ cũng thích."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Ngồi kể cả đống kia ra, ấy thế mà, cuối cùng sau tất cả, mình và team vẫn chọn code SCSS, tại sao vậy ?\nVì chúng mình làm thử. Rất nhanh sau đó, mình đã nhận ra một số điểm mà có lẽ team mình chưa nên dùng Atomic CSS ở thời điểm này. Sau rất nhiều đêm mất ngủ, mình đành setup lại, cấu trúc lại, tạm biệt cô em Tailwind sexy này"}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Tất nhiên lý do đầu là các bố phải học, từng ông trong team phải mò vào docs của Tailwind và bắt đầu đọc thần chú với hàng nghìn class có sẵn của nó. Với mình thì nó hệ thống, dễ nhớ. Tuy nhiên, không phải là một lựa chọn bắt đầu project nhanh."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Loạn xì ngậu class, chiến trường class, nghĩa địa atomic... Âu, đúng vậy. Giời ơi nó lắm class vô cùng luôn. Khác với khi làm Admin Dashboard hay những thứ tương tự thế, thì thực sự các web, đặc biệt là ecommerce thì đúng là ối dồi ôi. Design của nó rất phức tạp, nhiều chi tiết nhỏ lỉnh kỉnh. Chưa kể yêu cầu Pixel Perfect đến từ sếp. Một cái div nhỏ khi ấy kéo dài lê thê là chuyện thường. Mà Liquid lại còn là một kiểu viết logic luôn trong HTML. Thật không tin nổi, mình đang đặt cả template, logic và style vào cùng một chỗ."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Một page ecommerce thì có rất nhiều element, nhiều component nhỏ. Như vậy khi atomic class tràn đầy trên template, việc thay đổi style của 1 element sẽ rất khó. Bạn sẽ phải tìm và thay một đống ( tương tự nếu có ) trên template đó."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Vẫn phải custom khá nhiều. Một số trường hợp design phức tạp bản thân Tailwind vẫn chưa thể cover với đống class atomic của nó được, mình đành vẫn tạo file scss rồi custom class vào."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Đứng trước các vấn đề đó, sau một lần nữa lại những đêm mất ngủ, mình đành quyết định dùng SCSS. Nhưng câu hỏi đặt ra là mình sẽ dùng như thế nào để phù hợp với project đây."}]},{type:a,value:c},{type:b,tag:q,props:{id:R},children:[{type:b,tag:o,props:{href:"#%C4%91i-t%C3%ACm-chi%E1%BA%BFc-structure-ho%C3%A0n-h%E1%BA%A3o",ariaHidden:r,tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Ban đầu, mình nghĩ là mình có thể chia theo page, cứ style của page nào thì viết vào file SCSS của page đấy."}]},{type:a,value:c},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,X]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"|– pages\u002F  \n| |– _home.scss \u002F\u002F Home specific styles  \n| |– _about.scss \u002F\u002F About specific styles  \n| |– _contact.scss \u002F\u002F Contact specific styles  \n  ...\n ...\n – main.scss\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Thế rồi chỉ vài ngày sau mình nhận ra vấn đề của việc này, đó chính là quá trình maintain và update. Thử tượng tượng bạn đang muốn sửa cái Product Card của một người ae nào đó trong team viết. Bạn tìm đến được file template của Product Card rồi, nhanh chóng sau đó bạn tìm thấy class mà bạn muốn sửa. Nhưng no, css của file này đâu. Bạn nhanh trí nhớ ra, à hình như Product Card nằm trong trang Home, như vậy mình có thể tìm nó ở file "},{type:b,tag:f,props:{},children:[{type:a,value:"_home.scss"}]},{type:a,value:" bên trên ( hoặc ông nào dùng Search của Vim hay Vscode để search cũng được nhé ). Bạn mò đến file scss này và bùm, ngoài code style của Product Card ra bạn còn thấy style của rất nhiều các thành phần khác có trong Home page nữa, như là Banner này, Slider này... Vậy thì có khi nào chỉ vì sửa Product Card mình lỡ tay động nhầm vào một cái khác không, chưa kể tìm ra mà sửa cũng mệt ( vì có mấy ông không viết theo nhóm, cứ đè ra đít file mà viết, thành ra các phần cứ đan xen đan xen nhau )."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Thế là mình phải nghĩ cách. Đúng là không thể thế này được. Cần chia nhỏ hơn. Code style nên đi kèm theo các snipets, component. Như vậy vừa dễ quản lý, lại dễ tìm, dễ sửa. Nhanh chóng ngay sau đó, mình bắt tay vào config lại Webpack cho project và kết quả ra như này"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:x,props:{alt:"3 file",src:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630772721\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-3-file.png"},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Shopify lúc ấy chỉ cho phép 1 file bundle js, 1 file bunlde css cuối cùng, sử dụng cấu trúc phẳng. Nhưng nhờ có Webpack, mình đã tạo được thành từng folder như thế này. Sau đó mình sẽ tự động tìm hết các file "},{type:b,tag:f,props:{},children:[{type:a,value:".scss"}]},{type:a,value:" và "},{type:b,tag:f,props:{},children:[{type:a,value:".ts"}]},{type:a,value:" để merge lại rồi bundle ra thành "},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:" + "},{type:b,tag:f,props:{},children:[{type:a,value:"js"}]},{type:a,value:" tương ứng.  Điều lợi của config này như mình đã nói bên trên, code vừa được tách ra thành logic, template, style ( khá giống Vue, Angular ) lại còn dễ tìm, dễ quản lý, dễ sửa."}]},{type:a,value:c},{type:b,tag:q,props:{id:T},children:[{type:b,tag:o,props:{href:"#n%C3%A2ng-c%E1%BA%A5p-ti%E1%BA%BFp-c%E1%BA%A5u-tr%C3%BAc",ariaHidden:r,tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Mọi thứ êm đẹp rồi mà, nâng cấp tiếp làm gì ?\nỪa thì có êm đẹp, anh em trong team lúc này đã đỡ đấm nhau hơn, nhưng mà vẫn chưa tối ưu."}]},{type:a,value:c},{type:b,tag:y,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Một site lớn như thế này, mình có thể tận dụng bộ grid system của Bootstrap 4 không, có chứ ( mình tách ra chỉ lấy đúng grid của Bootstrap, các phần khác mình không lấy )."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Khách yêu cầu sản phẩm phải có 2 theme, với 2 trường phái màu sắc khác nhau, 2 phong cách thiết kế khác nhau thì bây giờ làm thế nào ?"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Code reset CSS đặt ở đâu ?"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Nhu cầu responsive, nhu cầu center element... ae ngày viết cả trăm lần. Thế không lẽ cứ mạnh ai người đấy viết ? Có thể chỉ để một người viết rồi ae dùng chung không ?"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Sử dụng thư viện slider từ bên ngoài, giờ team muốn biến tấu đi, muốn custom lại nó một chút cho hợp với dự án, thế thì đặt ở đâu, custom ở đâu ?"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"... vân vân mây mây"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Đúng thật là không ổn. Nên nhớ là team đang dùng SCSS cơ mà, nếu cứ code thế này thì khác gì dùng CSS, chẳng tận dụng được tí nào sức mạnh của nó cả.\nVà mình bắt đầu lùng sục các project trên git, tham khảo các dự án đã có, với mong muốn giải quyết vấn đề trong êm đẹp. Và thật may, cuối cùng mình đã tìm được. Ngay lập tức, mình áp dụng nó vào project"}]},{type:a,value:c},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,X]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"sass\u002F  \n|  \n|– abstracts\u002F (or utilities\u002F)  \n| |– _variables.scss \u002F\u002F Sass Variables  \n| |– _functions.scss \u002F\u002F Sass Functions  \n| |– _mixins.scss \u002F\u002F Sass Mixins  \n|  \n|– base\u002F  \n| |– _reset.scss \u002F\u002F Reset\u002Fnormalize  \n| |– _typography.scss \u002F\u002F Typography rules  \n|  \n|– components\u002F (or modules\u002F)  \n| |– _buttons.scss \u002F\u002F Buttons  \n| |– _carousel.scss \u002F\u002F Carousel  \n| |– _slider.scss \u002F\u002F Slider  \n|  \n|– layout\u002F  \n| |– _navigation.scss \u002F\u002F Navigation  \n| |– _grid.scss \u002F\u002F Grid system  \n| |– _header.scss \u002F\u002F Header  \n| |– _footer.scss \u002F\u002F Footer  \n| |– _sidebar.scss \u002F\u002F Sidebar  \n| |– _forms.scss \u002F\u002F Forms  \n|  \n|– pages\u002F  \n| |– _home.scss \u002F\u002F Home specific styles  \n| |– _about.scss \u002F\u002F About specific styles  \n| |– _contact.scss \u002F\u002F Contact specific styles  \n|  \n|– themes\u002F  \n| |– _theme.scss \u002F\u002F Default theme  \n| |– _admin.scss \u002F\u002F Admin theme  \n|  \n|– vendors\u002F  \n| |– _bootstrap.scss \u002F\u002F Bootstrap  \n| |– _jquery-ui.scss \u002F\u002F jQuery UI  \n|  \n`– main.scss \u002F\u002F Main Sass file\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Ầu, thật đẹp. Cái này về từng folder có nhiệm vụ gì chắc mình không cần nói lại để tránh bài viết này dài. Cái này bạn có thể lên google search từ khoá "},{type:b,tag:f,props:{},children:[{type:a,value:"sass 7 in 1 partern"}]},{type:a,value:" là được.\nÀ nhưng khoan đã, cấu trúc này đẹp đấy, rõ ràng đấy nhưng nếu import  cả 100+ file kia vào file "},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:" thì sẽ thật kinh. Mình liền nảy sinh ra idea update lại như thế này. Ở mỗi một folder, mình thêm 1 file có dạng "},{type:b,tag:f,props:{},children:[{type:a,value:"_ten_folder-dir.scss"}]},{type:a,value:c},{type:b,tag:x,props:{alt:"scss dir",src:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630774433\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-scss-dir.png"},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Như bạn thấy, thay vì import tất cả các file vào "},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:" thì ở mỗi folder ( trong 7 folder kia ) mình tạo ra 1 file "},{type:b,tag:f,props:{},children:[{type:a,value:E}]},{type:a,value:".  Mình sẽ import toàn bộ file của folder đấy vào file "},{type:b,tag:f,props:{},children:[{type:a,value:E}]},{type:a,value:" tương ứng. Cuối cùng, sau khi có 7 file "},{type:b,tag:f,props:{},children:[{type:a,value:E}]},{type:a,value:" thì mình import cả 7 file này vào file "},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:". Thế là xong. File "},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:" lúc này cũng đươc gọn hơn rất nhiều."}]},{type:a,value:c},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,"language-scss"]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Fvendors\u002Fvendor-dir'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Futils\u002Futils-dir'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Fpages\u002Fpages-dir'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Flayout\u002Flayout-dir'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Fcomponents\u002Fcomponents-dir'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Fsnippet\u002Fbackground-image'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Fsections\u002Fsections-dir'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Fbase\u002Fbase-dir'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Fhelpers\u002Fhelpers-dir'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:Y},{type:b,tag:d,props:{className:[e,F]},children:[{type:a,value:"\u002F* Auto impo@import all scss file from Theme folder *\u002F"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,F]},children:[{type:a,value:"\u002F* Using @see https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fimpo@import-glob-loader *\u002F"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"..\u002F..\u002Fshopify\u002F**\u002F*.scss\""}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:Y},{type:b,tag:d,props:{className:[e,F]},children:[{type:a,value:"\u002F*\n* Code chung\n*\u002F"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002Fgeneral'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'.\u002FvueGeneral'"}]},{type:b,tag:d,props:{className:[e,m]},children:[{type:a,value:n}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:q,props:{id:V},children:[{type:b,tag:o,props:{href:"#h%E1%BA%BFt",ariaHidden:r,tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Và thế là hết. Câu chuyện cuối cùng cũng đã có hồi kết.\nỞ thời điểm hiện tại thì đây là một cấu trúc mà mình thấy khá là tâm đắc. Ít nhất thì nó cũng giúp cho ae làm việc trong êm đẹp. Mỗi ngày đi làm nhìn nhau với tình thương mến thương. Không như ngày trước thỉnh thoảng đang làm lại có bố \" Ơ thằng kia code cái A này mày để ở đâu đấy\", hay là \"Ơ mày sửa kiểu *** gì hỏng hết style cái B của tao rồi \". Nghe chỉ muốn quay sang sút cho mỗi thằng phát.\nNên giờ yên bình rồi, kể được như thế, mình cũng vui vì không bõ công những đêm nghĩ cách. Thời gian đi fix với đi chửi nhau kia thì đi lên Now, lên Baemin đặt cho nhau cốc trà sữa có phải tình thương mến thương không.\nCuối tuần ngồi kể lể tí, đi nghe nhạc tí cho thư giãn. Hà Nội dạo này giãn cách, năm cô vít thứ 2 sau công nguyên,  word from home chán quá.\nPai pai !!!"}]}]},dir:"\u002Fblog\u002F2021\u002F09",path:"\u002Fblog\u002F2021\u002F09\u002Fde-khong-danh-nhau-khi-to-chuc-style-cho-ecommerce-site",extension:".md",createdAt:Z,updatedAt:Z,contentBeforeJson:"\n## Đặt vấn đề\nChuyện diễn ra vào một ngày đẹp trời nọ. Ngày ấy mình chỉ code các app ( có thể hiểu là một dạng plugin ) cho nền tảng Shopify. Mọi thứ khá êm đềm vì khi ấy toàn bộ style của 1 app khá nhỏ. Quanh quẩn căng lắm 1000+ dòng ( kết quả bundle, tính chung cả project ). Ae tập trung làm logic là chủ yếu, không quá đặt nặng về style, thậm chí có vài vấn đề bọn mình còn ngồi tự bịa với nhau.\nThế rồi một ngày nọ bọn mình nhận yêu cầu làm theme cho Shopify ( do đội designer bên mình thiết kế ) , và outsource 1 shop khác ( cũng base trên Shopify nhưng do khách có thiết kế sẵn rồi ). Sơ sơ thì design trông như thế này \n\n![design figma](https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630770598\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-design.png)\n\nThì kia là bản Desktop nhé, chúng mình có 1 số lượng screen tương tự cho bản Mobile nữa. Và bọn mình bắt đầu triển khai project cho đến khi Bùm, vấn đề đã xuất hiện.\n\n## Atomic CSS hay SCSS\nViệc đầu tiên đau đầu là mình phân vân giữa việc để team code Atomic CSS hay là dùng SCSS. Về Atomic CSS thì [Tailwind](https:\u002F\u002Ftailwindcss.com\u002F) là cái tên hot trend nổi đình đám. Mình không đi sâu đến Atomic CSS ở đây, có thể mình sẽ viết ở một bài viết khác vì nó là trend và cũng có khá nhiều ưu điểm. Lược sơ qua có thể kế đến như :\n\n - Không phải suy nghĩ chuyện nên đặt tên class cha thế nào, class con thế nào, cháu thế nào cho đau đầu.\n -  Làm prototype với tốc độ ánh sáng, dựng lên cái khuân chỉ trong tích tắc \n - Bundle size nhẹ hơn, load trang nhanh hơn. Thành thật mà nói thì đây là cái làm mình đắn đo nhất. Vì cá nhân mình rất quan tâm đến performance của page ( chưa kể có khách hàng còn rất khó tính ), Shopify lúc đó cũng rất khuyến khích các trang có tốc độ nhanh. Mình đã xem một vài bài benchmark thì kể ra thích Tailwind thật.\n - Đỡ phải chia cấu trúc, đặt style ở đâu này kia. Team mình code Vue và Liquid ( của Shopify ) là chủ yếu, chúng dùng khá nhiều template. Đặt luôn vào template như thế thì còn gì bằng.\n - Trend, đùa, đã là trend thì ai chẳng thích đú. Ae trong team thì lại càng thích, và mình thì... ừ cũng thích.\n \n Ngồi kể cả đống kia ra, ấy thế mà, cuối cùng sau tất cả, mình và team vẫn chọn code SCSS, tại sao vậy ?\n Vì chúng mình làm thử. Rất nhanh sau đó, mình đã nhận ra một số điểm mà có lẽ team mình chưa nên dùng Atomic CSS ở thời điểm này. Sau rất nhiều đêm mất ngủ, mình đành setup lại, cấu trúc lại, tạm biệt cô em Tailwind sexy này \n\n- Tất nhiên lý do đầu là các bố phải học, từng ông trong team phải mò vào docs của Tailwind và bắt đầu đọc thần chú với hàng nghìn class có sẵn của nó. Với mình thì nó hệ thống, dễ nhớ. Tuy nhiên, không phải là một lựa chọn bắt đầu project nhanh. \n - Loạn xì ngậu class, chiến trường class, nghĩa địa atomic... Âu, đúng vậy. Giời ơi nó lắm class vô cùng luôn. Khác với khi làm Admin Dashboard hay những thứ tương tự thế, thì thực sự các web, đặc biệt là ecommerce thì đúng là ối dồi ôi. Design của nó rất phức tạp, nhiều chi tiết nhỏ lỉnh kỉnh. Chưa kể yêu cầu Pixel Perfect đến từ sếp. Một cái div nhỏ khi ấy kéo dài lê thê là chuyện thường. Mà Liquid lại còn là một kiểu viết logic luôn trong HTML. Thật không tin nổi, mình đang đặt cả template, logic và style vào cùng một chỗ.\n - Một page ecommerce thì có rất nhiều element, nhiều component nhỏ. Như vậy khi atomic class tràn đầy trên template, việc thay đổi style của 1 element sẽ rất khó. Bạn sẽ phải tìm và thay một đống ( tương tự nếu có ) trên template đó. \n- Vẫn phải custom khá nhiều. Một số trường hợp design phức tạp bản thân Tailwind vẫn chưa thể cover với đống class atomic của nó được, mình đành vẫn tạo file scss rồi custom class vào.\n\nĐứng trước các vấn đề đó, sau một lần nữa lại những đêm mất ngủ, mình đành quyết định dùng SCSS. Nhưng câu hỏi đặt ra là mình sẽ dùng như thế nào để phù hợp với project đây.\n\n## Đi tìm chiếc structure hoàn hảo\nBan đầu, mình nghĩ là mình có thể chia theo page, cứ style của page nào thì viết vào file SCSS của page đấy.\n\n```\n|– pages\u002F  \n| |– _home.scss \u002F\u002F Home specific styles  \n| |– _about.scss \u002F\u002F About specific styles  \n| |– _contact.scss \u002F\u002F Contact specific styles  \n  ...\n ...\n – main.scss\n```\n\nThế rồi chỉ vài ngày sau mình nhận ra vấn đề của việc này, đó chính là quá trình maintain và update. Thử tượng tượng bạn đang muốn sửa cái Product Card của một người ae nào đó trong team viết. Bạn tìm đến được file template của Product Card rồi, nhanh chóng sau đó bạn tìm thấy class mà bạn muốn sửa. Nhưng no, css của file này đâu. Bạn nhanh trí nhớ ra, à hình như Product Card nằm trong trang Home, như vậy mình có thể tìm nó ở file `_home.scss` bên trên ( hoặc ông nào dùng Search của Vim hay Vscode để search cũng được nhé ). Bạn mò đến file scss này và bùm, ngoài code style của Product Card ra bạn còn thấy style của rất nhiều các thành phần khác có trong Home page nữa, như là Banner này, Slider này... Vậy thì có khi nào chỉ vì sửa Product Card mình lỡ tay động nhầm vào một cái khác không, chưa kể tìm ra mà sửa cũng mệt ( vì có mấy ông không viết theo nhóm, cứ đè ra đít file mà viết, thành ra các phần cứ đan xen đan xen nhau ).\n\nThế là mình phải nghĩ cách. Đúng là không thể thế này được. Cần chia nhỏ hơn. Code style nên đi kèm theo các snipets, component. Như vậy vừa dễ quản lý, lại dễ tìm, dễ sửa. Nhanh chóng ngay sau đó, mình bắt tay vào config lại Webpack cho project và kết quả ra như này\n\n![3 file](https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630772721\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-3-file.png)\n\nShopify lúc ấy chỉ cho phép 1 file bundle js, 1 file bunlde css cuối cùng, sử dụng cấu trúc phẳng. Nhưng nhờ có Webpack, mình đã tạo được thành từng folder như thế này. Sau đó mình sẽ tự động tìm hết các file `.scss` và `.ts` để merge lại rồi bundle ra thành `css` + `js` tương ứng.  Điều lợi của config này như mình đã nói bên trên, code vừa được tách ra thành logic, template, style ( khá giống Vue, Angular ) lại còn dễ tìm, dễ quản lý, dễ sửa.\n\n## Nâng cấp tiếp cấu trúc\n\nMọi thứ êm đẹp rồi mà, nâng cấp tiếp làm gì ?\nỪa thì có êm đẹp, anh em trong team lúc này đã đỡ đấm nhau hơn, nhưng mà vẫn chưa tối ưu. \n\n - Một site lớn như thế này, mình có thể tận dụng bộ grid system của Bootstrap 4 không, có chứ ( mình tách ra chỉ lấy đúng grid của Bootstrap, các phần khác mình không lấy ). \n - Khách yêu cầu sản phẩm phải có 2 theme, với 2 trường phái màu sắc khác nhau, 2 phong cách thiết kế khác nhau thì bây giờ làm thế nào ?\n -  Code reset CSS đặt ở đâu ?\n - Nhu cầu responsive, nhu cầu center element... ae ngày viết cả trăm lần. Thế không lẽ cứ mạnh ai người đấy viết ? Có thể chỉ để một người viết rồi ae dùng chung không ?\n - Sử dụng thư viện slider từ bên ngoài, giờ team muốn biến tấu đi, muốn custom lại nó một chút cho hợp với dự án, thế thì đặt ở đâu, custom ở đâu ?\n - ... vân vân mây mây\n \n Đúng thật là không ổn. Nên nhớ là team đang dùng SCSS cơ mà, nếu cứ code thế này thì khác gì dùng CSS, chẳng tận dụng được tí nào sức mạnh của nó cả. \n Và mình bắt đầu lùng sục các project trên git, tham khảo các dự án đã có, với mong muốn giải quyết vấn đề trong êm đẹp. Và thật may, cuối cùng mình đã tìm được. Ngay lập tức, mình áp dụng nó vào project \n ```\n sass\u002F  \n|  \n|– abstracts\u002F (or utilities\u002F)  \n| |– _variables.scss \u002F\u002F Sass Variables  \n| |– _functions.scss \u002F\u002F Sass Functions  \n| |– _mixins.scss \u002F\u002F Sass Mixins  \n|  \n|– base\u002F  \n| |– _reset.scss \u002F\u002F Reset\u002Fnormalize  \n| |– _typography.scss \u002F\u002F Typography rules  \n|  \n|– components\u002F (or modules\u002F)  \n| |– _buttons.scss \u002F\u002F Buttons  \n| |– _carousel.scss \u002F\u002F Carousel  \n| |– _slider.scss \u002F\u002F Slider  \n|  \n|– layout\u002F  \n| |– _navigation.scss \u002F\u002F Navigation  \n| |– _grid.scss \u002F\u002F Grid system  \n| |– _header.scss \u002F\u002F Header  \n| |– _footer.scss \u002F\u002F Footer  \n| |– _sidebar.scss \u002F\u002F Sidebar  \n| |– _forms.scss \u002F\u002F Forms  \n|  \n|– pages\u002F  \n| |– _home.scss \u002F\u002F Home specific styles  \n| |– _about.scss \u002F\u002F About specific styles  \n| |– _contact.scss \u002F\u002F Contact specific styles  \n|  \n|– themes\u002F  \n| |– _theme.scss \u002F\u002F Default theme  \n| |– _admin.scss \u002F\u002F Admin theme  \n|  \n|– vendors\u002F  \n| |– _bootstrap.scss \u002F\u002F Bootstrap  \n| |– _jquery-ui.scss \u002F\u002F jQuery UI  \n|  \n`– main.scss \u002F\u002F Main Sass file\n ```\n \n Ầu, thật đẹp. Cái này về từng folder có nhiệm vụ gì chắc mình không cần nói lại để tránh bài viết này dài. Cái này bạn có thể lên google search từ khoá ` sass 7 in 1 partern ` là được. \n À nhưng khoan đã, cấu trúc này đẹp đấy, rõ ràng đấy nhưng nếu import  cả 100+ file kia vào file `main.scss` thì sẽ thật kinh. Mình liền nảy sinh ra idea update lại như thế này. Ở mỗi một folder, mình thêm 1 file có dạng `_ten_folder-dir.scss`\n ![scss dir](https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630774433\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-scss-dir.png)\n \n Như bạn thấy, thay vì import tất cả các file vào `main.scss` thì ở mỗi folder ( trong 7 folder kia ) mình tạo ra 1 file `dir`.  Mình sẽ import toàn bộ file của folder đấy vào file `dir` tương ứng. Cuối cùng, sau khi có 7 file `dir` thì mình import cả 7 file này vào file `main.scss`. Thế là xong. File `main.scss` lúc này cũng đươc gọn hơn rất nhiều.\n```scss\n@import  '.\u002Fvendors\u002Fvendor-dir';\n@import  '.\u002Futils\u002Futils-dir';\n@import  '.\u002Fpages\u002Fpages-dir';\n@import  '.\u002Flayout\u002Flayout-dir';\n@import  '.\u002Fcomponents\u002Fcomponents-dir';\n@import  '.\u002Fsnippet\u002Fbackground-image';\n@import  '.\u002Fsections\u002Fsections-dir';\n@import  '.\u002Fbase\u002Fbase-dir';\n@import  '.\u002Fhelpers\u002Fhelpers-dir';\n\n\u002F* Auto impo@import all scss file from Theme folder *\u002F\n\u002F* Using @see https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fimpo@import-glob-loader *\u002F\n@import  \"..\u002F..\u002Fshopify\u002F**\u002F*.scss\";\n\n\u002F*\n* Code chung\n*\u002F\n@import  '.\u002Fgeneral';\n@import  '.\u002FvueGeneral';\n```\n\n## Hết\nVà thế là hết. Câu chuyện cuối cùng cũng đã có hồi kết.\nỞ thời điểm hiện tại thì đây là một cấu trúc mà mình thấy khá là tâm đắc. Ít nhất thì nó cũng giúp cho ae làm việc trong êm đẹp. Mỗi ngày đi làm nhìn nhau với tình thương mến thương. Không như ngày trước thỉnh thoảng đang làm lại có bố \" Ơ thằng kia code cái A này mày để ở đâu đấy\", hay là \"Ơ mày sửa kiểu *** gì hỏng hết style cái B của tao rồi \". Nghe chỉ muốn quay sang sút cho mỗi thằng phát.\nNên giờ yên bình rồi, kể được như thế, mình cũng vui vì không bõ công những đêm nghĩ cách. Thời gian đi fix với đi chửi nhau kia thì đi lên Now, lên Baemin đặt cho nhau cốc trà sữa có phải tình thương mến thương không.\nCuối tuần ngồi kể lể tí, đi nghe nhạc tí cho thư giãn. Hà Nội dạo này giãn cách, năm cô vít thứ 2 sau công nguyên,  word from home chán quá.\nPai pai !!!\n"},blogsByTag:[{slug:G,description:H,title:I,image:J,tags:[K,w,L],published:M},{slug:_,description:"Một câu chuyện thú vị trong việc setup một config hoàn hảo cho project của team mình. Với các tình tiết ly kì, hấp dẫn kết hợp cùng văn phong của một con người đã từng thức đến 4h sáng chỉ vì Search google không ra lỗi cũng như nhận kha khá gạch đá của ae trong team nên ức quá không ngủ được",title:$,image:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630578053\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F08\u002F30-webpack-banner_ufhb7w.png",tags:[w],published:aa},{slug:"bot-kho-hon-voi-component-trong-figma",description:"Xu hướng hiện tại là atomic mọi thứ có thể từ Web đến Design. Đó là lý do mà React, Vue, Angular ra đời. Vậy ở trong design, cụ thể là Figma, làm sao để tận dụng Component, để bớt khổ hơn với hệ thống hàm chục, hàng trăm screen ?",title:"Bớt khổ hơn với Component trong Figma",image:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630578051\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F08\u002F27-component-banner_eabbuf.png",tags:["figma","ux\u002Fui"],published:"2020-08-27"},{slug:"custom-mot-switch-giong-tren-ios",description:"Đợt đầu tuần xem update iOS 14, mình nhìn thấy thanh switch trên iOS. Đối với những lựa chọn mang tính Yes\u002FNo thì Apple rất hay sử dụng thanh switch này, đến nỗi nhìn nó là biết ngay là HĐH nào rồi.",title:"Custom một Switch giống trên iOS",image:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630578012\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2020\u002F07\u002F2020-07-ios_noxjg8.jpg",tags:[D],published:"2020-07-12"},{slug:"ao-dieu-hon-voi-map-phim-trong-vim",description:"Có lẽ điều khiến VIM trở nên cuốn hút nhât chính là khả năng lả lướt trên bàn phím của nó, khiến cho đôi tay của một developer không cần thiết phải rời ra khỏi keyboard. Từ đó luồng suy nghĩ cũng focus hơn bao giờ hết vì bây giờ bạn chỉ cần nghĩ, nghĩ và nghĩ mà thôi. Và tất nhiên để làm điều đó, chúng ta không thể bỏ qua Mapping trong VIM",title:"Ảo diệu hơn với map phím trong VIM",image:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630578037\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F07\u002F01-vim_vk118v.webp",tags:["vim"],published:"2020-07-01"},{slug:"ban-biet-bao-nhieu-cach-de-an-mot-element",description:"Nhắc đến việc show, hide một element trong Document chắc ai cũng sẽ nhớ ngay đến giá trị none của display trong CSS. Vậy thì có bao giờ bạn thắc mắc về những cách làm nào khác cho kết quả tương tự không ?",title:"Bạn biết bao nhiêu cách để ẩn một element",image:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630577997\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2020\u002F06\u002F2020-06-css_ifuduy.jpg",tags:[D],published:"2020-06-10"},{slug:"chuyen-khong-dau-khong-duoi",description:"Chuyện không đầu không đuôi là một chuyện không có đầu cũng không có đuôi nên được gọi là chuyện không đầu không đuôi.",title:"Chuyện không đầu không đuôi",image:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630577997\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2020\u002F06\u002F2020-06-note_aixoxt.jpg",tags:[ab],published:"2020-06-08"},{slug:"bai-viet-dau-tien-tren-blog-moi",description:"Bài viết này thực ra được viết từ 10\u002F08\u002F2019. Đây cũng là bài viết đầu tiên tại blog kmacoders.github.io ngày ấy, thời điểm mà mình biết những dòng mà mình đang gõ ra đã có những người đầu tiên đọc.",title:"Bài viết đầu tiên trên Blog mới",image:"https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630577905\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2019\u002F2019-kmacoders-1_ywoior.jpg",tags:[ab],published:"2019-08-10"}],prev:null,next:{slug:_,title:$,published:aa}}],fetch:{},mutations:void 0}}("text","element","\n","span","token","code","p","li","keyword","@import","  ","string","punctuation",";","a",2,"h2","true",-1,"icon","icon-link","main.scss","webpack","img","ul","div","nuxt-content-highlight","pre","line-numbers","css","dir","comment","de-khong-danh-nhau-khi-to-chuc-style-cho-ecommerce-site","Bài viết này dựa trên một truyền thuyết có thật... à nhầm một câu chuyện thực tế về cách mình và team đã cùng nhau giải quyết các vấn đề style khi làm một page eCommerce với khoảng 40+ screens ( desktop + mobile ). Bằng một cách thần kì nào đó không có cuộc đánh nhau nào xảy ra trong suốt quá trình code. Giờ thì bắt đầu thôi.","Để không đánh nhau khi tổ chức style cho ecommerce site","https:\u002F\u002Fres.cloudinary.com\u002Fkmacoders\u002Fimage\u002Fupload\u002Fv1630769848\u002Fkmacoders.github.io\u002Fstatic\u002Fimages\u002Fblog\u002F2021\u002F09\u002F04-banner_oxfx2z.png","scss","shopify","2020-09-04","đặt-vấn-đề","Đặt vấn đề","atomic-css-hay-scss","Atomic CSS hay SCSS","đi-tìm-chiếc-structure-hoàn-hảo","Đi tìm chiếc structure hoàn hảo","nâng-cấp-tiếp-cấu-trúc","Nâng cấp tiếp cấu trúc","hết","Hết","language-text","\n\n","2021-11-04T15:05:32.658Z","webpack-ki-su-boc-tack","Webpack, nhật kí bóc tách","2020-08-30","stories")));