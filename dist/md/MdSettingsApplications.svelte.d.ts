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
export type MdSettingsApplicationsProps = typeof __propDef.props;
export type MdSettingsApplicationsEvents = typeof __propDef.events;
export type MdSettingsApplicationsSlots = typeof __propDef.slots;
export default class MdSettingsApplications extends SvelteComponentTyped<MdSettingsApplicationsProps, MdSettingsApplicationsEvents, MdSettingsApplicationsSlots> {
}
export {};
