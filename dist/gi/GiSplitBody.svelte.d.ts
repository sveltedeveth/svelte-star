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
export type GiSplitBodyProps = typeof __propDef.props;
export type GiSplitBodyEvents = typeof __propDef.events;
export type GiSplitBodySlots = typeof __propDef.slots;
export default class GiSplitBody extends SvelteComponentTyped<GiSplitBodyProps, GiSplitBodyEvents, GiSplitBodySlots> {
}
export {};
