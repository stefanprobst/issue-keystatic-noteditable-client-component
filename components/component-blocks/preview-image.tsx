"use client";

import type { ReactNode } from "react";

import { useObjectUrl } from "@/lib/content/use-object-url";

interface PreviewImageProps {
	data: Uint8Array | undefined
}

export function PreviewImage(props: PreviewImageProps): ReactNode {
	const { data } = props

	const src = useObjectUrl(data?.buffer);

	return <img alt="" src={src} />
}