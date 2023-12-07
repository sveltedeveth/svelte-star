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
export type GiBackupProps = typeof __propDef.props;
export type GiBackupEvents = typeof __propDef.events;
export type GiBackupSlots = typeof __propDef.slots;
export default class GiBackup extends SvelteComponentTyped<GiBackupProps, GiBackupEvents, GiBackupSlots> {
}
export {};
