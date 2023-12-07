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
export type GiOldWagonProps = typeof __propDef.props;
export type GiOldWagonEvents = typeof __propDef.events;
export type GiOldWagonSlots = typeof __propDef.slots;
export default class GiOldWagon extends SvelteComponentTyped<GiOldWagonProps, GiOldWagonEvents, GiOldWagonSlots> {
}
export {};
