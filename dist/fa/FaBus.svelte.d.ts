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
export type FaBusProps = typeof __propDef.props;
export type FaBusEvents = typeof __propDef.events;
export type FaBusSlots = typeof __propDef.slots;
export default class FaBus extends SvelteComponentTyped<FaBusProps, FaBusEvents, FaBusSlots> {
}
export {};
