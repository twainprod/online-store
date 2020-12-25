$(document).ready(function () {
    //    <!-- Pagination -->   
    function Paginate() {
        let items = $(".row .card-block");
        let numItems = items.length;
        const perPage = 8;        
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
    }
    // Подсчет пагинации при запуске приложения
    Paginate()

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
        // Нужно добавить проверку на пустую страницу и переход на первую
        // Перебрасывает на первую страницу при удалении со второй
        $(this).closest('.card-block').remove(); 
        $('.card-block').css("display", "block")       
        
            Paginate() 
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
        
        // Пагинация при поиске (баг при результате > 8)         
        $('.pagination').pagination();
    });    
    
     $('.btn-clear').click(function () {
                $('.btn-clear').prop('disabled', true);
                $('.card-block').show()                 
                // Пересчет пагинации при нажатии на Clear
                // Перебрасывает на первую страницу, а не остается на текущей
                Paginate()
                })               

    
});