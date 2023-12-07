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
export type GiManualJuicerProps = typeof __propDef.props;
export type GiManualJuicerEvents = typeof __propDef.events;
export type GiManualJuicerSlots = typeof __propDef.slots;
export default class GiManualJuicer extends SvelteComponentTyped<GiManualJuicerProps, GiManualJuicerEvents, GiManualJuicerSlots> {
}
export {};
