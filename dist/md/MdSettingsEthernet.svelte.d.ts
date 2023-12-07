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
export type MdSettingsEthernetProps = typeof __propDef.props;
export type MdSettingsEthernetEvents = typeof __propDef.events;
export type MdSettingsEthernetSlots = typeof __propDef.slots;
export default class MdSettingsEthernet extends SvelteComponentTyped<MdSettingsEthernetProps, MdSettingsEthernetEvents, MdSettingsEthernetSlots> {
}
export {};
