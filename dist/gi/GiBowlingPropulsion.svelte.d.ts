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
export type GiBowlingPropulsionProps = typeof __propDef.props;
export type GiBowlingPropulsionEvents = typeof __propDef.events;
export type GiBowlingPropulsionSlots = typeof __propDef.slots;
export default class GiBowlingPropulsion extends SvelteComponentTyped<GiBowlingPropulsionProps, GiBowlingPropulsionEvents, GiBowlingPropulsionSlots> {
}
export {};
