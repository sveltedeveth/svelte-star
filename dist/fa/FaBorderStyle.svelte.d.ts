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
export type FaBorderStyleProps = typeof __propDef.props;
export type FaBorderStyleEvents = typeof __propDef.events;
export type FaBorderStyleSlots = typeof __propDef.slots;
export default class FaBorderStyle extends SvelteComponentTyped<FaBorderStyleProps, FaBorderStyleEvents, FaBorderStyleSlots> {
}
export {};
