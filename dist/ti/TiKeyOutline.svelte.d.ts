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
export type TiKeyOutlineProps = typeof __propDef.props;
export type TiKeyOutlineEvents = typeof __propDef.events;
export type TiKeyOutlineSlots = typeof __propDef.slots;
export default class TiKeyOutline extends SvelteComponentTyped<TiKeyOutlineProps, TiKeyOutlineEvents, TiKeyOutlineSlots> {
}
export {};
