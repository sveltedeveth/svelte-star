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
export type MdSettingsRemoteProps = typeof __propDef.props;
export type MdSettingsRemoteEvents = typeof __propDef.events;
export type MdSettingsRemoteSlots = typeof __propDef.slots;
export default class MdSettingsRemote extends SvelteComponentTyped<MdSettingsRemoteProps, MdSettingsRemoteEvents, MdSettingsRemoteSlots> {
}
export {};
