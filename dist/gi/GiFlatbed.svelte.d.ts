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
export type GiFlatbedProps = typeof __propDef.props;
export type GiFlatbedEvents = typeof __propDef.events;
export type GiFlatbedSlots = typeof __propDef.slots;
export default class GiFlatbed extends SvelteComponentTyped<GiFlatbedProps, GiFlatbedEvents, GiFlatbedSlots> {
}
export {};
