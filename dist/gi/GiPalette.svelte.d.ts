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
export type GiPaletteProps = typeof __propDef.props;
export type GiPaletteEvents = typeof __propDef.events;
export type GiPaletteSlots = typeof __propDef.slots;
export default class GiPalette extends SvelteComponentTyped<GiPaletteProps, GiPaletteEvents, GiPaletteSlots> {
}
export {};
