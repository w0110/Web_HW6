# Web_HW6 - iPaint 我的小畫家

## 作業連結
- [作業 6 iPaint 我的小畫家](https://mcliu.notion.site/6-iPaint-56692da4f4514ba28385af217df388fb)
- [My Homework - Splatoon Canvas!!](https://hackmd.io/@x-hUOUtgTSGktl1g1KkQmQ/HkIg8XA5F)
- [作品連結](https://w0110.github.io/Web_HW6/)
- [原始碼](https://github.com/w0110/Web_HW6)

![](https://i.imgur.com/GpbUsFP.jpg)

## 此小畫家的潛在使用者
- anyone who want to paint~~
- 沒有要用工具畫正圓、矩形的人
- people who like Splatoon!!!

## 最特殊的 3 個功能(四個!?)
### 1. 可存檔
畫完之後可以存為.jpeg檔案
保留你完美的畫作!!
![](https://i.imgur.com/1u44N90.png)

### 2. 畫筆顏色無限制、背景顏色自由配
**顏色隨你挑，隨你調**
不會只有固定色彩
只要你調得出來，都可以用喔~~

![](https://i.imgur.com/gUlFv0U.png)

==(但請依照步驟，先設定好背景顏色再開是作畫喔! 不然東西不見不要怪我啊)==
### 3. 清除畫布前會有二次確認
怕你作畫到一半不小心按到清除畫布(這樣心血都白費了!!!!)
所以貼心製作"再次確認鍵"
![](https://i.imgur.com/fnrSAGD.png)


### 4. ~~Most important one : 防小人功能 哈哈哈~~
在裡面逛一下就會看到一堆彩蛋喔! ㄎㄎ

![](https://i.imgur.com/kc2kHz8.png)


## 製作流程
### 1. 先製作出我們的畫布

![](https://i.imgur.com/ETHSoyr.png)
設為500*500是因為太大頁面變可以滾動的話 鼠標不能準確的話再我們點的地方，所以我就固定一下大小!

### 2. 加上筆刷顏色設定、筆刷大小設定
原本是用輸入的方式讓使用者直接輸入色碼、筆刷大小，但由於我認為那太不直觀了，所以換成可直接調色的版本!! 至於筆刷大小就使用拉的來調整。

![](https://i.imgur.com/z1nV4UK.png)

### 3. 筆刷校正
因為我的小畫家有設"禁止調整畫面比例"，所以筆刷需額外設定座標(不然原本是可以寫成自動根據頁面來調整，原始碼中可自行將註解拿掉)

![](https://i.imgur.com/Ls1Pm7J.png)

### 4. 加上畫布背景顏色設定
背景色當初在作的時候也有遇到小麻煩，就是老師上課說的填色問題，因為原本的畫布並不是方正，所以填色出來右半邊會沒有改到，這也是為什麼最後畫布被設為500*500的原因。

![](https://i.imgur.com/Ih7BlLO.png)

### 5. 加上橡皮擦
呵呵!
為什麼會有這個功能呢? 因為在做背景改色的時候忽然想到的，既然我有背景色，那我用背景色塗在畫好的東西不正是達到了橡皮擦的功能嗎!?

![](https://i.imgur.com/JAknsVQ.png)
![](https://i.imgur.com/prqW7JP.png)

### 6. 加上refresh功能
其實就是F5啦~~
原本是想說把畫布清空就好，但又覺得那根設定背景色的按鈕有過於相似功能，所以就變成是refresh啦!

![](https://i.imgur.com/ABFKIx8.png)

### 7. 加上標題、提示文字們
#### 文字內容
一個網站 標題是必備的阿~~
至於提示文字是因為 小的程式能力不足，不知道要怎麼寫才能畫到一半又改背景色而東西不會被覆蓋，所以就要加上一些提示文字來告知使用者。

![](https://i.imgur.com/oQgCaof.png)
![](https://i.imgur.com/uLrDahO.png)
#### 文字風格
文字風格採用comic風 讓整體看起來更有Splatoon的感覺

![](https://i.imgur.com/RySd7S7.png)

### 8. 加上儲存功能
這是搞最久的一個ㄚㄚㄚㄚㄚ
因為一開始寫的版本存下來檔案都顯示"不支援此格式"、"此文件有損壞" QQ
最後使用`toDataURL()`終於成功啦~~~

![](https://i.imgur.com/4DykrQI.png)
![](https://i.imgur.com/bncB5MX.png)

### 9. 加上refresh 二次確認
#### 刷新一個網頁的方法
- 按F5
- 按頁面上的"clean the canvas"
- 按Ctrl + R
- 按瀏覽器中的重整畫面
    
因為我認為會不小心按到的是像只有一個鍵的"F5"跟頁面上的"clean the canvas"，所以二次確認功能就只做給這兩個部分，不然怕使用者覺得囉嗦。
其中使用js裡的`confirm`來達成效果!
```javascript=
confirm('Are you sure you want to clean the canvas?\nThis step cannot be recovery!');
```

### 10. 最後 最後 加上防盜功能 (純屬娛樂效果 啊哈哈哈~~)
雖然這只能防君子 不能防小人阿 QQ

![](https://i.imgur.com/lRJazOU.png)
![](https://i.imgur.com/wo1VFOy.png)
