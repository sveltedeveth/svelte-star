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
export type GiHoleLadderProps = typeof __propDef.props;
export type GiHoleLadderEvents = typeof __propDef.events;
export type GiHoleLadderSlots = typeof __propDef.slots;
export default class GiHoleLadder extends SvelteComponentTyped<GiHoleLadderProps, GiHoleLadderEvents, GiHoleLadderSlots> {
}
export {};
