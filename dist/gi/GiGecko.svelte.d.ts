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
export type GiGeckoProps = typeof __propDef.props;
export type GiGeckoEvents = typeof __propDef.events;
export type GiGeckoSlots = typeof __propDef.slots;
export default class GiGecko extends SvelteComponentTyped<GiGeckoProps, GiGeckoEvents, GiGeckoSlots> {
}
export {};
