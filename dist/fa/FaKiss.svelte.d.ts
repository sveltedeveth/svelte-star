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
export type FaKissProps = typeof __propDef.props;
export type FaKissEvents = typeof __propDef.events;
export type FaKissSlots = typeof __propDef.slots;
export default class FaKiss extends SvelteComponentTyped<FaKissProps, FaKissEvents, FaKissSlots> {
}
export {};
