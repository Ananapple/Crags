/*global define */
define([
    'jquery',
    'ui-components/container',
    'ui-components/button'
], function ($, container, button) {
    'use strict';

    var myCont = container.create();

    var myButton = button.create();
    myButton.setTitle('test');

    var myButton2 = button.create();
    myButton2.setTitle('something');

    myCont.addComponent(myButton);
    myCont.addComponent(myButton2);

    $('body').append(myCont.render());

});