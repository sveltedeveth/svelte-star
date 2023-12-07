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
export type MdLoyaltyProps = typeof __propDef.props;
export type MdLoyaltyEvents = typeof __propDef.events;
export type MdLoyaltySlots = typeof __propDef.slots;
export default class MdLoyalty extends SvelteComponentTyped<MdLoyaltyProps, MdLoyaltyEvents, MdLoyaltySlots> {
}
export {};
