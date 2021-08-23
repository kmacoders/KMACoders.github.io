---
title: Bạn biết bao nhiêu cách để ẩn một element
description: ''
author: 'Huwng'
image: '/blog/2020/06/2020-06-note.jpeg'
tags: ['stories']
published: '2020-06-08'
---
## Đặt vấn đề
Người ta hay nói rằng CSS là một kiểu “easy to learn, hard to master”. Đại loại là một người vừa học web được 1 tuần cũng nói là biết CSS, một frontend vài năm exp cũng chỉ nói là biết CSS.
Đó là bởi thế giới của CSS rất rộng. Rộng đến mức có những properties rõ ràng là có ý nghĩa để làm việc này, nhưng biến tấu đi nó lại có thể dùng cho một việc khác. Thôi cái đấy nói sau đi. Thế nên trong thế giới của CSS, có rất nhiều các tips và tricks, được các tiền bối đi trước để lại sau những ngày đổ mồ hôi nước mắt.
Quay trở lại với topic này, ẩn đi một phần tử HTML là một nhu cầu thường thấy đối với những người làm giao diện nói chung và dân frontend nói riêng. Mình tin là nói đến “hide element”, hầu như ai cũng có một cách tủ hiện lên trong đầu rồi, khi muốn ẩn sẽ dùng ngay cách đó. Vậy có bao giờ bạn tự hỏi, ngoài cách mình biết ra, có bao nhiêu cách khác có thể hoàn thành công việc một cách tương tự không ?
Topic này mình sẽ chia sẻ một vài cách mà mình biết.
À trước đó mình nhắc một chút đến cái gọi là Normal Flow của một HTML Document.

Normal Flow là cách các phần tử HTML được sắp xếp và hiển thị trên trang web một cách bình thường, tức là nếu bạn không thay đổi bất cứ giá trị nào làm đổi vị trí của chúng. Hiểu nôm na là viết HTML sao thì nó sẽ xếp theo mặc định như vậy. Bạn có thể tìm hiểu thêm trên Docs của Mozilla về Normal_Flow.

Do mình ngại làm từng cách lên Codepen rồi dẫn link sang đây, nên là mình sẽ viết sẵn một cấu trúc dễ đọc dễ hiểu như này. Bạn có thể mở tạo ngay một cái tương tự và tự tay mình thử xem có thú vị không ?

File HTML
``` css
<div class="container">
  <div class="item green"></div>
  <div class="item red"></div>
  <div class="item blue"></div>
</div>
```

File CSS
``` css
.container {
  display: flex;
}
.item {
  width: 100px;
  height: 100px;
}
.green {
  background-color: green;
}
/* Chung ta se thuc hanh tren thanh .red nay... */
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
```

## Ẩn đi phần tử và làm thay đổi Normal Flow

### Display
Cái này chắc được anh em sử dụng nhiều nhất. Dễ chơi dễ trúng thưởng. Đơn giản chỉ cần set cho element ấy thuộc tính display với giá trị là none. Nhưng mà đúng như tiêu đề của mục này, thì nó sẽ làm cho element ấy biến mất, như chưa hề tồn tại trong DOM.

``` css
.red {
  background-color: red;
  display: none;
}
```

### Absolute Position
Thuộc tính position không phải là một thuộc tính lạ. Nó có nhiều giá trị, nhưng lần này để phục vụ cho việc này, chúng ta dùng giá trị absolute. Bạn biết là absolute sẽ làm thay đổi flow, khi set absolute, vị trí của element sẽ biến mất, các element xung quanh sẽ trám vào vị trí vừa rồi của nó. Vậy làm thế nào để nó biến mất đây ?
Chúng ta đã từng sử dụng các thuộc tính top, left, bottom, right để di chuyển vị trí một element có position là absolute, vậy thì câu trả lời chính là set cho left: -999px. Như vậy, element đó sẽ biến mất khỏi màn hình.

