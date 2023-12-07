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
export type GiFistProps = typeof __propDef.props;
export type GiFistEvents = typeof __propDef.events;
export type GiFistSlots = typeof __propDef.slots;
export default class GiFist extends SvelteComponentTyped<GiFistProps, GiFistEvents, GiFistSlots> {
}
export {};
