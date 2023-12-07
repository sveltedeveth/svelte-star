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
export type MdRedeemProps = typeof __propDef.props;
export type MdRedeemEvents = typeof __propDef.events;
export type MdRedeemSlots = typeof __propDef.slots;
export default class MdRedeem extends SvelteComponentTyped<MdRedeemProps, MdRedeemEvents, MdRedeemSlots> {
}
export {};
