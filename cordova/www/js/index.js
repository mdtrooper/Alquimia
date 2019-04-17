/*
    This file is part of Alquimia.

    Foobar is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    any later version.

    Foobar is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <https://www.gnu.org/licenses/>.
 */
var app = {
    stack_screens: ['main_menu'],
    position: { x: 0, y: 0 },
    
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(event) {
        switch(event) {
            case 'deviceready':
                //- INIT - Main menu ------------------------------------
                $("#main_menu .btn_exit").on('click', function() {navigator.app.exitApp();});
                $("#main_menu .btn_new_game").on('click', app.new_game);
                $("#main_menu .btn_continue_game").on('click', app.continue_game);
                $("#main_menu .btn_options").on('click', function() {app.go_screen('options'); });
                //- END -- Main menu ------------------------------------
                
                
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrict({
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      }),
    ],
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    },
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

                
                
                break;
        }
    },
    
    new_game: function() {
        $('#alert_erase_game').modal('show')
        //app.go_screen('game');
    },
    
    continue_game: function() {
        app.go_screen('game');
    },
    
    go_screen: function(screen) {
        $("#" + app.stack_screens[0]).addClass('hidden');
        $("#" + screen).removeClass('hidden');
        app.stack_screens.unshift(screen)
    },
    
    add_test_other: function() {
        $("#game").append($('<div class="draggable" style="background: yellow !important; top: 100px; left: 100px; position: absolute; width: 50px; height: 50px;">B</div>'));
    }
};

app.initialize();
