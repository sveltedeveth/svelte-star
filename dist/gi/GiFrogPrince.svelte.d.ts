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
export type GiFrogPrinceProps = typeof __propDef.props;
export type GiFrogPrinceEvents = typeof __propDef.events;
export type GiFrogPrinceSlots = typeof __propDef.slots;
export default class GiFrogPrince extends SvelteComponentTyped<GiFrogPrinceProps, GiFrogPrinceEvents, GiFrogPrinceSlots> {
}
export {};
