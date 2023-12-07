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
export type GiShinyOmegaProps = typeof __propDef.props;
export type GiShinyOmegaEvents = typeof __propDef.events;
export type GiShinyOmegaSlots = typeof __propDef.slots;
export default class GiShinyOmega extends SvelteComponentTyped<GiShinyOmegaProps, GiShinyOmegaEvents, GiShinyOmegaSlots> {
}
export {};
