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
export type FaRevProps = typeof __propDef.props;
export type FaRevEvents = typeof __propDef.events;
export type FaRevSlots = typeof __propDef.slots;
export default class FaRev extends SvelteComponentTyped<FaRevProps, FaRevEvents, FaRevSlots> {
}
export {};
