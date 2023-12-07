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
export type FaPaletteProps = typeof __propDef.props;
export type FaPaletteEvents = typeof __propDef.events;
export type FaPaletteSlots = typeof __propDef.slots;
export default class FaPalette extends SvelteComponentTyped<FaPaletteProps, FaPaletteEvents, FaPaletteSlots> {
}
export {};
