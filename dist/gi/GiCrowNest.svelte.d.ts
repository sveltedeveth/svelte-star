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
export type GiCrowNestProps = typeof __propDef.props;
export type GiCrowNestEvents = typeof __propDef.events;
export type GiCrowNestSlots = typeof __propDef.slots;
export default class GiCrowNest extends SvelteComponentTyped<GiCrowNestProps, GiCrowNestEvents, GiCrowNestSlots> {
}
export {};
