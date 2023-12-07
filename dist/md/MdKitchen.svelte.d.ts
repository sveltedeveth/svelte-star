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
export type MdKitchenProps = typeof __propDef.props;
export type MdKitchenEvents = typeof __propDef.events;
export type MdKitchenSlots = typeof __propDef.slots;
export default class MdKitchen extends SvelteComponentTyped<MdKitchenProps, MdKitchenEvents, MdKitchenSlots> {
}
export {};
