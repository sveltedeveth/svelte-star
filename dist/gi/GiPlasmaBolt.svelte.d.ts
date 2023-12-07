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
export type GiPlasmaBoltProps = typeof __propDef.props;
export type GiPlasmaBoltEvents = typeof __propDef.events;
export type GiPlasmaBoltSlots = typeof __propDef.slots;
export default class GiPlasmaBolt extends SvelteComponentTyped<GiPlasmaBoltProps, GiPlasmaBoltEvents, GiPlasmaBoltSlots> {
}
export {};
