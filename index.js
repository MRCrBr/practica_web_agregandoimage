$.fn.getPokemon = function (elemento, pokenumber) {
    var pokemon = "";
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokenumber}`,

      success: function (result) {
        pokemon = result.sprites.front_shiny;
        elemento.html("<image src=" + pokemon + ">");
      }
    });
  };

  $("#pokemon_uno_boton").click(function () {
    $.fn.getPokemon($("#pokemon_uno"), 25);
  });
  $("#pokemon_uno_boton").mouseover(function(){
    $("#pokemon_uno_boton").css("background-color", "green");
  });
