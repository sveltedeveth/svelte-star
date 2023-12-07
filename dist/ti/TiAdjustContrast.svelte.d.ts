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
export type TiAdjustContrastProps = typeof __propDef.props;
export type TiAdjustContrastEvents = typeof __propDef.events;
export type TiAdjustContrastSlots = typeof __propDef.slots;
export default class TiAdjustContrast extends SvelteComponentTyped<TiAdjustContrastProps, TiAdjustContrastEvents, TiAdjustContrastSlots> {
}
export {};
