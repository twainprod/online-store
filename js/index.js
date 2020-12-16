$(document).ready(function(){

    //<!-- Clear button disable -->
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $('.btn-clear').prop('disabled', false);
            $('#searchBtn').prop('disabled', false);
        } else {
            $('.btn-clear').prop('disabled', true);
            $('#searchBtn').prop('disabled', true);
        }
    });   

    //   <!-- Remove item -->
        $('.remove').click(function () {
            $(this).parent().closest('.card-block').remove(); 
            $('.pagination').pagination()  
        });  
        
                

    //   <!-- Search -->                                
    $('#searchBtn').click(function () {
        $('.btn-clear').prop('disabled', false);
        let value = $('#searchValue').val().toLowerCase();
        $('.card-title').each(function () {
                let card = $(this).closest('.card-block');
                let text = $(this).text().toLowerCase();
                text.includes(value) ? card.show() : card.hide();
            });
        $('.btn-clear').click(function () {
                $('.btn-clear').prop('disabled', true);
                $('.card-block').show() 
                let newItems = $(".row .card-block");        
                let numItems = newItems.length;
                let perPage = 8;
                items.slice(perPage).hide();
                // Calculate new pagination 
                $('.pagination').pagination({
                    items: numItems,
                    itemsOnPage: perPage,                
                    onPageClick: function (pageNumber) {
                        let showFrom = perPage * (pageNumber - 1);
                        let showTo = showFrom + perPage;
                        items.hide().slice(showFrom, showTo).show();
                        }
                    });
                })  
        $('.pagination').pagination()                  
    });   
                    

    //    <!-- Pagination -->   
    let items = $(".row .card-block");
    let numItems = items.length;
    let perPage = 8;
    items.slice(perPage).hide();

    $('.pagination').pagination({
        items: numItems,
        itemsOnPage: perPage,                
        onPageClick: function (pageNumber) {
            let showFrom = perPage * (pageNumber - 1);
            let showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
            }
        });
});