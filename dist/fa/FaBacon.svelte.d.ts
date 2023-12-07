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
export type FaBaconProps = typeof __propDef.props;
export type FaBaconEvents = typeof __propDef.events;
export type FaBaconSlots = typeof __propDef.slots;
export default class FaBacon extends SvelteComponentTyped<FaBaconProps, FaBaconEvents, FaBaconSlots> {
}
export {};
