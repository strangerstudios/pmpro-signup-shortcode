=== Paid Memberships Pro - Signup Shortcode & Block ===
Contributors: strangerstudios
Tags: memberships, registration, pmpro, paid memberships pro, signup
Requires at least: 5.4
Tested up to: 6.9
Stable tag: 1.2
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Add a shortcode [pmpro_signup] that can be used to embed a sign up form for Paid Memberships Pro levels.

== Description ==

Use the [pmpro_signup] shortcode to embed a sign up form anywhere on your site. You can place it into sidebar widgets or use popover plugins like Optin Monster and Popup Maker to embed the form into a popover.

If the level is free, the account will be created and the member will be automatically redirected to the specified redirect page. If the level is not free, the user will be taken to the membership checkout page to enter billing information.

Note: This replaces similar functionality that used to be included in the Register Helper Add On for Paid Memberships Pro.

Refer to the documentation for a full list of shortcode attributes: https://www.paidmembershipspro.com/add-ons/pmpro-signup-shortcode/.

== Installation ==

1. Upload the `pmpro-signup-shortcode` directory to the `/wp-content/plugins/` directory of your site.
1. Activate the plugin through the 'Plugins' menu in WordPress.

Add a sign up form to a post/widget/page using a shortcode:

[pmpro_signup level="3" intro="0" redirect="referrer" short="emailonly" submit_button="Join Now" title="Sign Up for Gold Membership"]

== Frequently Asked Questions ==

= I found a bug in the plugin. =

Please post it in the issues section of GitHub and we'll fix it as soon as we can. Thanks for helping. https://github.com/strangerstudios/pmpro-signup-shortcode/issues

== Changelog ==
= 1.2 - 2026-05-14 =
* FEATURE: Added a `levels` shortcode attribute that lets you offer a dropdown of multiple membership levels on the signup form. Use `levels="all"` to show all levels or `levels="1,2,3"` to limit the selection. Levels the user already holds are shown as disabled. #37 (@louiswol94)
* ENHANCEMENT: Replaced the inline reCAPTCHA and Terms of Service rendering with the `pmpro_checkout_preheader` and `pmpro_checkout_before_submit_button` action hooks, so the signup form picks up these features (and any other plugin that integrates with the default checkout) through PMPro core. Requires Paid Memberships Pro 3.2 or higher. #73 (@andrewlimaza)

= 1.1 - 2026-01-06 =
* ENHANCEMENT: Added Block Editor support. Now you can add the signup form using a block instead of a shortcode. #71 (@kimcoleman,@andrewlimaza)
* ENHANCEMENT: Added support for `pmpro_checkout_boxes` hook to allow other Add Ons and custom fields to display on the signup form. #69 (@kimcoleman)
* ENHANCEMENT: Show a warning to admins when no level attribute is set on the shortcode/block or an invalid level is provided. #72 (@andrewlimaza)
* BUG FIX: Fixes an issue with username generation would not work with numbers. This was due to the pmpro_generateUserName function order of parameters. #68 (@andrewlimaza)

= 1.0 - 2025-07-18 =
* BUG FIX: Fixed deprecation warnings that would show when showing user fields on the signup form while running PMPro v3.4+. #66 (@dwanjuki)

= 0.4 - 2024-09-25 =
* ENHANCEMENT: Updated UI for compatibility with PMPro v3.1. #58 (@kimcoleman)
* BUG FIX: Fixed case where user fields for specific level would not show on Signup Form. #60 (@kimcoleman)

= 0.3.3 - 2024-03-21 =
* BUG FIX/ENHANCEMENT: Added a checkout nonce needed for PMPro v3.0+. #56 (@dparker1005)

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
