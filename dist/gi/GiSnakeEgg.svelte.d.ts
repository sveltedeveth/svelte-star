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
export type GiSnakeEggProps = typeof __propDef.props;
export type GiSnakeEggEvents = typeof __propDef.events;
export type GiSnakeEggSlots = typeof __propDef.slots;
export default class GiSnakeEgg extends SvelteComponentTyped<GiSnakeEggProps, GiSnakeEggEvents, GiSnakeEggSlots> {
}
export {};
