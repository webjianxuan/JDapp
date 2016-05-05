/**
 * Created by zhousg on 2016/2/17.
 */
window.onload = function(){
    leftSwipe();
}
/*��໬��*/
function leftSwipe(){
    /*
    * 1.��������
    * 2.��������һ������ʱ�� ��Ҫһ��������Ч��
    * 3.��� ��������ǰ�����Ԫ�� ����   ͬʱ�ı䵱ǰ��ѡ��Ԫ��
    * 4.�ڵ�������һЩԪ�ص� ʱ����Ҫ��λ
    * */

    /*������*/
    var parentBox = document.getElementsByClassName('jd_category_left')[0];
    /*�Ӻ���*/
    var childBox = parentBox.getElementsByTagName('ul')[0];

    /*����������  ��������  ��������*/

    /*�������ĸ߶�*/
    var parentH = parentBox.offsetHeight;
    /*�������ĸ߶�*/
    var childH = childBox.offsetHeight;

    /*��λ���� ��������*/
    var maxPosition = 0;
    var minPosition = -(childH - parentH);

    var distance = 150;

    /*��������*/
    var maxSwipe = maxPosition + distance;
    var minSwipe = minPosition - distance;

    /*���÷���*/
    /*��λ*/
    var setTranslateY = function(translateY){
        /*Ч�ʸ���*/
        childBox.style.transform = 'translateY('+translateY+'px)';
        childBox.style.webkitTransform = 'translateY('+translateY+'px)';
    }
    /*�ӹ���*/
    var addTransition = function(){
        childBox.style.transition = 'all .2s ease';
        childBox.style.webkitTransition = 'all .2s ease';
    }
    /*�������*/
    var removeTransition = function(){
        childBox.style.transition = 'none';
        childBox.style.webkitTransition = 'none';
    }

    /*����*/
    var startY = 0;/*��ʼY����*/
    var moveY = 0;/*����ʱ���Y����*/
    var distanceY = 0;/*�����ľ���*/
    /*��¼��ǰ�Ķ�λ*/
    var currY = 0;

    childBox.addEventListener('touchstart',function(e){
        startY = e.touches[0].clientY;
    });
    childBox.addEventListener('touchmove',function(e){
        moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
        removeTransition();
        setTranslateY(currY + distanceY);

    });
    window.addEventListener('touchend',function(){
        /*���� ��ǰ��������֮���λ��*/
        currY = currY + distanceY;

        if(currY > maxPosition){
            currY = maxPosition;
            addTransition();
            setTranslateY(currY);
        }else if(currY < minPosition){
            currY = minPosition;
            addTransition();
            setTranslateY(currY);
        }


        /*���ü�¼�Ĳ���*/
        startY = 0;
        moveY = 0;
        distanceY = 0;
    });
}
