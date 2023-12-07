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
export type GiSpikedHaloProps = typeof __propDef.props;
export type GiSpikedHaloEvents = typeof __propDef.events;
export type GiSpikedHaloSlots = typeof __propDef.slots;
export default class GiSpikedHalo extends SvelteComponentTyped<GiSpikedHaloProps, GiSpikedHaloEvents, GiSpikedHaloSlots> {
}
export {};
