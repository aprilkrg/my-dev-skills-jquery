
$('#form').submit(function(e){
    let input = $('input').val();

    let newRow = `<li><button class="remove">X</button>${input}</li>`;
        $("#newSkill").append(newRow); 
        e.preventDefault()
        $('input').val('');
        $('.remove').on('click', function(){
        $(this).parent().remove();
        console.log(this);
    });
});

