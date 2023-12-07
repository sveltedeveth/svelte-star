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
export type GiAlienEggProps = typeof __propDef.props;
export type GiAlienEggEvents = typeof __propDef.events;
export type GiAlienEggSlots = typeof __propDef.slots;
export default class GiAlienEgg extends SvelteComponentTyped<GiAlienEggProps, GiAlienEggEvents, GiAlienEggSlots> {
}
export {};
