export declare global {
    interface Window {
        selectedLanguage: string,
        toggleLanguage: VoidFunction,
        changeLanguage(newLanguage: string): void
    }
}