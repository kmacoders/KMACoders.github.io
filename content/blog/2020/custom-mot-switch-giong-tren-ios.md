---
title: Custom một Switch giống trên iOS
description: 'Đợt đầu tuần xem update iOS 14, mình nhìn thấy thanh switch trên iOS. Đối với những lựa chọn mang tính Yes/No thì Apple rất hay sử dụng thanh switch này, đến nỗi nhìn nó là biết ngay là HĐH nào rồi.'
author: 'Hưng'
image: '/blog/2020/07/2020-07-ios.jpeg'
tags: ['css']
published: '2020-07-12'
---

Lại một tuần trôi qua, thực ra thì nó vẫn sẽ trôi qua bất kể mình làm gì, học gì, hay thậm chí là nghĩ gì. Thế nên là, để cho buổi tối chủ nhật này không trôi qua vô ích, mình lại vào đây và viết một vài thứ gì đó có ích. Chợt nhận ra đã lâu lắm rồi mình không có một ngày cuối tuần không động đến code đúng nghĩa ( theo kiểu relax full time 1 ngày cuối tuần theo như quy tắc mình đặt ngày xưa ), vì bởi dạo này lúc nào cũng có tâm trạng là mình cần phải lao lên nhanh hơn nữa - để be greater hơn bạn bè, đồng nghiệp chẳng hạn, ai cũng giỏi mà. Umm, nên thôi, viết cái này tuy động đến code, nhưng với mình thì vẫn coi như “relax tàm tạm” được, vì là blog của mình mà…

## Mở bài
Đợt đầu tuần xem update iOS 14, mình nhìn thấy thanh switch trên iOS. Đối với những lựa chọn mang tính Yes/No thì Apple rất hay sử dụng thanh switch này, đến nỗi nhìn nó là biết ngay là HĐH nào rồi. Thế là mình chợt nghĩ lại hồi mới bắt đầu học CSS, mình cũng từng muốn làm một cái như thế bằng CSS, mà mãi không hiểu sao họ làm được, làm đẹp. Cho đến khi làm được, thì mình lại bị cuốn vào một lô một lốc những sự việc xảy ra, rồi bao thứ phải học khác, mà quên mất rằng “Umm, biết đâu cũng có một số người như mình hồi xưa, thắc mắc nguyên lý nào để custom ra một switch như vậy, rồi viết CSS như nào”.
Thế nên mình viết notes này, nhẽ là định hôm qua mà đêm qua ngồi làm nốt task trên công ty đến 1h sáng mới xong, nên mình để sang hôm nay. Thì với iFans thì khỏi nói rồi, ai dùng Android thì thanh ấy trông như thế này đây.

![ios image](/blog/2020/07/2020-07-ios-1.png)

Okay, và mục tiêu của mình, vừa là CSS, vừa là nguyên lý để tạo nên những custom kiểu này, mình tin là từ những custom basic đến advanced hơn thì nguyên lý không đổi. Nên nếu áp dụng tốt, ta hoàn toàn có thể tạo ra những thứ đẹp hơn, phức tạp hơn rất nhiều.

## Thân bài
### Tạo structure HTML
Switch là 1 thanh dạng Yes/No, như vậy thì chúng ta sẽ nghĩ đến những input dạng này có trong HTML, có Checkbox và Radio Button, có lẽ trong trường hợp này thì Checkbox phù hợp hơn đúng không. Như vậy mục tiêu sẽ là custom Checkbox.

Bước đầu tiên, là ta quan sát để tạo base cho HTML. Ta thấy Switch có 1 thanh trượt và 1 quả bóng trượt bên trong. Như vậy, ta sẽ ra được 1 cấu trúc HTML đơn giản như thế này :

``` html
<label class="toggle" for="toggle">
 <input type="checkbox" id="toggle">
 <div class="slider"></div>
</label>
```

Tất nhiên, thẻ tất yếu phải có là input, có type="checkbox". Cái quan trọng ở đây, chính là thành phần wrapper bao bọc bên ngoài. Nó có ý nghĩa rất lớn, thẻ <label> với attr for trùng khớp với id của input giúp cho khi ta ấn vào cái bao này, ngay lập tức thẻ input cũng sẽ bị ảnh hưởng ( thay vì phải ấn trực tiếp vào ô vuông nhỏ nhỏ của thẻ input checkbox ). Bắt đầu thấy có tí liên quan rồi đúng không, cái bao bao xung quanh của bóng nhỏ của iOS Switch chính là cái <label> này ấy. Nhưng không sao, để đấy, cứ làm tiếp đã. Kể cả cái <div> với class = "slider", nhiều người ban đầu sẽ thắc mắc sao custom input lại có 1 div lạ ? Cứ để đấy đã.

### Bước 1, ẩn đi thẻ input
Đầu tiên, ta ẩn đi thẻ input

