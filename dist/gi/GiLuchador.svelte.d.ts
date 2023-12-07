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
export type GiLuchadorProps = typeof __propDef.props;
export type GiLuchadorEvents = typeof __propDef.events;
export type GiLuchadorSlots = typeof __propDef.slots;
export default class GiLuchador extends SvelteComponentTyped<GiLuchadorProps, GiLuchadorEvents, GiLuchadorSlots> {
}
export {};
