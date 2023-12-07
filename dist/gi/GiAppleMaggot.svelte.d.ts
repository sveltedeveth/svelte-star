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
export type GiAppleMaggotProps = typeof __propDef.props;
export type GiAppleMaggotEvents = typeof __propDef.events;
export type GiAppleMaggotSlots = typeof __propDef.slots;
export default class GiAppleMaggot extends SvelteComponentTyped<GiAppleMaggotProps, GiAppleMaggotEvents, GiAppleMaggotSlots> {
}
export {};