Lạ lùng đúng không, custom thẻ input lại ẩn đi thẻ input. Ngày xưa mình còn style cho cái thẻ input checkbox này cơ =)) nhưng tin mình đi, nó không thay đổi là mấy đâu. Ý tưởng sẽ là thế này, ta ẩn đi thẻinput, dùng thằng div với class là "slider" làm hình nhân thế mạng, ta sẽ bắt thằng hình nhân thế mạng này phản ứng thay cho thẻinput`. Okay, đi vào làm là hiểu ngay.

``` css
#toggle {
  display: none;
}
```

Xong, thẻ input biến mất. Nhưng mà hãy nhớ là nó chỉ là không nhìn thấy thôi nhé, chứ chưa phải là xóa khỏi DOM đâu. Ta sẽ cần đến thằng input này, để hợp với <label> điều khiển quả bóng được tao ra từ <div class="slider"></div>. Minh họa này cho dễ hiểu :

![ios image](/blog/2020/07/2020-07-ios-2.png)

Lúc này, ta muốn <label> thành cái khung bao bên ngoài, và <div class="slider"> thành rãnh nền màu xanh ( trắng ) bao lấy quả bóng.

Bước 2, style cho <div class="slider"> để tạo ra nền và quả bóng.
Thằng div này vai trò khá khủng. Nó sẽ là cái rãnh cho quả bóng lăn đi lăn lại ( bao ngoài quả bóng, và tất nhiên ``lại bao ngoài div như cấu trúc HTML đã viết. Như vậy khi ấn vào.sliderchẳng khác gì ấn vào` cả. ).

``` css
.slider {
  width: 100px;
  height: 60px;
  border: 1px solid gray;
  position: relative;
  border-radius: 40px;
}
```
Rồi, nó dài 100px, rộng ( cao ) 60px. Trông nó như thế này :

![ios image](/blog/2020/07/2020-07-ios-4.png)

Các thuộc tính CSS kia không có gì để bàn ngoại trừ position, tại sao lại có nó, ta sẽ nói ở ngay bên dưới đây.

Tiếp đến, ta tạo nốt quả bóng. Lúc này ta cần sử dụng một anh bạn hỗ trợ là CSS :before selector ( cặp :after và :before rất lợi hại, hiệu quả không kể hết, tuy nhiên bài viết này sẽ không tập trung quá sâu vào nó, nhưng vẫn nhớ là ít nhất không được thiếu thằng content nhé. Ở đây do không cần đến, nên mình set content:"", tức là không có gì cả ).

``` css
.slider::before {
  background-color: #fff;
  content: "";
  height: 50px;
  width: 50px;
  left: 5px;
  top: 5px;
  position: absolute;
  border-radius: 50%;
  box-shadow: rgba(0,0,0,0.1) 0px 0px 5px 5px;
}
```

Tại sao lại có các đơn vị đo thế kia, tại sao lại có top, left rồi positon, mình sẽ giải thích ngay.

![ios image](/blog/2020/07/2020-07-ios-3.png)

Gọi x và y là chiều dài và chiều rộng của thanh Switch, chính là thằng .slider bên trên.
Gọi d là đường kính của quả bóng ( tức là .slider::before ). Quả bóng này có đường kính là 50px, nên ta cho width = height = 50px. Tuy nhiên lúc này nó là hình vuông, nên ta thêm thuộc tính border-radius để bo tròn nó lại cho thành quả bóng.
Có quả bóng rồi, ta bắt đầu tính toán vị trí ban đầu của nó. Cái Switch cao 60px ( y ), bóng có đường kính 50px, như vậy nó cần cách trên và dưới 5px, nên ta set top = 5px ( suy ra bottom = 50-50-5 = 5px luôn ). Để cho đẹp, ta cho quả bóng cách lề trái 5px luôn, như vậy có left = 5px. Ở đây, ta muốn căn quả bóng theo phụ thuộc thằng cha của nó là cái rãnh bao Switch, tức là thằng .slider nên ta cần đặt thằng con là position là absolute, còn thằng cha là relative ( Đây là lời giải cho dòng CSS position relative bên trên, bạn không thể định ví trí cho 1 child absolute nếu như parent của nó không phải là relative, absolute… chắc cái này các bạn đã biết khi học position ).
Xong, kết quả trông như này :

![ios image](/blog/2020/07/2020-07-ios-4.png)

Bước 3, xử lý việc chạy đi chạy lại của bóng
Và đây là bước cuối. Hiểu được nó là coi như bạn đã hiểu nguyên lý của việc ta làm từ nãy đến giờ.

Khi người dùng ấn vào thanh Switch ( tức là ấn vào <label> và .slider ), thì thanh input sẽ được tích và rơi vào trạng thái :checked ( dù nó đang bị ẩn, ẩn chứ không phải xóa ). Nên là ta lợi dụng việc này, khi thanh input được tích, ta đẩy quả bóng .slider::before sang phải và đổi nền rãnh bao .slider thành xanh giống Apple là xong.

