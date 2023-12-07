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
export type GiCampingTentProps = typeof __propDef.props;
export type GiCampingTentEvents = typeof __propDef.events;
export type GiCampingTentSlots = typeof __propDef.slots;
export default class GiCampingTent extends SvelteComponentTyped<GiCampingTentProps, GiCampingTentEvents, GiCampingTentSlots> {
}
export {};
