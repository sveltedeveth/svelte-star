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
export type MdBackupProps = typeof __propDef.props;
export type MdBackupEvents = typeof __propDef.events;
export type MdBackupSlots = typeof __propDef.slots;
export default class MdBackup extends SvelteComponentTyped<MdBackupProps, MdBackupEvents, MdBackupSlots> {
}
export {};
