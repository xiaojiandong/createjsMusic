# createjsMusic
createjs与soundjs控制音乐的播放
![image](https://github.com/xiaojiandong/createjsMusic/blob/master/img/view.jpg)

## 局部代码：
```js
 // 初始化音乐播放
 function initMusic(){
        createjs.Sound.registerSound({
            src : 'music/bg-music.mp3',
            id : 'sound',
            defaultPlayProps : {
                loop : -1
            }
        });
        playBtnObj.addClass("playing-animate");
        // 注册监听
        createjs.Sound.addEventListener("fileload", handleLoadComplete );
    };
    
    // 点击按钮，对音乐进行播放切换
    function onPlayBtnClick(){
        if(isPlaying){
            createjs.Sound.stop(); // 停止播放
            playBtnObj.removeClass("playing-animate");
        }else{
            createjs.Sound.play('sound'); // 开启播放
            playBtnObj.addClass("playing-animate");
        }
        isPlaying = !isPlaying;
    };
    // todo 其他逻辑
```
