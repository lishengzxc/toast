require('./toast.css')

class ToastsPool {
  constructor() {
    this.toastsPool = []
    this.toastsBox = this._createBox()
  }

  _createBox() {
    let toastBox = document.createElement('div')
    toastBox.className = 'ttoast-box'
    document.body.appendChild(toastBox)

    return toastBox
  }

  _createToast(message) {
    if (this.toastsPool.length > 0) {
      return this.toastsPool.shift().content(message)
    } else {
      return new ToastItem(message)
    }
  }

  toast(options) {
    options = options || {}
    let message, duration

    if (typeof options === 'string') {
      message = options
      duration = 3000
    } else {
      message = options.message
      duration = options.duration || 3000
    }

    let toastItem = this._createToast(message)

    this.toastsBox.appendChild(toastItem.item)

    setTimeout(() => {
      toastItem.item.className = 'ttoast hide'
      setTimeout(() => {
        toastItem.item.className = 'ttoast show'
        toastItem.remove()
        this.toastsPool.push(toastItem)
      }, 100)
    }, duration)
  }
}

let toastsPool = new ToastsPool()

class ToastItem {
  constructor(message) {
    this.item = this._createDOM(message)
  }

  _createDOM(message) {
    let item = document.createElement('div')
    item.className = 'ttoast show'
    item.innerHTML = `${message}`

    return item
  }

  content(message) {
    this.item.innerHTML = `${message}`
    return this
  }

  remove() {
    this.item.parentNode.removeChild(this.item)
  }
}


module.exports = toastsPool.toast.bind(toastsPool)