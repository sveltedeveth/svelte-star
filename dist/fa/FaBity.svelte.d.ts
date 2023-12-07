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
export type FaBityProps = typeof __propDef.props;
export type FaBityEvents = typeof __propDef.events;
export type FaBitySlots = typeof __propDef.slots;
export default class FaBity extends SvelteComponentTyped<FaBityProps, FaBityEvents, FaBitySlots> {
}
export {};
