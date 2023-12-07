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
export type TiGroupProps = typeof __propDef.props;
export type TiGroupEvents = typeof __propDef.events;
export type TiGroupSlots = typeof __propDef.slots;
export default class TiGroup extends SvelteComponentTyped<TiGroupProps, TiGroupEvents, TiGroupSlots> {
}
export {};
