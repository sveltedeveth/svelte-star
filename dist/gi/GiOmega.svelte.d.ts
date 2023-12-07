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
export type GiOmegaProps = typeof __propDef.props;
export type GiOmegaEvents = typeof __propDef.events;
export type GiOmegaSlots = typeof __propDef.slots;
export default class GiOmega extends SvelteComponentTyped<GiOmegaProps, GiOmegaEvents, GiOmegaSlots> {
}
export {};