Nghĩ gì làm đấy, ta viết như này :

Đối với quả bóng, nó cần lăn sang phải 1 chút ( một chút là bao nhiêu thì lát ta cùng tính ):

``` css
 input[type="checkbox"]:checked + .slider:before {
 transform: translateX(40px)
}
```
Đối với rãnh bao, nó cần chuyển sang màu xanh:

``` css

 input[type="checkbox"]:checked + .slider {
 background-color: #2dda77;
 border: none;
}
```

![ios image](/blog/2020/07/2020-07-ios-5.png)

Lúc này ta lại quay lại hình vẽ bên trên. Ban đầu quả bóng ở vị trí cách lề trái 5px, thì khi nó lăn sang lề phải, nó vẫn phải cách 5px. Như vậy làm 1 phép toán, ta có đoạn đường quả bóng dịch chuyển bằng 100px - 50px - 5px - 5px = 40px. Hãy quay lại hình tính toán để biết các con số này là sao nhé. 2 bên cách 5px, quả bóng dài 50px, khung dài 100px, thì phần còn lại chính là phần quả bóng được phép lăn thôi. Để phục vụ việc này ta sử dụng thuộc tính transform: translateX(40px). Trong đó transform nó có rất nhiều giá trị hay như scale, skew... các kiểu con đà điểu, ở đây dùng translateX(40px), tức là dịch theo trục X ( chiều ngang ) 1 đoạn 40px.

Hoàn thiện
Đến bước trên là xong 90% rồi, tuy nhiên nếu ta ấn thử thấy quả bóng di chuyển nhanh quá. Apple họ làm mượt lắm cơ mà, đừng lo, hãy thêm transition vào để tạo hiệu ứng bóng lăn và đổi màu nền thật mượt, 0.4s là con số phù hợp nhỉ. (Bonus thì transition bên cạnh transform bên trên cũng là những thuộc tính phức tạp, có rất rất nhiều tùy chỉnh và giá trị con. Nếu có thời gian, cuối tuần tới chẳng hạn, mình lại làm bài nữa về mấy thằng này để lấy cớ viết tiếp. Mình gà biết ít lắm. Nói hết lộ hết văn, haha. )
Code CSS full sẽ như thế này :

``` html
<label class="toggle" for="toggle">
 <input type="checkbox" id="toggle">
 <div class="slider"></div>
</label>
```
``` css
#toggle {
  display: none;
}
.slider {
  width: 100px;
  height: 60px;
  border: 1px solid gray;
  position: relative;
  border-radius: 40px;
}

.slider::before {
  background-color: #fff;
  content: "";
  height: 50px;
  width: 50px;
  left: 5px;
  top: 5px;
  position: absolute;
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: rgba(0,0,0,0.1) 0px 0px 5px 5px;
}

input[type="checkbox"]:checked + .slider {
 background-color: #2dda77;
 border: none;
 transition: 0.4s;
}

input[type="checkbox"]:checked + .slider:before {
 transform: translateX(40px);
}
```

Minh họa trên Codepen :

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="BajwZNd" data-user="hungkids" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/hungkids/pen/BajwZNd">
  Custom Checkbox</a> by Phung Thai Hung (<a href="https://codepen.io/hungkids">@hungkids</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>



## Kết bài
Và thế là xong, thực ra custom các ô input dạng này đều dựa theo nguyên lý như vậy. Nên là quan trọng nhất vẫn là lôi máy ngay ra và tự tay thử xem sao nhé. Okay đoạn này rồi, lần sau mình sẽ viết những quả custom xịn hơn, nhiều animation hơn, để lại có cái lên đấy chém tiếp.
Giờ là 22:00 đêm rồi, bố mẹ đang gọi ầm lên dưới nhà. Bố mẹ mình vừa đi du lịch trên Tuyên Quang về, mình bị bắt về nhà ở quê trông nhà mấy hôm nay. Giờ tắt máy đã, xuống xem có gì ăn, nghe thoáng thoáng là thấy 1 đống ô mai haha, chẳng ai hiểu mình hơn thế.
Thế nhé !!!

( Update : 23:18. Mình chạy xuống nhà. Và bố mẹ mình phát hiện ra là để quên mất em iPad trên xe oto mất rồi. Bác ấy lại ở tận Việt Trì. Thế là mình mang laptop xuống bật Find My Phone trên Apple mà khổ, bố lại tắt mạng. Thế là thành ra câu chuyện nghiêng về cái iPad nhiều hơn là mình sẽ ăn gì. Ngậm ngùi cầm tạm 1 hộp ô mai lên tầng và thêm đoạn này vào blog. Haizz, mai 6 7h lại còn dậy để phi xuống HN sớm chiều còn đi làm. )
