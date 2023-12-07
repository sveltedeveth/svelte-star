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
export type GiBaseballBatProps = typeof __propDef.props;
export type GiBaseballBatEvents = typeof __propDef.events;
export type GiBaseballBatSlots = typeof __propDef.slots;
export default class GiBaseballBat extends SvelteComponentTyped<GiBaseballBatProps, GiBaseballBatEvents, GiBaseballBatSlots> {
}
export {};
