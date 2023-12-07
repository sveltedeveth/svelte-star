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
export type GiTwoCoinsProps = typeof __propDef.props;
export type GiTwoCoinsEvents = typeof __propDef.events;
export type GiTwoCoinsSlots = typeof __propDef.slots;
export default class GiTwoCoins extends SvelteComponentTyped<GiTwoCoinsProps, GiTwoCoinsEvents, GiTwoCoinsSlots> {
}
export {};
