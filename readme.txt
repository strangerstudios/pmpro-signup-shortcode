=== Paid Memberships Pro - Signup Shortcode ===
Contributors: strangerstudios
Tags: memberships, registration, pmpro, paid memberships pro, signup, sign up, shortcode, register
Requires at least: 5.0
Tested up to: 6.4
Stable tag: 0.3.2

Add a shortcode [pmpro_signup] that can be used to embed a sign up form for Paid Memberships Pro levels.

== Description ==

Use the [pmpro_signup] shortcode to embed a sign up form anywhere on your site. You can place it into sidebar widgets or use popover plugins like Optin Monster and Popup Maker to embed the form into a popover.

If the level is free, the account will be created and the member will be automatically redirected to the specified redirect page. If the level is not free, the user will be taken to the membership checkout page to enter billing information.

Note: This replaces similar functionality that used to be included in the Register Helper Add On for Paid Memberships Pro.

Shortcode attributes for `[pmpro_signup]` include:

1. intro – (optional) Override the default 'Register for LEVEL NAME' text above the checkout form or hide the text completely. (default: true; accepts: true, false, or your custom text)
1. hidelabels - (optional) Hide the form input field labels and use the input field placeholder attribute instead. (default: false; accepts: true, 1, or yes).
1. level – (required) determines which level to use for the checkout form
1. login – (optional) Set this attribute to show a 'Log In' link below the submit button. (i.e. login='1')
1. redirect – (optional) Set the page to redirect to after form submission. (default: Membership Confirmation page. accepts: referrer, account, or your custom URL)
1. short – (optional) determines whether to show the Confirm E-mail and Confirm Password fields OR show E-mail Address field only. (default: false; accepts: true, false, or emailonly)
1. submit_button – (optional) Change the 'Submit' button text on the checkout form. (default: 'Sign Up Now'; accepts: your custom text)
1. title – (optional) Show a heading (h2) with a default 'Level Name' above the checkout form or your custom text. (default: false; accepts: true or your custom text)
1. custom_fields - (optional) If set to false or 0, the pmpro_checkout_after_username, pmpro_checkout_after_email, and pmpro_checkout_before_submit action hooks will not fire. This will stop Register Helper from adding fields to the checkout form. Note that required fields will still be required. If set to true or 1 specifically and Register Helper is loaded, then the pmprorh_pmpro_checkout_boxes() function will fire to include fields from the checkout_boxes area at the bottom of the form.

== Installation ==

1. Upload the `pmpro-signup-shortcode` directory to the `/wp-content/plugins/` directory of your site.
1. Activate the plugin through the 'Plugins' menu in WordPress.

Add a sign up form to a post/widget/page using a shortcode:

[pmpro_signup level="3" intro="0" redirect="referrer" short="emailonly" submit_button="Join Now" title="Sign Up for Gold Membership"]

== Frequently Asked Questions ==

= I found a bug in the plugin. =

Please post it in the issues section of GitHub and we'll fix it as soon as we can. Thanks for helping. https://github.com/strangerstudios/pmpro-signup-shortcode/issues

== Changelog ==
= 0.3.2 - 2023-11-08 =
* ENHANCEMENT: Added support for error handling on submit (i.e. reCAPTCHA missing). (@JarrydLong)
* BUG FIX/ENHANCEMENT: Improved logic to support reCAPTCHA on the signup shortcode. (@JarrydLong)
* BUG FIX: Fixed an issue in some cases User Fields would show duplicates via code. (@JarrydLong)
* REFACTOR: refactored pmpro_getOption to get_option (@JarrydLong, @andrewlimaza)

= 0.3.1 - 2023-01-04 =
* SECURITY: Better escaping and sanitization.
* ENHANCEMENT: Added link to the TOS checkbox.
* ENHANCEMENT: Now using the pmpro_generateUsername to generate the username when only an email is passed in.
* ENHANCEMENT: Changed text domain to pmpro-signup-shortcode. Some systems expect the plugin slug and text domain to match.
* ENHANCEMENT: Added "confirm_email" and "confirm_password" params for the shortcode to hide just those fields. Set to 0, false, or no to hide those fields.
* BUG FIX/ENHANCEMENT: Removed the comma between the password and email when the password is included in the confirmation email. The comma was often mistaken as part of the password. #40 (@secretagencyit)

= 0.3 - 2020-01-15 =
* ENHANCEMENT: Added option to pass URL attributes for "email" or "username" to a page and prefill the signup form.
* ENHANCEMENT: Switching all cases where a password is generated to use core WordPress wp_generate_password function.
* BUG FIX/ENHANCEMENT: Now using pmpro_session_start core function where sessions are needed.
* BUG FIX: Fixed case where passwords were sometimes not generating.
* BUG FIX: Fixed bug where level-specific custom fields in Register Helper would not show for the specified "level" in the signup shortcode.
* BUG FIX: Fixed edge case where the stored session variable for a generated password wasn't being cleared.

= .2 =
* BUG FIX: Fixed bug where logged in users were being prompted about their insecure passwords.
* BUG FIX: Fixed issue where session might not have been created before trying to save a new user's password there (for use with offsite checkouts like PayPal Express).
* ENHANCEMENT: Showing a checkbox to agree to the Terms of Service page if one is set in the PMPro advanced settings. You can place your GDPR-related conditions in the TOS page and PMPro will track that the TOS has been agreed to.
* ENHANCEMENT: Added a new attribute "custom_fields". When set to false or 0, the pmpro_checkout_after_username, pmpro_checkout_after_email, and pmpro_checkout_before_submit action hooks will not fire. This will stop Register Helper from adding fields to the checkout form. Note that required fields will still be required. If set to true or 1 specifically and Register Helper is loaded, then the pmprorh_pmpro_checkout_boxes() function will fire to include fields from the checkout_boxes area at the bottom of the form.
* ENHANCEMENT: Added 'hidelabels' attribute to shortcode to hide form labels and use input field placeholder text instead. Note for Register Helper fields, you will need to add a placeholder attribute to your fields. You can add an option like this: 'html_attributes' => array('placeholder'=>'Placeholder Text')
* ENHANCEMENT: Added CSS classes to all form elements to allow for better style control.
* ENHANCEMENT: Added the pmpro_checkout_after_user_fields action hook that is also on the PMPro checkout page now.
* ENHANCEMENT: Added translation support and a South African English translation.
* ENHANCEMENT: Added a "login-link" class to the div wrapping the login link for styling. (Thanks, Rafe Colton)
* ENHANCEMENT: Added some signup shortcode specific action hooks: pmpro_signup_form_before_fields, pmpro_signup_form_before_submit, pmpro_signup_form_after_submit, pmpro_signup_form_after_form. (Thanks, Rafe Colton)
* ENHANCEMENT: Added a hidden field "pmpro_signup_shortcode" so you can tell when a form submission comes from the signup shortcode form. (Thanks, Rafe Colton)

= .1 =
* Initial version.
