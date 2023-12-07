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
export type FaDiceFourProps = typeof __propDef.props;
export type FaDiceFourEvents = typeof __propDef.events;
export type FaDiceFourSlots = typeof __propDef.slots;
export default class FaDiceFour extends SvelteComponentTyped<FaDiceFourProps, FaDiceFourEvents, FaDiceFourSlots> {
}
export {};
