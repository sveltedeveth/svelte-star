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
export type MdSettingsCellProps = typeof __propDef.props;
export type MdSettingsCellEvents = typeof __propDef.events;
export type MdSettingsCellSlots = typeof __propDef.slots;
export default class MdSettingsCell extends SvelteComponentTyped<MdSettingsCellProps, MdSettingsCellEvents, MdSettingsCellSlots> {
}
export {};
