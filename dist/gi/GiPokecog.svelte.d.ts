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
export type GiPokecogProps = typeof __propDef.props;
export type GiPokecogEvents = typeof __propDef.events;
export type GiPokecogSlots = typeof __propDef.slots;
export default class GiPokecog extends SvelteComponentTyped<GiPokecogProps, GiPokecogEvents, GiPokecogSlots> {
}
export {};
