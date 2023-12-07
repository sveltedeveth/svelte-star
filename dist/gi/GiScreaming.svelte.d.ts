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
export type GiScreamingProps = typeof __propDef.props;
export type GiScreamingEvents = typeof __propDef.events;
export type GiScreamingSlots = typeof __propDef.slots;
export default class GiScreaming extends SvelteComponentTyped<GiScreamingProps, GiScreamingEvents, GiScreamingSlots> {
}
export {};
