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
export type FaCpanelProps = typeof __propDef.props;
export type FaCpanelEvents = typeof __propDef.events;
export type FaCpanelSlots = typeof __propDef.slots;
export default class FaCpanel extends SvelteComponentTyped<FaCpanelProps, FaCpanelEvents, FaCpanelSlots> {
}
export {};
