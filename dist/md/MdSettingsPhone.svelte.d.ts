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
export type MdSettingsPhoneProps = typeof __propDef.props;
export type MdSettingsPhoneEvents = typeof __propDef.events;
export type MdSettingsPhoneSlots = typeof __propDef.slots;
export default class MdSettingsPhone extends SvelteComponentTyped<MdSettingsPhoneProps, MdSettingsPhoneEvents, MdSettingsPhoneSlots> {
}
export {};
