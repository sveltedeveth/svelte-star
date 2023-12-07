import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MdWallpaperProps = typeof __propDef.props;
export type MdWallpaperEvents = typeof __propDef.events;
export type MdWallpaperSlots = typeof __propDef.slots;
export default class MdWallpaper extends SvelteComponentTyped<MdWallpaperProps, MdWallpaperEvents, MdWallpaperSlots> {
}
export {};
