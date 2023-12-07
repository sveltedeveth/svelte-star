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
export type GiUprisingProps = typeof __propDef.props;
export type GiUprisingEvents = typeof __propDef.events;
export type GiUprisingSlots = typeof __propDef.slots;
export default class GiUprising extends SvelteComponentTyped<GiUprisingProps, GiUprisingEvents, GiUprisingSlots> {
}
export {};
