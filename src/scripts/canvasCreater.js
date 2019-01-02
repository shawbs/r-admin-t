class CanvasCreater {
    constructor(container){
        this.container = container
    }


    /**
   * 自动换行
   * ctx
   * t文本
   * x 横坐标
   * y 纵坐标
   * w 最大宽度
   */
  autoBreak(ctx, opts) {
    const { t, x, y, w, line, lineH = 30} = opts
    var chr = t.split("");
    var temp = "";
    var row = [];
    console.log(chr)
    for (var a = 0; a < chr.length; a++) {
      if (ctx.measureText(temp).width > w - lineH) {
        temp += chr[a];
        row.push(temp);
        temp = "";
      } else {
        temp += chr[a];
      }
    }

    row.push(temp);
    for (var b = 0; b < row.length; b++) {
      console.log(b, line)
      if(line && b >= line){
        return;
      }else{
        ctx.fillText(row[b], x, y + (b + 1) * lineH);
      }
    }
  }

  drawShare(opt={
    img: '',
	qrcode: '',
	title: 'xxxx年度关键字',
    text1: '长按识别二维码',
    text2: '生成你的专属海报'
  }) {

	return new Promise((resolve, reject) => {

		const maxW = this.container.offsetWidth * 2
		const maxH = this.container.offsetHeight * 2
		const footerH = 80 * 2
		const bodyH = maxH - footerH
		const qrcodeW = opt.qrcode.offsetWidth
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')

		canvas.width = maxW
		canvas.height = maxH
		if(ctx){
			ctx.beginPath();

			ctx.fillStyle = "#fff"
			ctx.fillRect(0,0, maxW, maxH)
			ctx.save()

			ctx.drawImage(opt.img, 0, 0, maxW, bodyH)
			ctx.save()

			ctx.font = '30px Arial'
			this.autoBreak(ctx, {
				t: opt.title,
				x: 30 * 2,
				y: 20 * 2,
				w: maxW
			})
			ctx.save()

			// ctx.drawImage(opt.qrcode, 0, bodyH, qrcodeW, qrcodeW)
			ctx.fillStyle = '#000'
			ctx.fillText(opt.text1, qrcodeW + 150, maxH - 100)
			ctx.fillText(opt.text2, qrcodeW + 150, maxH-50)

			resolve(canvas)

		}else{
			reject('无ctx对象')
		}
	})

  }

}

export default CanvasCreater;