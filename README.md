## 介绍

图片懒加载工具库。

## 下载

### npm

```
npm i img-lazy-load-utils
```

### src

```html
<script src="../dist/img-lazy-load-utils.js"></script>
```

## 使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    html,
    body {
      height: 500%;
    }

    /* 设置占位背景的宽高 */
    .lazy-div {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      margin-top: 1000px;
    }

    .lazy-div img {
      width: 100%;
      height: 100%;
    }
  </style>
</head>

<body>
  <!-- 给 div 或 img 添加 lazy 属性，表示 div 下的那张图片开启懒加载。 -->
  <!-- 给 div 或 img 添加 url 属性，表示图片真正加载时的地址 -->
  <div class="lazy-div" lazy>
    <img url="./foo.png">
  </div>

  <div class="lazy-div">
    <img lazy url="./bar.webp">
  </div>

  <div class="lazy-div" lazy url="./baz.webp">
    <img >
  </div>

  <script src="../dist/img-lazy-load-utils.js"></script>
  <script>
    const lazyLoad = new LazyLoad()

    lazyLoad.start()
  </script>
</body>

</html>
```
