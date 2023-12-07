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
export type GiSharpAxeProps = typeof __propDef.props;
export type GiSharpAxeEvents = typeof __propDef.events;
export type GiSharpAxeSlots = typeof __propDef.slots;
export default class GiSharpAxe extends SvelteComponentTyped<GiSharpAxeProps, GiSharpAxeEvents, GiSharpAxeSlots> {
}
export {};
