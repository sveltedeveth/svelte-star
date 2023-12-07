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
export type GiFluteProps = typeof __propDef.props;
export type GiFluteEvents = typeof __propDef.events;
export type GiFluteSlots = typeof __propDef.slots;
export default class GiFlute extends SvelteComponentTyped<GiFluteProps, GiFluteEvents, GiFluteSlots> {
}
export {};
