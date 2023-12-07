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
export type GiCrowDiveProps = typeof __propDef.props;
export type GiCrowDiveEvents = typeof __propDef.events;
export type GiCrowDiveSlots = typeof __propDef.slots;
export default class GiCrowDive extends SvelteComponentTyped<GiCrowDiveProps, GiCrowDiveEvents, GiCrowDiveSlots> {
}
export {};
