$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "getPagamenti.php",
        dataType: "json",
        success:  response => {
            console.log(response);
            const target = $('.container');
            let html = $('#template').html();
            let template = Handlebars.compile(html);

            for (const element of response) {
                target.append(template(element));
            }     
        },
        error: err => {
            console.log(err);           
        }
    });
    

    $('.container').on('click', '.delete', deleteElement);


    function deleteElement(){
        const target = $(this);
        let id = target.parent().data('id');
        let ok = confirm(`Vuoi davvero eliminare l'elemento con id ${id} dal database?`);

        if (ok) {
            $.ajax({
                type: "POST",
                url: "deletePagamento.php",
                data: {
                    id: id
                },          
                success:  () => {
                    target.parent().fadeOut('slow', () => {
                        target.parent().remove();
                    });
                },
                error:  err => {
                    console.log(err);        
                }
            });        
        }
    }
});