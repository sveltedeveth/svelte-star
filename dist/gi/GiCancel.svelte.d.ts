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
export type GiCancelProps = typeof __propDef.props;
export type GiCancelEvents = typeof __propDef.events;
export type GiCancelSlots = typeof __propDef.slots;
export default class GiCancel extends SvelteComponentTyped<GiCancelProps, GiCancelEvents, GiCancelSlots> {
}
export {};
