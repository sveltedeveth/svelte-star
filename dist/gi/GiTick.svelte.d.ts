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
export type GiTickProps = typeof __propDef.props;
export type GiTickEvents = typeof __propDef.events;
export type GiTickSlots = typeof __propDef.slots;
export default class GiTick extends SvelteComponentTyped<GiTickProps, GiTickEvents, GiTickSlots> {
}
export {};
