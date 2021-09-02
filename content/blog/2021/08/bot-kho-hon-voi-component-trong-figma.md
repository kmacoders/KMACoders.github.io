---
title: Bớt khổ hơn với Component trong Figma
description: 'Xu hướng hiện tại là atomic mọi thứ có thể từ Web đến Design. Đó là lý do mà React, Vue, Angular ra đời. Vậy ở trong design, cụ thể là Figma, làm sao để tận dụng Component, để bớt khổ hơn với hệ thống hàm chục, hàng trăm screen ?'
author: 'Hưng'
image: 'https://res.cloudinary.com/kmacoders/image/upload/v1630578051/kmacoders.github.io/static/images/blog/2021/08/27-component-banner_eabbuf.png'
tags: ['figma', 'ux/ui']
published: '2020-08-27'
---



## Mở bài
### Đặt vấn đề 
Mọi thứ mới được phát sinh đều đi từ những vấn đề. Đó là lý do chúng ta có React, Vue, Angular... thay thế cho huyền thoại jQuery 1 thời. Bởi các framework/lib này đều có 1 khả năng là chia project của chúng ra ra đến mức nhỏ nhất có thể. Từ đó giúp tái sử dụng logic, view... cũng như tăng khả năng sửa đổi, bảo trì. Vậy thì trong design UX/UI thì sao, tất nhiên, cũng như vậy. Đặc biệt là với những bản design lên tới hàng trăm screen, nếu cứ mạnh ai ấy design, cứ vứt các element lung tung thì trông sẽ thật khủng khiếp. 
Đợt rồi trong lúc xây dựng 1 theme ecommerce trên Shopify, mình có cơ hội được làm việc với 1 team design. Mọi thứ sẽ chẳng có gì để nói cho đến khi mình nhìn vào bản design. Trông nó kiểu như thế này

![Figma Problem](https://res.cloudinary.com/kmacoders/image/upload/v1630578052/kmacoders.github.io/static/images/blog/2021/08/27-figma-problem_lqjg79.png)

Ừ thì chúng ta hiểu sự thành công của 1 bản design tốt còn phụ thuộc rất nhiều vào các yếu tố khác nữa. Nhưng 1 bản design lên tới 40 screen ( cho cả Desktop và Mobile ) như thế này mà không có 1 hệ thống Design System nhỏ, 1 hệ thống Component thì thật là đáng sợ. Bạn Designer này theo mình thấy làm đến screen nào, page nào thì bạn ấy sẽ copy phần element ở page bạn ý đã làm được sang. Trong đầu mình bỗng nảy ra câu hỏi :

 - Ơ vậy thì nếu có 1 element được đổi style, ví dụ cái button chẳng hạn. Không lẽ bạn Designer này đi sửa từng button ở trong 40 screen, page này à ?
 - Thứ 2 là bên developers, với việc dàn trải hàng nghìn element ra thế kia, ngay từ cái nhìn đầu tiên vào đã thấy cực kì loạn rồi. Và lúc này, team dev nên ngồi lại để phân chia component sao cho hợp lý
 
 Các vấn đề khác liên quan đến base color, typography... vân vân mây mây mình tạm thời không nhắc đến.

## Thân bài
Nếu là 1 developer, đặc biệt đã từng làm việc với một trong React, Vue, Angular... chắc hẳn khái niệm Component đã không có gì là lạ với các bạn. Đúng như là với khi coding, Component bên Figma về cơ bản cũng có ý nghĩa tương tự như vậy. Nó không chỉ giúp cho designer hình dung được hệ thống Design System áp dụng cho bản thiết kế của mình, nó còn giúp họ làm việc 1 cách logic, hiệu quả, đặc biệt tiết kiệm thời gian công sức. Đó là còn chưa kể làm việc team cũng dễ hơn, thiết kế nhất quán, cũng như sửa đổi cực kì dễ dàng.

### Chia Component như thế nào
![Chia Component](https://res.cloudinary.com/kmacoders/image/upload/v1630578052/kmacoders.github.io/static/images/blog/2021/08/27-chia-component-1_wgltdp.png)
![Chia Component](https://res.cloudinary.com/kmacoders/image/upload/v1630578052/kmacoders.github.io/static/images/blog/2021/08/27-chia-component-2_lbhoxd.png)

Chúng ta không có một nguyên tắc gì đó phải tuân theo khi làm việc này. Thế nhưng ở trong code hay trong design thì có lẽ việc này cũng giống nhau. Chúng ta cố gắng phân tách một khối lớn thành nhiều các khối nhỏ nhằm tăng khả năng sửa đổi, cũng như tái sử dụng một cách hiệu quả nhất.

### Tạo thử một Componet trong Figma
Không khó để làm việc này. Ngay bên dưới thôi mình sẽ dẫn link đến video hướng dẫn, và mình tin vừa xem vừa tua chỉ 30s thôi là bạn đã có thể làm được rồi. Cái quan trọng có lẽ duy nhất chỉ là tư duy chia Component sao cho hợp lý với hệ thống của bạn, sắp xếp chúng sao cho khoa học và logic nhất có thể.
Có 2 cách để tạo 1 Component trong Figma, đó là click luôn vào icon Component, hoặc mở menu chọn Creat Component. Ai mà quen tay nữa thì ấn luôn tổ hợp phím **Option + Command + K** cho nhanh.

![Tạo Component](https://res.cloudinary.com/kmacoders/image/upload/v1630578052/kmacoders.github.io/static/images/blog/2021/08/27-tao-component_df2jzu.png)

Rồi xong, bạn có thể copy Component này đến bất cứ screen, page nào. Khi nào muốn thay đổi, bạn chỉ cần đến lại Component gốc này, điều chỉnh nó ( màu sắc, kích thước chẳng hạn ), ngay lập tức, hàng chục, hàng trăm component liên quan kia sẽ tự điều chỉnh theo. Rất tiện phải không.
À, nhớ đổi tên Component đi, cũng là một cách để tăng sự maintain lên nhé.
[Link hướng dẫn cụ thể hơn ở đây.](https://www.youtube.com/watch?v=k74IrUNaJVk&list=PLXDU_eVOJTx5LSjOmeBYMuvaa4UayfMe4&t=19s)

![Tạo Component](https://res.cloudinary.com/kmacoders/image/upload/v1630578052/kmacoders.github.io/static/images/blog/2021/08/27-doi-ten-component_ltzsyh.png)

## Kết bài
Yay, vậy là xong. Có rất nhiều cách để chúng ta có thể có 1 bản design tốt, không chỉ tốt cho chính team designer mà còn tốt cho cả team developer, và đây là một trong số các cách đó. Hi vọng phương pháp nhỏ nhỏ này có thể giúp cho các bạn có thêm một cách để quản lý những thiết kế của mình. Thời gian tiết kiệm được thì đi làm thứ khác tội gì đúng không ?

