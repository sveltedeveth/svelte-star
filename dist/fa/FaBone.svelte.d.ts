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
export type FaBoneProps = typeof __propDef.props;
export type FaBoneEvents = typeof __propDef.events;
export type FaBoneSlots = typeof __propDef.slots;
export default class FaBone extends SvelteComponentTyped<FaBoneProps, FaBoneEvents, FaBoneSlots> {
}
export {};
