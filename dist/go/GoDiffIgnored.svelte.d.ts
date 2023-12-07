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
export type GoDiffIgnoredProps = typeof __propDef.props;
export type GoDiffIgnoredEvents = typeof __propDef.events;
export type GoDiffIgnoredSlots = typeof __propDef.slots;
export default class GoDiffIgnored extends SvelteComponentTyped<GoDiffIgnoredProps, GoDiffIgnoredEvents, GoDiffIgnoredSlots> {
}
export {};
