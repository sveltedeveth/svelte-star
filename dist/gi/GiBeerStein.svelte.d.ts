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
export type GiBeerSteinProps = typeof __propDef.props;
export type GiBeerSteinEvents = typeof __propDef.events;
export type GiBeerSteinSlots = typeof __propDef.slots;
export default class GiBeerStein extends SvelteComponentTyped<GiBeerSteinProps, GiBeerSteinEvents, GiBeerSteinSlots> {
}
export {};
