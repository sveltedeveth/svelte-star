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
export type IoMdSwitchProps = typeof __propDef.props;
export type IoMdSwitchEvents = typeof __propDef.events;
export type IoMdSwitchSlots = typeof __propDef.slots;
export default class IoMdSwitch extends SvelteComponentTyped<IoMdSwitchProps, IoMdSwitchEvents, IoMdSwitchSlots> {
}
export {};
