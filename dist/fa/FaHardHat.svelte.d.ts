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
export type FaHardHatProps = typeof __propDef.props;
export type FaHardHatEvents = typeof __propDef.events;
export type FaHardHatSlots = typeof __propDef.slots;
export default class FaHardHat extends SvelteComponentTyped<FaHardHatProps, FaHardHatEvents, FaHardHatSlots> {
}
export {};
