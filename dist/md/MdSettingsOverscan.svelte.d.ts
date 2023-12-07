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
export type MdSettingsOverscanProps = typeof __propDef.props;
export type MdSettingsOverscanEvents = typeof __propDef.events;
export type MdSettingsOverscanSlots = typeof __propDef.slots;
export default class MdSettingsOverscan extends SvelteComponentTyped<MdSettingsOverscanProps, MdSettingsOverscanEvents, MdSettingsOverscanSlots> {
}
export {};
