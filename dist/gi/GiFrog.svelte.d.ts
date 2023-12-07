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
export type GiFrogProps = typeof __propDef.props;
export type GiFrogEvents = typeof __propDef.events;
export type GiFrogSlots = typeof __propDef.slots;
export default class GiFrog extends SvelteComponentTyped<GiFrogProps, GiFrogEvents, GiFrogSlots> {
}
export {};
