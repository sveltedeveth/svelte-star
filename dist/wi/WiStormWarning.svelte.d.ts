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
export type WiStormWarningProps = typeof __propDef.props;
export type WiStormWarningEvents = typeof __propDef.events;
export type WiStormWarningSlots = typeof __propDef.slots;
export default class WiStormWarning extends SvelteComponentTyped<WiStormWarningProps, WiStormWarningEvents, WiStormWarningSlots> {
}
export {};
