import { component, fields } from "@keystatic/core";

import { preview } from "@/components/component-blocks/figure.preview";

export const schema = {
	image: fields.image({
		label: "Image",
		directory: './public/assets/',
		publicPath: '/assets/',
		validation: { isRequired: true },
	}),
	caption: fields.child({
		kind: "block",
		editIn: "both",
		label: "Caption",
		placeholder: "Add image caption",
		formatting: {
			inlineMarks: "inherit",
		},
		links: "inherit",
	}),
};

export const figure = component({
	label: "Figure",
	schema,
	preview,
});
