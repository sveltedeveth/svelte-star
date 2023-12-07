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
export type GiOgreProps = typeof __propDef.props;
export type GiOgreEvents = typeof __propDef.events;
export type GiOgreSlots = typeof __propDef.slots;
export default class GiOgre extends SvelteComponentTyped<GiOgreProps, GiOgreEvents, GiOgreSlots> {
}
export {};
