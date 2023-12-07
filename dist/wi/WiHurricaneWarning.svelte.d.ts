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
export type WiHurricaneWarningProps = typeof __propDef.props;
export type WiHurricaneWarningEvents = typeof __propDef.events;
export type WiHurricaneWarningSlots = typeof __propDef.slots;
export default class WiHurricaneWarning extends SvelteComponentTyped<WiHurricaneWarningProps, WiHurricaneWarningEvents, WiHurricaneWarningSlots> {
}
export {};
