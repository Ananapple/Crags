/*global define */
define([
    'libs',
    'lodash',
    'jquery'
], function (l, _, $) {
    'use strict';

    var _this = {};

    _this.create = function () {
        
        var _instance = {};

        /**
         * Object containing child components
         * keyed by component ids. Javascript objects
         * are not maintained in order so we need to
         * maintain the order with a separate childrenKeys
         * array
         *
         * @type {Object}
         */
        var children = {};
        
        /**
         * Array of ids for the child components
         * @type {Array}
         */
        var childrenKeys = [];

        /**
         * The type of html element this component is
         * wrapped in. Defaults to div
         */
        var el = $(document.createElement('div'));

        /**
         * Returns the unique(ish) id for this component
         * If this is the first time that getId has been
         * called for this component, an id will be generated
         * before being returned. Once generated, this
         * will be the id for this component
         *
         * @return {int} - id of this component
         */
        _instance.getId = function () {
            if (typeof _instance.id === 'undefined') {
                _instance.id = l.guid();
            }
            return _instance.id;
        };

        /**
         * Sets the components containing element
         *
         * @param {object} element - html element, should
         * be wrapped in a jquery object. eg. $('div')
         */
        _instance.setElement = function (element) {
            el = element;
        };

        /**
         * returns the element for this component
         *
         * @return {object} - html element wrapped in jquery
         */
        _instance.getElement = function () {
            return el;
        };

        /**
         * Adds a child component to this component
         *
         * @param {object} component - the component being
         * added
         */
        _instance.add = function (component) {
            children[component.getId()] = component;
            childrenKeys.push(component.getId());
        };

        /**
         * Removes a child component from this component
         *
         * @param  {object} component - the component being
         * removed
         *
         * @return {object} - the component that was successfully
         * removed
         */
        _instance.remove = function (component) {
            var childComponent = children[component.getId()];
            delete children[component.getId()];
            delete childrenKeys[component.getId()];
            return childComponent;
        };

        /**
         * Gets the content for this component. Must be overridden
         * in component instances.
         *
         * @return {string} - the content string
         */
        _instance.getContent = function () {
            return '';
        };

        /**
         * Renders the component. First renders self and then
         * renders children into itself by looping through
         * children and calling render before returning itself.
         */
        _instance.render = function () {
            el.html(_instance.getContent());
            el.id = _instance.getId();
            _.each(childrenKeys, function (key) {
                el.append(children[key].render());
            });
            return el;
        };

        return _instance;
    };

    return _this;

});