``` css
.red {
  background-color: red;
  position: absolute;
  left: -999px;
}
```

### HTML hidden attribute
Rất đơn giản, thêm ngay attr hidden vào element chúng ta muốn ẩn trong HTML.

``` css
<div class="container">
  <div class="item green"></div>
  <div class="item red" hidden></div>
  <div class="item blue"></div>
</div>
```
Hiệu quả đem lại khá giống với set display: none.

## Ẩn đi phần tử nhưng không thay đổi Normal Flow
### Opacity and filter: opacity()
Cú pháp của 2 thằng này là opacity: n và filter: opacity(n). Trong đó, n là một số nằm trong khoảng từ 0 -> 1 hoặc là một giá trị phần trăm từ 0% -> 100%, tùy từng người dùng. Có ý tưởng rồi chứ, ta chỉ cần set cho độ mờ là nhỏ nhất. Như vậy, element sẽ biến mất thôi.

``` css
.red {
  background-color: red;
  opacity: 0;
}
```
hoặc là :

``` css
.red {
  background-color: red;
  filter: opacity(0);
}
```

Nhớ làm thử để biết vì sao mình nói nó những thằng trong mục này không làm thay đổi normal flow nhé.

### Color Alpha Transparency
CSS hỗ trợ nhiều hệ màu. Ví dụ như hex, rgb, hsl… nhưng hãy dừng lại ở đó. Bạn có biết là nó còn có những cách ghi khác kèm theo một chữ “a” ở cuối không ? rgba, hsla chẳng hạn. Trong đó, chữ “a” chính là viết tắt của một giá trị cuối cùng sau mã màu, gọi là “alpha”. Giá trị alpha này đại diện cho độ mờ. Nghĩ về nó giống như opacity ở trên vậy, giá trị là một số nằm trong khoảng từ 0 -> 1.
Như vậy, ta có thể ẩn thằng red đi theo cách như này :

``` css
.red {
  color: rgba(0,0,0,0);
  background-color: rgba(0,0,0,0);
}
```
Với hsla(0,0,0,0) cũng như thế thôi nhé. Tầm này màu gì không quan trọng, vì đằng nào alpha chẳng bằng 0 mà. Nên là nó thành trong suốt hết.

### Transform
Đúng như tên gọi của nó, transform một thuộc tính dùng để biến đổi element theo một cách nào đó. Nó đi cùng với các giá trị translate, scale, rotate, skew. Ở đây mình sẽ không đi sâu về thuộc tính này, và cả các giá trị, mình tin là nó có đầy ở khắp nơi trên google. Còn lúc này, hãy để ý đến 1 tips dùng transform kèm với scale và translate. Đó là set cho scale giá trị là 0 ( tức là phóng lên gấp 0 lần so với hình dạng trước của element ), hoặc là set cho translate giá trị là (-999px, 0px) ( dịch chuyển element theo trục x -999px ). Thử làm xem nhé.

``` css
.red {
  background-color: red;
  transform: scale(0);
}
```
hoặc

``` css
.red {
  background-color: red;
  transform: translate(-999px, 0px);
}
```
Hay một cách lạ lùng.

### Clip-path
clip-path không phải là một thuộc tính easy. Nó khá lằng nhằng và phức tạp cho ai muốn thành thạo. Tuy nhiên, ở đây, hãy nghĩ về clip-path là một thuộc tính giúp tạo ra một vùng cắt lên element, nó định nghĩa ra vùng nào của element được phép hiển thị thông qua nhát cắt đó.
Nói đến đây thì ý tưởng hiện lên đúng không, là ta sẽ tạo một vùng cắt bằng 0, như vậy chẳng có cái gì được hiển thị cả.
Ở đây, ta tạo ra vùng cắt hình tròn circle(0).

``` css
.red {
  background-color: red;
  clip-path: circle(0);
}
```
Nhưng mà thuộc tính này hay thật sự đấy nhé, có thời gian vẫn nên tìm hiểu thêm.

