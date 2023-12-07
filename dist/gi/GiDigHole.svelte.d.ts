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
export type GiDigHoleProps = typeof __propDef.props;
export type GiDigHoleEvents = typeof __propDef.events;
export type GiDigHoleSlots = typeof __propDef.slots;
export default class GiDigHole extends SvelteComponentTyped<GiDigHoleProps, GiDigHoleEvents, GiDigHoleSlots> {
}
export {};
