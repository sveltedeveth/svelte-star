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
export type GiCoinsProps = typeof __propDef.props;
export type GiCoinsEvents = typeof __propDef.events;
export type GiCoinsSlots = typeof __propDef.slots;
export default class GiCoins extends SvelteComponentTyped<GiCoinsProps, GiCoinsEvents, GiCoinsSlots> {
}
export {};
