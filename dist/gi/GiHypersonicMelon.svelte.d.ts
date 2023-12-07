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
export type GiHypersonicMelonProps = typeof __propDef.props;
export type GiHypersonicMelonEvents = typeof __propDef.events;
export type GiHypersonicMelonSlots = typeof __propDef.slots;
export default class GiHypersonicMelon extends SvelteComponentTyped<GiHypersonicMelonProps, GiHypersonicMelonEvents, GiHypersonicMelonSlots> {
}
export {};
