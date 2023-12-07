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
export type GiEarwigProps = typeof __propDef.props;
export type GiEarwigEvents = typeof __propDef.events;
export type GiEarwigSlots = typeof __propDef.slots;
export default class GiEarwig extends SvelteComponentTyped<GiEarwigProps, GiEarwigEvents, GiEarwigSlots> {
}
export {};
