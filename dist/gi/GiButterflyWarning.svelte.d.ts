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
export type GiButterflyWarningProps = typeof __propDef.props;
export type GiButterflyWarningEvents = typeof __propDef.events;
export type GiButterflyWarningSlots = typeof __propDef.slots;
export default class GiButterflyWarning extends SvelteComponentTyped<GiButterflyWarningProps, GiButterflyWarningEvents, GiButterflyWarningSlots> {
}
export {};
