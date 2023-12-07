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
export type GiCardDrawProps = typeof __propDef.props;
export type GiCardDrawEvents = typeof __propDef.events;
export type GiCardDrawSlots = typeof __propDef.slots;
export default class GiCardDraw extends SvelteComponentTyped<GiCardDrawProps, GiCardDrawEvents, GiCardDrawSlots> {
}
export {};
