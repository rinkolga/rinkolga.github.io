$(document).ready(function(){
     
    //�������� �����
    $('#callback').click(function(){
        $('#callback_form').slideDown();
    });
     
     
     
    //������ �����
    $('#close').click(function(){
        $('#callback_form').slideUp();    
    });
     
     
     
    //������ �� ������ - �������� ������
    $('#send').click(function(){
         
        name = $('#name').val();
        phone = $('#phone').val();
         
        //���� ���� ���������, �� ���������� ������
        if( name != '' && phone != '' ){
 
            $.post("callback.php",{
                name: name,
                phone: phone
            },function success(data){
                if( data != 0 ) $('#callback_form').html('����������!').slideUp(3000);
            });
         
        }else $(this).siblings('input').animate({opacity: 0.25}, 500).animate({opacity: 1}, 500);
         
    });
 
});