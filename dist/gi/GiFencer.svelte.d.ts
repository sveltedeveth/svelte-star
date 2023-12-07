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
export type GiFencerProps = typeof __propDef.props;
export type GiFencerEvents = typeof __propDef.events;
export type GiFencerSlots = typeof __propDef.slots;
export default class GiFencer extends SvelteComponentTyped<GiFencerProps, GiFencerEvents, GiFencerSlots> {
}
export {};
