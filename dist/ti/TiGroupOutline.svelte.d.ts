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
export type TiGroupOutlineProps = typeof __propDef.props;
export type TiGroupOutlineEvents = typeof __propDef.events;
export type TiGroupOutlineSlots = typeof __propDef.slots;
export default class TiGroupOutline extends SvelteComponentTyped<TiGroupOutlineProps, TiGroupOutlineEvents, TiGroupOutlineSlots> {
}
export {};
