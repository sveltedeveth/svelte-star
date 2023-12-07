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
export type GiEatingPelicanProps = typeof __propDef.props;
export type GiEatingPelicanEvents = typeof __propDef.events;
export type GiEatingPelicanSlots = typeof __propDef.slots;
export default class GiEatingPelican extends SvelteComponentTyped<GiEatingPelicanProps, GiEatingPelicanEvents, GiEatingPelicanSlots> {
}
export {};
