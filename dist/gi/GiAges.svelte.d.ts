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
export type GiAgesProps = typeof __propDef.props;
export type GiAgesEvents = typeof __propDef.events;
export type GiAgesSlots = typeof __propDef.slots;
export default class GiAges extends SvelteComponentTyped<GiAgesProps, GiAgesEvents, GiAgesSlots> {
}
export {};
