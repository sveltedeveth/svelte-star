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
export type FaCoinsProps = typeof __propDef.props;
export type FaCoinsEvents = typeof __propDef.events;
export type FaCoinsSlots = typeof __propDef.slots;
export default class FaCoins extends SvelteComponentTyped<FaCoinsProps, FaCoinsEvents, FaCoinsSlots> {
}
export {};
