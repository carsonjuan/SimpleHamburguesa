function SimpleHamburguesa($) {
    this.Animation;
    this.Color;
    this.AddCircularBackground;

    this.show = function() {
        if (!this.IsPostBack) {
            var my_id = this.ContainerName + '_hamburguesa'

            var button_buffer = new gx.text.stringBuffer();
            button_buffer.clear();


            button_buffer.append('<button id="' + my_id + '" type="button"  class="hamburger');

            if (this.AddCircularBackground == 'true')
                button_buffer.append(' fondo-circular');

            button_buffer.append(' ' + this.Animation + '">');

            button_buffer.append('<span class="hamburger-box"><span class="hamburger-inner"></span></span></button>');


            this.setHtml(button_buffer.toString());

            document.getElementById(my_id).onclick = this.Click;

            document.getElementById(my_id).addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);

            jQuery('head').append('<style>.hamburger-inner, .hamburger-inner:before, .hamburger-inner:after{background-color: #' + this.Color.Hexa + ';}</style>');
        }
    }

    this.Toggle = function() {
        var my_id = this.ContainerName + '_hamburguesa';
        document.getElementById(my_id).classList.toggle("is-active");
    }
}
