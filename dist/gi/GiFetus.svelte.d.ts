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
export type GiFetusProps = typeof __propDef.props;
export type GiFetusEvents = typeof __propDef.events;
export type GiFetusSlots = typeof __propDef.slots;
export default class GiFetus extends SvelteComponentTyped<GiFetusProps, GiFetusEvents, GiFetusSlots> {
}
export {};
