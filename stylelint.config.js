/** @type {import('stylelint').Config} */
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

		/** Allow `@apply` tailwind directive. */
		"at-rule-no-deprecated": [
			true,
			{
				ignoreAtRules: ["apply"],
			},
		],

		/** Allow `@tailwind` (v3) directive, and tailwind (v4) directives. */
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"config",
					"custom-variant",
					"plugin",
					"reference",
					"source",
					"tailwind",
					"theme",
					"utility",
					"variant",
				],
			},
		],

		/** Allow underscore prefix, double-dash, and trailing `-*` on custom properties. */
		"custom-property-pattern": [
			"^(_{0,2}[a-z][a-z0-9]*)(-{1,2}[a-z0-9_]+)*(-\\*)?$",
			{
				message: (name) => `Expected custom property name "${name}" to be kebab-case`,
			},
		],

		/** Overwrite defaults from `stylelint-config-standard` to allow separate `grid-template-rows` and `grid-template-columns`. */
		"declaration-block-no-redundant-longhand-properties": [
			true,
			{ ignoreShorthands: ["/gap/", "/grid/"] },
		],

		/** Allow functions used by tailwind. */
		"function-no-unknown": [true, { ignoreFunctions: ["--alpha", "--spacing", "theme"] }],

		/** Prefer plain strings over `url()` in `@import` statements. */
		"import-notation": ["string"],

		/** Allow `screen` and `theme` functions, used by tailwind. */
		"media-query-no-invalid": [true, { ignoreFunctions: ["screen", "theme"] }],

		/** Overwrite defaults from `stylelint-config-standard` to allow `#__nuxt`. */
		"selector-id-pattern": [
			"^(_{0,2}[a-z][a-z0-9]*)(-[a-z0-9]+)*$",
			{ message: "Expected id selector to be kebab-case" },
		],

		/** Allow css modules `:global()` pseudo class. */
		"selector-pseudo-class-no-unknown": [
			true,
			{ ignorePseudoClasses: ["deep", "global", "slotted"] },
		],

		/** Dont't error on `text-rendering` camelcase values, use `currentColor`. */
		"value-keyword-case": ["lower", { camelCaseSvgKeywords: true, ignoreFunctions: ["theme"] }],
	},
};

export default config;
