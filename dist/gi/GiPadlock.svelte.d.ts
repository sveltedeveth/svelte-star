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
export type GiPadlockProps = typeof __propDef.props;
export type GiPadlockEvents = typeof __propDef.events;
export type GiPadlockSlots = typeof __propDef.slots;
export default class GiPadlock extends SvelteComponentTyped<GiPadlockProps, GiPadlockEvents, GiPadlockSlots> {
}
export {};
