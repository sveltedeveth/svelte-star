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
export type FaDollyFlatbedProps = typeof __propDef.props;
export type FaDollyFlatbedEvents = typeof __propDef.events;
export type FaDollyFlatbedSlots = typeof __propDef.slots;
export default class FaDollyFlatbed extends SvelteComponentTyped<FaDollyFlatbedProps, FaDollyFlatbedEvents, FaDollyFlatbedSlots> {
}
export {};
