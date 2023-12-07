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
export type GiSellCardProps = typeof __propDef.props;
export type GiSellCardEvents = typeof __propDef.events;
export type GiSellCardSlots = typeof __propDef.slots;
export default class GiSellCard extends SvelteComponentTyped<GiSellCardProps, GiSellCardEvents, GiSellCardSlots> {
}
export {};
