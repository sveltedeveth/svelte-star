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
export type GiMeatCleaverProps = typeof __propDef.props;
export type GiMeatCleaverEvents = typeof __propDef.events;
export type GiMeatCleaverSlots = typeof __propDef.slots;
export default class GiMeatCleaver extends SvelteComponentTyped<GiMeatCleaverProps, GiMeatCleaverEvents, GiMeatCleaverSlots> {
}
export {};
