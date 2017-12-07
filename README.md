# Final Part 3

## Links

* GitHub: https://github.com/cgoconnor/project_final3_oconnor_caity

* Web host:
http://caitygoconnor.com/project_final3_oconnor_caity

* W3C Validator
    * Index.html: https://validator.w3.org/nu/?doc=http%3A%2F%2Fcaitygoconnor.com%2Fproject_final3_oconnor_caity%2Findex.html
    * about.html: https://validator.w3.org/nu/?doc=http%3A%2F%2Fcaitygoconnor.com%2Fproject_final3_oconnor_caity%2Fabout.html
    * products.html: https://validator.w3.org/nu/?doc=http%3A%2F%2Fcaitygoconnor.com%2Fproject_final3_oconnor_caity%2Fproducts.html
    * services.html:
    https://validator.w3.org/nu/?doc=http%3A%2F%2Fcaitygoconnor.com%2Fproject_final3_oconnor_caity%2Fservices.html

* HTML Outliner
    * Index.html: https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fcaitygoconnor.com%2Fproject_final3_oconnor_caity%2F
    * about.html: https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fcaitygoconnor.com%2Fproject_final3_oconnor_caity%2Fabout.html
    * products.html: https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fcaitygoconnor.com%2Fproject_final3_oconnor_caity%2Fproducts.html
    * services.html:
    https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fcaitygoconnor.com%2Fproject_final3_oconnor_caity%2Fservices.html

## Resources

### General
* https://stackoverflow.com/questions/5445491/height-equal-to-dynamic-width-css-fluid-layout
    * I used this resource to figure out how to make the height and width the same for the iframes on the about page
* https://foundation.zurb.com/forum/posts/53901-foundation-6-sticky-footer-pushed-down-with-off-canvas-and-flexbox-css-tutorial
    * I always have to remind myself how to get the footer to stay at the bottom of the page.
* https://www.electrictoolbox.com/remove-table-cellpadding-cellspacing-css/
    * It's been a while since I've worked with tables for web, so I had to look it up.


### Plugins
* http://adnantopal.github.io/slimmenu/
    * This is the plugin I used for my main navigation. It allows for multiple nested menus, and shrinks to a hamburger icon at smaller widths. This is used on all pages of the site.
* https://github.com/victorjonsson/jQuery-Form-Validator/
    * I used this plugin to validate email addresses entered in the form in the footer. It checks for things like incomplete addresses or unaccepted characters, and won't let a user submit if it finds these things. You can interact with this on every page of the site in the footer.
    * I found it here: https://www.sitepoint.com/10-jquery-form-validation-plugins/
* https://fullcalendar.io/
    * I used this plugin for the calendar on the classes page.
    * I used this site to figure out how to make events pop up when clicked on: http://www.mikesmithdev.com/fullcalendar-jquery-ui-modal/


### Custom jQuery and JavaScript
* https://www.w3schools.com/jquery/jquery_slide.asp
    * I used this site to figure out how to make the slideout functionality work for each category in the menu on the products page. When you click the category button, the menu items slide out from the bottom, the category image shrinks away, and the button changes text to "close section."
    * If "close section" is clicked on the expanded menu, those actions are reversed...the expanded menu collapses, the button text changes back to the category title, and the category image reappears.
* https://www.w3schools.com/howto/howto_js_popup.asp
    * After someone enters their email, a popup box comes up asking if they want to enter their birthday. I used this tutorial by W3Schools to figure out how to make that popup work.
    * I also used custom jQuery to remove the instructions and input field once a user has successfully submitted thier email and instead show the text, "Your email has been submitted. Look for your first newsletter soon!"
* https://www.w3schools.com/js/default.asp
    * I also used the javascript resources on W3Schools to help me figure out how to get a different "day" drop down menu to show up depending on what is selected in the "month" drop down menu. (Since you don't want anyone entering an invalid date, such as February 31).
    * There are likely plugins that would make this much easier and less code-heavy, but it helped me strengthen my JavaScript skills. I also didn't want to use the HTML input type date, since I didn't want to capture the user's birth year, just month and day.

### Images
* All images are from unsplash.com, except the focaccia image, which is from wikimedia commons.
* The icons are all from flaticons.com

## Deductions
I reviewed the list of deductions for this project
and in the syllabus.

## Comments
In the Validator, it doesn't like that I've nested a form within a form (for the pop up based off of the email input field), and since it is ignoring that tag, it's finding errors after it that aren't actually errors. I probably should have added HTML with javascript instead of actually including it in the html document to avoid this. Live and learn.

Also for the validator, for the error: "Error: Attribute validation not allowed on element input at this point." This attribute was part of the validation plugin, so I just left it.
