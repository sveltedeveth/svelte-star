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
export type GiCrosscutSawProps = typeof __propDef.props;
export type GiCrosscutSawEvents = typeof __propDef.events;
export type GiCrosscutSawSlots = typeof __propDef.slots;
export default class GiCrosscutSaw extends SvelteComponentTyped<GiCrosscutSawProps, GiCrosscutSawEvents, GiCrosscutSawSlots> {
}
export {};
