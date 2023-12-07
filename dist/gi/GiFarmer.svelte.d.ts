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
export type GiFarmerProps = typeof __propDef.props;
export type GiFarmerEvents = typeof __propDef.events;
export type GiFarmerSlots = typeof __propDef.slots;
export default class GiFarmer extends SvelteComponentTyped<GiFarmerProps, GiFarmerEvents, GiFarmerSlots> {
}
export {};
