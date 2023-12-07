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
export type MdSettingsBrightnessProps = typeof __propDef.props;
export type MdSettingsBrightnessEvents = typeof __propDef.events;
export type MdSettingsBrightnessSlots = typeof __propDef.slots;
export default class MdSettingsBrightness extends SvelteComponentTyped<MdSettingsBrightnessProps, MdSettingsBrightnessEvents, MdSettingsBrightnessSlots> {
}
export {};
