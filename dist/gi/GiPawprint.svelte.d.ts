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
export type GiPawprintProps = typeof __propDef.props;
export type GiPawprintEvents = typeof __propDef.events;
export type GiPawprintSlots = typeof __propDef.slots;
export default class GiPawprint extends SvelteComponentTyped<GiPawprintProps, GiPawprintEvents, GiPawprintSlots> {
}
export {};
