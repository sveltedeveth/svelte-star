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
export type TiFlowSwitchProps = typeof __propDef.props;
export type TiFlowSwitchEvents = typeof __propDef.events;
export type TiFlowSwitchSlots = typeof __propDef.slots;
export default class TiFlowSwitch extends SvelteComponentTyped<TiFlowSwitchProps, TiFlowSwitchEvents, TiFlowSwitchSlots> {
}
export {};
