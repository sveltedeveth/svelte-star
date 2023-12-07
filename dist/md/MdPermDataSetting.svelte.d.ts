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
export type MdPermDataSettingProps = typeof __propDef.props;
export type MdPermDataSettingEvents = typeof __propDef.events;
export type MdPermDataSettingSlots = typeof __propDef.slots;
export default class MdPermDataSetting extends SvelteComponentTyped<MdPermDataSettingProps, MdPermDataSettingEvents, MdPermDataSettingSlots> {
}
export {};
