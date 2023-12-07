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
export type GiInnerSelfProps = typeof __propDef.props;
export type GiInnerSelfEvents = typeof __propDef.events;
export type GiInnerSelfSlots = typeof __propDef.slots;
export default class GiInnerSelf extends SvelteComponentTyped<GiInnerSelfProps, GiInnerSelfEvents, GiInnerSelfSlots> {
}
export {};
