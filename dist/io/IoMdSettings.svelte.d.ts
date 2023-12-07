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
export type IoMdSettingsProps = typeof __propDef.props;
export type IoMdSettingsEvents = typeof __propDef.events;
export type IoMdSettingsSlots = typeof __propDef.slots;
export default class IoMdSettings extends SvelteComponentTyped<IoMdSettingsProps, IoMdSettingsEvents, IoMdSettingsSlots> {
}
export {};
