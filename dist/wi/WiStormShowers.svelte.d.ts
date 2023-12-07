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
export type WiStormShowersProps = typeof __propDef.props;
export type WiStormShowersEvents = typeof __propDef.events;
export type WiStormShowersSlots = typeof __propDef.slots;
export default class WiStormShowers extends SvelteComponentTyped<WiStormShowersProps, WiStormShowersEvents, WiStormShowersSlots> {
}
export {};
