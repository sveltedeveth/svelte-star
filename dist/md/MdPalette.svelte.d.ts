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
export type MdPaletteProps = typeof __propDef.props;
export type MdPaletteEvents = typeof __propDef.events;
export type MdPaletteSlots = typeof __propDef.slots;
export default class MdPalette extends SvelteComponentTyped<MdPaletteProps, MdPaletteEvents, MdPaletteSlots> {
}
export {};
