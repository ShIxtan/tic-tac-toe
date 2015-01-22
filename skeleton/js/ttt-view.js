(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el
    this.setupBoard()
  };

  View.prototype.bindEvents = function () {
    var that = this;


    this.$el.on("click", ".sq", function(event){
      var x = $(event.currentTarget).parent().data()['x'];
      var y = $(event.currentTarget).data()['y'];
      if (that.game.board.isEmptyPos([x, y])) {
        that.game.playMove([x, y]);
        var mark = that.game.currentPlayer;
        $(event.currentTarget).addClass(mark);
        if (that.game.winner()) {
          alert("congrats!")
        }
      } else {
        alert("invalid move!");
      }
    })
  };

  View.prototype.makeMove = function ($square) {
  };

  View.prototype.setupBoard = function () {
    for (var i = 0; i < 3; i++) {
      var $row = $("<div class='row'>");
      $row.data("x", i);
      this.$el.append($row);
    }
    for (var i = 0; i < 3; i++) {
      var $col = $("<div class='sq'>");
      $col.data("y", i);
      $('.row').append($col);
    }

    this.bindEvents();
  };
})();
