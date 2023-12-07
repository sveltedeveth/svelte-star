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
export type FaLockOpenProps = typeof __propDef.props;
export type FaLockOpenEvents = typeof __propDef.events;
export type FaLockOpenSlots = typeof __propDef.slots;
export default class FaLockOpen extends SvelteComponentTyped<FaLockOpenProps, FaLockOpenEvents, FaLockOpenSlots> {
}
export {};
