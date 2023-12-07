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
export type MdLockOpenProps = typeof __propDef.props;
export type MdLockOpenEvents = typeof __propDef.events;
export type MdLockOpenSlots = typeof __propDef.slots;
export default class MdLockOpen extends SvelteComponentTyped<MdLockOpenProps, MdLockOpenEvents, MdLockOpenSlots> {
}
export {};
