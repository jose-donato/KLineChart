export const STORAGE_LANGUAGE_KEY = "klinecharts-docs-language";

export function getStoredLanguage() {
	if (typeof localStorage !== "undefined") {
		return localStorage.getItem(STORAGE_LANGUAGE_KEY) || "zh-CN";
	}
	return "zh-CN";
}

export function storeLanguage(lang) {
	if (typeof localStorage !== "undefined") {
		localStorage.setItem(STORAGE_LANGUAGE_KEY, lang);
	}
}
