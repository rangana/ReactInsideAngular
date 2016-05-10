(function (window) {
    'use strict';
    
    window.org  = {
        rangana : {
            Hello : React.createClass({displayName: "Hello",
                render: function() {
                    return React.createElement("div", null, "Hello ", this.props.name);
                }
            })
        }
    }

})(window);

