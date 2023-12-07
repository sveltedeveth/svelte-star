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
export type GiSelfLoveProps = typeof __propDef.props;
export type GiSelfLoveEvents = typeof __propDef.events;
export type GiSelfLoveSlots = typeof __propDef.slots;
export default class GiSelfLove extends SvelteComponentTyped<GiSelfLoveProps, GiSelfLoveEvents, GiSelfLoveSlots> {
}
export {};
