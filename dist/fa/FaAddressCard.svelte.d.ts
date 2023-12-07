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
export type FaAddressCardProps = typeof __propDef.props;
export type FaAddressCardEvents = typeof __propDef.events;
export type FaAddressCardSlots = typeof __propDef.slots;
export default class FaAddressCard extends SvelteComponentTyped<FaAddressCardProps, FaAddressCardEvents, FaAddressCardSlots> {
}
export {};
