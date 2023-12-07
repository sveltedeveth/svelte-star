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
export type GiD4Props = typeof __propDef.props;
export type GiD4Events = typeof __propDef.events;
export type GiD4Slots = typeof __propDef.slots;
export default class GiD4 extends SvelteComponentTyped<GiD4Props, GiD4Events, GiD4Slots> {
}
export {};
