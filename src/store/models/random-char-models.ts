export interface Main {
	items: Item[];
	count: number;
}

export interface Item {
	id: number;
	id_v2: string;
	image_url: string;
	sample_url: string;
	image_size: number;
	image_width: number;
	image_height: number;
	sample_size: number;
	sample_width: number;
	sample_height: number;
	source: null | string;
	source_id: null;
	rating: Rating;
	verification: Verification;
	hash_md5: string;
	hash_perceptual: string;
	color_dominant: number[];
	color_palette: Array<number[]>;
	duration: null;
	is_original: boolean;
	is_screenshot: boolean;
	is_flagged: boolean;
	is_animated: boolean;
	artist: Artist | null;
	characters: unknown[];
	tags: unknown[];
	created_at: number;
	updated_at: number;
}

export interface Artist {
	id: number;
	id_v2: string;
	name: string;
	aliases: string[];
	image_url: null;
	links: string[];
	policy_repost: null;
	policy_credit: boolean;
	policy_ai: boolean;
}

export enum Rating {
	Borderline = "borderline",
	Explicit = "explicit",
	Safe = "safe",
	Suggestive = "suggestive",
}

export enum Verification {
	Verified = "verified",
}
