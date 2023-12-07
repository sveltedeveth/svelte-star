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
export type FaEggProps = typeof __propDef.props;
export type FaEggEvents = typeof __propDef.events;
export type FaEggSlots = typeof __propDef.slots;
export default class FaEgg extends SvelteComponentTyped<FaEggProps, FaEggEvents, FaEggSlots> {
}
export {};
