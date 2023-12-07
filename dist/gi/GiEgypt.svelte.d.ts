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
export type GiEgyptProps = typeof __propDef.props;
export type GiEgyptEvents = typeof __propDef.events;
export type GiEgyptSlots = typeof __propDef.slots;
export default class GiEgypt extends SvelteComponentTyped<GiEgyptProps, GiEgyptEvents, GiEgyptSlots> {
}
export {};
