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
export type FaSuitcaseProps = typeof __propDef.props;
export type FaSuitcaseEvents = typeof __propDef.events;
export type FaSuitcaseSlots = typeof __propDef.slots;
export default class FaSuitcase extends SvelteComponentTyped<FaSuitcaseProps, FaSuitcaseEvents, FaSuitcaseSlots> {
}
export {};
