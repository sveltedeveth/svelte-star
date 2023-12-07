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
export type GoDiffRenamedProps = typeof __propDef.props;
export type GoDiffRenamedEvents = typeof __propDef.events;
export type GoDiffRenamedSlots = typeof __propDef.slots;
export default class GoDiffRenamed extends SvelteComponentTyped<GoDiffRenamedProps, GoDiffRenamedEvents, GoDiffRenamedSlots> {
}
export {};
