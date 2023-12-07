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
export type GiPartyFlagsProps = typeof __propDef.props;
export type GiPartyFlagsEvents = typeof __propDef.events;
export type GiPartyFlagsSlots = typeof __propDef.slots;
export default class GiPartyFlags extends SvelteComponentTyped<GiPartyFlagsProps, GiPartyFlagsEvents, GiPartyFlagsSlots> {
}
export {};
