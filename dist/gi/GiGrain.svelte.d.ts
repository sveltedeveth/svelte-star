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
export type GiGrainProps = typeof __propDef.props;
export type GiGrainEvents = typeof __propDef.events;
export type GiGrainSlots = typeof __propDef.slots;
export default class GiGrain extends SvelteComponentTyped<GiGrainProps, GiGrainEvents, GiGrainSlots> {
}
export {};
