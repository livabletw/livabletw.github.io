var item1_thumb = 1
var moveNum = 72
var item1_num = 7

var item2_thumb = 1
var item2_num = 7

var item3_thumb = 1
var item3_num = 7

var item4_thumb = 1
var item4_num = 7
$(document).ready(function() {
	

	function timerPhoto(){
		$('.s4_item1_thumb_r').click();
		$('.s4_item2_thumb_r').click();
		$('.s4_item3_thumb_r').click();
		$('.s4_item4_thumb_r').click();
	}
	setInterval(timerPhoto,3000);

    $('.tc1').lightGallery();
    $('.tc2').lightGallery();
    $('.tc3').lightGallery();
    $('.tc4').lightGallery();

    $('.s4_item1_thumb_r').click(function(event) {
        if (item1_thumb < item1_num - 2) {
            TweenMax.to($('.tc1'), 1, { x: (-moveNum - 2) * item1_thumb });
            item1_thumb += 1;
            console.log(item1_thumb)
        } else if (item1_thumb >= 5) {
            TweenMax.to($('.tc1'), 1, { x: 0 });
            item1_thumb = 1;
        }
    });
    $('.s4_item1_thumb_l').click(function(event) {
        if (item1_thumb == 1) {
            item1_thumb = 6
            var go = (-moveNum - 2) * (item1_num - 3)
            TweenMax.to($('.tc1'), 1, { x: go });
            console.log(item1_thumb)
        } else if (item1_thumb <= 5) {
            item1_thumb -= 1;
            TweenMax.to($('.tc1'), 1, { x: (-moveNum - 2) * (item1_thumb - 1) });
            console.log(item1_thumb)
        }
    });

    // $('.s4_thumb1').click(function (event) {
    // 	$('.s4_pic1 img').attr('src','img/item1/img_1.png')
    // })
    // $('.s4_thumb2').click(function (event) {
    // 	$('.s4_pic1 img').attr('src','img/item1/img_2.png')
    // })
    // $('.s4_thumb3').click(function (event) {
    // 	$('.s4_pic1 img').attr('src','img/item1/img_3.png')
    // })
    // $('.s4_thumb4').click(function (event) {
    // 	$('.s4_pic1 img').attr('src','img/item1/img_4.png')
    // })
    // $('.s4_thumb5').click(function (event) {
    // 	$('.s4_pic1 img').attr('src','img/item1/img_5.png')
    // })
    // $('.s4_thumb6').click(function (event) {
    // 	$('.s4_pic1 img').attr('src','img/item1/img_6.png')
    // })
    // $('.s4_thumb7').click(function (event) {
    // 	$('.s4_pic1 img').attr('src','img/item1/img_7.png')
    // })
    // $('.s4_thumb8').click(function (event) {
    // 	$('.s4_pic1 img').attr('src','img/item1/img_8.png')
    // })


    //s2
    $('.s4_item2_thumb_r').click(function(event) {
        if (item2_thumb < item2_num - 2) {
            TweenMax.to($('.tc2'), 1, { x: (-moveNum - 2) * item2_thumb });
            item2_thumb += 1;
            console.log(item2_thumb)
        } else if (item2_thumb >= 5) {
            TweenMax.to($('.tc2'), 1, { x: 0 });
            item2_thumb = 1;
        }
    });
    $('.s4_item2_thumb_l').click(function(event) {
        if (item2_thumb == 1) {
            item2_thumb = 6
            var go = (-moveNum - 2) * (item2_num - 3)
            TweenMax.to($('.tc2'), 1, { x: go });
            console.log(item2_thumb)
        } else if (item2_thumb <= 5) {
            item2_thumb -= 1;
            TweenMax.to($('.tc2'), 1, { x: (-moveNum - 2) * (item2_thumb - 1) });
            console.log(item2_thumb)
        }
    });

    // $('.s4_thumb1_2').click(function (event) {
    // 	$('.s4_pic2 img').attr('src','img/item1/img_1.png')
    // })
    // $('.s4_thumb2_2').click(function (event) {
    // 	$('.s4_pic2 img').attr('src','img/item1/img_2.png')
    // })
    // $('.s4_thumb3_2').click(function (event) {
    // 	$('.s4_pic2 img').attr('src','img/item1/img_3.png')
    // })
    // $('.s4_thumb4_2').click(function (event) {
    // 	$('.s4_pic2 img').attr('src','img/item1/img_4.png')
    // })
    // $('.s4_thumb5_2').click(function (event) {
    // 	$('.s4_pic2 img').attr('src','img/item1/img_5.png')
    // })
    // $('.s4_thumb6_2').click(function (event) {
    // 	$('.s4_pic2 img').attr('src','img/item1/img_6.png')
    // })
    // $('.s4_thumb7_2').click(function (event) {
    // 	$('.s4_pic2 img').attr('src','img/item1/img_7.png')
    // })
    // $('.s4_thumb8_2').click(function (event) {
    // 	$('.s4_pic2 img').attr('src','img/item1/img_8.png')
    // })

    //s4
    $('.s4_item3_thumb_r').click(function(event) {
        if (item3_thumb < item3_num - 2) {
            TweenMax.to($('.tc3'), 1, { x: (-moveNum - 2) * item3_thumb });
            item3_thumb += 1;
            console.log(item3_thumb)
        } else if (item3_thumb >= 5) {
            TweenMax.to($('.tc3'), 1, { x: 0 });
            item3_thumb = 1;
        }
    });
    $('.s4_item3_thumb_l').click(function(event) {
        if (item3_thumb == 1) {
            item3_thumb = 6
            var go = (-moveNum - 2) * (item3_num - 3)
            TweenMax.to($('.tc3'), 1, { x: go });
            console.log(item3_thumb)
        } else if (item3_thumb <= 5) {
            item3_thumb -= 1;
            TweenMax.to($('.tc3'), 1, { x: (-moveNum - 2) * (item3_thumb - 1) });
            console.log(item3_thumb)
        }
    });

    // $('.s4_thumb1_3').click(function (event) {
    // 	$('.s4_pic3 img').attr('src','img/item1/img_1.png')
    // })
    // $('.s4_thumb2_3').click(function (event) {
    // 	$('.s4_pic3 img').attr('src','img/item1/img_2.png')
    // })
    // $('.s4_thumb3_3').click(function (event) {
    // 	$('.s4_pic3 img').attr('src','img/item1/img_3.png')
    // })
    // $('.s4_thumb4_3').click(function (event) {
    // 	$('.s4_pic3 img').attr('src','img/item1/img_4.png')
    // })
    // $('.s4_thumb5_3').click(function (event) {
    // 	$('.s4_pic3 img').attr('src','img/item1/img_5.png')
    // })
    // $('.s4_thumb6_3').click(function (event) {
    // 	$('.s4_pic3 img').attr('src','img/item1/img_6.png')
    // })
    // $('.s4_thumb7_3').click(function (event) {
    // 	$('.s4_pic3 img').attr('src','img/item1/img_7.png')
    // })
    // $('.s4_thumb8_3').click(function (event) {
    // 	$('.s4_pic3 img').attr('src','img/item1/img_8.png')
    // })

    //s4
    $('.s4_item4_thumb_r').click(function(event) {
        if (item4_thumb < item4_num - 2) {
            TweenMax.to($('.tc4'), 1, { x: (-moveNum - 2) * item4_thumb });
            item4_thumb += 1;
            console.log(item4_thumb)
        } else if (item4_thumb >= 5) {
            TweenMax.to($('.tc4'), 1, { x: 0 });
            item4_thumb = 1;
        }
    });
    $('.s4_item4_thumb_l').click(function(event) {
        if (item4_thumb == 1) {
            item4_thumb = 6
            var go = (-moveNum - 2) * (item4_num - 3)
            TweenMax.to($('.tc4'), 1, { x: go });
            console.log(item4_thumb)
        } else if (item4_thumb <= 5) {
            item4_thumb -= 1;
            TweenMax.to($('.tc4'), 1, { x: (-moveNum - 2) * (item4_thumb - 1) });
            console.log(item4_thumb)
        }
    });

    // $('.s4_thumb1_4').click(function (event) {
    // 	$('.s4_pic4 img').attr('src','img/item1/img_1.png')
    // })
    // $('.s4_thumb2_4').click(function (event) {
    // 	$('.s4_pic4 img').attr('src','img/item1/img_2.png')
    // })
    // $('.s4_thumb3_4').click(function (event) {
    // 	$('.s4_pic4 img').attr('src','img/item1/img_3.png')
    // })
    // $('.s4_thumb4_4').click(function (event) {
    // 	$('.s4_pic4 img').attr('src','img/item1/img_4.png')
    // })
    // $('.s4_thumb5_4').click(function (event) {
    // 	$('.s4_pic4 img').attr('src','img/item1/img_5.png')
    // })
    // $('.s4_thumb6_4').click(function (event) {
    // 	$('.s4_pic4 img').attr('src','img/item1/img_6.png')
    // })
    // $('.s4_thumb7_4').click(function (event) {
    // 	$('.s4_pic4 img').attr('src','img/item1/img_7.png')
    // })
    // $('.s4_thumb8_4').click(function (event) {
    // 	$('.s4_pic4 img').attr('src','img/item1/img_8.png')
    // })
    


});// JavaScript Document