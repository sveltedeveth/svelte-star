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
export type MdCancelProps = typeof __propDef.props;
export type MdCancelEvents = typeof __propDef.events;
export type MdCancelSlots = typeof __propDef.slots;
export default class MdCancel extends SvelteComponentTyped<MdCancelProps, MdCancelEvents, MdCancelSlots> {
}
export {};
