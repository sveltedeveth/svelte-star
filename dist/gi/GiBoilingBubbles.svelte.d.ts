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
export type GiBoilingBubblesProps = typeof __propDef.props;
export type GiBoilingBubblesEvents = typeof __propDef.events;
export type GiBoilingBubblesSlots = typeof __propDef.slots;
export default class GiBoilingBubbles extends SvelteComponentTyped<GiBoilingBubblesProps, GiBoilingBubblesEvents, GiBoilingBubblesSlots> {
}
export {};
