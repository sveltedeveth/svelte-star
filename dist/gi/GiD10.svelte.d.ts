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
export type GiD10Props = typeof __propDef.props;
export type GiD10Events = typeof __propDef.events;
export type GiD10Slots = typeof __propDef.slots;
export default class GiD10 extends SvelteComponentTyped<GiD10Props, GiD10Events, GiD10Slots> {
}
export {};
