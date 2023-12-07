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
export type GiFocusedLightningProps = typeof __propDef.props;
export type GiFocusedLightningEvents = typeof __propDef.events;
export type GiFocusedLightningSlots = typeof __propDef.slots;
export default class GiFocusedLightning extends SvelteComponentTyped<GiFocusedLightningProps, GiFocusedLightningEvents, GiFocusedLightningSlots> {
}
export {};
