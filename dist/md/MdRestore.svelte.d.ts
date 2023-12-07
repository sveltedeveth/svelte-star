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
export type MdRestoreProps = typeof __propDef.props;
export type MdRestoreEvents = typeof __propDef.events;
export type MdRestoreSlots = typeof __propDef.slots;
export default class MdRestore extends SvelteComponentTyped<MdRestoreProps, MdRestoreEvents, MdRestoreSlots> {
}
export {};
