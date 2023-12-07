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
export type GiSaiProps = typeof __propDef.props;
export type GiSaiEvents = typeof __propDef.events;
export type GiSaiSlots = typeof __propDef.slots;
export default class GiSai extends SvelteComponentTyped<GiSaiProps, GiSaiEvents, GiSaiSlots> {
}
export {};
