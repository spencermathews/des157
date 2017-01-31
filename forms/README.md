# HTML Forms

suggestions:

more to later in quarter too complex


[HTML forms guide @ MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)

misc

    document.getElementByName("color");

---

Generally speaking forms will contain widgets

check but think names of elements only need to be unique within a form?




* Forms have `name` attribute
* Form fields have `name` and is used to reference e.g. `myName.value`
* Form fields stored in `elements` array.



##### form

form `oninput` attribute, how is it different than `action`? see also `onsubmit` and I think `onreset`

##### input fields


##### label field

* `label` field defines a label for an input element
* `for` attribute equals `id` attribute of related element or can surround control
* click on label to toggle controls

##### etc

use `fieldset` (draws line around) and `legend` to group widgets

input attributes: placeholder, autofocus, required, list, multiple, form, etc...


## Widgets




## Fields

specify `input` type with `type`

* `text` A single-line text field
* `password` Same as text but hides the text that is typed
* `checkbox` An on/off switch
* `radio` (Part of) a multiple-choice field
* `file` Allows the user to choose a file from their computer
* +other specific validated semantic types

`datalist` used and its id targeted by an input's list attribute., since text

new html5 input types: url, tel, email, search, number, color, range, datetime, datetime-local, date, time, week, month!

Plus there are several fields which have their own tags

 * `textarea`
 * `select` / specify multiple `option` to choose from, user must choose, vs `datalist` controls just give suggested (also note datalist provides options to other controls, while select is independent input)

 and
 
 * `button` (was input type="button"), can set type `submit`, `reset`, `menu`, `button` (redundant default?)


#### radio

Linked by `name` attribute

    <input type="radio" name="choice">

## JavaScript

big events:

1. `change`
2. `input` / `oninput` attribute
3. `submit`


Active keyboard focus obtained by `document.activeElement.tagName`. Change/remove focus by `focus/blur` methods (using document.querySelector):

    document.querySelector("input").focus();
    document.querySelector("input").blur();

Or in html using `autofocus` attribute.

Use `onfocus` or `onblur` attributes on input fields to register actions.

Submitting a form fires `submit` event and navigates to GET or POST page


...get stuff with `event.target.value` in a function taking an event, other options?

## TL;DR

##### How to use text input

Use input type of `text` (or validated types like `url`, `email`, etc.), or `textarea` or `select` field.

Datalist to select options for other contorls. Use `datalist` to wrap autocomplete options by `<option value="white />`. Set id attribute so inputs can select it using their list attribute.
Some Safari workaround suggest wrapping options in `select` tag (and maybe input type=text) but not clear it's still needed.

Use `elementName.valueAsNumber` to convert to number



##### How to show a default value

Use `placeholder` attribute, or `value` also shows up in field.

##### How to output the results of a calculation

Use `<output>` and set `oninput` callback on form for live update. Has `for` attribute to specify relationship to other form elements (and `form` attribute if sits outside form). What is its function besides semantics? Seems made for numbers maybe but works for text.

    <form oninput=result.value=something>...</form>
    <output name="result"></output>

Can also use `oninput` attribute for callback on input elements, but don't think it works with output?

Output is largely semantic. Can target other elements circa `document.getElementByID("id").innerHTML`

##### How to work with buttons

The new html5 use `<button>`.
`return false;` on callback functions!

I've seen both of these but what's the deal? go with the first if no reason to do otherwise
`onsubmit="submitFunction();`
`onsubmit="return submitFunction();`


Unclear if `document.pressed` is defined about button presses, or if it's common to assign it.






