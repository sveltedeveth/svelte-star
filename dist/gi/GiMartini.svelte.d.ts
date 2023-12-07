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
export type GiMartiniProps = typeof __propDef.props;
export type GiMartiniEvents = typeof __propDef.events;
export type GiMartiniSlots = typeof __propDef.slots;
export default class GiMartini extends SvelteComponentTyped<GiMartiniProps, GiMartiniEvents, GiMartiniSlots> {
}
export {};
