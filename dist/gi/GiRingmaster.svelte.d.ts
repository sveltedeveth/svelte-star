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
export type GiRingmasterProps = typeof __propDef.props;
export type GiRingmasterEvents = typeof __propDef.events;
export type GiRingmasterSlots = typeof __propDef.slots;
export default class GiRingmaster extends SvelteComponentTyped<GiRingmasterProps, GiRingmasterEvents, GiRingmasterSlots> {
}
export {};
