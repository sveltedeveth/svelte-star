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
export type FaAmiliaProps = typeof __propDef.props;
export type FaAmiliaEvents = typeof __propDef.events;
export type FaAmiliaSlots = typeof __propDef.slots;
export default class FaAmilia extends SvelteComponentTyped<FaAmiliaProps, FaAmiliaEvents, FaAmiliaSlots> {
}
export {};
