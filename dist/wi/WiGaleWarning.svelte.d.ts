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
export type WiGaleWarningProps = typeof __propDef.props;
export type WiGaleWarningEvents = typeof __propDef.events;
export type WiGaleWarningSlots = typeof __propDef.slots;
export default class WiGaleWarning extends SvelteComponentTyped<WiGaleWarningProps, WiGaleWarningEvents, WiGaleWarningSlots> {
}
export {};
