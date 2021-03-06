
import React, {PropTypes} from 'react';

const Area = (props) => {
    if (props.fireEvent) {
        return (
            <area
                onClick={() => props.fireEvent({event: 'click'})}
                {...props}
            >
                {props.children}
            </area>
        );
    } else {
        return (
            <area {...props}>
                {props.children}
            </area>
        );
    }
};

Area.propTypes = {

    /**
     * Alternative text in case an image can't be displayed.
     */
    'alt': PropTypes.string,

    /**
     * A set of values specifying the coordinates of the hot-spot region.
     */
    'coords': PropTypes.string,

    /**
     * Indicates that the hyperlink is to be used for downloading a resource.
     */
    'download': PropTypes.string,

    /**
     * The URL of a linked resource.
     */
    'href': PropTypes.string,

    /**
     * Specifies the language of the linked resource.
     */
    'hrefLang': PropTypes.string,

    /**
     * Specifies a hint of the media for which the linked resource was designed.
     */
    'media': PropTypes.string,

    /**
     * Specifies the relationship of the target object to the link object.
     */
    'rel': PropTypes.string,

    /**
     *
     */
    'shape': PropTypes.string,

    /**
     *
     */
    'target': PropTypes.string,

    /**
     * Defines a keyboard shortcut to activate or add focus to the element.
     */
    'accessKey': PropTypes.string,

    /**
     * Often used with CSS to style elements with common properties.
     */
    'className': PropTypes.string,

    /**
     * Indicates whether the element's content is editable.
     */
    'contentEditable': PropTypes.string,

    /**
     * Defines the ID of a <menu> element which will serve as the element's context menu.
     */
    'contextMenu': PropTypes.string,

    /**
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    'dir': PropTypes.string,

    /**
     * Defines whether the element can be dragged.
     */
    'draggable': PropTypes.string,

    /**
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    'hidden': PropTypes.string,

    /**
     * Defines the language used in the element.
     */
    'lang': PropTypes.string,

    /**
     * Indicates whether spell checking is allowed for the element.
     */
    'spellCheck': PropTypes.string,

    /**
     * Defines CSS styles which will override styles previously set.
     */
    'style': PropTypes.object,

    /**
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    'tabIndex': PropTypes.string,

    /**
     * Text to be displayed in a tooltip when hovering over the element.
     */
    'title': PropTypes.string,

    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    'id': PropTypes.string,

    /**
     * The children of this component
     */
    'children': PropTypes.node,

    /**
     * A callback for firing events to dash.
     */
    'fireEvent': PropTypes.func,

    'dashEvents': PropTypes.oneOf(['click'])
    
};

export default Area;
