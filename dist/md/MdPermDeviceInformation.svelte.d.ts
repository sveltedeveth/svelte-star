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
export type MdPermDeviceInformationProps = typeof __propDef.props;
export type MdPermDeviceInformationEvents = typeof __propDef.events;
export type MdPermDeviceInformationSlots = typeof __propDef.slots;
export default class MdPermDeviceInformation extends SvelteComponentTyped<MdPermDeviceInformationProps, MdPermDeviceInformationEvents, MdPermDeviceInformationSlots> {
}
export {};
