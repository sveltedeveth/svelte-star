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
export type TiCancelProps = typeof __propDef.props;
export type TiCancelEvents = typeof __propDef.events;
export type TiCancelSlots = typeof __propDef.slots;
export default class TiCancel extends SvelteComponentTyped<TiCancelProps, TiCancelEvents, TiCancelSlots> {
}
export {};
