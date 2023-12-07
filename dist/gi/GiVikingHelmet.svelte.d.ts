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
export type GiVikingHelmetProps = typeof __propDef.props;
export type GiVikingHelmetEvents = typeof __propDef.events;
export type GiVikingHelmetSlots = typeof __propDef.slots;
export default class GiVikingHelmet extends SvelteComponentTyped<GiVikingHelmetProps, GiVikingHelmetEvents, GiVikingHelmetSlots> {
}
export {};
