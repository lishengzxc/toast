# ttoast

Toast Component 

[![npm](https://img.shields.io/npm/v/ttoast.svg?style=flat-square)](https://www.npmjs.com/package/ttoast)
[![npm](https://img.shields.io/npm/l/ttoast.svg?style=flat-square)](https://www.npmjs.com/package/ttoast)
[![npm](https://img.shields.io/npm/dt/ttoast.svg?style=flat-square)](https://www.npmjs.com/package/ttoast)

## Demo
[https://lishengzxc.github.io/toast/](https://lishengzxc.github.io/toast/)

## Install
```
npm install ttoast --save
```

## Usage
#### html
```html
<body>
  <button id="toast">toast</button>
  <script src="build/toast.js"></script>
  <script>
    toast.addEventListener('click', () => {
      Toast('你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界')
    }, false)
  </script>
</body>
```


## API
### Basic
```javascript
Toast('hello world~')
```

### Duration
```javascript
Toast({
  message: 'hello world~',
  duration: 5000
});
```

## LICENSE
MIT