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
export type GiEatingProps = typeof __propDef.props;
export type GiEatingEvents = typeof __propDef.events;
export type GiEatingSlots = typeof __propDef.slots;
export default class GiEating extends SvelteComponentTyped<GiEatingProps, GiEatingEvents, GiEatingSlots> {
}
export {};
