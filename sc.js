 function zz(obj) {
     this.obj = obj;
     this.btn = document.getElementById(this.obj.btn);
     this.say();
 }

 zz.prototype = {
     constructor: zz,
     say: function() {
         this.dj();
     },
     creat: function() {
         var that = this;
         // 遮罩
         that.mark = document.createElement('div');
         that.mark.className = 'mark';
         document.body.appendChild(that.mark);
     },
     dj: function() {
         var that = this;
         this.btn.onclick = function() {
             that.creat();
             // 创建弹出框盒子
             that.small = document.createElement('div');
             that.small.className = 'min';
             that.str = `<h2>请您先登录</h2><b class="dels">&times;</b><p><span>${that.obj.s1}</span><span>${that.obj.s2}</span></p>`;
             that.small.innerHTML = that.str;
             document.body.appendChild(that.small);
             that.sp1 = that.small.getElementsByTagName('span')[0];
             that.sp2 = that.small.getElementsByTagName('span')[1];
             that.dels = that.small.getElementsByTagName('b')[0];
             // 点击确定
             that.sp2.onclick = function() {
                 that.del();
                 that.obj.no();
             }

             // 点击取消
             that.sp1.onclick = function() {
                 that.del();
                 that.obj.ok();
             }

             // 点击x号
             that.dels.onclick = function() {
                 that.del();
             }

         }
     },
     del: function() {
         // 删除遮罩层和弹出盒子
         this.mar = document.querySelector('.mark');
         this.sm = document.querySelector('.min');
         document.body.removeChild(this.mar);
         document.body.removeChild(this.sm);
     }
 }

 new zz({
     btn: 'btn',
     s1: '确定',
     s2: '取消',
     ok: function() {
         alert(1);
     },
     no: function() {
         alert('您确定取消吗?')
     }

 });