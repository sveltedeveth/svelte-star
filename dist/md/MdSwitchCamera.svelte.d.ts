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
export type MdSwitchCameraProps = typeof __propDef.props;
export type MdSwitchCameraEvents = typeof __propDef.events;
export type MdSwitchCameraSlots = typeof __propDef.slots;
export default class MdSwitchCamera extends SvelteComponentTyped<MdSwitchCameraProps, MdSwitchCameraEvents, MdSwitchCameraSlots> {
}
export {};
