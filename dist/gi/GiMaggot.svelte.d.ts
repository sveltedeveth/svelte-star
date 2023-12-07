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
export type GiMaggotProps = typeof __propDef.props;
export type GiMaggotEvents = typeof __propDef.events;
export type GiMaggotSlots = typeof __propDef.slots;
export default class GiMaggot extends SvelteComponentTyped<GiMaggotProps, GiMaggotEvents, GiMaggotSlots> {
}
export {};
