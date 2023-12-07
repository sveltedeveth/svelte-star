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
export type FaUnlockProps = typeof __propDef.props;
export type FaUnlockEvents = typeof __propDef.events;
export type FaUnlockSlots = typeof __propDef.slots;
export default class FaUnlock extends SvelteComponentTyped<FaUnlockProps, FaUnlockEvents, FaUnlockSlots> {
}
export {};
