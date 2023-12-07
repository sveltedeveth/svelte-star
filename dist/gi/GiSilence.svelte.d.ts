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
export type GiSilenceProps = typeof __propDef.props;
export type GiSilenceEvents = typeof __propDef.events;
export type GiSilenceSlots = typeof __propDef.slots;
export default class GiSilence extends SvelteComponentTyped<GiSilenceProps, GiSilenceEvents, GiSilenceSlots> {
}
export {};
