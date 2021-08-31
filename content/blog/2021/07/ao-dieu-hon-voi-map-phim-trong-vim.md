---
title: Ảo diệu hơn với map phím trong VIM
description: 'Có lẽ điều khiến VIM trở nên cuốn hút nhât chính là khả năng lả lướt trên bàn phím của nó, khiến cho đôi tay của một developer không cần thiết phải rời ra khỏi keyboard. Từ đó luồng suy nghĩ cũng focus hơn bao giờ hết vì bây giờ bạn chỉ cần nghĩ, nghĩ và nghĩ mà thôi. Và tất nhiên để làm điều đó, chúng ta không thể bỏ qua Mapping trong VIM'
author: 'Hưng'
image: '/images/blog/2021/07/01-vim.png'
tags: ['vim']
published: '2020-07-01'
---

## Tổng quan cú pháp
Các mode được hỗ trợ trong Vim là `normal`, ` insert`, `replace`, `visual`, `select`, `command-line` and `operator-pending`.

Cú pháp của 1 lệnh map trong Vim

```jsx
{cmd} {attr} {lhs} {rhs}
```

Trong đó : 

- { cmd } là một trong số : ':map', ':map!', ':nmap', ':vmap', ':imap',
       ':cmap', ':smap', ':xmap', ':omap', ':lmap', etc
- { attr } là 1 hoặc nhiều options <buffer>, <silent>, <expr> <script>, <unique> and <special>. Nhiều hơn một attribute có thể được chỉ định trong 1 câu lệnh mapping.
- { lhs } là phía bên trái, tức là 1 hoặc nhiều phím được bạn sử dụng cho phím gán mới của mình
- { rhs } là phía bên phải, tức là dãy phím tắt được thực thi khi nhấn phím được map

Ví dụ :

```js
map <F2> :echo 'Current time is ' . strftime('%c')<CR>
map! <F3> <C-R>=strftime('%c')<CR>
nnoremap <silent> <F2> :lchdir %:p:h<CR>:pwd<CR>
```

## 3 chế độ map

- n...map : map ở normal
- i...map: map ở insert
- v...map: map ở visual
- ...
- ...map: không phân biệt map ở mode nào

## Phím Leader và Silent map
```js
nnoremap <silent> <leader>b :FloatermToggle<CR>
```
`leader` là một phím đặc biệt trong VIM. Nó là phím đi kèm với rất rất nhiều các chức năng. Mặc định phím này chính là phím `/` trên bàn phím. Nhưng ta có thể gán lại cho nó nếu muốn. Như mình thì mình gán lại phím `leader` thành phím `space`
```js
let mapleader=" "
```
Còn `<silent>` tức là 'im lặng', thông thường khi ấn tổ hợp kia, 1 câu lệnh `:FloatermToggle` sẽ được in ở góc màn hình. Nếu ta không thích thì thêm `<silent>` vào, lúc này câu lệnh đó sẽ không được in nữa.
`<CR>` mình sẽ giải thích ở dưới.

## Map recusive ( ...map ) và no-recusive ( ...noremap )
- Map đệ quy ví dụ như 
```js
nmap f gg
nmap s f
```
`gg` là lệnh goto đến dòng đầu tiên của file. Khi map như kia tức là ở mode normal nếu ấn `f` thì sẽ nhảy đến dòng đầu tiên của file như gg. Bên dưới lại gán 1 lần nữa sang cho `f`. Tức là có đệ quy. Ấn `s` sẽ thành gọi đến `f`, `f` lại gọi đến `gg`. Hiểu như là bắc cầu vậy.

- Map không đệ quy 

```js
nmap f gg
nnoremap s f
```

Vậy thì khi dùng `nnoremap` thì sẽ không có đệ quy nữa, hiểu nôm na là không có bắc cầu nữa. Tức là lúc này ấn `s` thì sẽ gọi đến `f` như trên, nhưng mà `f` lúc này không có đệ quy, nên nó không gọi đến `gg` nữa.

## Các phím chức năng

Ví dụ 
```js
nnoremap <C-t> :NERDTreeToggle<CR>
```

Giải thích

- `C` là phím chức năng, đại diện cho phím Control. 
- Dấu `-` tức là đại diện cho tổ hợp phím. Tổ hợp phím là các phím được nhấn và giữ cùng lúc nhé ( nhắc lại là cùng lúc chứ không phải liên tiếp ). Ví dụ như kia thì sẽ là ấn `Control + t` để đóng mở NerdTree trong VIM.
- `<CR>` là viết tắt của Carriage Return, hiểu nôm na là ấn Enter sau khi ấn tổ hợp phím. Nó tương ứng với lệnh `<Return>` hoặc `<Enter>`. Vì sao lại thế, vì bạn thấy là tổ hợp kia được gán cho **lệnh** `:NERDTreeToggle`, mà đã là lệnh thì ấn xong ta cần VIM ấn hộ mình luôn nút Enter chứ. Một trường hợp quen thuộc khác như 
```js
nnoremap <C-s> :wq<CR>
```
Bình thường muốn save và quit file mình ấn vào mode lệnh rồi gõ :wq rồi ấn Enter đúng không ? Thì giờ gán nó thành `Control + s` thì nó mới chỉ hiểu là `:wq` thôi, cần phải ấn `Enter` nữa chứ. Đó là lý do vì sao có `<CR>` ở cuối. Còn nếu gán bình thường như `nmap f gg` thì không cần `Enter`.
Ngoài ra còn có 1 số phím chức năng khác :

- `M` là phím Alt
- `S` là phím Shift
