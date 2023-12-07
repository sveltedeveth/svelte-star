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
export type GiOuroborosProps = typeof __propDef.props;
export type GiOuroborosEvents = typeof __propDef.events;
export type GiOuroborosSlots = typeof __propDef.slots;
export default class GiOuroboros extends SvelteComponentTyped<GiOuroborosProps, GiOuroborosEvents, GiOuroborosSlots> {
}
export {};
