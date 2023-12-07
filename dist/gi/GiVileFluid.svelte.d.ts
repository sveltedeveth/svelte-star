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
export type GiVileFluidProps = typeof __propDef.props;
export type GiVileFluidEvents = typeof __propDef.events;
export type GiVileFluidSlots = typeof __propDef.slots;
export default class GiVileFluid extends SvelteComponentTyped<GiVileFluidProps, GiVileFluidEvents, GiVileFluidSlots> {
}
export {};
