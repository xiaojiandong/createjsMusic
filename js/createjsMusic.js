/**
 * Created by Administrator on 2016/4/4.
 */

$(function(){
    var isPlaying = true;
    var playBtnObj = $('.js_play_icon');
    initMusic();
    playBtnObj.on('click' , function(){
        // initMusic();
        onPlayBtnClick();
    });

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

    // 初始化音乐播放
    function handleLoadComplete(){
        createjs.Sound.play('sound');
    };

    // 点击按钮，对音乐进行播放切换
    function onPlayBtnClick(){
        if(isPlaying){
            createjs.Sound.stop(); // 停止播放
            playBtnObj.removeClass("playing-animate");
            console.log('停止播放Music');
        }else{
            createjs.Sound.play('sound'); // 开启播放
//            initMusic();
            playBtnObj.addClass("playing-animate");
            console.log('开启播放Music');
        }
        isPlaying = !isPlaying;
    };

});