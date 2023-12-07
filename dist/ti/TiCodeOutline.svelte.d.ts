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
export type TiCodeOutlineProps = typeof __propDef.props;
export type TiCodeOutlineEvents = typeof __propDef.events;
export type TiCodeOutlineSlots = typeof __propDef.slots;
export default class TiCodeOutline extends SvelteComponentTyped<TiCodeOutlineProps, TiCodeOutlineEvents, TiCodeOutlineSlots> {
}
export {};
