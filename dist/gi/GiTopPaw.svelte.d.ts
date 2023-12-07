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
export type GiTopPawProps = typeof __propDef.props;
export type GiTopPawEvents = typeof __propDef.events;
export type GiTopPawSlots = typeof __propDef.slots;
export default class GiTopPaw extends SvelteComponentTyped<GiTopPawProps, GiTopPawEvents, GiTopPawSlots> {
}
export {};
