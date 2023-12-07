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
export type GiSalamanderProps = typeof __propDef.props;
export type GiSalamanderEvents = typeof __propDef.events;
export type GiSalamanderSlots = typeof __propDef.slots;
export default class GiSalamander extends SvelteComponentTyped<GiSalamanderProps, GiSalamanderEvents, GiSalamanderSlots> {
}
export {};
