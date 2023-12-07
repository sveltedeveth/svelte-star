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
export type GiKiwiFruitProps = typeof __propDef.props;
export type GiKiwiFruitEvents = typeof __propDef.events;
export type GiKiwiFruitSlots = typeof __propDef.slots;
export default class GiKiwiFruit extends SvelteComponentTyped<GiKiwiFruitProps, GiKiwiFruitEvents, GiKiwiFruitSlots> {
}
export {};
