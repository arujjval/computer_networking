import { writable } from 'svelte/store';

function theme_state() {
    const { subscribe, update } = writable('dark');

    return {
        subscribe,
        // @ts-ignore
        toggle: () => update((theme) => theme === 'light' ? 'dark' : 'light'),
    };

}

export const theme = theme_state();