const config = {
	extends: [
		"stylelint-config-standard",
		"stylelint-config-hudochenkov/order",
		"stylelint-config-html",
	],
	allowEmptyInput: true,
	reportNeedlessDisables: true,
	rules: {
		/** Vendor prefixes should be handled by postcss autoprefixer. */
		"at-rule-no-vendor-prefix": true,
		"media-feature-name-no-vendor-prefix": true,
		"property-no-vendor-prefix": true,
		"selector-no-vendor-prefix": true,
		"value-no-vendor-prefix": true,

		/** Limits. */
		"alpha-value-notation": "percentage",
		"color-function-notation": "modern",
		"color-named": "never",
		"color-no-hex": [true, { severity: "warning" }],
		"font-weight-notation": "numeric",
		"hue-degree-notation": "angle",

		/** Overwrite defaults from `stylelint-config-standard` to allow separate `grid-template-rows` and `grid-template-columns`. */
		"declaration-block-no-redundant-longhand-properties": [true, { ignoreShorthands: ["/grid/"] }],

		/** Allow `theme` function, used e.g. by tailwind. */
		"function-no-unknown": [true, { ignoreFunctions: ["theme"] }],

		/** Overwrite defaults from `stylelint-config-standard` to allow `#__nuxt`. */
		"selector-id-pattern": [
			"^(_{0,2}[a-z][a-z0-9]*)(-[a-z0-9]+)*$",
			{ message: "Expected id selector to be kebab-case" },
		],

		/** Allow css modules `:global()` pseudo class. */
		"selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }],

		/** Dont't error on `text-rendering` camelcase values, use `currentColor`. */
		"value-keyword-case": ["lower", { camelCaseSvgKeywords: true, ignoreFunctions: ["theme"] }],
	},
};

module.exports = config;
