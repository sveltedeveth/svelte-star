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
export type GiMetronomeProps = typeof __propDef.props;
export type GiMetronomeEvents = typeof __propDef.events;
export type GiMetronomeSlots = typeof __propDef.slots;
export default class GiMetronome extends SvelteComponentTyped<GiMetronomeProps, GiMetronomeEvents, GiMetronomeSlots> {
}
export {};
