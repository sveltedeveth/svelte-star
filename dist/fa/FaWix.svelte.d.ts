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
export type FaWixProps = typeof __propDef.props;
export type FaWixEvents = typeof __propDef.events;
export type FaWixSlots = typeof __propDef.slots;
export default class FaWix extends SvelteComponentTyped<FaWixProps, FaWixEvents, FaWixSlots> {
}
export {};
