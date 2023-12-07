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
export type GiEasterEggProps = typeof __propDef.props;
export type GiEasterEggEvents = typeof __propDef.events;
export type GiEasterEggSlots = typeof __propDef.slots;
export default class GiEasterEgg extends SvelteComponentTyped<GiEasterEggProps, GiEasterEggEvents, GiEasterEggSlots> {
}
export {};
