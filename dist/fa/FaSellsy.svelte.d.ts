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
export type FaSellsyProps = typeof __propDef.props;
export type FaSellsyEvents = typeof __propDef.events;
export type FaSellsySlots = typeof __propDef.slots;
export default class FaSellsy extends SvelteComponentTyped<FaSellsyProps, FaSellsyEvents, FaSellsySlots> {
}
export {};
