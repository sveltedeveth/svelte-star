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
export type GiVikingHeadProps = typeof __propDef.props;
export type GiVikingHeadEvents = typeof __propDef.events;
export type GiVikingHeadSlots = typeof __propDef.slots;
export default class GiVikingHead extends SvelteComponentTyped<GiVikingHeadProps, GiVikingHeadEvents, GiVikingHeadSlots> {
}
export {};
