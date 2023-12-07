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
export type MdPowerSettingsNewProps = typeof __propDef.props;
export type MdPowerSettingsNewEvents = typeof __propDef.events;
export type MdPowerSettingsNewSlots = typeof __propDef.slots;
export default class MdPowerSettingsNew extends SvelteComponentTyped<MdPowerSettingsNewProps, MdPowerSettingsNewEvents, MdPowerSettingsNewSlots> {
}
export {};
