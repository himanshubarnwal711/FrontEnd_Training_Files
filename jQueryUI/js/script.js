// script.js

$(function(){

    //DRAGGABLE
    //https://jqueryui.com/draggable/

    $('.box').draggable();

    $('#box1').draggable({scroll:true, revert: "invalid"});

    $('#box2').draggable({axis:"x"});

    $('#box3').draggable({axis:"y"});

    $('#box4').draggable({containment:".container", revert: "invalid"});


    //DROPPABLE
    //https://jqueryui.com/droppable/

    $('#droppable').droppable({
        accept: '#box1',
        drop: function() {
            $(this).text('span').html("when a box got attitude, drop it like it's hot!");
        }
    });


    //SORTABLE
    //https://jqueryui.com/sortable/

    $('#sortable').sortable({ connectWith: "#sortableToo", placeholder: "placeholderBox"});

    $('#sortableToo').sortable({ connectWith: "#sortable", placeholder: "placeholderBox"});

   
    //ACCORDION
    //https://jqueryui.com/sortable/

    $('#accordion').accordion();

    $('#accordion').accordion({collapsible: true});


    //DATEPICKER
    //https://jqueryui.com/datepicker

    $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: false,
        changeYear: true,
        numberOfMonths: 1,
        minDate: "-50Y",
        maxDate: "+100Y"        
    });



});