"use client";

import { NotEditable, type ObjectField, type PreviewProps } from "@keystatic/core";

import type { schema } from "@/components/component-blocks/figure";
import { useObjectUrl } from "@/lib/content/use-object-url";

export const preview = function Preview(props: PreviewProps<ObjectField<typeof schema>>) {
	const buffer = props.fields.image.value?.data.buffer;

	const src = useObjectUrl(buffer);

	return (
		<figure>
			<NotEditable>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img alt="" src={src} />
			</NotEditable>
			<figcaption>{props.fields.caption.element}</figcaption>
		</figure>
	);
};
