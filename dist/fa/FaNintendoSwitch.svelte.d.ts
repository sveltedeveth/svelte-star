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
export type FaNintendoSwitchProps = typeof __propDef.props;
export type FaNintendoSwitchEvents = typeof __propDef.events;
export type FaNintendoSwitchSlots = typeof __propDef.slots;
export default class FaNintendoSwitch extends SvelteComponentTyped<FaNintendoSwitchProps, FaNintendoSwitchEvents, FaNintendoSwitchSlots> {
}
export {};
