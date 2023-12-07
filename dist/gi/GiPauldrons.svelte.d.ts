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
export type GiPauldronsProps = typeof __propDef.props;
export type GiPauldronsEvents = typeof __propDef.events;
export type GiPauldronsSlots = typeof __propDef.slots;
export default class GiPauldrons extends SvelteComponentTyped<GiPauldronsProps, GiPauldronsEvents, GiPauldronsSlots> {
}
export {};