### Visibility
Đúng như tên gọi của nó, cái này thì chắc không cần bàn nhiều. Chỉ là đã từng nghe qua hay chưa thôi chứ cũng không cần phải gọi là tips hay tricks gì cả. 2 giá trị của visibility cũng vô cùng dễ hiểu. Chọn visible nếu muốn element hiển thị, chọn hidden nếu muốn ẩn. Nhanh gọn lẹ cứ như giá trị boolean vậy.

``` css
.red {
  background-color: red;
  visibility: hidden;
}
```

### Overlay Another Element
Còn quả này thì đúng gọi là tips thực sự, nhưng mình không khuyến khích làm theo, vì nó lằng nhằng. Nói chung là ý tưởng sẽ như thế này. Ban đầu chúng ta có một ô màu đỏ. Giờ muốn ô đỏ ẩn đi, chúng ta chỉ cần kiếm 1 cái ô có màu giống y chang màu nền, kích thước thì bằng ô đỏ kia, sau đó đem phủ nó lên ô đỏ. Ấy haha, thực ra ô đỏ vẫn ở đó, nhưng nó đã bị cái ô có màu giống hệt màu nền kia che lên trên, nên là nhìn cứ tưởng không có gì.
Nói này cho dễ hình dung, ngày xưa ông cha ta hay lấy lá cây để che xe tăng trong rừng, tránh máy bay địch phát hiện, nó ném bom cho thì sml. Thực ra cái xe tăng đâu có biến mất, chẳng qua nó bị lá cây che bên trên, mà lá cây thì có màu giống hệt xung quanh, nên bọn Mỹ nó tưởng là ở dưới chẳng có gì cả thôi.

``` css
.red {
  background-color: red;
  position: relative;
}
.red:after{
  content:'';
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
}
```
2 pseudo :after và :before rất mạnh. Nó có thể làm được rất nhiều việc chứ không chỉ nguyên thế kia. Nếu biết kết hợp thì sẽ tạo ra những quả animation rất để đời chứ không đùa. Nói chung là quá lắm tác dụng.


### Reduce Dimensions
Chúng ta cũng có thể ẩn đi element bằng cách giảm đi kích thước của nó bằng cách sử dụng các thuộc tính như width, height, padding, border-width hoặc là font-size. Đôi khi kết hợp thêm overflow: hidden để đảm bảo phần content bên trong ( nếu có ) không bị tràn ra ngoài.

``` css
.red {
  background-color: red;
  height: 0;
  padding: 0;
  overflow: hidden;
}
```

## Tóm lại
Tóm lại, là tôi mỏi mắt lắm rồi. Nay ngồi trên công ty từ 9h sáng đến 18h tối nhìn con màn máy tính khoảng 27 inch. Xong về làm thêm quả này nữa nên nói chung là mỏi hết cả mắt. Nên là thôi, đấy một đống cách, ông nào thích dùng cách nào thì dùng. Đôi khi nó còn phải phụ thuộc vào hoàn cảnh nữa. Mà các ông biết đấy, làm frontend thì nó có cả tỉ hoàn cảnh khác nhau, nên nói chung là cứ thích thì dùng thôi.
Hi vọng các ông tìm được cho mình thêm những điều các ông chưa biết ( hoặc chưa để ý tới ) ở trong bài viết này, từ đó có nhiều hơn một lựa chọn cho task. Hãy ném gạch cho tôi qua email ( ở ngay phía trên ấy, tôi add sẵn mail vào rồi ) và nói “Ê thằng ngu, mày làm sai rồi” hoặc là “Ê thằng ngu, mày biết không, tao thậm chí còn có thêm vài cách nữa đây”… Tôi sẽ sửa hoặc bổ sung theo ý kiến của các ông.
Tôi đi nghe nhạc Vũ đây.
Thế nhé !
