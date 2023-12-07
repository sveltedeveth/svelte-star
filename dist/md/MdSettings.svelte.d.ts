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
export type MdSettingsProps = typeof __propDef.props;
export type MdSettingsEvents = typeof __propDef.events;
export type MdSettingsSlots = typeof __propDef.slots;
export default class MdSettings extends SvelteComponentTyped<MdSettingsProps, MdSettingsEvents, MdSettingsSlots> {
}
export {};
