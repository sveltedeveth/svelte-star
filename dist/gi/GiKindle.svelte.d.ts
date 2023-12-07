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
export type GiKindleProps = typeof __propDef.props;
export type GiKindleEvents = typeof __propDef.events;
export type GiKindleSlots = typeof __propDef.slots;
export default class GiKindle extends SvelteComponentTyped<GiKindleProps, GiKindleEvents, GiKindleSlots> {
}
export {};
