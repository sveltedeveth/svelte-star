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
export type GiHeartsProps = typeof __propDef.props;
export type GiHeartsEvents = typeof __propDef.events;
export type GiHeartsSlots = typeof __propDef.slots;
export default class GiHearts extends SvelteComponentTyped<GiHeartsProps, GiHeartsEvents, GiHeartsSlots> {
}
export {};
