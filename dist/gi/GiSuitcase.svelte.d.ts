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
export type GiSuitcaseProps = typeof __propDef.props;
export type GiSuitcaseEvents = typeof __propDef.events;
export type GiSuitcaseSlots = typeof __propDef.slots;
export default class GiSuitcase extends SvelteComponentTyped<GiSuitcaseProps, GiSuitcaseEvents, GiSuitcaseSlots> {
}
export {};
