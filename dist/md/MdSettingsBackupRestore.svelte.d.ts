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
export type MdSettingsBackupRestoreProps = typeof __propDef.props;
export type MdSettingsBackupRestoreEvents = typeof __propDef.events;
export type MdSettingsBackupRestoreSlots = typeof __propDef.slots;
export default class MdSettingsBackupRestore extends SvelteComponentTyped<MdSettingsBackupRestoreProps, MdSettingsBackupRestoreEvents, MdSettingsBackupRestoreSlots> {
}
export {};
