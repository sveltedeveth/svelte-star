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
export type FaTshirtProps = typeof __propDef.props;
export type FaTshirtEvents = typeof __propDef.events;
export type FaTshirtSlots = typeof __propDef.slots;
export default class FaTshirt extends SvelteComponentTyped<FaTshirtProps, FaTshirtEvents, FaTshirtSlots> {
}
export {};
