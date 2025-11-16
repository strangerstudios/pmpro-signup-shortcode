import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from 'react';

/**
 * Fetch all membership levels and return a value:id, label:name pair.
 *
 * @returns {Promise} Promise resolving to an array of membership levels.
 */
async function pmprosus_get_all_levels() {
	try {
		const levels = await apiFetch({ path: '/pmpro/v1/membership_levels', method: 'GET' });

		Object.keys(levels).forEach((key) => {
			levels[key] = { value: levels[key].id, label: levels[key].name };
		});

		return Object.values(levels);
	} catch (error) {
		console.error('Failed to fetch membership levels:', error);
		return [];
	}
}

export default function Edit({ attributes, setAttributes }) {
	
	const blockProps = useBlockProps();
	const {
		intro,
		hidelabels,
		level,
		login,
		redirect,
		short,
		submit_button,
		title,
		custom_fields,
		confirm_email,
		confirm_password
	} = attributes;
	const [levelsOptions, setLevelsOptions] = useState([]);
	useEffect(() => {
		pmprosus_get_all_levels().then(setLevelsOptions);
	}, []);

	return (
		<>
		<InspectorControls>
			<PanelBody>
				<TextControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ __( 'Title', 'pmpro-signup-shortcode' ) }
					help={ __( 'Optionally specify a title to display above the form.', 'pmpro-signup-shortcode' ) }
					value={title}
					onChange={(value) => setAttributes({ title: value })}
				/>
				<SelectControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ __( 'Level', 'pmpro-signup-shortcode' ) }
					value={level}
					options={[
						{ label: __('Choose a level', 'pmpro-signup-shortcode'), value: '' },
						...levelsOptions
					]}
					onChange={(value) => setAttributes({ level: value })}
				/>
				<TextControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ __( 'Intro', 'pmpro-signup-shortcode' ) }
					help={ __( 'Leave blank for no intro. This text appears above the signup fields.', 'pmpro-signup-shortcode' ) }
					value={intro}
					onChange={(value) => setAttributes({ intro: value })}
				/>
				<TextControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ __( 'Redirect', 'pmpro-signup-shortcode' ) }
					help={ __( 'Optionally specify a URL to redirect to after signup. Accepts "referrer" or "account".', 'pmpro-signup-shortcode' ) }
					value={redirect}
					onChange={(value) => setAttributes({ redirect: value })}
				/>
				<SelectControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ __( 'Form Length', 'pmpro-signup-shortcode' ) }
					help={ __( 'Choose how many required account fields to show.', 'pmpro-signup-shortcode' ) }
					value={short}
					options={[
						{ label: __( 'Full Form (default)', 'pmpro-signup-shortcode' ), value: 'false' },
						{ label: __( 'Short (no confirm fields)', 'pmpro-signup-shortcode' ), value: 'true' },
						{ label: __( 'Email Only Signup', 'pmpro-signup-shortcode' ), value: 'emailonly' },
					]}
					onChange={(value) => setAttributes({ short: value })}
				/>
				{ short == 'false' && (
				<div>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Confirm Email', 'pmpro-signup-shortcode' ) }
						help={ __( 'Require users to confirm their email address by entering it twice.', 'pmpro-signup-shortcode' ) }
						checked={confirm_email}
						onChange={(value) => setAttributes({ confirm_email: value })}
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Confirm Password', 'pmpro-signup-shortcode' ) }
						help={ __( 'Require users to confirm their password by entering it twice.', 'pmpro-signup-shortcode' ) }
						checked={confirm_password}
						onChange={(value) => setAttributes({ confirm_password: value })}
					/>
				</div>
				)}
				<TextControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ __( 'Submit Button Text', 'pmpro-signup-shortcode' ) }
					help={ __( 'Customize the text on the submit button.', 'pmpro-signup-shortcode' ) }
					value={submit_button}
					onChange={(value) => setAttributes({ submit_button: value })}
				/>
				<ToggleControl
					__nextHasNoMarginBottom
					label={ __( 'Hide Labels', 'pmpro-signup-shortcode' ) }
					help={ __( 'Hide field labels visually and use placeholders instead.', 'pmpro-signup-shortcode' ) }
					checked={hidelabels}
					onChange={(value) => setAttributes({ hidelabels: value })}
				/>
				<ToggleControl
					__nextHasNoMarginBottom
					label={ __( 'Login', 'pmpro-signup-shortcode' ) }
					help={ __( 'Display a login link for current members below the form.', 'pmpro-signup-shortcode' ) }
					checked={login}
					onChange={(value) => setAttributes({ login: value })}
				/>
				<ToggleControl
					__nextHasNoMarginBottom
					label={ __( 'Custom Fields', 'pmpro-signup-shortcode' ) }
					help={ __( 'Display custom user fields defined in Memberships > Settings > User Fields.', 'pmpro-signup-shortcode' ) }
					checked={custom_fields}
					onChange={(value) => setAttributes({ custom_fields: value })}
				/>
			</PanelBody>
		</InspectorControls>
		<div { ...blockProps }>
			<div className="pmpro-block-element" { ...blockProps }>
				<span className="pmpro-block-title">{ __( 'Paid Memberships Pro', 'pmpro-signup-shortcode' ) }</span>
				<span className="pmpro-block-subtitle">{ __( 'Signup Block', 'pmpro-signup-shortcode' ) }</span>
			</div>
		</div>
		</>
	);
}
