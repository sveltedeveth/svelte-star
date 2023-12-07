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
export type FaRegAddressCardProps = typeof __propDef.props;
export type FaRegAddressCardEvents = typeof __propDef.events;
export type FaRegAddressCardSlots = typeof __propDef.slots;
export default class FaRegAddressCard extends SvelteComponentTyped<FaRegAddressCardProps, FaRegAddressCardEvents, FaRegAddressCardSlots> {
}
export {};
