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
export type IoMdColorPaletteProps = typeof __propDef.props;
export type IoMdColorPaletteEvents = typeof __propDef.events;
export type IoMdColorPaletteSlots = typeof __propDef.slots;
export default class IoMdColorPalette extends SvelteComponentTyped<IoMdColorPaletteProps, IoMdColorPaletteEvents, IoMdColorPaletteSlots> {
}
export {};
