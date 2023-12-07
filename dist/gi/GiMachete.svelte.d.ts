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
export type GiMacheteProps = typeof __propDef.props;
export type GiMacheteEvents = typeof __propDef.events;
export type GiMacheteSlots = typeof __propDef.slots;
export default class GiMachete extends SvelteComponentTyped<GiMacheteProps, GiMacheteEvents, GiMacheteSlots> {
}
export {};
