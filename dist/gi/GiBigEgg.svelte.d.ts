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
export type GiBigEggProps = typeof __propDef.props;
export type GiBigEggEvents = typeof __propDef.events;
export type GiBigEggSlots = typeof __propDef.slots;
export default class GiBigEgg extends SvelteComponentTyped<GiBigEggProps, GiBigEggEvents, GiBigEggSlots> {
}
export {};
