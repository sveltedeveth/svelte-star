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
export type FaSolarPanelProps = typeof __propDef.props;
export type FaSolarPanelEvents = typeof __propDef.events;
export type FaSolarPanelSlots = typeof __propDef.slots;
export default class FaSolarPanel extends SvelteComponentTyped<FaSolarPanelProps, FaSolarPanelEvents, FaSolarPanelSlots> {
}
export {};
