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
export type MdSettingsPowerProps = typeof __propDef.props;
export type MdSettingsPowerEvents = typeof __propDef.events;
export type MdSettingsPowerSlots = typeof __propDef.slots;
export default class MdSettingsPower extends SvelteComponentTyped<MdSettingsPowerProps, MdSettingsPowerEvents, MdSettingsPowerSlots> {
}
export {};
