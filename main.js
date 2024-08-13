$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })
    $('#reset').click(function(){
        $('form').slideUp();
        $('ul').empty();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');
        const tarefaDiv = $( '<div class="tarefas">' + nomeTarefa + '</div>' );
        tarefaDiv.appendTo(novaTarefa);
        novaTarefa.appendTo('ul');
        $('#nome-tarefa').val('');

        novaTarefa.click(function(){
        $(novaTarefa).toggleClass('feito');
        });
    })
});


