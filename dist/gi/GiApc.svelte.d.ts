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
export type GiApcProps = typeof __propDef.props;
export type GiApcEvents = typeof __propDef.events;
export type GiApcSlots = typeof __propDef.slots;
export default class GiApc extends SvelteComponentTyped<GiApcProps, GiApcEvents, GiApcSlots> {
}
export {};
