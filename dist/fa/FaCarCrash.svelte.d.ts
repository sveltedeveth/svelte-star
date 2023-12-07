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
export type FaCarCrashProps = typeof __propDef.props;
export type FaCarCrashEvents = typeof __propDef.events;
export type FaCarCrashSlots = typeof __propDef.slots;
export default class FaCarCrash extends SvelteComponentTyped<FaCarCrashProps, FaCarCrashEvents, FaCarCrashSlots> {
}
export {};
