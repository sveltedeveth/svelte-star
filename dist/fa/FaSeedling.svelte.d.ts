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
export type FaSeedlingProps = typeof __propDef.props;
export type FaSeedlingEvents = typeof __propDef.events;
export type FaSeedlingSlots = typeof __propDef.slots;
export default class FaSeedling extends SvelteComponentTyped<FaSeedlingProps, FaSeedlingEvents, FaSeedlingSlots> {
}
export {};
