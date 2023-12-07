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
export type GiBubblingBowlProps = typeof __propDef.props;
export type GiBubblingBowlEvents = typeof __propDef.events;
export type GiBubblingBowlSlots = typeof __propDef.slots;
export default class GiBubblingBowl extends SvelteComponentTyped<GiBubblingBowlProps, GiBubblingBowlEvents, GiBubblingBowlSlots> {
}
export {};
