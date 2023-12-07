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
export type GiOliveProps = typeof __propDef.props;
export type GiOliveEvents = typeof __propDef.events;
export type GiOliveSlots = typeof __propDef.slots;
export default class GiOlive extends SvelteComponentTyped<GiOliveProps, GiOliveEvents, GiOliveSlots> {
}
export {};
