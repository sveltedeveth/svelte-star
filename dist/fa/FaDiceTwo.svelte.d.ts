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
export type FaDiceTwoProps = typeof __propDef.props;
export type FaDiceTwoEvents = typeof __propDef.events;
export type FaDiceTwoSlots = typeof __propDef.slots;
export default class FaDiceTwo extends SvelteComponentTyped<FaDiceTwoProps, FaDiceTwoEvents, FaDiceTwoSlots> {
}
export {};
