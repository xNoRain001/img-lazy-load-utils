## 介绍

图片懒加载

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

    div {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      margin-top: 1000px;
    }

    div img {
      width: 100%;
      height: 100%;
    }
  </style>
</head>

<body>
  <!-- 给 div 或 img 添加 lazy 属性，表示懒加载。 -->
  <!-- 给 div 或 img 添加 url 属性，表示图片真正的地址 -->
  <div lazy>
    <img url="./foo.png">
  </div>

  <div>
    <img lazy url="./bar.webp">
  </div>

  <div lazy url="./baz.webp">
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
