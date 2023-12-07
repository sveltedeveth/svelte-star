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
export type IoIosColorPaletteProps = typeof __propDef.props;
export type IoIosColorPaletteEvents = typeof __propDef.events;
export type IoIosColorPaletteSlots = typeof __propDef.slots;
export default class IoIosColorPalette extends SvelteComponentTyped<IoIosColorPaletteProps, IoIosColorPaletteEvents, IoIosColorPaletteSlots> {
}
export {};
