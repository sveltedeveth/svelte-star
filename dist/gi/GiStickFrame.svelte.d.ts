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
export type GiStickFrameProps = typeof __propDef.props;
export type GiStickFrameEvents = typeof __propDef.events;
export type GiStickFrameSlots = typeof __propDef.slots;
export default class GiStickFrame extends SvelteComponentTyped<GiStickFrameProps, GiStickFrameEvents, GiStickFrameSlots> {
}
export {};
