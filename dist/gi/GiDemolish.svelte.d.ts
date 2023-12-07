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
export type GiDemolishProps = typeof __propDef.props;
export type GiDemolishEvents = typeof __propDef.events;
export type GiDemolishSlots = typeof __propDef.slots;
export default class GiDemolish extends SvelteComponentTyped<GiDemolishProps, GiDemolishEvents, GiDemolishSlots> {
}
export {};
