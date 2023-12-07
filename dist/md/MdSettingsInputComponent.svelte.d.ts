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
export type MdSettingsInputComponentProps = typeof __propDef.props;
export type MdSettingsInputComponentEvents = typeof __propDef.events;
export type MdSettingsInputComponentSlots = typeof __propDef.slots;
export default class MdSettingsInputComponent extends SvelteComponentTyped<MdSettingsInputComponentProps, MdSettingsInputComponentEvents, MdSettingsInputComponentSlots> {
}
export {};
