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
export type GiMenhirProps = typeof __propDef.props;
export type GiMenhirEvents = typeof __propDef.events;
export type GiMenhirSlots = typeof __propDef.slots;
export default class GiMenhir extends SvelteComponentTyped<GiMenhirProps, GiMenhirEvents, GiMenhirSlots> {
}
export {};
